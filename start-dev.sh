#!/bin/bash
################################################################################
# TWG Landing - Start Local Development Environment
################################################################################

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Starting TWG Landing Development Environment...${NC}"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${YELLOW}Docker is not running. Please start Docker Desktop and try again.${NC}"
    exit 1
fi

# Build and start containers
echo "Building Docker containers..."
docker-compose build

echo ""
echo "Starting containers..."
docker-compose up -d

echo ""
echo "Waiting for services to be ready..."
sleep 5

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    echo -e "${GREEN}✅ All services started successfully!${NC}"
    echo ""
    echo "======================================"
    echo "Local Development URLs:"
    echo "======================================"
    echo "Website:      http://localhost:8080"
    echo "phpMyAdmin:   http://localhost:8081"
    echo "PHP Info:     http://localhost:8080/info.php"
    echo ""
    echo "Database Credentials:"
    echo "======================================"
    echo "Host:         localhost"
    echo "Port:         3306"
    echo "Database:     twg_landing_db"
    echo "Username:     twg_user"
    echo "Password:     twg_local_pass"
    echo "Root Password: root_password"
    echo ""
    echo -e "${GREEN}Ready to develop! 🚀${NC}"
    echo ""
    echo "Commands:"
    echo "  Stop:  docker-compose down"
    echo "  Logs:  docker-compose logs -f"
    echo "  Shell: docker-compose exec php bash"
else
    echo -e "${YELLOW}⚠️  Some services may not have started correctly.${NC}"
    echo "Run 'docker-compose logs' to see details."
fi
