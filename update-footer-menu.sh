#!/bin/bash

TOKEN="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"
SHOP="ab6dae-bb.myshopify.com"
API_VERSION="2025-10"
GRAPHQL_URL="https://${SHOP}/admin/api/${API_VERSION}/graphql.json"

echo "🔗 Updating Footer Menu Navigation Links"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Function to make GraphQL requests
graphql_request() {
    local query="$1"
    curl -s -X POST "$GRAPHQL_URL" \
        -H "X-Shopify-Access-Token: $TOKEN" \
        -H "Content-Type: application/json" \
        -d "{\"query\": $(echo "$query" | jq -Rs .)}"
}

# Query to get all menus
echo "  ⏳ Fetching navigation menus..."
MENUS_QUERY='query {
  menus(first: 50) {
    edges {
      node {
        id
        handle
        title
        items {
          id
          title
          url
        }
      }
    }
  }
}'

MENUS_RESPONSE=$(graphql_request "$MENUS_QUERY")
echo "$MENUS_RESPONSE" | python3 -m json.tool > /tmp/menus.json

# Find footer menu
FOOTER_MENU=$(cat /tmp/menus.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
menus = data.get('data', {}).get('menus', {}).get('edges', [])
for edge in menus:
    node = edge.get('node', {})
    if 'footer' in node.get('handle', '').lower() or 'footer' in node.get('title', '').lower():
        print(json.dumps(node))
        break
" 2>/dev/null)

if [ -z "$FOOTER_MENU" ]; then
    echo "  ❌ Footer menu not found"
    echo ""
    echo "  Manual update required:"
    echo "  Go to: https://ab6dae-bb.myshopify.com/admin/menus"
    exit 1
fi

echo "  ✅ Found footer menu"
MENU_ID=$(echo "$FOOTER_MENU" | python3 -c "import json, sys; print(json.load(sys.stdin)['id'])")
echo "  📋 Menu ID: $MENU_ID"
echo ""

# Get menu items that need updating
echo "  🔍 Checking menu items..."
ITEMS_TO_UPDATE=$(echo "$FOOTER_MENU" | python3 -c "
import json, sys
menu = json.load(sys.stdin)
items = menu.get('items', [])
updates = []
for item in items:
    title = item.get('title', '').upper()
    if 'TERMS' in title or 'SERVICE' in title:
        updates.append({'id': item['id'], 'title': item['title'], 'new_url': '/policies/terms-of-service'})
    elif 'PRIVACY' in title:
        updates.append({'id': item['id'], 'title': item['title'], 'new_url': '/policies/privacy-policy'})
    elif 'RETURN' in title or 'EXCHANGE' in title or 'REFUND' in title:
        updates.append({'id': item['id'], 'title': item['title'], 'new_url': '/policies/refund-policy'})
print(json.dumps(updates))
" 2>/dev/null)

if [ "$ITEMS_TO_UPDATE" = "[]" ]; then
    echo "  ℹ️  No policy links found in footer menu"
    exit 0
fi

echo "  📝 Items to update:"
echo "$ITEMS_TO_UPDATE" | python3 -m json.tool
echo ""

# Update each menu item
echo "$ITEMS_TO_UPDATE" | python3 -c "
import json, sys
items = json.load(sys.stdin)
for item in items:
    print(f\"{item['id']}|{item['title']}|{item['new_url']}\")
" | while IFS='|' read -r item_id title new_url; do
    echo "  ⏳ Updating: \"$title\" → $new_url"
    
    UPDATE_MUTATION="mutation {
      menuItemUpdate(id: \"$item_id\", menuItem: {
        url: \"$new_url\"
      }) {
        menuItem {
          id
          title
          url
        }
        userErrors {
          field
          message
        }
      }
    }"
    
    RESPONSE=$(graphql_request "$UPDATE_MUTATION")
    if echo "$RESPONSE" | grep -q '"userErrors":\[\]'; then
        echo "  ✅ Updated: $title"
    else
        echo "  ⚠️  Error updating $title:"
        echo "$RESPONSE" | python3 -m json.tool
    fi
done

echo ""
echo "✅ Footer menu update complete!"
echo ""
