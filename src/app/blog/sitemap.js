import { getAllPosts } from '../../lib/sanity'

export default async function sitemap() {
  const posts = await getAllPosts()
  const baseUrl = 'https://www.vritsol.com'

  // Static blog pages
  const staticPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Dynamic blog post pages
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
