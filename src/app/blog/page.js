import { client } from '../../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/sanity'

// Function to fetch all published blog posts
async function getBlogPosts(categoryFilter = null) {
  let query = `
    *[_type == "post" && published == true`
  
  if (categoryFilter) {
    query += ` && $categoryFilter in categories[]->title`
  }
  
  query += `] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readingTime,
      featured,
      author->{
        name,
        image
      },
      categories[]->{
        title,
        color
      },
      tags
    }
  `
  
  try {
    const params = categoryFilter ? { categoryFilter } : {}
    const posts = await client.fetch(query, params)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function generateMetadata() {
  return {
    title: 'Blog - VRIT Solutions',
    description: 'Stay updated with the latest insights, tutorials, and industry trends in technology, DevOps, Cloud Computing, and more.',
    keywords: 'technology blog, DevOps articles, cloud computing, programming tutorials, VRIT Solutions',
    openGraph: {
      title: 'Blog - VRIT Solutions',
      description: 'Stay updated with the latest insights, tutorials, and industry trends in technology.',
      type: 'website',
      url: 'https://www.vritsol.com/blog',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog - VRIT Solutions',
      description: 'Stay updated with the latest insights, tutorials, and industry trends in technology.',
    }
  }
}

export default async function BlogPage({ searchParams }) {
  const categoryFilter = searchParams?.category || null
  const posts = await getBlogPosts(categoryFilter)
  const featuredPosts = posts.filter(post => post.featured)
  const _regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Compact Header */}
      <div className="bg-slate-800 border-b border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Blog</h1>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm text-slate-300">Latest insights and updates</p>
                {categoryFilter && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">â€¢</span>
                    <span className="text-blue-400 text-sm">Filtered by: {categoryFilter}</span>
                    <Link 
                      href="/blog" 
                      className="text-slate-400 hover:text-white text-sm underline"
                    >
                      Clear filter
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="text-sm text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Posts - Compact Grid */}
            {featuredPosts.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Featured
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredPosts.slice(0, 4).map((post) => (
                    <FeaturedPostCard key={post._id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* All Posts - Compact List */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                All Posts
              </h2>
              <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm divide-y divide-slate-700">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <CompactPostItem key={post._id} post={post} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📬</span>
                    </div>
                    <p className="text-slate-400">No articles published yet.</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80 space-y-6">
            <BlogSidebar posts={posts} currentCategory={categoryFilter} />
          </div>
        </div>
      </div>
    </div>
  )
}
// Compact Featured Post Card
function FeaturedPostCard({ post }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(300).height(200).url() : null
  
  return (
    <article className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:shadow-md hover:border-slate-600 transition-all duration-300 group">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-32">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute top-2 left-2">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className="font-semibold text-white mb-2 leading-tight line-clamp-2 hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        {post.excerpt && (
          <p className="text-slate-300 text-sm mb-3 line-clamp-2">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{post.author?.name || 'Anonymous'}</span>
          <div className="flex items-center gap-2">
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </time>
            {post.readingTime && (
              <>
                <span> · </span>
                <span>{post.readingTime}m</span>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// Ultra Compact Post Item
function CompactPostItem({ post }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(80).height(80).fit('crop').crop('center').url() : null
  
  return (
    <article className="p-4 hover:bg-slate-700 transition-all duration-200">
      <Link href={`/blog/${post.slug.current}`} className="group">
        <div className="flex gap-4">
          {/* Thumbnail */}
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-700 shadow-sm">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-slate-300 text-sm line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                )}
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="font-medium">{post.author?.name || 'Anonymous'}</span>
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  {post.readingTime && <span>{post.readingTime} min read</span>}
                  {post.categories && post.categories.length > 0 && (
                    <span className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded text-xs">
                      {post.categories[0].title}
                    </span>
                  )}
                </div>
              </div>

              {/* Featured Badge */}
              {post.featured && (
                <div className="flex-shrink-0">
                  <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                    ⭐
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

// Blog Sidebar Component
function BlogSidebar({ posts, currentCategory }) {
  // Get unique categories
  const categories = [...new Map(
    posts.flatMap(post => post.categories || [])
      .map(cat => [cat.title, cat])
  ).values()]

  // Get popular posts (featured + recent)
  const popularPosts = posts
    .filter(post => post.featured || post.readingTime)
    .slice(0, 5)

  // Get all tags
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))]
    .slice(0, 15)

  return (
    <div className="space-y-6">
      {/* Categories Widget */}
      {categories.length > 0 && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {/* All Posts Option */}
            <Link href="/blog">
              <span className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
                !currentCategory 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white'
              }`}>
                All Posts ({posts.length})
              </span>
            </Link>
            
            {categories.map((category) => {
              const postCount = posts.filter(post => 
                post.categories?.some(cat => cat.title === category.title)
              ).length
              const isActive = currentCategory === category.title
              
              return (
                <Link key={category.title} href={`/blog?category=${encodeURIComponent(category.title)}`}>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white'
                  }`}>
                    {category.title} ({postCount})
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Popular Posts Widget */}
      {popularPosts.length > 0 && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Popular Posts
          </h3>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <SidebarPostItem key={post._id} post={post} index={index + 1} />
            ))}
          </div>
        </div>
      )}

      {/* Tags Widget */}
      {allTags.length > 0 && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, index) => (
              <span 
                key={index}
                className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats Widget */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Blog Stats
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Total Articles</span>
            <span className="font-bold text-xl">{posts.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Featured Posts</span>
            <span className="font-bold text-xl">{posts.filter(p => p.featured).length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Categories</span>
            <span className="font-bold text-xl">{categories.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Total Tags</span>
            <span className="font-bold text-xl">{allTags.length}</span>
          </div>
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">📬 Stay Updated</h3>
        <p className="text-green-100 text-sm mb-4">Get the latest posts delivered to your inbox</p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="w-full bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

// Sidebar Post Item Component
function SidebarPostItem({ post, index }) {
  return (
    <article className="flex gap-3 group cursor-pointer">
      <div className="flex-shrink-0">
        <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
          {index}
        </span>
      </div>
      
      <Link href={`/blog/${post.slug.current}`} className="flex-1 min-w-0">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-white text-sm line-clamp-2 group-hover:text-blue-400 transition-colors mb-1">
            {post.title}
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </time>
            {post.readingTime && (
              <>
                <span> · </span>
                <span>{post.readingTime}m</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
