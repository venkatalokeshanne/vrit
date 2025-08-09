// Generate a unique key for Sanity blocks
function generateKey() {
  return Math.random().toString(36).substr(2, 9)
}

// Simple function to convert markdown text to Sanity Portable Text blocks
export function markdownToPortableText(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return [{ 
      _key: generateKey(),
      _type: 'block', 
      children: [{ 
        _key: generateKey(),
        _type: 'span', 
        text: '' 
      }] 
    }]
  }

  // Split markdown into lines and process each
  const lines = markdown.split('\n').filter(line => line.trim())
  
  if (lines.length === 0) {
    return [{ 
      _key: generateKey(),
      _type: 'block', 
      children: [{ 
        _key: generateKey(),
        _type: 'span', 
        text: '' 
      }] 
    }]
  }

  const blocks = []

  for (let line of lines) {
    const trimmed = line.trim()
    
    if (!trimmed) continue

    // Handle headings
    if (trimmed.startsWith('### ')) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'h3',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.substring(4) 
        }]
      })
    } else if (trimmed.startsWith('## ')) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'h2',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.substring(3) 
        }]
      })
    } else if (trimmed.startsWith('# ')) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'h1',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.substring(2) 
        }]
      })
    }
    // Handle code blocks
    else if (trimmed.startsWith('```')) {
      // Skip the opening ```
      continue
    }
    // Handle blockquotes
    else if (trimmed.startsWith('> ')) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'blockquote',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.substring(2) 
        }]
      })
    }
    // Handle lists
    else if (trimmed.startsWith('- ')) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'bullet',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.substring(2) 
        }]
      })
    } else if (trimmed.match(/^\d+\. /)) {
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'numbered',
        children: [{ 
          _key: generateKey(),
          _type: 'span', 
          text: trimmed.replace(/^\d+\. /, '') 
        }]
      })
    }
    // Regular paragraphs - handle inline formatting
    else {
      const children = processInlineFormatting(trimmed)
      blocks.push({
        _key: generateKey(),
        _type: 'block',
        style: 'normal',
        children
      })
    }
  }

  return blocks.length > 0 ? blocks : [{ 
    _key: generateKey(),
    _type: 'block', 
    children: [{ 
      _key: generateKey(),
      _type: 'span', 
      text: '' 
    }] 
  }]
}

// Process inline formatting like **bold**, *italic*, `code`
function processInlineFormatting(text) {
  const children = []
  let currentText = text
  
  // Simple approach: split by formatting markers and process
  const parts = currentText.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
  
  parts.forEach(part => {
    if (!part) return
    
    if (part.startsWith('**') && part.endsWith('**')) {
      children.push({
        _key: generateKey(),
        _type: 'span',
        text: part.slice(2, -2),
        marks: ['strong']
      })
    } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      children.push({
        _key: generateKey(),
        _type: 'span',
        text: part.slice(1, -1),
        marks: ['em']
      })
    } else if (part.startsWith('`') && part.endsWith('`')) {
      children.push({
        _key: generateKey(),
        _type: 'span',
        text: part.slice(1, -1),
        marks: ['code']
      })
    } else {
      children.push({
        _key: generateKey(),
        _type: 'span',
        text: part
      })
    }
  })
  
  return children.length > 0 ? children : [{ 
    _key: generateKey(),
    _type: 'span', 
    text 
  }]
}

// Convert Portable Text back to markdown for editing
export function portableTextToMarkdown(blocks) {
  if (!blocks || !Array.isArray(blocks)) {
    return ''
  }

  return blocks.map(block => {
    if (block._type === 'block') {
      let text = block.children?.map(child => {
        let childText = child.text || ''
        
        // Apply formatting based on marks
        if (child.marks) {
          child.marks.forEach(mark => {
            if (mark === 'strong') childText = `**${childText}**`
            else if (mark === 'em') childText = `*${childText}*`
            else if (mark === 'code') childText = `\`${childText}\``
          })
        }
        
        return childText
      }).join('') || ''
      
      switch (block.style) {
        case 'h1': return `# ${text}`
        case 'h2': return `## ${text}`
        case 'h3': return `### ${text}`
        case 'blockquote': return `> ${text}`
        case 'bullet': return `- ${text}`
        case 'numbered': return `1. ${text}`
        default: return text
      }
    } else if (block._type === 'code') {
      return `\`\`\`\n${block.code}\n\`\`\``
    }
    
    return ''
  }).join('\n')
}

// For backward compatibility, keep the HTML functions but use markdown internally
export function htmlToPortableText(html) {
  // Convert HTML back to markdown first, then to portable text
  // This is a simple approach for the basic editor
  if (!html) return markdownToPortableText('')
  
  // Simple HTML to markdown conversion
  let markdown = html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '') // Remove any remaining HTML tags
    .trim()
  
  return markdownToPortableText(markdown)
}

export function portableTextToHtml(blocks) {
  // Convert to markdown first, then render as HTML for preview
  const markdown = portableTextToMarkdown(blocks)
  
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^1\. (.*$)/gim, '<li>$1</li>')
    .replace(/\n/gim, '<br>')
}
