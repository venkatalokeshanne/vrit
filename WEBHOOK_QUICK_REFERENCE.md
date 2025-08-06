# 🚀 Quick Webhook Setup - Copy & Paste Ready

## 📋 **Sanity Webhook Configuration**

### **Webhook Settings:**
```
Name: VR IT Solutions Cache Revalidation
URL: http://localhost:3000/api/revalidate (dev) | https://www.vritsol.com/api/revalidate (prod)
Method: POST
Dataset: production
Secret: vr-it-solutions-webhook-secret-2025
```

### **Trigger Configuration:**
```
☑️ Create
☑️ Update  
☑️ Delete

Filter: _type == "courseMetadata"
```

### **HTTP Body Template:**
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

## 🔧 **Testing Commands:**

### **Test GET:**
```bash
curl http://localhost:3000/api/revalidate
```

### **Test POST:**
```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "vr-it-solutions-webhook-secret-2025",
    "type": "courseMetadata",
    "slug": "java-training"
  }'
```

## 📍 **Access Links:**
- **Sanity Management**: https://www.sanity.io/manage
- **Your Project**: https://www.sanity.io/manage/personal/project/3hir6j0e
- **Studio**: http://localhost:3000/studio

---

**✅ Ready to copy and paste into Sanity webhook configuration!**
