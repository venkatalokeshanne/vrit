'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
})

export default function AddTestimonial() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: 'joined',
    course: '',
    message: ''
  })
  const [courses, setCourses] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Fetch available courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseData = await client.fetch('*[_type == "courseMetadata"]{_id, title, courseName}')
        
        // Filter out courses starting with specific words
        const filteredCourses = courseData.filter(course => {
          const courseTitle = (course.title || course.courseName || '').toLowerCase()
          const excludeWords = ['blog', 'about', 'courses', 'contact', 'privacy', 'terms']
          return !excludeWords.some(word => courseTitle.startsWith(word))
        })
        
        // Create unique courses based on cleaned titles
        const uniqueCourses = []
        const seenTitles = new Set()
        
        filteredCourses.forEach(course => {
          let cleanTitle = (course.title || course.courseName)?.split('|')[0]?.trim()
          
          // Remove "Training" and "Online" and everything after them
          const trainingIndex = cleanTitle?.toLowerCase().indexOf('training')
          const onlineIndex = cleanTitle?.toLowerCase().indexOf('online')
          
          let cutIndex = -1
          if (trainingIndex !== -1 && onlineIndex !== -1) {
            cutIndex = Math.min(trainingIndex, onlineIndex)
          } else if (trainingIndex !== -1) {
            cutIndex = trainingIndex
          } else if (onlineIndex !== -1) {
            cutIndex = onlineIndex
          }
          
          if (cutIndex !== -1) {
            cleanTitle = cleanTitle.substring(0, cutIndex).trim()
          }
          
          // Only add if we haven't seen this cleaned title before
          if (cleanTitle && !seenTitles.has(cleanTitle.toLowerCase())) {
            seenTitles.add(cleanTitle.toLowerCase())
            uniqueCourses.push({
              ...course,
              displayTitle: cleanTitle.toUpperCase()
            })
          }
        })
        
        setCourses(uniqueCourses)
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }
    fetchCourses()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const selectedCourse = courses.find(course => course._id === formData.course)
      
      const notification = {
        _type: 'notification',
        name: formData.name,
        location: formData.location,
        type: formData.type,
        course: {
          _type: 'reference',
          _ref: formData.course
        }
      }

      // Add message field only if type is 'placed' and message is provided
      if (formData.type === 'placed' && formData.message) {
        notification.message = formData.message
      }

      await client.create(notification)

      setSubmitStatus('success')
      setFormData({
        name: '',
        location: '',
        type: 'joined',
        course: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting testimonial:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Success Story</h1>
            <p className="text-gray-600">Let others know about your journey with us!</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 text-sm font-medium">
                🎉 Thank you! Your testimonial has been submitted successfully.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm font-medium">
                ❌ There was an error submitting your testimonial. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Your Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900"
                placeholder="e.g., New York, USA"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Course *
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900"
              >
                <option value="" className="text-gray-500">Select a course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id} className="text-gray-900">
                    {course.displayTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900"
              >
                <option value="joined" className="text-gray-900">Just Enrolled</option>
                <option value="placed" className="text-gray-900">Got Job Placement</option>
              </select>
            </div>

            {formData.type === 'placed' && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Placement Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-white text-gray-900"
                  placeholder="e.g., Got placed at Google with 50% salary hike!"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Share details about your job placement (company, salary hike, etc.)
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Share My Story'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Your testimonial will help inspire other learners on their journey! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
