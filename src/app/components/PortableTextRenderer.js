import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

// Custom components for rendering different block types
const components = {
  // Block-level components
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 mt-7 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-6 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-white mb-3 mt-5 leading-tight">
        {children}
      </h4>
    ),
    
    // Paragraphs
    normal: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed text-lg">
        {children}
      </p>
    ),
    
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-300 bg-slate-800/50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  
  // List components
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300 ml-4">
        {children}
      </ol>
    ),
  },
  
  // List item
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
  },
  
  // Inline text formatting
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-blue-300">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    strike: ({ children }) => (
      <span className="line-through text-gray-400">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-slate-700 text-blue-300 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const isExternal = value?.href?.startsWith('http');
      const linkProps = isExternal 
        ? { href: value.href, target: '_blank', rel: 'noopener noreferrer' }
        : { href: value.href };
      
      return (
        <Link 
          {...linkProps}
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  
  // Custom types
  types: {
    // Image component
    image: ({ value }) => {
      if (!value?.asset) return null;
      
      const imageUrl = urlFor(value).width(800).height(400).url();
      
      return (
        <figure className="my-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-gray-400 text-sm mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    
    // Code block component
    code: ({ value }) => (
      <div className="my-6">
        <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-300 text-sm font-mono leading-relaxed">
            {value.code}
          </code>
        </pre>
        {value.language && (
          <div className="text-xs text-gray-400 mt-1">
            Language: {value.language}
          </div>
        )}
      </div>
    ),
    
    // Video component (if you want to support videos)
    video: ({ value }) => {
      if (!value?.url) return null;
      
      return (
        <div className="my-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={value.url}
              title={value.title || 'Video'}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <div className="text-center text-gray-400 text-sm mt-2 italic">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    
    // Break/Divider component
    break: () => (
      <hr className="border-gray-600 my-8" />
    ),
    
    // Call-to-action component
    callToAction: ({ value }) => (
      <div className="my-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-3">
          {value.title}
        </h3>
        <p className="text-gray-300 mb-4">
          {value.description}
        </p>
        {value.buttonText && value.buttonUrl && (
          <Link
            href={value.buttonUrl}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            {value.buttonText}
          </Link>
        )}
      </div>
    ),
  },
};

// Main PortableTextRenderer component
export default function PortableTextRenderer({ content }) {
  if (!content || !Array.isArray(content)) {
    return (
      <div className="text-gray-400 italic py-8 text-center">
        No content available.
      </div>
    );
  }

  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
