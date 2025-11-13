#!/bin/bash

TOKEN="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"
SHOP="ab6dae-bb.myshopify.com"
API_VERSION="2025-10"
GRAPHQL_URL="https://${SHOP}/admin/api/${API_VERSION}/graphql.json"

echo "🎨 Injecting Custom CSS into Policy Pages..."
echo ""

# Read the CSS file content
CSS_CONTENT=$(cat assets/policy-pages.css)

# Create CSS wrapper to inject at the beginning of each policy
CSS_INJECTION="<style>
${CSS_CONTENT}
</style>

"

# Function to update policy with CSS
update_policy_with_css() {
    local policy_type=$1
    local md_file=$2
    
    echo "Processing ${policy_type}..."
    
    # Read and convert markdown to HTML
    HTML_CONTENT=$(python3 << PYEOF
import re
import json

def markdown_to_html(md_file):
    with open(md_file, 'r') as f:
        content = f.read()
    
    # Headers
    content = re.sub(r'^# (.+)$', r'<h1>\1</h1>', content, flags=re.MULTILINE)
    content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', content, flags=re.MULTILINE)
    content = re.sub(r'^### (.+)$', r'<h3>\1</h3>', content, flags=re.MULTILINE)
    content = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', content, flags=re.MULTILINE)
    
    # Bold and italic
    content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*([^*]+?)\*', r'<em>\1</em>', content)
    
    # Links
    content = re.sub(r'\[(.+?)\]\((.+?)\)', r'<a href="\2">\1</a>', content)
    
    # Horizontal rules
    content = re.sub(r'^---+$', '<hr>', content, flags=re.MULTILINE)
    
    # Lists
    lines = content.split('\n')
    result = []
    in_list = False
    
    for i, line in enumerate(lines):
        if re.match(r'^\s*[-*✓✅❌⚠️]\s+', line):
            if not in_list:
                result.append('<ul>')
                in_list = True
            item = re.sub(r'^\s*[-*✓✅❌⚠️]\s+', '', line)
            result.append(f'<li>{item}</li>')
        elif re.match(r'^\s*\d+\.\s+', line):
            if not in_list:
                result.append('<ol>')
                in_list = True
            item = re.sub(r'^\s*\d+\.\s+', '', line)
            result.append(f'<li>{item}</li>')
        else:
            if in_list and line.strip() == '':
                result.append('</ul>')
                in_list = False
            
            if line.strip() and not line.startswith('<') and not line.startswith('**'):
                result.append(f'<p>{line}</p>')
            elif line.strip():
                result.append(line)
    
    if in_list:
        result.append('</ul>')
    
    return '\n'.join(result)

print(markdown_to_html('${md_file}'))
PYEOF
    )
    
    # Prepend CSS to HTML content
    FULL_HTML="${CSS_INJECTION}${HTML_CONTENT}"
    
    # Escape for JSON
    ESCAPED_HTML=$(python3 -c "import json; print(json.dumps('''${FULL_HTML}'''))")
    
    # Create GraphQL mutation
    MUTATION=$(cat <<EOF
mutation {
  shopPolicyUpdate(shopPolicy: {
    type: ${policy_type}
    body: ${ESCAPED_HTML}
  }) {
    shopPolicy {
      id
      type
    }
    userErrors {
      field
      message
    }
  }
}
EOF
)
    
    # Execute mutation
    RESULT=$(curl -s -X POST "$GRAPHQL_URL" \
        -H "X-Shopify-Access-Token: $TOKEN" \
        -H "Content-Type: application/json" \
        -d "$(jq -n --arg query "$MUTATION" '{query: $query}')")
    
    if echo "$RESULT" | jq -e '.errors' > /dev/null 2>&1; then
        echo "  ❌ Error: $(echo "$RESULT" | jq '.errors')"
    elif echo "$RESULT" | jq -e '.data.shopPolicyUpdate.userErrors | length > 0' > /dev/null 2>&1; then
        echo "  ❌ Errors: $(echo "$RESULT" | jq '.data.shopPolicyUpdate.userErrors')"
    else
        echo "  ✅ Updated with custom CSS"
    fi
}

# Update all three policies
update_policy_with_css "TERMS_OF_SERVICE" "POLICY-CONTENT-TERMS-OF-SERVICE.md"
update_policy_with_css "PRIVACY_POLICY" "POLICY-CONTENT-PRIVACY-POLICY.md"
update_policy_with_css "REFUND_POLICY" "POLICY-CONTENT-REFUND-POLICY.md"

echo ""
echo "✅ All policies updated with custom CSS!"
