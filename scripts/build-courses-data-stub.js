#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Stub script for offline builds - using existing coursesMetadata.json
const metadataPath = path.join(__dirname, '../src/data/coursesMetadata.json');

if (fs.existsSync(metadataPath)) {
  console.log('✓ Using existing course metadata (offline mode)');
  process.exit(0);
} else {
  console.warn('⚠ Warning: coursesMetadata.json not found. Build may fail if course data is required.');
  console.warn('  Expected location:', metadataPath);
  // Still exit with 0 to allow the build to continue
  process.exit(0);
}
