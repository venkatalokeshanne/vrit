# Email Template Setup Guide

## Overview
This guide explains how to set up EmailJS with the correct email templates for VR IT Solutions website contact forms.

## Template Variables

### Required Variables
All email templates must include these variables exactly as shown:

```javascript
{
  from_name: "Customer Name",           // Customer's full name
  from_email: "customer@example.com",  // Customer's email address
  phone: "+91-1234567890",             // Customer's phone number
  course: "Python Training",           // Course name or "General Inquiry"
  training_mode: "Online Training",    // Training preference
  message: "Customer message here...", // Customer's message
  to_email: "info@vritsol.com",        // Your business email
  reply_to: "customer@example.com",    // Reply-to address (same as from_email)
  timestamp: "1/9/2025, 10:30:00 AM",  // Indian timezone timestamp
  source: "Website Enquiry Form"       // Form source identifier
}
```

## EmailJS Limitations

### ❌ NOT Supported by EmailJS:
- Handlebars block helpers: `{{#if}}`, `{{#unless}}`, `{{#each}}`
- Complex conditionals: `{{#unless (eq course "General Inquiry")}}`
- Nested logic and comparisons
- Custom helper functions

### ✅ Supported by EmailJS:
- Simple variable replacement: `{{variable_name}}`
- Basic HTML structure
- Inline CSS styling

## Template Files

### 1. EMAIL_TEMPLATE_SIMPLE.html (Recommended)
- **Purpose**: Clean, reliable template for EmailJS
- **Features**: All variables always displayed, no conditional logic
- **Compatibility**: 100% EmailJS compatible

### 2. EMAIL_TEMPLATE.html (Fixed)
- **Purpose**: Original template with complex logic removed
- **Status**: Fixed to work with EmailJS basic templating

## Variable Mapping

### EnquiryModal.js Variables:
```javascript
templateParams = {
  from_name: formData.name,           // ✅ Correct
  from_email: formData.email,         // ✅ Correct  
  phone: formData.phone,              // ✅ Correct
  course: formData.course,            // ✅ Correct
  training_mode: formData.trainingMode, // ✅ Correct (note: trainingMode → training_mode)
  message: formData.message,          // ✅ Correct
  // ... other variables
}
```

### Contact Page Variables:
```javascript
templateParams = {
  from_name: formData.fullName,       // ✅ Correct (note: fullName → from_name)
  from_email: formData.email,         // ✅ Correct
  phone: formData.phone,              // ✅ Correct
  course: formData.courseInterest || 'General Inquiry', // ✅ Correct
  training_mode: 'Not Specified',     // ✅ Correct
  message: formData.message,          // ✅ Correct
  // ... other variables
}
```

## Setup Instructions

### Step 1: EmailJS Template Setup
1. Log into your EmailJS dashboard
2. Go to Email Templates
3. Create a new template
4. Copy the content from `EMAIL_TEMPLATE_SIMPLE.html`
5. Save the template and note the Template ID

### Step 2: Environment Variables
Ensure these are set in your `.env.local`:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 3: Test the Setup
1. Submit a test form from your website
2. Check your email for the formatted message
3. Verify all variables are displaying correctly

## Troubleshooting

### Variables Not Showing
- **Cause**: Variable name mismatch between JS and template
- **Solution**: Use exact variable names from the mapping above

### Template Not Formatting
- **Cause**: Using unsupported Handlebars syntax
- **Solution**: Use `EMAIL_TEMPLATE_SIMPLE.html` which avoids all complex logic

### Form Not Sending
- **Cause**: Missing or incorrect environment variables
- **Solution**: Double-check `.env.local` file has all required variables

## Best Practices

1. **Keep It Simple**: Avoid complex conditional logic in email templates
2. **Test Thoroughly**: Always test with real form submissions
3. **Fallback Values**: Provide default values for optional fields
4. **Error Handling**: Include proper error handling in your forms
5. **Consistent Naming**: Use the exact variable names documented above

## Support
If you encounter issues:
1. Check browser console for EmailJS errors
2. Verify template variables match exactly
3. Test with a minimal template first
4. Check EmailJS service status

---
*Last updated: September 1, 2025*
