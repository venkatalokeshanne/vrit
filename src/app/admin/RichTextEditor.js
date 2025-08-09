'use client'

import { 
  MDXEditor, 
  headingsPlugin, 
  listsPlugin, 
  quotePlugin, 
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  frontmatterPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  BlockTypeSelect,
  CodeToggle,
  InsertCodeBlock,
  Separator
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

const RichTextEditor = ({ value, onChange, placeholder }) => {
  return (
    <div className="rich-text-editor border border-slate-600 rounded-lg overflow-hidden">
      <MDXEditor
        markdown={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        plugins={[
          // Essential plugins
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          
          // Link and image plugins
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          
          // Table plugin
          tablePlugin(),
          
          // Code plugins
          codeBlockPlugin({ defaultCodeBlockLanguage: 'javascript' }),
          codeMirrorPlugin({ 
            codeBlockLanguages: { 
              js: 'JavaScript', 
              jsx: 'JSX',
              ts: 'TypeScript',
              tsx: 'TSX',
              css: 'CSS', 
              html: 'HTML',
              json: 'JSON',
              md: 'Markdown'
            } 
          }),
          
          // Source editing
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: '' }),
          frontmatterPlugin(),
          
          // Toolbar
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <CreateLink />
                <Separator />
                <ListsToggle />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
                <Separator />
                <InsertCodeBlock />
              </>
            )
          })
        ]}
        className="dark-theme"
        contentEditableClassName="prose prose-slate dark:prose-invert max-w-none"
      />
      
      <style jsx global>{`
        .mdxeditor {
          background-color: #1e293b !important;
          color: #e2e8f0 !important;
          border: none !important;
        }
        
        .mdxeditor-toolbar {
          background-color: #475569 !important;
          border-bottom: 1px solid #64748b !important;
          padding: 8px !important;
        }
        
        .mdxeditor-toolbar button {
          color: #e2e8f0 !important;
          background-color: transparent !important;
          border: 1px solid transparent !important;
          border-radius: 4px !important;
          padding: 6px 8px !important;
          margin: 0 2px !important;
        }
        
        .mdxeditor-toolbar button:hover {
          background-color: #64748b !important;
          border-color: #64748b !important;
        }
        
        .mdxeditor-toolbar button[data-state="on"] {
          background-color: #f97316 !important;
          border-color: #f97316 !important;
          color: #ffffff !important;
        }
        
        .mdxeditor-toolbar select {
          background-color: #334155 !important;
          color: #e2e8f0 !important;
          border: 1px solid #64748b !important;
          border-radius: 4px !important;
          padding: 4px 8px !important;
        }
        
        .mdxeditor-toolbar select:focus {
          border-color: #f97316 !important;
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2) !important;
        }
        
        .mdxeditor-rich-text-editor {
          background-color: #1e293b !important;
          color: #e2e8f0 !important;
          min-height: 200px !important;
          padding: 16px !important;
        }
        
        .mdxeditor-rich-text-editor .ProseMirror {
          background-color: transparent !important;
          color: #e2e8f0 !important;
          outline: none !important;
        }
        
        .mdxeditor-rich-text-editor .ProseMirror p.is-editor-empty:first-child::before {
          color: #64748b !important;
          content: attr(data-placeholder) !important;
          float: left !important;
          height: 0 !important;
          pointer-events: none !important;
        }
        
        /* Prose styling for content */
        .mdxeditor-rich-text-editor h1 {
          color: #f97316 !important;
          font-size: 2rem !important;
          font-weight: bold !important;
          margin-top: 1rem !important;
          margin-bottom: 0.5rem !important;
        }
        
        .mdxeditor-rich-text-editor h2 {
          color: #f97316 !important;
          font-size: 1.5rem !important;
          font-weight: bold !important;
          margin-top: 1rem !important;
          margin-bottom: 0.5rem !important;
        }
        
        .mdxeditor-rich-text-editor h3 {
          color: #f97316 !important;
          font-size: 1.25rem !important;
          font-weight: bold !important;
          margin-top: 1rem !important;
          margin-bottom: 0.5rem !important;
        }
        
        .mdxeditor-rich-text-editor h4,
        .mdxeditor-rich-text-editor h5,
        .mdxeditor-rich-text-editor h6 {
          color: #f97316 !important;
          font-weight: bold !important;
          margin-top: 0.75rem !important;
          margin-bottom: 0.5rem !important;
        }
        
        .mdxeditor-rich-text-editor blockquote {
          border-left: 4px solid #f97316 !important;
          background-color: #334155 !important;
          padding: 0.75rem 1rem !important;
          margin: 1rem 0 !important;
          font-style: italic !important;
        }
        
        .mdxeditor-rich-text-editor code {
          background-color: #334155 !important;
          color: #fbbf24 !important;
          padding: 2px 4px !important;
          border-radius: 4px !important;
          font-family: 'Courier New', monospace !important;
          font-size: 0.875rem !important;
        }
        
        .mdxeditor-rich-text-editor pre {
          background-color: #0f172a !important;
          border: 1px solid #334155 !important;
          border-radius: 6px !important;
          padding: 1rem !important;
          margin: 1rem 0 !important;
          overflow-x: auto !important;
        }
        
        .mdxeditor-rich-text-editor pre code {
          background-color: transparent !important;
          padding: 0 !important;
          color: #e2e8f0 !important;
        }
        
        .mdxeditor-rich-text-editor ul,
        .mdxeditor-rich-text-editor ol {
          margin: 0.5rem 0 !important;
          padding-left: 1.5rem !important;
        }
        
        .mdxeditor-rich-text-editor li {
          margin: 0.25rem 0 !important;
        }
        
        .mdxeditor-rich-text-editor a {
          color: #f97316 !important;
          text-decoration: underline !important;
        }
        
        .mdxeditor-rich-text-editor a:hover {
          color: #ea580c !important;
        }
        
        .mdxeditor-rich-text-editor table {
          border-collapse: collapse !important;
          margin: 1rem 0 !important;
          width: 100% !important;
        }
        
        .mdxeditor-rich-text-editor th,
        .mdxeditor-rich-text-editor td {
          border: 1px solid #475569 !important;
          padding: 0.5rem !important;
          text-align: left !important;
        }
        
        .mdxeditor-rich-text-editor th {
          background-color: #334155 !important;
          font-weight: bold !important;
        }
        
        .mdxeditor-rich-text-editor strong {
          font-weight: bold !important;
        }
        
        .mdxeditor-rich-text-editor em {
          font-style: italic !important;
        }
        
        /* Dialog styles */
        .mdxeditor-popup-container {
          background-color: #1e293b !important;
          border: 1px solid #475569 !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }
        
        .mdxeditor-popup-container input {
          background-color: #334155 !important;
          color: #e2e8f0 !important;
          border: 1px solid #64748b !important;
          border-radius: 4px !important;
          padding: 8px 12px !important;
        }
        
        .mdxeditor-popup-container input:focus {
          border-color: #f97316 !important;
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2) !important;
        }
        
        .mdxeditor-popup-container button {
          background-color: #f97316 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 4px !important;
          padding: 8px 16px !important;
          cursor: pointer !important;
        }
        
        .mdxeditor-popup-container button:hover {
          background-color: #ea580c !important;
        }
        
        /* Scrollbar */
        .mdxeditor-rich-text-editor::-webkit-scrollbar {
          width: 8px;
        }
        
        .mdxeditor-rich-text-editor::-webkit-scrollbar-track {
          background: #334155;
        }
        
        .mdxeditor-rich-text-editor::-webkit-scrollbar-thumb {
          background: #64748b;
          border-radius: 4px;
        }
        
        .mdxeditor-rich-text-editor::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  )
}

export default RichTextEditor
