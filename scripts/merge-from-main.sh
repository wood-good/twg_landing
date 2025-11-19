#!/bin/bash

# =============================================================================
# merge-from-main.sh - Safe code merge from main to site branches
# =============================================================================
# Merges system/platform updates from main while preserving site-specific content
# Usage: ./scripts/merge-from-main.sh <branch-name>
# Example: ./scripts/merge-from-main.sh twg
#          ./scripts/merge-from-main.sh timber
# =============================================================================

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Valid site branches
VALID_BRANCHES=("twg" "timber" "twg-staging" "timber-staging")

# Safety check for arguments
if [ -z "$1" ]; then
    echo -e "${RED}❌ Error: No branch specified${NC}"
    echo ""
    echo "Usage: ./scripts/merge-from-main.sh <branch-name>"
    echo ""
    echo "Valid branches:"
    for branch in "${VALID_BRANCHES[@]}"; do
        echo "  - $branch"
    done
    exit 1
fi

SITE_BRANCH=$1

# Validate branch name
VALID=false
for branch in "${VALID_BRANCHES[@]}"; do
    if [ "$SITE_BRANCH" == "$branch" ]; then
        VALID=true
        break
    fi
done

if [ "$VALID" == "false" ]; then
    echo -e "${RED}❌ Error: '$SITE_BRANCH' is not a valid site branch${NC}"
    echo ""
    echo "Valid branches:"
    for branch in "${VALID_BRANCHES[@]}"; do
        echo "  - $branch"
    done
    exit 1
fi

# Verify target branch exists locally
if ! git show-ref --verify --quiet refs/heads/$SITE_BRANCH; then
    echo -e "${YELLOW}⚠️  Branch '$SITE_BRANCH' not found locally. Fetching...${NC}"
    git fetch origin $SITE_BRANCH:$SITE_BRANCH
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Error: Could not fetch branch '$SITE_BRANCH'${NC}"
        exit 1
    fi
fi

# Ensure we have latest main
echo -e "${YELLOW}📥 Fetching latest from origin...${NC}"
git fetch origin main

# Checkout main first to ensure it's up to date
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}📌 Checking out main...${NC}"
    git checkout main
fi

# Pull latest main
git pull origin main --ff-only 2>/dev/null || true

# Checkout target branch
echo -e "${YELLOW}📌 Checking out $SITE_BRANCH...${NC}"
git checkout $SITE_BRANCH

# Pull latest from origin for this branch
git pull origin $SITE_BRANCH --ff-only 2>/dev/null || true

# Start merge without committing
echo -e "${YELLOW}🔀 Merging code from main (content will be preserved)...${NC}"
git merge main --no-commit --no-ff

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Merge conflicts detected. Please resolve manually.${NC}"
    echo ""
    echo "After resolving conflicts:"
    echo "  1. git add <resolved-files>"
    echo "  2. Ensure content files are preserved (database/, storage/, media/, etc.)"
    echo "  3. git commit -m 'Merge system updates from main (content preserved)'"
    exit 1
fi

# Reset content-specific files to preserve site content
echo -e "${YELLOW}🛡️  Protecting site-specific content...${NC}"

# List of paths to protect
PROTECTED_PATHS=(
    "database/"
    "storage/"
    "media/"
    "uploads/"
    "public/media/"
    "public/uploads/"
    "vvveb/storage/"
    "config/site.php"
    ".env"
    ".env.local"
    ".env.production"
)

for path in "${PROTECTED_PATHS[@]}"; do
    if [ -e "$path" ]; then
        git reset HEAD "$path" 2>/dev/null || true
        git checkout -- "$path" 2>/dev/null || true
    fi
done

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo -e "${YELLOW}ℹ️  No code changes to merge from main${NC}"
    git merge --abort 2>/dev/null || true
    exit 0
fi

# Commit the code changes
echo -e "${YELLOW}💾 Committing system updates...${NC}"
git commit -m "$(cat <<'EOF'
Merge system updates from main (content preserved)

Platform code updates merged while preserving site-specific:
- Database files
- Storage/uploads
- Site configuration

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

echo ""
echo -e "${GREEN}✅ Successfully merged main → $SITE_BRANCH${NC}"
echo -e "${YELLOW}📤 Don't forget to push: git push origin $SITE_BRANCH${NC}"
