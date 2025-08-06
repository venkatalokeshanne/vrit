# 📡 Sanity Webhook Setup Guide

## 🎯 **Step-by-Step Webhook Configuration**

### **Step 1: Access Sanity Management Interface**
1. Go to https://www.sanity.io/manage
2. Select your project: `vr-it-sol` (Project ID: 3hir6j0e)
3. Click on **"API"** tab in the left sidebar
4. Click on **"Webhooks"** section

### **Step 2: Create New Webhook**

Click **"Create webhook"** and fill in these details:

#### **Basic Information:**
```
Name: VR IT Solutions Cache Revalidation
Description: Automatically revalidate Next.js cache when content changes
```

#### **Webhook URL:**
```
Production: https://www.vritsol.com/api/revalidate
Development: http://localhost:3000/api/revalidate
```

#### **Dataset:**
```
Select: production
```

#### **Trigger on:**
```
☑️ Create
☑️ Update  
☑️ Delete
```

#### **Filter (Document Types):**
```groq
_type == "courseMetadata"
```
*This ensures webhook only fires for course metadata changes*

#### **HTTP Method:**
```
POST
```

#### **HTTP Headers:**
```
Content-Type: application/json
```

#### **Secret:**
```
vr-it-solutions-webhook-secret-2025
```
*(Same as in your .env.local file)*

### **Step 3: Webhook Payload Configuration**

#### **Include drafts:**
```
☐ No (unchecked)
```

#### **HTTP Body:**
```json
{
  "secret": "vr-it-solutions-webhook-secret-2025",
  "type": "{{_type}}",
  "slug": "{{slug.current}}",
  "documentId": "{{_id}}",
  "action": "{{_rev ? 'update' : 'create'}}",
  "timestamp": "{{_updatedAt}}"
}
```

### **Step 4: Advanced Settings (Optional)**

#### **Timeout:**
```
30 seconds (default)
```

#### **HTTP Version:**
```
HTTP/1.1 (default)
```

#### **Retry Policy:**
```
☑️ Retry on failure
Max retries: 5
Retry delay: 1 second
```

---

## 🧪 **Testing Your Webhook**

### **Method 1: Test in Sanity Studio**
1. Go to your Sanity Studio: `http://localhost:3000/studio`
2. Edit any course metadata record
3. Save the changes
4. Check your Next.js terminal for revalidation logs

### **Method 2: Test the Endpoint Directly**
```bash
# Test GET request
curl http://localhost:3000/api/revalidate

# Test POST request
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "vr-it-solutions-webhook-secret-2025",
    "type": "courseMetadata",
    "slug": "java-training"
  }'
```

### **Method 3: Check Webhook Logs**
1. Go to Sanity Management → API → Webhooks
2. Click on your webhook
3. Check the **"Deliveries"** tab for success/failure logs

---

## 🔍 **Webhook Payload Examples**

### **When Creating New Course:**
```json
{
  "secret": "vr-it-solutions-webhook-secret-2025",
  "type": "courseMetadata",
  "slug": "python-training",
  "documentId": "courseMetadata-new-123",
  "action": "create",
  "timestamp": "2025-08-06T10:30:00Z"
}
```

### **When Updating Existing Course:**
```json
{
  "secret": "vr-it-solutions-webhook-secret-2025",
  "type": "courseMetadata",
  "slug": "java-training",
  "documentId": "courseMetadata-abc123",
  "action": "update",
  "timestamp": "2025-08-06T10:35:00Z"
}
```

### **When Deleting Course:**
```json
{
  "secret": "vr-it-solutions-webhook-secret-2025",
  "type": "courseMetadata",
  "slug": "old-course",
  "documentId": "courseMetadata-xyz789",
  "action": "delete",
  "timestamp": "2025-08-06T10:40:00Z"
}
```

---

## ⚡ **What Happens When Webhook Fires**

Your `/api/revalidate` endpoint will:

1. **Verify Secret** - Ensures request is from your Sanity project
2. **Revalidate Specific Page** - Updates cache for the changed course page
3. **Revalidate Course List** - Updates the courses listing page  
4. **Revalidate Homepage** - If the 'index' course was changed
5. **Revalidate Sitemap** - Updates the sitemap.xml with latest pages
6. **Clear Cache Tags** - Removes stale cached data
7. **Log Activity** - Records all revalidation activities

---

## 🔒 **Security Best Practices**

### **Environment Variables:**
- ✅ Keep `SANITY_REVALIDATION_SECRET` secure and unique
- ✅ Use different secrets for development and production
- ✅ Never commit secrets to version control

### **Webhook Security:**
- ✅ Always verify the secret in your endpoint
- ✅ Use HTTPS in production
- ✅ Implement rate limiting if needed
- ✅ Log all webhook activities

### **Production Deployment:**
```bash
# When deploying to production, update your webhook URL to:
https://www.vritsol.com/api/revalidate

# And make sure your production environment has:
SANITY_REVALIDATION_SECRET=your-production-secret-key
```

---

## 🚨 **Troubleshooting**

### **Common Issues:**

#### **Webhook not firing:**
- Check if document type filter matches: `_type == "courseMetadata"`
- Verify webhook is enabled and saved
- Check Sanity webhook delivery logs

#### **401 Unauthorized Error:**
- Verify secret matches in both webhook and .env.local
- Check for typos in secret string

#### **500 Server Error:**
- Check Next.js terminal logs for detailed error
- Verify your API route is working with GET request
- Ensure revalidatePath/revalidateTag are imported correctly

#### **Cache not updating:**
- Verify the slug field exists in your document
- Check if ISR is properly configured
- Test manual cache revalidation

---

## 📊 **Monitoring & Logs**

### **Sanity Webhook Logs:**
- Go to Sanity Management → API → Webhooks → Your Webhook → Deliveries
- Check success/failure status
- Review response codes and timing

### **Next.js Server Logs:**
```bash
# Look for these in your terminal:
✅ "Revalidation webhook triggered: { type: 'courseMetadata', slug: 'java-training' }"
✅ "Revalidated path: /java-training"
✅ "Revalidated course metadata cache"
```

---

Your webhook is now ready! 🎉

**Next Steps:**
1. Create the webhook in Sanity Management
2. Test by editing a course in Sanity Studio
3. Verify cache revalidation in your Next.js logs
4. Deploy to production with HTTPS webhook URL
