# Course Action Buttons Component

A set of reusable, client-side button components for course pages that provide common actions like enquiry, download, join now, and call functionality.

## Components

### Individual Button Components

#### 1. EnquireNowButton
```jsx
import { EnquireNowButton } from '../components/CourseActionButtons';

<EnquireNowButton 
  size="lg"                    // "sm", "md", "lg"
  variant="primary"            // "primary", "secondary"
  onClick={() => {}}           // Custom click handler (optional)
  className="custom-class"     // Additional CSS classes
>
  Custom Text
</EnquireNowButton>
```

#### 2. DownloadCourseButton
```jsx
import { DownloadCourseButton } from '../components/CourseActionButtons';

<DownloadCourseButton 
  courseName="SAS Clinical"    // Used in default alert message
  size="lg"
  variant="secondary"
  onClick={() => {}}           // Custom download logic
>
  Download Course Content
</DownloadCourseButton>
```

#### 3. JoinNowButton
```jsx
import { JoinNowButton } from '../components/CourseActionButtons';

<JoinNowButton 
  size="lg"
  variant="primary"
  onClick={() => {}}           // Custom join logic
>
  Join Now
</JoinNowButton>
```

#### 4. CallNowButton
```jsx
import { CallNowButton } from '../components/CourseActionButtons';

<CallNowButton 
  phoneNumber="+91-9032734343" // Phone number to call
  size="lg"
  variant="primary"
  onClick={() => {}}           // Custom call logic
>
  Call Now
</CallNowButton>
```

### Combined Component

#### CourseActionButtons
```jsx
import { CourseActionButtons } from '../components/CourseActionButtons';

<CourseActionButtons 
  courseName="SAS Clinical"
  phoneNumber="+91-9032734343"
  showEnquireNow={true}        // Show/hide individual buttons
  showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
  showJoinNow={false}
  showCallNow={false}
  layout="horizontal"          // "horizontal" or "vertical"
  size="lg"                    // Applies to all buttons
  onEnquireNow={() => {}}      // Custom handlers for each button
  onDownload={() => {}}
  onJoinNow={() => {}}
  onCallNow={() => {}}
  className="custom-container-class"
/>
```

## Usage Examples

### Basic Usage (Most Common)
```jsx
// In any course page
import { CourseActionButtons } from '../components/CourseActionButtons';

export default function CoursePage() {
  return (
    <div>
      {/* Course content */}
      
      <CourseActionButtons 
        courseName="Your Course Name"
        phoneNumber="+91-9032734343"
        showEnquireNow={true}
        showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
      />
    </div>
  );
}
```

### With Custom Handlers
```jsx
import { CourseActionButtons } from '../components/CourseActionButtons';

export default function CoursePage() {
  const handleEnquiry = () => {
    // Custom enquiry logic
    window.open('/contact-form', '_blank');
  };

  const handleDownload = () => {
    // Custom download logic
    fetch('/api/download-course-content')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'course-content.pdf';
        a.click();
      });
  };

  return (
    <div>
      <CourseActionButtons 
        courseName="Advanced Course"
        onEnquireNow={handleEnquiry}
        onDownload={handleDownload}
        showEnquireNow={true}
        showDownload={!!courseMetadata?.courseContentPdf}
                  downloadUrl={courseMetadata?.courseContentPdf}
        showCallNow={true}
      />
    </div>
  );
}
```

### Individual Button Usage
```jsx
import { EnquireNowButton, CallNowButton } from '../components/CourseActionButtons';

export default function CoursePage() {
  return (
    <div className="flex gap-4">
      <EnquireNowButton 
        size="md"
        onClick={() => window.location.href = '/custom-enquiry'}
      />
      
      <CallNowButton 
        phoneNumber="+91-9876543210"
        size="md"
        variant="secondary"
      />
    </div>
  );
}
```

## Default Behaviors

### EnquireNowButton
- Default action: Redirects to `/contactus`
- Default text: "Enquire Now"
- Default variant: "primary"

### DownloadCourseButton  
- Default action: Shows alert with course name
- Default text: "Download Course Content"
- Default variant: "secondary"

### JoinNowButton
- Default action: Redirects to `/contactus`
- Default text: "Join Now"  
- Default variant: "primary"

### CallNowButton
- Default action: Opens phone dialer with provided number
- Default text: "Call Now"
- Default phone: "+91-9032734343"
- Default variant: "primary"

## Styling

All buttons use Tailwind CSS classes and support:
- Gradient backgrounds
- Hover effects
- Responsive design
- Custom className props for additional styling
- Multiple size variants (sm, md, lg)
- Two color variants (primary, secondary)

## Notes

- All components are Client Components (use 'use client' directive)
- Can be used in Server Components without issues
- Fully accessible with proper ARIA attributes
- Responsive design included
- TypeScript-friendly (add .tsx extension if needed)
