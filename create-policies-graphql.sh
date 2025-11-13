#!/bin/bash

# Create Shopify Policies using GraphQL Admin API
# This is the recommended approach for Shopify Admin API 2025-10

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

ACCESS_TOKEN="$SHOPIFY_ACCESS_TOKEN"
SHOP_DOMAIN="ab6dae-bb.myshopify.com"
API_VERSION="2025-10"

echo "🚀 Creating Shopify Policies via GraphQL..."
echo ""

# Read policy content and escape for JSON
TERMS_CONTENT=$(cat POLICY-CONTENT-TERMS-OF-SERVICE.md | jq -Rs .)
PRIVACY_CONTENT=$(cat POLICY-CONTENT-PRIVACY-POLICY.md | jq -Rs .)
REFUND_CONTENT=$(cat POLICY-CONTENT-REFUND-POLICY.md | jq -Rs .)

echo "📄 Step 1: Creating Terms of Service..."

# GraphQL mutation to update shop policies
QUERY=$(cat <<EOF
{
  "query": "mutation {
    shopPolicyUpdate(shopPolicy: {
      type: TERMS_OF_SERVICE
      body: $TERMS_CONTENT
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
  }"
}
EOF
)

RESPONSE=$(curl -s -X POST \
  "https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/graphql.json" \
  -H "X-Shopify-Access-Token: ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$QUERY")

if echo "$RESPONSE" | grep -q "userErrors.*\[\]"; then
  echo "✅ Terms of Service created successfully"
else
  echo "❌ Error creating Terms of Service:"
  echo "$RESPONSE"
fi

echo ""
echo "🔒 Step 2: Creating Privacy Policy..."

QUERY=$(cat <<EOF
{
  "query": "mutation {
    shopPolicyUpdate(shopPolicy: {
      type: PRIVACY_POLICY
      body: $PRIVACY_CONTENT
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
  }"
}
EOF
)

RESPONSE=$(curl -s -X POST \
  "https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/graphql.json" \
  -H "X-Shopify-Access-Token: ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$QUERY")

if echo "$RESPONSE" | grep -q "userErrors.*\[\]"; then
  echo "✅ Privacy Policy created successfully"
else
  echo "❌ Error creating Privacy Policy:"
  echo "$RESPONSE"
fi

echo ""
echo "💸 Step 3: Creating Refund Policy..."

QUERY=$(cat <<EOF
{
  "query": "mutation {
    shopPolicyUpdate(shopPolicy: {
      type: REFUND_POLICY
      body: $REFUND_CONTENT
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
  }"
}
EOF
)

RESPONSE=$(curl -s -X POST \
  "https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/graphql.json" \
  -H "X-Shopify-Access-Token: ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$QUERY")

if echo "$RESPONSE" | grep -q "userErrors.*\[\]"; then
  echo "✅ Refund Policy created successfully"
else
  echo "❌ Error creating Refund Policy:"
  echo "$RESPONSE"
fi

echo ""
echo "✅ Policy creation complete!"
echo ""
echo "🔗 Policy URLs:"
echo "  📄 Terms: https://strivesoda.com/policies/terms-of-service"
echo "  🔒 Privacy: https://strivesoda.com/policies/privacy-policy"
echo "  💸 Refund: https://strivesoda.com/policies/refund-policy"
echo ""
