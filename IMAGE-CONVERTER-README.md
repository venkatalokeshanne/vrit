# Image Tag Converter Scripts Usage Guide

## Quick Start

1. **Run in dry-run mode first (RECOMMENDED):**
   ```powershell
   .\fix-images-simple.ps1 -DryRun
   ```

2. **Apply changes with backup:**
   ```powershell
   .\fix-images-simple.ps1
   ```

3. **Apply changes without backup:**
   ```powershell
   .\fix-images-simple.ps1 -Backup:$false
   ```

## What the Script Does

✅ **Safe Operations:**
- Scans all .js, .jsx, .ts, .tsx files in src/ directory
- Creates backup files (.backup extension) before making changes
- Only processes files that contain `<img>` tags with dynamic src
- Validates file structure before and after changes
- Provides detailed progress output

✅ **Conversions Performed:**
- Adds `import Image from 'next/image';` if missing
- Converts `<img src={variable}>` to `<Image src={variable} width={...} height={...}>`
- Preserves all existing attributes (className, style, onError, etc.)
- Automatically determines appropriate width/height based on context:
  - Logo images: 40x40 or 48x48
  - Thumbnails: 80x80
  - Medium images: 384x128
  - Course/hero images: 1200x630 (default)

## Example Conversion

**Before:**
```jsx
<img 
  src={mainImageUrl}
  alt="Course Image"
  className="w-full object-cover"
  style={{ aspectRatio: '1200/630' }}
/>
```

**After:**
```jsx
<Image 
  src={mainImageUrl} 
  alt="Course Image" 
  width={1200} 
  height={630} 
  className="w-full object-cover" 
  style={{ aspectRatio: '1200/630' }} 
/>
```

## Safety Features

🛡️ **File Protection:**
- Always run with `-DryRun` first to preview changes
- Automatic backup creation (can be disabled with `-Backup:$false`)
- Only processes React/Next.js files
- Skips files in node_modules, .next, .git directories
- Validates file syntax before applying changes

🛡️ **Error Handling:**
- Graceful error handling with detailed error messages
- Continues processing other files if one fails
- Summary report shows success/failure counts

## Advanced Script (fix-image-tags.ps1)

The advanced script includes additional features:
- More sophisticated file integrity checking
- Configurable source path
- Verbose logging option
- Enhanced backup management with timestamps

```powershell
# Advanced usage examples
.\fix-image-tags.ps1 -DryRun -Verbose
.\fix-image-tags.ps1 -SourcePath "src/app" -CreateBackup:$false
```

## Recovery

If something goes wrong:
1. **Restore from backup:**
   ```powershell
   Get-ChildItem -Recurse -Filter "*.backup" | ForEach-Object {
       $original = $_.FullName -replace '\.backup$', ''
       Copy-Item $_.FullName $original -Force
       Write-Host "Restored: $original"
   }
   ```

2. **Or use git to revert:**
   ```powershell
   git checkout -- src/
   ```

## Validation

After running the script, validate the changes:
```powershell
# Check ESLint warnings
npx eslint src/ --ext .js,.jsx,.ts,.tsx --max-warnings=0

# Test the build
npm run build

# Start dev server
npm run dev
```

## Expected Results

- All `<img>` tags with dynamic src will be converted to `<Image />` components
- ESLint image optimization warnings should be eliminated
- Pages should load faster due to Next.js image optimization
- No functional changes to your application
