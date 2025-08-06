const http = require('http');
const https = require('https');

function testEndpoint(url, description) {
  console.log(`\n🔍 Testing: ${description}`);
  console.log(`URL: ${url}`);
  
  const client = url.startsWith('https') ? https : http;
  
  const req = client.get(url, (res) => {
    console.log(`✅ Status: ${res.statusCode} ${res.statusMessage}`);
    console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
    
    if (res.statusCode === 200) {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data.includes('Sanity Studio') || data.includes('sanity')) {
          console.log('✅ Response contains Sanity content');
        } else {
          console.log('⚠️  Response does not contain expected Sanity content');
        }
        console.log(`Response length: ${data.length} characters`);
      });
    }
  });
  
  req.on('error', (err) => {
    console.log(`❌ Error: ${err.message}`);
  });
  
  req.setTimeout(5000, () => {
    console.log('❌ Request timed out');
    req.destroy();
  });
}

console.log('🧪 Sanity Studio Endpoint Diagnostics');
console.log('=====================================');

// Test various endpoints
testEndpoint('http://localhost:3001', 'Main Next.js app');
testEndpoint('http://localhost:3001/admin', 'Sanity Studio');
testEndpoint('http://localhost:3001/admin/structure', 'Studio Structure');
testEndpoint('http://localhost:3001/api/sanity/webhook', 'Sanity API (if exists)');

console.log('\n📋 Environment Check:');
console.log(`Node.js version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Working directory: ${process.cwd()}`);

// Check environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET', 
  'SANITY_API_TOKEN'
];

console.log('\n🔐 Environment Variables:');
requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${varName.includes('TOKEN') ? '[HIDDEN]' : value}`);
  } else {
    console.log(`❌ ${varName}: NOT SET`);
  }
});

// Read .env.local file
try {
  const fs = require('fs');
  const envContent = fs.readFileSync('.env.local', 'utf8');
  console.log('\n📄 .env.local file exists and readable');
  const lines = envContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  console.log(`Contains ${lines.length} environment variable definitions`);
} catch (err) {
  console.log('\n❌ Cannot read .env.local file:', err.message);
}
