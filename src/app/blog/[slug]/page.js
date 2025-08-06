import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  getPostBySlug, 
  getRelatedPosts, 
  getAllPosts, 
  urlFor, 
  generateBlogSEO, 
  generateBlogStructuredData 
} from '../../../lib/sanity';
import PortableTextRenderer from '../../components/PortableTextRenderer';
import ShareButton from '../../components/ShareButton';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  BookmarkPlus,
  Tag,
  ArrowRight,
  MessageCircle,
  Heart,
  Eye
} from 'lucide-react';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for individual blog posts
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | VR IT Solutions Blog',
    };
  }

  return generateBlogSEO(post);
}

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Estimated reading time calculation
function calculateReadingTime(body) {
  if (!body) return 0;
  
  // Count words in portable text blocks
  let wordCount = 0;
  body.forEach(block => {
    if (block._type === 'block' && block.children) {
      block.children.forEach(child => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length;
        }
      });
    }
  });
  
  // Average reading speed is 200-250 words per minute
  return Math.ceil(wordCount / 225);
}

// Related post card component
function RelatedPostCard({ post }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(300).height(200).url() : '/logo.png';
  
  return (
    <article className="group">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="relative rounded-lg overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.categories?.[0] && (
              <div className="absolute top-2 left-2 bg-blue-600/90 text-white px-2 py-1 rounded text-xs font-semibold">
                {post.categories[0].title}
              </div>
            )}
          </div>
          
          <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{formatDate(post.publishedAt)}</span>
            <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300">
              Read more
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Author info component
function AuthorInfo({ author }) {
  if (!author) return null;

  const authorImage = author.image ? urlFor(author.image).width(100).height(100).url() : '/logo.png';

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl">
      <div className="flex items-start gap-4">
        <div className="relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={authorImage}
            alt={author.name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-1">{author.name}</h3>
          {author.role && (
            <p className="text-blue-300 text-sm mb-2">{author.role}</p>
          )}
          {author.bio && (
            <p className="text-gray-300 text-sm leading-relaxed">{author.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Table of Contents component
function TableOfContents({ content }) {
  if (!content) return null;

  const headings = [];
  content.forEach(block => {
    if (block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style)) {
      const text = block.children?.map(child => child.text).join('') || '';
      if (text) {
        headings.push({
          level: parseInt(block.style.slice(1)),
          text,
          id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        });
      }
    }
  });

  if (headings.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl mb-8">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <BookmarkPlus className="w-5 h-5 text-blue-400" />
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.id}`}
                className={`text-gray-300 hover:text-blue-300 transition-colors block ${
                  heading.level === 2 ? 'ml-4' : heading.level === 3 ? 'ml-8' : ''
                } ${heading.level === 1 ? 'font-semibold' : ''}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = post.categories?.length > 0 
    ? await getRelatedPosts(post._id, post.categories)
    : [];

  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(600).url() : '/logo.png';
  const readingTime = post.readingTime || calculateReadingTime(post.body);
  const authorImage = post.author?.image ? urlFor(post.author.image).width(50).height(50).url() : '/logo.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map(category => (
                <Link
                  key={category._id}
                  href={`/blog?category=${category.slug.current}`}
                  className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600/30 transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-700/50">
            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-3">
                <Image
                  src={authorImage}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-medium">{post.author.name}</div>
                  {post.author.role && (
                    <div className="text-gray-400 text-sm">{post.author.role}</div>
                  )}
                </div>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </div>

            {/* Share Button */}
            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>

          {/* Featured Image */}
          {post.mainImage && (
            <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={mainImageUrl}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Hidden on mobile */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents content={post.body} />
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <div className="max-w-4xl">
              {/* Article Body */}
              <div className="mb-12">
                <PortableTextRenderer content={post.body} />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 font-medium">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              {post.author && (
                <div className="mb-12">
                  <AuthorInfo author={post.author} />
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    Related Articles
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <RelatedPostCard key={relatedPost._id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 shadow-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Advance Your Tech Career?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of professionals who have transformed their careers with VR IT Solutions comprehensive training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/courses"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Explore Courses
                  </Link>
                  <Link 
                    href="/contactus"
                    className="border border-blue-500/50 text-white px-8 py-3 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogStructuredData(post))
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.vritsol.com"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Blog",
                "item": "https://www.vritsol.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.vritsol.com/blog/${post.slug.current}`
              }
            ]
          })
        }}
      />
    </div>
  );
}
