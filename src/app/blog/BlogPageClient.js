'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp,
  Search,
  Filter,
  Star,
  Tag
} from 'lucide-react';

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
function BlogPostCard({ post, featured = false }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : '/logo.png';
  
  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col ${
        featured ? 'lg:flex-row lg:gap-8' : ''
      }`}>
        <div className={`relative rounded-xl overflow-hidden mb-6 ${featured ? 'lg:mb-0 lg:w-1/2' : ''}`}>
          <Image
            src={imageUrl}
            alt={post.title}
            width={featured ? 600 : 400}
            height={featured ? 400 : 250}
            className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </div>
          )}
          {post.categories?.[0] && (
            <div className={`absolute top-4 ${featured ? 'right-4' : 'left-4'} bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold`}>
              {post.categories[0].title}
            </div>
          )}
        </div>
        
        <div className={`flex flex-col flex-1 ${featured ? 'lg:w-1/2' : ''}`}>
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
          
          <h3 className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            <Link href={`/blog/${post.slug.current}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          
          {post.excerpt && (
            <p className={`text-gray-300 mb-4 flex-1 ${featured ? 'text-lg' : ''}`}>
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

// Category filter component
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          !selectedCategory 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600/30'
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => onCategoryChange(category.slug.current)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category.slug.current
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600/30'
          }`}
        >
          {category.title} ({category.postCount})
        </button>
      ))}
    </div>
  );
}

// Client component for interactive features
export default function BlogPageClient({ initialPosts, initialFeaturedPosts, initialCategories, searchParams }) {
  const [posts] = React.useState(initialPosts);
  const [featuredPosts] = React.useState(initialFeaturedPosts);
  const [categories] = React.useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = React.useState(searchParams?.category || null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading] = React.useState(false);

  // Filter posts based on category and search
  const filteredPosts = React.useMemo(() => {
    let filtered = posts;

    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.categories?.some(cat => cat.slug.current === selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Stay updated with the latest technology trends, career guidance, and expert insights from the world of IT training and software development.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">{posts.length}</div>
              <div className="text-gray-400 text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">{categories.length}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">{featuredPosts.length}</div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 shadow-xl mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-4 mb-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <span className="text-gray-300 font-medium">Categories:</span>
            </div>
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && !selectedCategory && !searchTerm && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredPosts.slice(0, 2).map(post => (
                <BlogPostCard key={post._id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory ? `Posts in ${categories.find(c => c.slug.current === selectedCategory)?.title}` : 'Latest Articles'}
              </h2>
            </div>
            <div className="text-gray-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">
                {searchTerm || selectedCategory ? 'No articles found matching your criteria.' : 'No articles available yet.'}
              </div>
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/30 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest articles, training tips, and career guidance delivered to your inbox. Join thousands of IT professionals who trust VR IT Solutions for expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contactus"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Subscribe to Updates
              </Link>
              <Link 
                href="/courses"
                className="border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
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
            '@type': 'Blog',
            name: 'VR IT Solutions Tech Blog',
            description: 'Latest technology insights, training tips, and career guidance from VR IT Solutions',
            url: 'https://www.vritsol.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'VR IT Solutions',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.vritsol.com/logo.png'
              }
            },
            inLanguage: 'en-US',
            blogPost: posts.slice(0, 10).map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: `https://www.vritsol.com/blog/${post.slug.current}`,
              datePublished: post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author?.name || 'VR IT Solutions'
              }
            }))
          })
        }}
      />
    </div>
  );
}
