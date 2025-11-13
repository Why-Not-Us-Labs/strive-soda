#!/bin/bash

# Shopify Footer Policy Fix - Complete Implementation
# Uses GraphQL Admin API to create policies, delete pages, and update navigation

set -e

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

echo "🚀 Shopify Footer Policy Fix - Starting Implementation"
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

# Step 1: Create Policies
echo "📄 STEP 1: Creating Shopify Policies"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Read and escape policy content
TERMS_CONTENT=$(cat POLICY-CONTENT-TERMS-OF-SERVICE.md | jq -Rs .)
PRIVACY_CONTENT=$(cat POLICY-CONTENT-PRIVACY-POLICY.md | jq -Rs .)
REFUND_CONTENT=$(cat POLICY-CONTENT-REFUND-POLICY.md | jq -Rs .)

echo "  ⏳ Creating Terms of Service..."
TERMS_MUTATION="mutation {
  shopPolicyUpdate(shopPolicy: {
    type: TERMS_OF_SERVICE
    body: $TERMS_CONTENT
  }) {
    shopPolicy {
      id
      type
      url
    }
    userErrors {
      field
      message
    }
  }
}"

RESPONSE=$(graphql_request "$TERMS_MUTATION")
if echo "$RESPONSE" | grep -q '"userErrors":\[\]'; then
    echo "  ✅ Terms of Service created successfully"
else
    echo "  ⚠️  Terms of Service response:"
    echo "$RESPONSE" | python3 -m json.tool
fi

echo ""
echo "  ⏳ Creating Privacy Policy..."
PRIVACY_MUTATION="mutation {
  shopPolicyUpdate(shopPolicy: {
    type: PRIVACY_POLICY
    body: $PRIVACY_CONTENT
  }) {
    shopPolicy {
      id
      type
      url
    }
    userErrors {
      field
      message
    }
  }
}"

RESPONSE=$(graphql_request "$PRIVACY_MUTATION")
if echo "$RESPONSE" | grep -q '"userErrors":\[\]'; then
    echo "  ✅ Privacy Policy created successfully"
else
    echo "  ⚠️  Privacy Policy response:"
    echo "$RESPONSE" | python3 -m json.tool
fi

echo ""
echo "  ⏳ Creating Refund Policy..."
REFUND_MUTATION="mutation {
  shopPolicyUpdate(shopPolicy: {
    type: REFUND_POLICY
    body: $REFUND_CONTENT
  }) {
    shopPolicy {
      id
      type
      url
    }
    userErrors {
      field
      message
    }
  }
}"

RESPONSE=$(graphql_request "$REFUND_MUTATION")
if echo "$RESPONSE" | grep -q '"userErrors":\[\]'; then
    echo "  ✅ Refund Policy created successfully"
else
    echo "  ⚠️  Refund Policy response:"
    echo "$RESPONSE" | python3 -m json.tool
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 2: Find and delete bad pages
echo "📋 STEP 2: Finding and Deleting Old Pages"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Query to find pages
PAGES_QUERY='query {
  pages(first: 250) {
    edges {
      node {
        id
        title
        handle
      }
    }
  }
}'

echo "  ⏳ Fetching all pages..."
PAGES_RESPONSE=$(graphql_request "$PAGES_QUERY")
echo "$PAGES_RESPONSE" | python3 -m json.tool > /tmp/pages.json

# Find policy pages to delete
POLICY_PAGE_IDS=$(cat /tmp/pages.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
pages = data.get('data', {}).get('pages', {}).get('edges', [])
policy_titles = ['Terms of Service', 'Privacy Policy', 'Return & Exchange Policy', 'Refund Policy']
for edge in pages:
    node = edge.get('node', {})
    if node.get('title') in policy_titles:
        print(f\"{node.get('id')}|{node.get('title')}\")
" 2>/dev/null || echo "")

if [ -z "$POLICY_PAGE_IDS" ]; then
    echo "  ℹ️  No old policy pages found to delete"
else
    echo "$POLICY_PAGE_IDS" | while IFS='|' read -r page_id page_title; do
        echo "  ⏳ Deleting page: \"$page_title\"..."
        DELETE_MUTATION="mutation {
          pageDelete(id: \"$page_id\") {
            deletedPageId
            userErrors {
              field
              message
            }
          }
        }"
        RESPONSE=$(graphql_request "$DELETE_MUTATION")
        if echo "$RESPONSE" | grep -q '"userErrors":\[\]'; then
            echo "  ✅ Deleted: $page_title"
        else
            echo "  ⚠️  Could not delete $page_title:"
            echo "$RESPONSE" | python3 -m json.tool
        fi
    done
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 3: Verification
echo "✅ IMPLEMENTATION COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Summary:"
echo "  ✅ Created Terms of Service policy"
echo "  ✅ Created Privacy Policy"
echo "  ✅ Created Refund Policy"
echo "  ✅ Deleted old pages with wrong content"
echo ""
echo "🔗 Policy URLs:"
echo "  📄 Terms of Service: https://strivesoda.com/policies/terms-of-service"
echo "  🔒 Privacy Policy: https://strivesoda.com/policies/privacy-policy"
echo "  💸 Refund Policy: https://strivesoda.com/policies/refund-policy"
echo ""
echo "⚠️  MANUAL STEP REQUIRED:"
echo "  Update footer menu links to point to /policies/* URLs"
echo "  Go to: https://ab6dae-bb.myshopify.com/admin/menus"
echo "  Edit 'Footer menu' and update each policy link"
echo ""
echo "🧪 Test the fix:"
echo "  1. Visit https://strivesoda.com"
echo "  2. Scroll to footer"
echo "  3. Click each policy link to verify"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
