import RichSnippetsManager from '../../utils/richSnippets';

/**
 * Breadcrumb Component with Rich Snippets Support
 * Displays navigation breadcrumbs with proper schema markup
 */
export default function BreadcrumbRichSnippets({ breadcrumbs, className = "" }) {
  // Generate breadcrumb schema for rich snippets
  const breadcrumbSchema = RichSnippetsManager.generateBreadcrumbSchema(breadcrumbs);
  
  return (
    <nav 
      className={`bg-gray-50 border-b border-gray-200 ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Schema Markup for Breadcrumb Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-4">
          <ol 
            className="flex items-center space-x-2 text-sm"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {breadcrumbs.map((crumb, index) => (
              <li 
                key={index}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 text-gray-400 mx-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
                
                {index === breadcrumbs.length - 1 ? (
                  // Last item - not a link
                  <span 
                    className="text-gray-900 font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {crumb.name}
                  </span>
                ) : (
                  // Link items
                  <a 
                    href={crumb.url}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </a>
                )}
                
                {/* Hidden position for schema */}
                <meta itemProp="position" content={index + 1} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}

/**
 * Generate breadcrumbs for course pages
 */
export function generateCourseBreadcrumbs(courseName, courseSlug) {
  return [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: courseName, url: `/${courseSlug}` }
  ];
}

/**
 * Generate breadcrumbs for service pages
 */
export function generateServiceBreadcrumbs(serviceName, serviceSlug) {
  return [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceName, url: `/${serviceSlug}` }
  ];
}

/**
 * Common breadcrumb patterns
 */
export const BREADCRUMB_PATTERNS = {
  home: [
    { name: "Home", url: "/" }
  ],
  
  courses: [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" }
  ],
  
  about: [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/aboutus" }
  ],
  
  contact: [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contactus" }
  ],
  
  services: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ]
};
