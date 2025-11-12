#!/bin/bash

# TWG Landing Page - Linear MCP Setup Script
# This script installs and configures the Linear MCP server for Claude

set -e

echo "🚀 TWG Landing Page - Linear MCP Setup"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if npx is installed
echo -e "${BLUE}Step 1: Checking prerequisites...${NC}"
if ! command -v npx &> /dev/null; then
    echo "❌ npx is not installed. Please install Node.js first."
    exit 1
fi
echo "✅ npx is available"
echo ""

# Step 2: Get Linear API Key
echo -e "${BLUE}Step 2: Linear API Key${NC}"
echo "To get your Linear API key:"
echo "1. Go to https://linear.app/settings/api"
echo "2. Click 'Create new API key'"
echo "3. Give it a name like 'Claude MCP Server'"
echo "4. Copy the API key"
echo ""
echo -e "${YELLOW}Please enter your Linear API key:${NC}"
read -s LINEAR_API_KEY
echo ""

if [ -z "$LINEAR_API_KEY" ]; then
    echo "❌ API key cannot be empty"
    exit 1
fi

echo "✅ API key received"
echo ""

# Step 3: Get Linear Team/Workspace ID
echo -e "${BLUE}Step 3: Get your Linear Team ID${NC}"
echo "Your Linear team ID is in your Linear URL:"
echo "Example: https://linear.app/twg/team/TWG-123 → Team ID is 'twg'"
echo ""
echo -e "${YELLOW}Please enter your Linear team ID (workspace name):${NC}"
read LINEAR_TEAM_ID

if [ -z "$LINEAR_TEAM_ID" ]; then
    echo "❌ Team ID cannot be empty"
    exit 1
fi

echo "✅ Team ID: $LINEAR_TEAM_ID"
echo ""

# Step 4: Find Claude config file
echo -e "${BLUE}Step 4: Locating Claude configuration...${NC}"
CLAUDE_CONFIG="$HOME/Library/Application Support/Claude/config.json"

if [ ! -f "$CLAUDE_CONFIG" ]; then
    echo "❌ Claude config not found at: $CLAUDE_CONFIG"
    echo "Please make sure Claude Desktop is installed."
    exit 1
fi

echo "✅ Found Claude config at: $CLAUDE_CONFIG"
echo ""

# Step 5: Backup existing config
echo -e "${BLUE}Step 5: Creating backup...${NC}"
BACKUP_FILE="${CLAUDE_CONFIG}.backup.$(date +%Y%m%d_%H%M%S)"
cp "$CLAUDE_CONFIG" "$BACKUP_FILE"
echo "✅ Backup created at: $BACKUP_FILE"
echo ""

# Step 6: Install Linear MCP server config
echo -e "${BLUE}Step 6: Configuring Linear MCP server...${NC}"

# Create a temporary Python script to update JSON
cat > /tmp/update_claude_config.py << 'PYTHON_SCRIPT'
import json
import sys

config_file = sys.argv[1]
api_key = sys.argv[2]
team_id = sys.argv[3]

# Read existing config
with open(config_file, 'r') as f:
    config = json.load(f)

# Add MCP servers configuration
if 'mcpServers' not in config:
    config['mcpServers'] = {}

config['mcpServers']['linear'] = {
    "command": "npx",
    "args": [
        "-y",
        "@modelcontextprotocol/server-linear"
    ],
    "env": {
        "LINEAR_API_KEY": api_key
    }
}

# Write updated config
with open(config_file, 'w') as f:
    json.dump(config, f, indent=2)

print("✅ Configuration updated successfully")
PYTHON_SCRIPT

# Run the Python script
python3 /tmp/update_claude_config.py "$CLAUDE_CONFIG" "$LINEAR_API_KEY" "$LINEAR_TEAM_ID"
rm /tmp/update_claude_config.py

echo ""
echo -e "${GREEN}🎉 Linear MCP Server Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Restart Claude Desktop app"
echo "2. The Linear MCP server will be available automatically"
echo "3. You can now use Linear commands in Claude"
echo ""
echo "Your Linear team ID: $LINEAR_TEAM_ID"
echo ""
echo "Backup location: $BACKUP_FILE"
echo ""
echo -e "${BLUE}Testing connection...${NC}"
echo "Once Claude restarts, try asking: 'What Linear teams do I have access to?'"
echo ""
