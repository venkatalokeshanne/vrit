# EmailJS Integration Setup Guide

This guide explains how to set up EmailJS for the contact/enquiry forms in your application.

## Prerequisites

1. **EmailJS Account**: Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Email Service**: Gmail, Outlook, or any other email service

## Setup Steps

### 1. Create EmailJS Account
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Sign up or log in to your account

### 2. Add Email Service
1. In the dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions:
   - For Gmail: Allow access and authenticate
   - Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **Template Name**: `VR IT Solutions - Universal Contact Template`
4. **Template Settings**:

#### Option 1: Beautiful HTML Template (Recommended)
Copy the complete HTML template from `EMAIL_TEMPLATE.html` in your project root. This creates a professional, modern email with:
- 🎨 **Modern Design**: Gradient headers, responsive layout, beautiful typography
- 📱 **Mobile Responsive**: Looks perfect on all devices
- 🔥 **Priority Indicators**: Clear visual hierarchy and urgency markers
- 📋 **Action Items**: Built-in next steps for your sales team
- 🎯 **Conditional Content**: Shows course info only when relevant
- 📊 **Professional Branding**: VR IT Solutions branded footer

#### Option 2: Simple Text Template
If you prefer a simpler approach, copy the text template from `EMAIL_TEMPLATE_TEXT.txt`:
- ✅ **Clean Format**: Professional text-only layout
- 📞 **Action-Oriented**: Clear next steps and contact info
- 🚀 **Fast Loading**: Works in all email clients
- 📋 **Structured Data**: Easy to read and process

#### Quick Setup Template (Basic)
For immediate testing, use this minimal template:

**Subject Line:**
```
{{#if course}}🎓 New Course Enquiry - {{course}}{{else}}📧 Contact Form Submission{{/if}}
```

**Email Body:**
```
🔥 NEW LEAD ALERT!

👤 Customer: {{from_name}}
📧 Email: {{from_email}}  
📞 Phone: {{phone}}
{{#if course}}
{{#unless (eq course "General Inquiry")}}
📚 Course: {{course}}
🎯 Training Mode: {{training_mode}}
{{/unless}}
{{/if}}

💬 Message:
{{message}}

📅 Received: {{timestamp}}
🌐 Source: {{source}}

⚡ Action Required: Contact customer within 2 hours!
```

5. Save the template and note the **Template ID** (e.g., `template_vrit_universal`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcd1234`)

### 5. Update Environment Variables

Add these to your `.env.local` file:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 📧 Template Preview

### How the HTML Template Looks:

**For Course Enquiry:**
- 🎓 Beautiful gradient header with "New Course Enquiry" 
- 👤 Customer info in styled cards
- 📚 Highlighted course information with training mode
- 💬 Professional message display
- 📋 Action items for sales team
- 🏢 Branded footer with company info

**For Contact Form:**
- 📧 "Contact Form Submission" header
- 👤 Customer details in organized layout  
- 💬 Message content in formatted box
- ⚡ Quick action reminders
- 📊 Timestamp and source tracking

### Key Features:
- ✅ **Responsive Design**: Perfect on desktop, tablet, mobile
- ✅ **Professional Branding**: VR IT Solutions theme throughout
- ✅ **Action-Oriented**: Clear next steps for your team
- ✅ **Visual Hierarchy**: Important info stands out
- ✅ **Click-to-Action**: Email and phone links ready to use

## Template Variables

The unified template receives these variables from both forms:

**Common Fields (both forms):**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{message}}` - User's message
- `{{timestamp}}` - Form submission time
- `{{source}}` - "Website Enquiry Form" or "Contact Us Page"
- `{{reply_to}}` - User's email for replies

**Course-Specific Fields (enquiry modal only):**
- `{{course}}` - Selected course (or "General Inquiry" for contact form)
- `{{training_mode}}` - Training preference (or "Not Specified" for contact form)

**Template Logic:**
The template uses conditional statements to show course info only when present:
- `{{#if course}}` - Shows course section for enquiry forms
- `{{#if training_mode}}` - Shows training mode when available

## Customization

### Change Recipient Email
Update the `to_email` field in `EnquiryModal.js`:

```javascript
const templateParams = {
  // ... other fields
  to_email: 'your-email@company.com', // Change this
  // ... other fields
};
```

### Modify Template Parameters
Add or remove fields in the `templateParams` object in `handleSubmit` function.

## Testing

1. **Development Mode**: If environment variables are not set, the form will still work but won't send emails (shows console logs instead)
2. **Check Console**: Look for EmailJS logs and error messages
3. **Test Email**: Submit a test enquiry to verify email delivery

## Troubleshooting

### Common Issues:

1. **401 Unauthorized**: Check your Public Key
2. **400 Bad Request**: Verify Template ID and Service ID
3. **Template not found**: Make sure Template ID is correct
4. **Service not found**: Verify Service ID

### Debug Steps:

1. Check browser console for error messages
2. Verify environment variables are loaded:
   ```javascript
   console.log({
     serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
     templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   });
   ```
3. Test EmailJS in their dashboard first

## Features Implemented

✅ **Email Integration**: Sends enquiries via EmailJS
✅ **Form Validation**: Client-side validation for all fields
✅ **Status Feedback**: Success/error messages with visual indicators  
✅ **Fallback Handling**: Works even if EmailJS is not configured
✅ **Auto-close**: Modal closes automatically after successful submission
✅ **Error Recovery**: Detailed error messages for troubleshooting
✅ **Mobile Responsive**: Works on all device sizes
✅ **Accessibility**: Screen reader friendly with proper labels

## Security Notes

- Public Key is safe to expose in client-side code
- Service ID and Template ID are not sensitive
- Emails are sent through EmailJS servers, not directly from your application
- Rate limiting is handled by EmailJS

## Support

For EmailJS specific issues, check their [documentation](https://www.emailjs.com/docs/) or contact their support.

For implementation questions, check the console logs for detailed error messages.
