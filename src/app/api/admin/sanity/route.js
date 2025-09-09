import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

// Server-side client with token
const adminClient = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // This works on server-side
  useCdn: true
})

export async function POST(request) {
  try {
    const body = await request.json()
    const { action, data, query } = body

    switch (action) {
      case 'test-permissions':
        // Test read permissions
        const testRead = await adminClient.fetch('*[_type == "post"][0..0]')
        
        // Test schema access
        const authors = await adminClient.fetch('*[_type == "author"][0..0]')
        const categories = await adminClient.fetch('*[_type == "category"][0..0]')
        
        // Test write permissions
        const testDoc = {
          _type: 'post',
          title: 'Permission Test (DELETE ME)',
          slug: { current: `permission-test-${Date.now()}` },
          published: false,
          body: [
            {
              _type: 'block',
              children: [{ _type: 'span', text: 'Test content' }]
            }
          ]
        }
        
        const created = await adminClient.create(testDoc)
        
        // Test delete permissions
        await adminClient.delete(created._id)
        
        return NextResponse.json({
          success: true,
          message: 'All permissions working',
          data: {
            posts: testRead.length,
            authors: authors.length,
            categories: categories.length
          }
        })

      case 'create-post':
        const newPost = await adminClient.create(data)
        return NextResponse.json({ success: true, data: newPost })

      case 'update-post':
        const updatedPost = await adminClient
          .patch(data._id)
          .set(data)
          .commit()
        return NextResponse.json({ success: true, data: updatedPost })

      case 'delete-post':
        await adminClient.delete(data.id)
        return NextResponse.json({ success: true })

      case 'fetch-data':
        const result = await adminClient.fetch(query)
        return NextResponse.json({ success: true, data: result })

      case 'upload-image':
        try {
          console.log('Upload request data:', data)
          
          const fileData = data
          
          if (!fileData || !fileData.data) {
            console.error('No file data provided:', fileData)
            return NextResponse.json(
              { success: false, error: 'No file data provided' },
              { status: 400 }
            )
          }
          
          console.log('Processing file:', {
            name: fileData.name,
            type: fileData.type,
            size: fileData.size,
            dataLength: fileData.data?.length
          })
          
          // Convert base64 to buffer
          const buffer = Buffer.from(fileData.data, 'base64')
          
          // Upload to Sanity
          const asset = await adminClient.assets.upload('image', buffer, {
            filename: fileData.name,
            contentType: fileData.type
          })
          
          console.log('Upload successful:', asset._id)
          
          return NextResponse.json({ 
            success: true, 
            data: {
              _id: asset._id,
              url: asset.url,
              metadata: asset.metadata
            }
          })
        } catch (uploadError) {
          console.error('Upload error:', uploadError)
          return NextResponse.json(
            { success: false, error: `Upload failed: ${uploadError.message}` },
            { status: 500 }
          )
        }

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Admin API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        details: error.details 
      },
      { status: error.statusCode || 500 }
    )
  }
}
