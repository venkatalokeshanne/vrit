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
3. Use this universal template structure for both enquiry and contact forms:

```
Subject: {{#if course}}New Course Enquiry - {{course}}{{else}}Contact Form Submission{{/if}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
{{#if course}}Course: {{course}}{{/if}}
{{#if training_mode}}Training Mode: {{training_mode}}{{/if}}

Message:
{{message}}

---
Details:
- Timestamp: {{timestamp}}
- Source: {{source}}
- Reply to: {{reply_to}}
```

4. Save the template and note the **Template ID** (e.g., `template_universal123`)

**Note**: This template works for both enquiry modal and contact form by using conditional fields.

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
