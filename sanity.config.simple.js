import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import schemas directly
import post from './sanity/schemas/post'
import author from './sanity/schemas/author'
import category from './sanity/schemas/category'
import blockContent from './sanity/schemas/blockContent'
import seo from './sanity/schemas/seo'

const config = defineConfig({
  name: 'default',
  title: 'VR IT Solutions Blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'osamtsqm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [post, author, category, blockContent, seo],
  },

  basePath: '/admin',
})

export default config
