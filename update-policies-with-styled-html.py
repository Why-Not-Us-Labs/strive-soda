#!/usr/bin/env python3
"""
Update Shopify policy pages with properly formatted HTML and CSS styling
"""

import re
import json
import subprocess

# Shopify API credentials
TOKEN = "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"
SHOP = "ab6dae-bb.myshopify.com"
API_VERSION = "2025-10"
GRAPHQL_URL = f"https://{SHOP}/admin/api/{API_VERSION}/graphql.json"

def markdown_to_html(md_file):
    """Convert markdown file to HTML"""
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

def update_policy(policy_type, md_file):
    """Update a Shopify policy with HTML and CSS"""
    print(f"Processing {policy_type}...")

    # Read CSS
    with open('assets/policy-pages.css', 'r') as f:
        css_content = f.read()

    # Convert markdown to HTML
    html_content = markdown_to_html(md_file)

    # Combine with CSS wrapped in style tags
    full_html = f"<style>\n{css_content}\n</style>\n\n{html_content}"

    # Create GraphQL mutation
    mutation = """
    mutation($body: String!) {
      shopPolicyUpdate(shopPolicy: {
        type: %s
        body: $body
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
    """ % policy_type

    # Prepare request payload
    payload = {
        'query': mutation,
        'variables': {
            'body': full_html
        }
    }

    # Execute GraphQL request
    result = subprocess.run([
        'curl', '-s', '-X', 'POST', GRAPHQL_URL,
        '-H', f'X-Shopify-Access-Token: {TOKEN}',
        '-H', 'Content-Type: application/json',
        '-d', json.dumps(payload)
    ], capture_output=True, text=True)

    response = json.loads(result.stdout)

    if 'errors' in response:
        print(f"  ❌ Error: {response['errors']}")
    elif response.get('data', {}).get('shopPolicyUpdate', {}).get('userErrors'):
        print(f"  ❌ Errors: {response['data']['shopPolicyUpdate']['userErrors']}")
    else:
        print(f"  ✅ Updated successfully with styled HTML")

def main():
    print("🎨 Updating Policy Pages with Styled HTML...")
    print("")

    policies = [
        ('TERMS_OF_SERVICE', 'POLICY-CONTENT-TERMS-OF-SERVICE.md'),
        ('PRIVACY_POLICY', 'POLICY-CONTENT-PRIVACY-POLICY.md'),
        ('REFUND_POLICY', 'POLICY-CONTENT-REFUND-POLICY.md')
    ]

    for policy_type, md_file in policies:
        update_policy(policy_type, md_file)

    print("")
    print("✅ All policies updated!")

if __name__ == '__main__':
    main()
