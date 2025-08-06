import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// Temporarily commented out due to compatibility issues with Next.js App Router
// import { media } from 'sanity-plugin-media'
import { schema } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'VR IT Solutions Blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('post')
                  )
              ),
            S.divider(),
            S.listItem()
              .title('Authors')
              .child(
                S.documentTypeList('author')
                  .title('Authors')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
                  .defaultOrdering([{ field: 'title', direction: 'asc' }])
              ),
            S.divider(),
            // Featured Posts
            S.listItem()
              .title('Featured Posts')
              .child(
                S.documentTypeList('post')
                  .title('Featured Posts')
                  .filter('_type == "post" && featured == true')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            // Published Posts
            S.listItem()
              .title('Published Posts')
              .child(
                S.documentTypeList('post')
                  .title('Published Posts')
                  .filter('_type == "post" && published == true')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            // Draft Posts
            S.listItem()
              .title('Draft Posts')
              .child(
                S.documentTypeList('post')
                  .title('Draft Posts')
                  .filter('_type == "post" && published != true')
                  .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
              ),
          ])
    }),
    visionTool(),
    // Temporarily commented out due to compatibility issues with Next.js App Router
    // media(),
  ],

  schema,

  document: {
    // Actions for posts
    actions: (prev, { schemaType }) => {
      if (schemaType === 'post') {
        return prev.map((action) =>
          action.action === 'publish' ? { ...action, label: 'Publish Post' } : action
        )
      }
      return prev
    },
  },
})
