'use client'

import { useState, useRef, useEffect } from 'react'

export default function ImageUploader({ value, onChange, label = "", className = "" }) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState('')
  const fileInputRef = useRef(null)

  // Initialize preview from value prop (for editing existing posts)
  useEffect(() => {
    if (value && typeof value === 'string') {
      // For Sanity assets, we might need to fetch the preview URL
      // For now, we'll rely on the preview being set during upload
    }
  }, [value])

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    setUploading(true)

    try {
      // Convert file to base64 first
      const base64Data = await fileToBase64(file)
      
      // Upload to Sanity via our API
      const uploadData = {
        action: 'upload-image',
        data: {
          name: file.name,
          type: file.type,
          size: file.size,
          data: base64Data
        }
      }

      console.log('Uploading file data:', {
        name: file.name,
        type: file.type,
        size: file.size,
        dataLength: base64Data.length
      })

      const response = await fetch('/api/admin/sanity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData)
      })

      const result = await response.json()
      console.log('Upload response:', result)
      
      if (result.success) {
        const imageRef = result.data._id
        const imageUrl = result.data.url
        
        setPreview(imageUrl)
        onChange(imageRef) // Pass the Sanity asset reference
      } else {
        throw new Error(result.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert(`Failed to upload image: ${error.message}`)
    } finally {
      setUploading(false)
    }
  }

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result.split(',')[1]) // Remove data:image/...;base64, prefix
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleClear = () => {
    setPreview('')
    onChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Handle preview display for Sanity assets
  const getPreviewUrl = () => {
    if (!value) return preview
    
    // For Sanity asset IDs, use the stored preview or the value
    return preview || value
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      
      {/* Upload Methods */}
      <div>
        {/* File Upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          disabled={uploading}
          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
      </div>

      {/* Upload Status */}
      {uploading && (
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          Uploading...
        </div>
      )}

      {/* Preview */}
      {(preview || value) && (
        <div className="relative">
          <img
            src={getPreviewUrl()}
            alt="Preview"
            className="w-full max-w-sm h-32 object-cover rounded-lg border border-slate-600"
            onError={() => {
              setPreview('')
              onChange(null)
            }}
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      )}

    </div>
  )
}
