import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'

const PortableTextRenderer = ({ value }) => {
  const components = {
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

  return <PortableText value={value} components={components} />
}

export default PortableTextRenderer