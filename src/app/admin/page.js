'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, User, Tag, FileText, Save } from 'lucide-react'
import RichTextEditor from './RichTextEditor'
import ImageUploader from './ImageUploader'
import { markdownToPortableText, portableTextToMarkdown } from './markdown-utils'

export default function AdminPage() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [categories, setCategories] = useState([])
  const [initialLoading, setInitialLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('posts')
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)

  // Post form state
  const [postForm, setPostForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    body: '',
    author: '',
    mainImage: null,
    categories: [],
    tags: [],
    readingTime: '',
    featured: false,
    published: false,
    ogImage: null,
    twitterImage: null
  })

  // Author form state
  const [authorForm, setAuthorForm] = useState({
    name: '',
    bio: '',
    role: ''
  })

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    title: '',
    slug: '',
    description: '',
    color: 'blue'
  })

  useEffect(() => {
    fetchData(true) // true for initial load
  }, [])

  const fetchData = async (isInitialLoad = false) => {
    try {
      if (isInitialLoad) {
        setInitialLoading(true)
      }
      
      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'fetch-data',
          query: `{
            "posts": *[_type == "post"] | order(_updatedAt desc, _createdAt desc, publishedAt desc) {
              _id, title, "slug": slug.current, excerpt, body, publishedAt, published, featured,
              mainImage { asset->{ _id, url } },
              author->{ _id, name }, 
              categories[]->{ _id, title },
              tags, readingTime, seo, _createdAt, _updatedAt
            },
            "authors": *[_type == "author"] { _id, name, bio, role },
            "categories": *[_type == "category"] { _id, title, "slug": slug.current, description, color }
          }`
        })
      })

      const result = await response.json()
      if (result.success) {
        setPosts(result.data.posts || [])
        setAuthors(result.data.authors || [])
        setCategories(result.data.categories || [])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      if (isInitialLoad) {
        setInitialLoading(false)
      }
    }
  }

  // Helper functions for auto-generation
  const estimateReadingTime = (content) => {
    if (!content) return 1
    const words = content.split(/\s+/).length
    const wordsPerMinute = 200
    return Math.ceil(words / wordsPerMinute)
  }

  const generateMetaDescription = (excerpt, body) => {
    if (excerpt && excerpt.trim()) return excerpt.trim()
    const textContent = body.replace(/[#*`>-]/g, '').replace(/\n+/g, ' ').trim()
    return textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent
  }

  const generateTags = (title, body) => {
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should']
    
    const allText = `${title} ${body}`.toLowerCase()
    const words = allText.match(/\b\w{4,}\b/g) || []
    
    const wordCount = {}
    words.forEach(word => {
      if (!commonWords.includes(word)) {
        wordCount[word] = (wordCount[word] || 0) + 1
      }
    })
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([word]) => word)
  }

  // Form handlers
  const handlePostSubmit = async (e) => {
    e.preventDefault()
    try {
      const autoReadingTime = postForm.readingTime || estimateReadingTime(postForm.body)
      const autoMetaDescription = generateMetaDescription(postForm.excerpt, postForm.body)
      const autoTags = postForm.tags.length > 0 ? postForm.tags : generateTags(postForm.title, postForm.body)
      const autoExcerpt = postForm.excerpt || autoMetaDescription

      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: editingPost ? 'update-post' : 'create-post',
          data: {
            ...postForm,
            _id: editingPost?._id,
            _type: 'post',
            title: postForm.title,
            slug: { current: postForm.slug },
            excerpt: autoExcerpt,
            body: markdownToPortableText(postForm.body),
            mainImage: postForm.mainImage ? { 
              _type: 'image',
              asset: { _ref: postForm.mainImage, _type: 'reference' }
            } : null,
            author: postForm.author ? { _ref: postForm.author, _type: 'reference' } : null,
            categories: postForm.categories.length > 0 ? postForm.categories.map(cat => ({ _ref: cat, _type: 'reference' })) : [],
            tags: autoTags,
            readingTime: parseInt(autoReadingTime),
            featured: postForm.featured,
            published: postForm.published,
            publishedAt: postForm.published ? new Date().toISOString() : null,
            seo: {
              title: postForm.title,
              description: autoMetaDescription,
              keywords: autoTags.join(', '),
              ogTitle: postForm.title,
              ogDescription: autoMetaDescription,
              ogImage: (postForm.ogImage || postForm.mainImage) ? { 
                _type: 'image',
                asset: { _ref: postForm.ogImage || postForm.mainImage, _type: 'reference' }
              } : null,
              twitterTitle: postForm.title,
              twitterDescription: autoMetaDescription,
              twitterImage: (postForm.twitterImage || postForm.mainImage) ? { 
                _type: 'image',
                asset: { _ref: postForm.twitterImage || postForm.mainImage, _type: 'reference' }
              } : null,
              noIndex: false
            }
          }
        })
      })

      const result = await response.json()
      if (result.success) {
        await fetchData()
        resetForm()
        setShowForm(false)
      }
    } catch (error) {
      console.error('Error saving post:', error)
    }
  }

  const handleAuthorSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create-post',
          data: {
            ...authorForm,
            _type: 'author'
          }
        })
      })

      const result = await response.json()
      if (result.success) {
        await fetchData()
        setAuthorForm({ name: '', bio: '', role: '' })
      }
    } catch (error) {
      console.error('Error creating author:', error)
    }
  }

  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create-post',
          data: {
            ...categoryForm,
            _type: 'category',
            slug: { current: categoryForm.slug }
          }
        })
      })

      const result = await response.json()
      if (result.success) {
        await fetchData()
        setCategoryForm({ title: '', slug: '', description: '', color: 'blue' })
      }
    } catch (error) {
      console.error('Error creating category:', error)
    }
  }

  const handleDelete = async (type, id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch('/api/admin/sanity', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'delete-post',
            data: { id }
          })
        })

        if (response.ok) {
          await fetchData()
        }
      } catch (error) {
        console.error('Error deleting:', error)
      }
    }
  }

  const resetForm = () => {
    setPostForm({
      title: '',
      slug: '',
      excerpt: '',
      body: '',
      author: '',
      mainImage: null,
      categories: [],
      tags: [],
      readingTime: '',
      featured: false,
      published: false,
      ogImage: null,
      twitterImage: null
    })
    setEditingPost(null)
  }

  const handleEdit = (post) => {
    setPostForm({
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      body: portableTextToMarkdown(post.body) || '',
      author: post.author?._id || '',
      mainImage: post.mainImage?.asset?._ref || post.mainImage || null,
      categories: post.categories?.map(cat => cat._id) || [],
      tags: post.tags || [],
      readingTime: post.readingTime || '',
      featured: post.featured || false,
      published: post.published || false,
      ogImage: post.seo?.ogImage?.asset?._ref || post.seo?.ogImage || null,
      twitterImage: post.seo?.twitterImage?.asset?._ref || post.seo?.twitterImage || null
    })
    setEditingPost(post)
    setShowForm(true)
    setActiveTab('posts')
  }

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
            <p className="text-slate-400">Manage your blog posts, authors, and categories</p>
          </div>
          <button
            onClick={() => {
              setShowForm(true)
              setActiveTab('posts')
              resetForm()
            }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            New Post
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-8 bg-slate-800/50 p-1 rounded-xl backdrop-blur-sm">
          {[
            { id: 'posts', label: 'Posts', icon: FileText },
            { id: 'authors', label: 'Authors', icon: User },
            { id: 'categories', label: 'Categories', icon: Tag }
          ].map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {/* Create/Edit Form */}
          {showForm && (
            <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false)
                    resetForm()
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handlePostSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={postForm.title}
                      onChange={(e) => {
                        const newTitle = e.target.value;
                        const newSlug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        setPostForm({ 
                          ...postForm, 
                          title: newTitle,
                          slug: editingPost ? postForm.slug : newSlug
                        });
                      }}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter post title"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      value={postForm.slug}
                      onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="post-url-slug"
                      required
                    />
                  </div>
                </div>

                {/* Author and Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Author
                    </label>
                    <select
                      value={postForm.author}
                      onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Author</option>
                      {authors.map(author => (
                        <option key={author._id} value={author._id}>{author.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Categories
                    </label>
                    <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-4 max-h-40 overflow-y-auto">
                      {categories.length > 0 ? (
                        <div className="space-y-2">
                          {categories.map(category => (
                            <label key={category._id} className="flex items-center gap-3 cursor-pointer hover:bg-slate-700/50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={postForm.categories.includes(category._id)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setPostForm({ 
                                      ...postForm, 
                                      categories: [...postForm.categories, category._id]
                                    })
                                  } else {
                                    setPostForm({ 
                                      ...postForm, 
                                      categories: postForm.categories.filter(id => id !== category._id)
                                    })
                                  }
                                }}
                                className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                              />
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                                <span className="text-slate-200 text-sm">{category.title}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-400 text-sm">No categories available. Create some first!</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Main Image */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Main Image
                  </label>
                  <ImageUploader
                    onImageSelect={(imageId) => setPostForm({ ...postForm, mainImage: imageId })}
                    currentImage={postForm.mainImage}
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Content *
                  </label>
                  <div className="bg-slate-800/50 border border-slate-600 rounded-xl overflow-hidden">
                    <RichTextEditor
                      value={postForm.body}
                      onChange={(value) => setPostForm({ ...postForm, body: value })}
                      placeholder="Write your post content here..."
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Tags (Auto-generated if empty)
                  </label>
                  <input
                    type="text"
                    value={postForm.tags.join(', ')}
                    onChange={(e) => setPostForm({ 
                      ...postForm, 
                      tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                    })}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={postForm.featured}
                      onChange={(e) => setPostForm({ ...postForm, featured: e.target.checked })}
                      className="w-5 h-5 text-blue-500 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-slate-300">Featured Post</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={postForm.published}
                      onChange={(e) => setPostForm({ ...postForm, published: e.target.checked })}
                      className="w-5 h-5 text-blue-500 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-slate-300">Publish Immediately</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Save className="w-5 h-5" />
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      resetForm()
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Content Lists */}
          {activeTab === 'posts' && (
            <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-700/50">
                <h3 className="text-xl font-bold text-white">Posts</h3>
              </div>
              {posts.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-800/50 border-b border-slate-700/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-medium text-slate-300">Title</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-slate-300">Author</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-slate-300">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-slate-300">Date</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-slate-300">Categories</th>
                        <th className="text-right py-4 px-6 text-sm font-medium text-slate-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {posts.map(post => (
                        <tr key={post._id} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-6">
                            <div>
                              <h4 className="text-white font-medium mb-1">{post.title}</h4>
                              <p className="text-slate-400 text-sm truncate max-w-xs">{post.excerpt}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-slate-300 text-sm">
                            {post.author?.name || 'Unknown'}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                post.published 
                                  ? 'bg-green-500/20 text-green-300' 
                                  : 'bg-yellow-500/20 text-yellow-300'
                              }`}>
                                {post.published ? 'Published' : 'Draft'}
                              </span>
                              {post.featured && (
                                <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                                  Featured
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-slate-400 text-sm">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex flex-wrap gap-1">
                              {post.categories?.slice(0, 2).map(category => (
                                <span key={category._id} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                                  {category.title}
                                </span>
                              ))}
                              {post.categories?.length > 2 && (
                                <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-md">
                                  +{post.categories.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(post)}
                                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                title="Edit post"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete('post', post._id)}
                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                title="Delete post"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-slate-400">No posts yet. Create your first post!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'authors' && (
            <div className="space-y-6">
              {/* Author Form */}
              <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Create Author</h3>
                <form onSubmit={handleAuthorSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={authorForm.name}
                      onChange={(e) => setAuthorForm({ ...authorForm, name: e.target.value })}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Author Name"
                      required
                    />
                    <input
                      type="text"
                      value={authorForm.role}
                      onChange={(e) => setAuthorForm({ ...authorForm, role: e.target.value })}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Role/Title"
                    />
                  </div>
                  <textarea
                    value={authorForm.bio}
                    onChange={(e) => setAuthorForm({ ...authorForm, bio: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Author Bio"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
                  >
                    Create Author
                  </button>
                </form>
              </div>

              {/* Authors List */}
              <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-700/50">
                  <h3 className="text-xl font-bold text-white">Authors</h3>
                </div>
                <div className="divide-y divide-slate-700/50">
                  {authors.map(author => (
                    <div key={author._id} className="p-6 hover:bg-white/5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{author.name}</h4>
                          {author.role && <p className="text-slate-400">{author.role}</p>}
                          {author.bio && <p className="text-slate-300 mt-2">{author.bio}</p>}
                        </div>
                        <button
                          onClick={() => handleDelete('author', author._id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {authors.length === 0 && (
                    <div className="p-12 text-center">
                      <p className="text-slate-400">No authors yet. Create your first author!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-6">
              {/* Category Form */}
              <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Create Category</h3>
                <form onSubmit={handleCategorySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={categoryForm.title}
                      onChange={(e) => {
                        const newTitle = e.target.value;
                        const newSlug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        setCategoryForm({ 
                          ...categoryForm, 
                          title: newTitle,
                          slug: newSlug
                        });
                      }}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Category Title"
                      required
                    />
                    <input
                      type="text"
                      value={categoryForm.slug}
                      onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="category-slug"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <textarea
                      value={categoryForm.description}
                      onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="Category Description"
                    />
                    <select
                      value={categoryForm.color}
                      onChange={(e) => setCategoryForm({ ...categoryForm, color: e.target.value })}
                      className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                      <option value="purple">Purple</option>
                      <option value="pink">Pink</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
                  >
                    Create Category
                  </button>
                </form>
              </div>

              {/* Categories List */}
              <div className="bg-white/5 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-700/50">
                  <h3 className="text-xl font-bold text-white">Categories</h3>
                </div>
                <div className="divide-y divide-slate-700/50">
                  {categories.map(category => (
                    <div key={category._id} className="p-6 hover:bg-white/5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 rounded-full bg-${category.color}-500`}></div>
                            <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                          </div>
                          <p className="text-slate-400">/{category.slug}</p>
                          {category.description && <p className="text-slate-300 mt-2">{category.description}</p>}
                        </div>
                        <button
                          onClick={() => handleDelete('category', category._id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {categories.length === 0 && (
                    <div className="p-12 text-center">
                      <p className="text-slate-400">No categories yet. Create your first category!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
