# VR IT Solutions - EmailJS Template Setup

## 🚀 Quick Setup Instructions

### Step 1: EmailJS Account Setup
1. Visit: https://dashboard.emailjs.com/
2. Create account or login
3. Go to "Email Services" → Add Gmail/Outlook service
4. Note your SERVICE_ID

### Step 2: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Template Name: `VR IT Solutions - Universal Contact`

### Step 3: Copy Template Content

#### Subject Line:
```
{{#if course}}🎓 New Course Enquiry - {{course}}{{else}}📧 Contact Form Submission{{/if}}
```

#### Template Body:
Choose ONE of these options:

**Option A: Full HTML Template (Recommended)**
- Copy entire content from `EMAIL_TEMPLATE.html`
- Paste into EmailJS HTML editor
- Preview and save

**Option B: Text Template**  
- Copy entire content from `EMAIL_TEMPLATE_TEXT.txt`
- Paste into EmailJS text editor
- Save template

### Step 4: Update Environment Variables

```bash
# Your .env.local file
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxx
```

### Step 5: Test Your Setup
1. Start your development server: `npm run dev`
2. Test enquiry modal on any course page
3. Test contact form at `/contactus`
4. Check your email inbox!

## 🎯 Template Features

### Visual Design
- Modern gradient design
- Mobile-responsive layout
- Professional typography
- VR IT Solutions branding

### Business Features
- Priority alerts for new leads
- Action items for sales team
- Click-to-call phone numbers
- Click-to-email addresses
- Timestamp tracking
- Source identification

### Smart Content
- Shows course info only for enquiries
- Adapts subject line based on form type
- Conditional training mode display
- Professional formatting

## 🔧 Customization Options

### Change Company Branding
- Edit company name in template footer
- Update email signature
- Modify color scheme (CSS variables)
- Add your logo URL

### Modify Action Items
- Update response time recommendations
- Add custom follow-up steps
- Include additional contact methods
- Add CRM integration notes

### Email Recipients
- Default: Uses form recipient email
- Can add multiple recipients
- Set up auto-forwarding
- Create department-specific templates

## ✅ Success Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created and saved
- [ ] Template ID copied
- [ ] Environment variables updated
- [ ] Development server restarted
- [ ] Enquiry form tested
- [ ] Contact form tested
- [ ] Email received and formatted correctly

## 🆘 Troubleshooting

**No emails received?**
- Check spam/junk folder
- Verify environment variables
- Check browser console for errors
- Test EmailJS service connection

**Template not formatting?**
- Ensure HTML template is in HTML editor
- Check for template syntax errors
- Verify all {{variables}} are included

**Mobile display issues?**
- HTML template is fully responsive
- Test in different email clients
- Check CSS media queries

## 📞 Need Help?

Your templates are ready to use! The HTML version provides the best user experience with professional branding and clear action items for your sales team.

---
**Created for VR IT Solutions** 🚀
Professional EmailJS Integration
