#!/bin/bash
# build.sh

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the absolute path of the script's directory
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Function to build a specific component
build_component() {
    local component=$1
    local full_path="$ROOT_DIR/$component"
    
    echo -e "${GREEN}Building $component...${NC}"
    
    if [ ! -d "$full_path" ]; then
        echo -e "${RED}Directory not found: $full_path${NC}"
        exit 1
    fi
    
    # Save current directory
    pushd "$full_path" > /dev/null
    
    # Run the component's build script
    if [ -f "build.sh" ]; then
        bash build.sh
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ $component built successfully${NC}"
        else
            echo -e "${RED}✗ $component build failed${NC}"
            popd > /dev/null
            exit 1
        fi
    else
        echo -e "${RED}No build script found for $component${NC}"
        popd > /dev/null
        exit 1
    fi
    
    # Restore previous directory
    popd > /dev/null
}

# Function to display usage
usage() {
    echo "Usage: $0 [options]"
    echo "Options:"
    echo "  --all         Build all components"
    echo "  --compiler    Build only the compiler"
    echo "  --vm          Build only the VM"
    echo "  --support     Build only the VS Code extension"
    echo "  --help        Display this help message"
}

# No arguments provided
if [ $# -eq 0 ]; then
    usage
    exit 1
fi

# Parse arguments
for arg in "$@"; do
    case $arg in
        --all)
            build_component "bies/biesVM"
            build_component "bies/biesC"
            build_component "bies-support"
            ;;
        --compiler)
            build_component "bies/biesC"
            ;;
        --vm)
            build_component "bies/biesVM"
            ;;
        --support)
            build_component "bies-support"
            ;;
        --help)
            usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $arg${NC}"
            usage
            exit 1
            ;;
    esac
done