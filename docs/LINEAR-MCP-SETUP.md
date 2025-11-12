# Linear MCP Server Setup Guide

This guide will help you set up the Linear MCP server to integrate Claude with Linear.

---

## Option A: Automated Setup (Recommended)

Run the setup script:

```bash
cd /Users/ernestssmalikis/Projects/twg_landing
./scripts/setup-linear-mcp.sh
```

The script will:
1. Check prerequisites
2. Ask for your Linear API key
3. Ask for your Linear team ID
4. Backup your Claude config
5. Install the Linear MCP server configuration
6. Guide you through testing

---

## Option B: Manual Setup

### Step 1: Get Your Linear API Key

1. Go to [Linear API Settings](https://linear.app/settings/api)
2. Click "Create new API key"
3. Give it a name: `Claude MCP Server`
4. Copy the API key (starts with `lin_api_...`)

### Step 2: Get Your Linear Team ID

Your team ID is in your Linear URL:
- Example: `https://linear.app/twg/team/TWG-123`
- Team ID: `twg`

### Step 3: Find Your Team/Workspace Name

1. Go to Linear
2. Look at the URL or sidebar
3. Your workspace name is what you need (e.g., "TWG")

### Step 4: Update Claude Configuration

Edit your Claude config file:

```bash
nano "$HOME/Library/Application Support/Claude/config.json"
```

Add the `mcpServers` section (if it doesn't exist):

```json
{
  "scale": 0,
  "locale": "en-US",
  ...existing config...,
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-linear"
      ],
      "env": {
        "LINEAR_API_KEY": "lin_api_YOUR_KEY_HERE"
      }
    }
  }
}
```

**Important:** Replace `lin_api_YOUR_KEY_HERE` with your actual API key.

### Step 5: Restart Claude

1. Quit Claude Desktop completely (Cmd+Q)
2. Reopen Claude Desktop
3. The Linear MCP server will start automatically

---

## Testing the Connection

Once Claude restarts, try these commands:

```
"What Linear teams do I have access to?"
"List all projects in Linear"
"Show me milestones in the TWG workspace"
```

If successful, you'll see Claude accessing your Linear data!

---

## Troubleshooting

### Error: "LINEAR_API_KEY not found"

**Solution:** Check that your API key is correctly added to the config.json file.

```bash
cat "$HOME/Library/Application Support/Claude/config.json" | grep LINEAR_API_KEY
```

### Error: "npx command not found"

**Solution:** Install Node.js:

```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

### Error: "MCP server failed to start"

**Solution:** Check the Claude logs:

```bash
tail -f "$HOME/Library/Application Support/Claude/logs/mcp-server-linear.log"
```

### MCP Server Not Showing Up

**Solution:**
1. Make sure you completely quit Claude (Cmd+Q)
2. Wait 5 seconds
3. Reopen Claude
4. Check Developer Tools (Help → Developer Tools)
5. Look for MCP server initialization messages

---

## Verifying Installation

### Check if MCP is Loaded

In Claude, ask: "What tools do you have access to?"

You should see Linear-related tools in the response.

### Available Linear Commands

Once connected, you can:
- Create issues
- Create milestones/projects
- List teams
- Update issues
- Add comments
- Link issues
- Search issues
- And more!

---

## Security Notes

**Your API Key:**
- Stored locally in Claude config only
- Never shared with Anthropic
- Only accessible to the MCP server running on your machine

**Recommended Practices:**
- Use a dedicated API key for Claude MCP
- Regularly rotate your API keys
- Revoke unused keys in Linear settings

---

## Next Steps

Once Linear MCP is set up, we can:

1. ✅ **Populate Linear automatically** - I'll create all epics and stories
2. ✅ **Sync with documentation** - Link Linear issues to story files
3. ✅ **Track progress** - Real-time updates from Linear
4. ✅ **Manage workflow** - Create PRs, update statuses, etc.

---

## Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Review Linear MCP docs: https://github.com/modelcontextprotocol/servers
3. Check Claude Desktop logs
4. Ask me! I can help debug once MCP is connected

---

**Ready to proceed? Run the setup script or follow the manual steps above!**
