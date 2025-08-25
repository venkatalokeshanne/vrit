/**
 * Dynamic SEO Headers Component
 * Renders hidden H1-H6 tags for SEO purposes based on data from Sanity CMS
 */

export default function DynamicSEOHeaders({ seoHeaders }) {
  // Return null if no seoHeaders data is provided
  if (!seoHeaders || !Array.isArray(seoHeaders) || seoHeaders.length === 0) {
    return null;
  }

  return (
    <div className="sr-only" aria-hidden="true">
      {seoHeaders.map((header, index) => {
        const { level, text } = header;
        
        // Validate header level (should be 1-6)
        if (!level || level < 1 || level > 6 || !text) {
          return null;
        }

        // Dynamically create the appropriate heading tag
        const HeadingTag = `h${level}`;
        
        return (
          <HeadingTag key={index}>
            {text}
          </HeadingTag>
        );
      })}
    </div>
  );
}
