#!/bin/bash

# Load credentials from .env.shopify file
# Create .env.shopify with: SHOPIFY_ACCESS_TOKEN=shpat_...
if [ -f .env.shopify ]; then
    source .env.shopify
else
    echo "❌ Error: .env.shopify file not found"
    echo "   Create .env.shopify with: SHOPIFY_ACCESS_TOKEN=shpat_..."
    exit 1
fi

# Validate token is set
if [ -z "$SHOPIFY_ACCESS_TOKEN" ]; then
    echo "❌ Error: SHOPIFY_ACCESS_TOKEN not set in .env.shopify"
    exit 1
fi

TOKEN="$SHOPIFY_ACCESS_TOKEN"
SHOP="ab6dae-bb.myshopify.com"
API_VERSION="2025-10"
GRAPHQL_URL="https://${SHOP}/admin/api/${API_VERSION}/graphql.json"

echo "🔄 Converting Policy Markdown to HTML..."
echo ""

# Function to convert markdown to HTML
markdown_to_html() {
    local content="$1"
    
    # Convert to HTML using Python
    python3 << 'PYEOF'
import sys
import re

content = '''$1'''

# Convert headers
content = re.sub(r'^# (.+)$', r'<h1>\1</h1>', content, flags=re.MULTILINE)
content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', content, flags=re.MULTILINE)
content = re.sub(r'^### (.+)$', r'<h3>\1</h3>', content, flags=re.MULTILINE)
content = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', content, flags=re.MULTILINE)

# Convert bold
content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content)

# Convert italic
content = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content)

# Convert lists
lines = content.split('\n')
in_ul = False
in_ol = False
result = []

for line in lines:
    # Unordered list
    if re.match(r'^\s*[-*]\s+', line):
        if not in_ul:
            result.append('<ul>')
            in_ul = True
        item = re.sub(r'^\s*[-*]\s+', '', line)
        result.append(f'<li>{item}</li>')
    # Ordered list
    elif re.match(r'^\s*\d+\.\s+', line):
        if not in_ol:
            result.append('<ol>')
            in_ol = True
        item = re.sub(r'^\s*\d+\.\s+', '', line)
        result.append(f'<li>{item}</li>')
    else:
        if in_ul:
            result.append('</ul>')
            in_ul = False
        if in_ol:
            result.append('</ol>')
            in_ol = False
        
        # Convert paragraphs
        if line.strip() and not line.startswith('<'):
            result.append(f'<p>{line}</p>')
        else:
            result.append(line)

if in_ul:
    result.append('</ul>')
if in_ol:
    result.append('</ol>')

print('\n'.join(result))
PYEOF
}

# This is complex - let me use a simpler approach with sed
python3 << PYEOF
import re
import json
import subprocess
import os
import sys

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
    
    # Lists - simple conversion
    lines = content.split('\n')
    result = []
    in_list = False
    
    for i, line in enumerate(lines):
        # Bullet list
        if re.match(r'^\s*[-*✓✅❌⚠️]\s+', line):
            if not in_list:
                result.append('<ul>')
                in_list = True
            item = re.sub(r'^\s*[-*✓✅❌⚠️]\s+', '', line)
            result.append(f'<li>{item}</li>')
        # Numbered list
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
            
            # Paragraph
            if line.strip() and not line.startswith('<') and not line.startswith('**'):
                result.append(f'<p>{line}</p>')
            elif line.strip():
                result.append(line)
    
    if in_list:
        result.append('</ul>')
    
    return '\n'.join(result)

# Convert all three policies
policies = [
    ('POLICY-CONTENT-TERMS-OF-SERVICE.md', 'TERMS_OF_SERVICE'),
    ('POLICY-CONTENT-PRIVACY-POLICY.md', 'PRIVACY_POLICY'),
    ('POLICY-CONTENT-REFUND-POLICY.md', 'REFUND_POLICY')
]

# Load token from environment (set by bash script above)
token = os.getenv('SHOPIFY_ACCESS_TOKEN')
if not token:
    print("❌ Error: SHOPIFY_ACCESS_TOKEN not set")
    print("   Create .env.shopify with: SHOPIFY_ACCESS_TOKEN=shpat_...")
    sys.exit(1)
shop = "ab6dae-bb.myshopify.com"
api_version = "2025-10"
url = f"https://{shop}/admin/api/{api_version}/graphql.json"

for md_file, policy_type in policies:
    print(f"Converting {md_file}...")
    html_content = markdown_to_html(md_file)
    
    # Escape for JSON
    html_escaped = json.dumps(html_content)
    
    mutation = f'''
    mutation {{
      shopPolicyUpdate(shopPolicy: {{
        type: {policy_type}
        body: {html_escaped}
      }}) {{
        shopPolicy {{
          id
          type
        }}
        userErrors {{
          field
          message
        }}
      }}
    }}
    '''
    
    # Make GraphQL request
    result = subprocess.run([
        'curl', '-s', '-X', 'POST', url,
        '-H', f'X-Shopify-Access-Token: {token}',
        '-H', 'Content-Type: application/json',
        '-d', json.dumps({'query': mutation})
    ], capture_output=True, text=True)
    
    response = json.loads(result.stdout)
    if 'errors' in response:
        print(f"  ❌ Error: {response['errors']}")
    elif response.get('data', {}).get('shopPolicyUpdate', {}).get('userErrors'):
        print(f"  ❌ Errors: {response['data']['shopPolicyUpdate']['userErrors']}")
    else:
        print(f"  ✅ Converted successfully")

print("\n✅ All policies converted to HTML!")
PYEOF

