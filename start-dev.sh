#!/bin/bash

echo -e "\033[1;36mStarting TWG Landing Development Environment...\033[0m"
echo ""

# Build and start containers
docker-compose up -d --build

echo ""
echo -e "\033[0;32m✅ Development environment started!\033[0m"
echo ""
echo -e "\033[1;33mAccess URLs:\033[0m"
echo "  VVVeb CMS: http://localhost:8080/vvveb-cms/admin/"
echo "  phpMyAdmin: http://localhost:8081"
echo "  MySQL: localhost:3306"
echo ""
echo -e "\033[1;33mDatabase Credentials:\033[0m"
echo "  Database: vvveb_db"
echo "  Username: vvveb_user"
echo "  Password: vvveb_pass"
echo ""
echo -e "\033[0;36mTo stop: ./stop-dev.sh\033[0m"
