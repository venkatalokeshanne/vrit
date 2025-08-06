import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllCategories, urlFor } from '../../../../lib/sanity';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Tag,
  BookOpen
} from 'lucide-react';

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  return categories.map((category) => ({
    slug: category.slug.current,
  }));
}

// Generate metadata for category pages
export async function generateMetadata({ params }) {
  const categories = await getAllCategories();
  const category = categories.find(cat => cat.slug.current === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found | VR IT Solutions Blog',
    };
  }

  return {
    metadataBase: new URL('https://www.vritsol.com'),
    title: `${category.title} Articles | VR IT Solutions Blog`,
    description: category.description || `Read the latest articles about ${category.title} from VR IT Solutions tech blog.`,
    keywords: `${category.title}, technology blog, IT training, VR IT Solutions`,
    openGraph: {
      title: `${category.title} Articles | VR IT Solutions Blog`,
      description: category.description || `Latest ${category.title} articles and insights`,
      url: `https://www.vritsol.com/blog/category/${category.slug.current}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.vritsol.com/blog/category/${category.slug.current}`,
    }
  };
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

// Blog post card component
function BlogPostCard({ post }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(400).height(250).url() : '/logo.png';
  
  return (
    <article className="group">
      <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <Image
            src={imageUrl}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {post.categories?.[0] && (
            <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {post.categories[0].title}
            </div>
          )}
        </div>
        
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </div>
            )}
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author.name}
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
            <Link href={`/blog/${post.slug.current}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          
          {post.excerpt && (
            <p className="text-gray-300 mb-4 flex-1">
              {post.excerpt}
            </p>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-400/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <Link 
            href={`/blog/${post.slug.current}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors mt-auto"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default async function CategoryPage({ params }) {
  const categories = await getAllCategories();
  const category = categories.find(cat => cat.slug.current === params.slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(params.slug);

  // Get category color class
  const getCategoryColor = (color) => {
    const colors = {
      blue: 'from-blue-500/20 via-blue-600/20 to-blue-700/20 border-blue-400/30',
      green: 'from-green-500/20 via-green-600/20 to-green-700/20 border-green-400/30',
      purple: 'from-purple-500/20 via-purple-600/20 to-purple-700/20 border-purple-400/30',
      red: 'from-red-500/20 via-red-600/20 to-red-700/20 border-red-400/30',
      yellow: 'from-yellow-500/20 via-yellow-600/20 to-yellow-700/20 border-yellow-400/30',
      teal: 'from-teal-500/20 via-teal-600/20 to-teal-700/20 border-teal-400/30',
      pink: 'from-pink-500/20 via-pink-600/20 to-pink-700/20 border-pink-400/30',
    };
    return colors[color] || colors.blue;
  };

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

      {/* Category Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`bg-gradient-to-br ${getCategoryColor(category.color)} backdrop-blur-sm rounded-3xl p-12 border shadow-2xl mb-12`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Tag className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {category.title}
              </h1>
            </div>
            
            {category.description && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {category.description}
              </p>
            )}
            
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{posts.length}</div>
                <div className="text-gray-400">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">{category.postCount || 0}</div>
                <div className="text-gray-400">Total Posts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">No Articles Yet</h2>
              <p className="text-gray-400 text-lg mb-8">
                We're working on adding more content to this category. Check back soon!
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Other Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.slug.current !== params.slug)
              .slice(0, 6)
              .map(otherCategory => (
                <Link
                  key={otherCategory._id}
                  href={`/blog/category/${otherCategory.slug.current}`}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${getCategoryColor(otherCategory.color)} backdrop-blur-sm rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Tag className="w-5 h-5 text-blue-400" />
                      <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                        {otherCategory.title}
                      </h3>
                    </div>
                    
                    {otherCategory.description && (
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {otherCategory.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {otherCategory.postCount || 0} articles
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/30 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated on {category.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new articles about {category.title.toLowerCase()} and other technology topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contactus"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
              <Link 
                href="/courses"
                className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${category.title} Articles | VR IT Solutions Blog`,
            description: category.description || `Articles about ${category.title}`,
            url: `https://www.vritsol.com/blog/category/${category.slug.current}`,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: posts.length,
              itemListElement: posts.slice(0, 10).map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'BlogPosting',
                  headline: post.title,
                  url: `https://www.vritsol.com/blog/${post.slug.current}`,
                  datePublished: post.publishedAt,
                  author: {
                    '@type': 'Person',
                    name: post.author?.name || 'VR IT Solutions'
                  }
                }
              }))
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.vritsol.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://www.vritsol.com/blog'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: category.title,
                  item: `https://www.vritsol.com/blog/category/${category.slug.current}`
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
