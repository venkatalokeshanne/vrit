// Test Sanity configuration
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../src/app/components/schemas/index.js'

const config = defineConfig({
  projectId: 'osamtsqm',  // Hardcoded for now
  dataset: 'production',
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  apiVersion: '2024-01-01',
})

console.log('Project ID:', config.projectId);
console.log('Dataset:', config.dataset);
console.log('Schema types:', config.schema.types.length);
console.log('Schema names:', config.schema.types.map(t => t.name || t.type).join(', '));
console.log('API Version:', config.apiVersion);
