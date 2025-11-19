#!/bin/bash

echo -e "\033[1;33mStopping TWG Landing Development Environment...\033[0m"
echo ""

docker-compose down

echo ""
echo -e "\033[0;32m✅ Development environment stopped.\033[0m"
echo ""
echo "To start again, run: ./start-dev.sh"
