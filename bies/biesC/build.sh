#!/bin/bash

# Colors for output
echo "Verifying dependencies..."
npm install --no-audit --no-fund || { echo "Dependency installation failed"; exit 1; }

npm run prestart

mv output/grammar/* output/
rm -r output/grammar


npm run docs &       # Run in background
npm run test &       # Run in background

wait  # Wait for all background tasks to complete

sudo npm run link   # Run in background