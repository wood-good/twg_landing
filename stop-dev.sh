#!/bin/bash
################################################################################
# TWG Landing - Stop Local Development Environment
################################################################################

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Stopping TWG Landing Development Environment...${NC}"
echo ""

# Stop containers
docker-compose down

echo ""
echo -e "${GREEN}✅ Development environment stopped.${NC}"
echo ""
echo "To start again, run: ./start-dev.sh"
