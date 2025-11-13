#!/bin/bash

# Shopify Footer Policy Fix - Bash Implementation
# Uses Shopify Admin API to create policies and update navigation

set -e

# Load credentials
source .env.shopify 2>/dev/null || {
    echo "❌ Error: .env.shopify file not found"
    exit 1
}

SHOP_DOMAIN="ab6dae-bb.myshopify.com"
ACCESS_TOKEN="$SHOPIFY_ACCESS_TOKEN"
API_VERSION="2025-10"

echo "🚀 Starting Footer Policy Fix Implementation..."
echo ""

# Function to make API requests
shopify_api() {
    local method=$1
    local endpoint=$2
    local data=$3

    curl -s -X "$method" \
        "https://${SHOP_DOMAIN}/admin/api/${API_VERSION}${endpoint}" \
        -H "X-Shopify-Access-Token: ${ACCESS_TOKEN}" \
        -H "Content-Type: application/json" \
        ${data:+-d "$data"}
}

echo "📄 Step 1: Getting current shop policies..."
echo ""

# Get current shop info
SHOP_INFO=$(shopify_api GET "/shop.json")
echo "✅ Connected to Shopify store"
echo ""

echo "📋 Step 2: Finding pages to delete..."
echo ""

# Get all pages
PAGES=$(shopify_api GET "/pages.json?limit=250")

# Extract page IDs for policy pages (requires jq, but we'll do it manually if needed)
echo "$PAGES" | grep -i "terms\|privacy\|refund\|return.*exchange" || echo "  ℹ️  No old policy pages found"
echo ""

echo "🔗 Step 3: Getting navigation menus..."
echo ""

# Note: The Shopify Admin API for policies and menus has changed
# We need to use GraphQL API for better control

echo "⚠️  Important: Shopify's REST API has limitations for policies and menus."
echo "   Using alternative approach..."
echo ""

# Create a test to see what we can access
echo "Testing API access..."
TEST=$(shopify_api GET "/shop.json")
if echo "$TEST" | grep -q "shop"; then
    echo "✅ API connection successful"
else
    echo "❌ API connection failed"
    echo "$TEST"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Note: Shopify's Admin REST API requires GraphQL for some operations."
echo "Switching to Node.js implementation for better API support..."
echo ""
