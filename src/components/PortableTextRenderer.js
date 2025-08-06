import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Info, 
  AlertTriangle, 
  AlertCircle, 
  CheckCircle,
  Code2 
} from 'lucide-react'

// Custom components for rendering portable text content
const components = {
  // Block styles
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-bold text-white mb-3 mt-6">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-blue-200 bg-blue-500/10 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },

  // List styles
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
  },

  // List items
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
  },

  // Marks (inline formatting)
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-blue-200">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    underline: ({ children }) => (
      <u className="underline text-purple-200">{children}</u>
    ),
    'strike-through': ({ children }) => (
      <s className="line-through text-gray-400">{children}</s>
    ),
    link: ({ value, children }) => (
      <Link 
        href={value?.href || '#'} 
        className="text-blue-400 hover:text-blue-300 underline transition-colors"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    ),
    internalLink: ({ value, children }) => (
      <Link 
        href={`/blog/${value?.reference?.slug?.current || '#'}`} 
        className="text-blue-400 hover:text-blue-300 underline transition-colors"
      >
        {children}
      </Link>
    ),
  },

  // Custom types
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-xl">
          <Image
            src={urlFor(value).width(800).height(450).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="w-full h-auto"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {value.caption && (
          <p className="text-sm text-gray-400 mt-2 text-center italic">
            {value.caption}
          </p>
        )}
      </div>
    ),

    codeBlock: ({ value }) => (
      <div className="my-8">
        <div className="bg-gray-900/90 border border-gray-700/50 rounded-xl overflow-hidden shadow-xl">
          <div className="flex items-center justify-between bg-gray-800/50 px-4 py-2 border-b border-gray-700/50">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">
                {value.language || 'Code'}
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className={`language-${value.language || 'text'} text-sm`}>
              {value.code}
            </code>
          </pre>
        </div>
      </div>
    ),

    callout: ({ value }) => {
      const getCalloutStyles = (type) => {
        const styles = {
          info: {
            bg: 'bg-blue-500/10',
            border: 'border-blue-400/30',
            icon: Info,
            iconColor: 'text-blue-400',
            titleColor: 'text-blue-200'
          },
          warning: {
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-400/30',
            icon: AlertTriangle,
            iconColor: 'text-yellow-400',
            titleColor: 'text-yellow-200'
          },
          error: {
            bg: 'bg-red-500/10',
            border: 'border-red-400/30',
            icon: AlertCircle,
            iconColor: 'text-red-400',
            titleColor: 'text-red-200'
          },
          success: {
            bg: 'bg-green-500/10',
            border: 'border-green-400/30',
            icon: CheckCircle,
            iconColor: 'text-green-400',
            titleColor: 'text-green-200'
          }
        }
        return styles[type] || styles.info
      }

      const style = getCalloutStyles(value.type)
      const Icon = style.icon

      return (
        <div className={`${style.bg} ${style.border} border rounded-xl p-6 my-6`}>
          <div className="flex items-start gap-3">
            <Icon className={`w-5 h-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
            <div className="flex-1">
              {value.title && (
                <h4 className={`font-semibold mb-2 ${style.titleColor}`}>
                  {value.title}
                </h4>
              )}
              <p className="text-gray-300 leading-relaxed">
                {value.content}
              </p>
            </div>
          </div>
        </div>
      )
    }
  }
}

// Main PortableTextRenderer component
export default function PortableTextRenderer({ content, className = '' }) {
  if (!content) return null

  return (
    <div className={`prose prose-lg prose-invert max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}
