import { client, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Function to fetch a single blog post by slug
async function getBlogPost(slug) {
  const query = `
    *[_type == "post" && slug.current == $slug && published == true][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      mainImage,
      publishedAt,
      readingTime,
      featured,
      author->{
        name,
        image,
        bio,
        role
      },
      categories[]->{
        title,
        color
      },
      tags,
      seo
    }
  `
  
  try {
    const post = await client.fetch(query, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Function to fetch related posts
async function getRelatedPosts(postId, categories) {
  if (!categories || categories.length === 0) return []
  
  const categoryTitles = categories.map(cat => cat.title)
  
  const query = `
    *[_type == "post" && published == true && _id != $postId && count(categories[title in $categoryTitles]) > 0] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readingTime,
      author->{
        name
      }
    }
  `
  
  try {
    const posts = await client.fetch(query, { postId, categoryTitles })
    return posts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const seo = post.seo || {}
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null

  return {
    title: seo.title || post.title,
    description: seo.description || post.excerpt,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title || post.title,
      description: seo.ogDescription || seo.description || post.excerpt,
      type: 'article',
      url: `https://vrit-rho.vercel.app/blog/${post.slug.current}`,
      images: seo.ogImage ? [urlFor(seo.ogImage).width(1200).height(630).url()] : imageUrl ? [imageUrl] : [],
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'VRIT Solutions'],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.title || post.title,
      description: seo.twitterDescription || seo.description || post.excerpt,
      images: seo.twitterImage ? [urlFor(seo.twitterImage).width(1200).height(630).url()] : imageUrl ? [imageUrl] : [],
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
    }
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post._id, post.categories)
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1400).height(700).url() : null

  return (
    <div className="min-h-screen bg-white">
      {/* Medium-style Header */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-serif">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
            {post.excerpt}
          </p>
        )}

        {/* Author & Meta Info - Medium Style */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            {post.author?.image ? (
              <Image
                src={urlFor(post.author.image).width(44).height(44).url()}
                alt={post.author.name}
                width={44}
                height={44}
                className="rounded-full"
              />
            ) : (
              <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  {(post.author?.name || 'A').charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            
            {/* Author Name & Info */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 text-sm">
                  {post.author?.name || 'Anonymous'}
                </span>
                {post.categories && post.categories.length > 0 && (
                  <>
                    <span className="text-gray-400 text-sm">in</span>
                    <span className="text-green-600 font-medium text-sm">
                      {post.categories[0].title}
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <time>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                {post.readingTime && (
                  <>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons - Medium Style */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image - Medium Style */}
      {imageUrl && (
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          {post.mainImage?.caption && (
            <p className="text-center text-sm text-gray-500 mt-3 italic">
              {post.mainImage.caption}
            </p>
          )}
        </div>
      )}

      {/* Article Content - Medium Typography */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <article className="prose prose-lg prose-gray max-w-none 
          [&>*]:font-serif [&>*]:leading-relaxed [&>*]:text-gray-800
          [&>h1]:font-sans [&>h1]:font-bold [&>h1]:text-black [&>h1]:text-4xl [&>h1]:mt-8 [&>h1]:mb-2
          [&>h2]:font-sans [&>h2]:font-bold [&>h2]:text-black [&>h2]:text-3xl [&>h2]:mt-8 [&>h2]:mb-2
          [&>h3]:font-sans [&>h3]:font-bold [&>h3]:text-black [&>h3]:text-2xl [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:text-lg [&>p]:mb-6 [&>p]:leading-relaxed
          [&>strong]:font-bold [&>strong]:text-black
          [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-6 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-600
          [&>code]:bg-gray-100 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm
          [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-6 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-8
          [&>ul]:my-6 [&>ul]:pl-6 [&>ol]:my-6 [&>ol]:pl-6
          [&>li]:mb-2
        ">
          <PortableText
            value={post.body}
            components={portableTextComponents}
          />
        </article>

        {/* Tags - Medium Style */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio - Medium Style */}
        {post.author && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              {post.author.image ? (
                <Image
                  src={urlFor(post.author.image).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full flex-shrink-0"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xl">
                    {post.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  Written by {post.author.name}
                </h3>
                {post.author.role && (
                  <p className="text-gray-600 text-sm mb-2">{post.author.role}</p>
                )}
                {post.author.bio && (
                  <p className="text-gray-600 text-sm leading-relaxed">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Related Posts - Medium Style */}
      {relatedPosts.length > 0 && (
        <section className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            More from {post.categories?.[0]?.title || 'Our Blog'}
          </h2>
          <div className="space-y-6">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <RelatedPostCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

// Medium-style Related Post Card
function RelatedPostCard({ post }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(80).height(80).fit('crop').crop('center').url() : null
  
  return (
    <article className="flex gap-4 group">
      <Link href={`/blog/${post.slug.current}`} className="flex-1">
        <div className="flex gap-4">
          {/* Image */}
          {imageUrl && (
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded bg-gray-100 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{post.author?.name || 'Anonymous'}</span>
              <span>·</span>
              <time>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
              {post.readingTime && (
                <>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

// Portable Text Components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(800).url()
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-center text-gray-600 text-sm mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    codeBlock: ({ value }) => (
      <div className="my-8">
        <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || 'text'}`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),
    callout: ({ value }) => {
      const colorClasses = {
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        success: 'bg-green-50 border-green-200 text-green-900',
      }
      
      return (
        <div className={`my-8 p-6 border-l-4 rounded-r-lg ${colorClasses[value.type] || colorClasses.info}`}>
          {value.title && (
            <h4 className="font-semibold mb-2">{value.title}</h4>
          )}
          <p>{value.content}</p>
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
    internalLink: ({ children, value }) => (
      <Link
        href={`/blog/${value.reference.slug.current}`}
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </Link>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
}
