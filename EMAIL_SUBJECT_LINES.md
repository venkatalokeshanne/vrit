# EmailJS Subject Line Configuration Guide

## 📧 **Subject Line Strategy**

### **Why Subject Lines Matter:**
- **First Impression**: The subject line is the first thing recipients see
- **Open Rates**: Good subject lines increase email open rates by 50%+
- **Priority**: Helps identify urgent vs. routine inquiries
- **Organization**: Makes email sorting and filtering easier

## 🎯 **Recommended Subject Lines**

### **For Course Enquiries (EnquiryModal):**
```javascript
subject: `🎓 New Course Enquiry: ${formData.course} - ${formData.name}`
```

**Examples:**
- 🎓 New Course Enquiry: Python Training - John Smith
- 🎓 New Course Enquiry: AWS DevOps - Sarah Johnson
- 🎓 New Course Enquiry: Data Science - Mike Chen

### **For Contact Form (Contact Page):**
```javascript
// With course interest
subject: `📚 Course Inquiry: ${formData.fullName} interested in ${formData.courseInterest}`

// Without course interest  
subject: `💬 New Contact Form Submission - ${formData.fullName}`
```

**Examples:**
- 📚 Course Inquiry: John Smith interested in Python Training
- 💬 New Contact Form Submission - Sarah Johnson

## ⚡ **Alternative Subject Line Options**

### **High Priority/Urgent:**
```javascript
// For high-value courses or urgent inquiries
subject: `🔥 URGENT: New Lead for ${formData.course} Training`
subject: `⚡ Hot Lead Alert: ${formData.name} - ${formData.course}`
subject: `🎯 Priority Inquiry: ${formData.course} from ${formData.name}`
```

### **Professional/Formal:**
```javascript
subject: `Course Inquiry: ${formData.name} - ${formData.course} Training`
subject: `New Training Inquiry: ${formData.course} - ${formData.name}`
subject: `VR IT Solutions: ${formData.course} Course Enquiry`
```

### **Action-Oriented:**
```javascript
subject: `⏰ Act Fast: ${formData.name} wants ${formData.course} info`
subject: `📞 Call Now: ${formData.course} inquiry from ${formData.name}`
subject: `🚀 Ready to Start: ${formData.course} enquiry`
```

## 🛠 **Implementation Guide**

### **Step 1: Update EmailJS Template**
In your EmailJS template, make sure to include `{{subject}}` in the template settings:

1. Login to EmailJS Dashboard
2. Go to Email Templates
3. Edit your template
4. In the template settings, add:
   - **Subject**: `{{subject}}`

### **Step 2: Template Parameters**
Your JavaScript code now sends:
```javascript
templateParams = {
  // ... other fields
  subject: "Dynamic subject line here",
  // ... rest of fields
}
```

### **Step 3: Test Different Variations**
Try these subject line patterns and track which ones get better response rates:

1. **Emoji + Action**: `🎓 New Course Enquiry: {{course}}`
2. **Urgency**: `🔥 URGENT: New {{course}} Lead`  
3. **Personal**: `{{name}} is interested in {{course}}`
4. **Direct**: `Course Inquiry - {{course}} Training`

## 📊 **Subject Line Best Practices**

### **✅ Do:**
- Keep it under 50 characters for mobile
- Include the customer's name for personalization
- Use emojis sparingly (1-2 max) for visual appeal
- Mention the specific course for context
- Create urgency when appropriate
- Be specific and descriptive

### **❌ Don't:**
- Use ALL CAPS (except for single words like URGENT)
- Overuse exclamation marks (!!!)
- Make it too long (gets cut off on mobile)
- Use spammy words (FREE, WIN, CLICK NOW)
- Be too vague or generic
- Forget to include key information

## 🎨 **Subject Line Templates by Priority**

### **High Priority Leads:**
```
🔥 URGENT: {{name}} wants {{course}} - Call Now!
⚡ Hot Lead: {{course}} Inquiry from {{name}}
🎯 Priority: {{course}} Training Request
```

### **Regular Enquiries:**
```
🎓 Course Enquiry: {{course}} - {{name}}
📚 {{name}} interested in {{course}} Training  
📞 New {{course}} Inquiry - {{name}}
```

### **General Contact:**
```
💬 Contact Form: {{name}} - {{course}}
📧 Website Inquiry from {{name}}
🤝 New Contact: {{name}} needs assistance
```

## 📈 **Tracking & Optimization**

### **A/B Testing:**
Test different subject line formats to see what works best for your team:
- Week 1: Emoji-heavy subjects
- Week 2: Plain text subjects  
- Week 3: Urgency-focused subjects
- Week 4: Personal/name-focused subjects

### **Analytics:**
Track metrics like:
- Email open rates
- Response times  
- Lead conversion rates
- Team satisfaction with subject line clarity

---

**Pro Tip:** The subject line you choose should match your team's workflow and priorities. If you get many enquiries, urgency indicators help. If you get fewer enquiries, more descriptive subjects work better.

*Last updated: September 1, 2025*
