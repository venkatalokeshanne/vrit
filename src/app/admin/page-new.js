'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, User, Tag, FileText, Save } from 'lucide-react'

export default function AdminPage() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
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
    categories: [],
    tags: [],
    readingTime: '',
    featured: false,
    published: false
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
    color: '#3B82F6'
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'fetch-data',
          query: `{
            "posts": *[_type == "post"] | order(publishedAt desc) {
              _id, title, slug, excerpt, publishedAt, published, featured,
              author->{ name }, categories[]->{ title }
            },
            "authors": *[_type == "author"] { _id, name, bio, role },
            "categories": *[_type == "category"] { _id, title, color }
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
      setLoading(false)
    }
  }

  // Form handlers
  const handlePostSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: editingPost ? 'update-post' : 'create-post',
          data: {
            ...postForm,
            _id: editingPost?._id,
            _type: 'post',
            slug: { current: postForm.slug },
            body: [{ _type: 'block', children: [{ _type: 'span', text: postForm.body }] }],
            publishedAt: postForm.published ? new Date().toISOString() : null
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
            _type: 'category'
          }
        })
      })

      const result = await response.json()
      if (result.success) {
        await fetchData()
        setCategoryForm({ title: '', color: '#3B82F6' })
      }
    } catch (error) {
      console.error('Error creating category:', error)
    }
  }

  const handleDelete = async (id) => {
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
      categories: [],
      tags: [],
      readingTime: '',
      featured: false,
      published: false
    })
    setEditingPost(null)
  }

  const handleEdit = (post) => {
    setPostForm({
      title: post.title || '',
      slug: post.slug?.current || '',
      excerpt: post.excerpt || '',
      body: post.body?.[0]?.children?.[0]?.text || '',
      author: post.author?._id || '',
      categories: post.categories?.map(cat => cat._id) || [],
      tags: post.tags || [],
      readingTime: post.readingTime || '',
      featured: post.featured || false,
      published: post.published || false
    })
    setEditingPost(post)
    setShowForm(true)
    setActiveTab('posts')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => {
              setShowForm(true)
              setActiveTab('posts')
              resetForm()
            }}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          {[
            { id: 'posts', label: 'Posts', icon: FileText },
            { id: 'authors', label: 'Authors', icon: User },
            { id: 'categories', label: 'Categories', icon: Tag }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            {showForm && (
              <div className="bg-slate-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <form onSubmit={handlePostSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <input
                        type="text"
                        value={postForm.title}
                        onChange={(e) => {
                          setPostForm({ ...postForm, title: e.target.value })
                          if (!editingPost) {
                            setPostForm(prev => ({ 
                              ...prev, 
                              slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                            }))
                          }
                        }}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Slug *</label>
                      <input
                        type="text"
                        value={postForm.slug}
                        onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Excerpt</label>
                    <textarea
                      value={postForm.excerpt}
                      onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })}
                      rows={2}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Content *</label>
                    <textarea
                      value={postForm.body}
                      onChange={(e) => setPostForm({ ...postForm, body: e.target.value })}
                      rows={8}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Write your post content here... (Supports markdown)"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Author</label>
                      <select
                        value={postForm.author}
                        onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Author</option>
                        {authors.map(author => (
                          <option key={author._id} value={author._id}>{author.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Reading Time (min)</label>
                      <input
                        type="number"
                        value={postForm.readingTime}
                        onChange={(e) => setPostForm({ ...postForm, readingTime: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        min="1"
                        max="60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Tags</label>
                      <input
                        type="text"
                        value={postForm.tags.join(', ')}
                        onChange={(e) => setPostForm({ ...postForm, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={postForm.featured}
                        onChange={(e) => setPostForm({ ...postForm, featured: e.target.checked })}
                        className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                      />
                      Featured Post
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={postForm.published}
                        onChange={(e) => setPostForm({ ...postForm, published: e.target.checked })}
                        className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                      />
                      Publish Immediately
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      {editingPost ? 'Update' : 'Create'} Post
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false)
                        resetForm()
                      }}
                      className="bg-slate-600 hover:bg-slate-500 px-6 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Posts List */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-lg font-semibold">Posts ({posts.length})</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Author</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {posts.map(post => (
                      <tr key={post._id} className="hover:bg-slate-700/50">
                        <td className="px-4 py-3">
                          <div className="font-medium">{post.title}</div>
                          {post.featured && (
                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">Featured</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-300">
                          {post.author?.name || 'No author'}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 rounded ${
                            post.published ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-300">
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '-'}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(post)}
                              className="text-orange-400 hover:text-orange-300"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(post._id)}
                              className="text-red-400 hover:text-red-300"
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
            </div>
          </div>
        )}

        {activeTab === 'authors' && (
          <div className="space-y-6">
            {/* Create Author Form */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Create New Author</h2>
              <form onSubmit={handleAuthorSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      value={authorForm.name}
                      onChange={(e) => setAuthorForm({ ...authorForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Role</label>
                    <input
                      type="text"
                      value={authorForm.role}
                      onChange={(e) => setAuthorForm({ ...authorForm, role: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., Senior Developer"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Create Author
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={authorForm.bio}
                    onChange={(e) => setAuthorForm({ ...authorForm, bio: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Author biography..."
                  />
                </div>
              </form>
            </div>

            {/* Authors List */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-lg font-semibold">Authors ({authors.length})</h2>
              </div>
              <div className="divide-y divide-slate-700">
                {authors.map(author => (
                  <div key={author._id} className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{author.name}</div>
                      {author.role && <div className="text-sm text-slate-400">{author.role}</div>}
                      {author.bio && <div className="text-sm text-slate-300 mt-1">{author.bio}</div>}
                    </div>
                    <button
                      onClick={() => handleDelete(author._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-6">
            {/* Create Category Form */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Create New Category</h2>
              <form onSubmit={handleCategorySubmit} className="space-y-4">
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <input
                      type="text"
                      value={categoryForm.title}
                      onChange={(e) => setCategoryForm({ ...categoryForm, title: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <input
                      type="color"
                      value={categoryForm.color}
                      onChange={(e) => setCategoryForm({ ...categoryForm, color: e.target.value })}
                      className="w-20 h-10 bg-slate-700 border border-slate-600 rounded-lg cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Create Category
                  </button>
                </div>
              </form>
            </div>

            {/* Categories List */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-lg font-semibold">Categories ({categories.length})</h2>
              </div>
              <div className="divide-y divide-slate-700">
                {categories.map(category => (
                  <div key={category._id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
