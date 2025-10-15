# Fix Google Search Console "Not Found" Errors - Migration Guide

## 🚨 Problem: Old PHP URLs in Google Index

Your website has been migrated from PHP to Next.js, but Google is still trying to crawl old URLs, causing "Not Found" errors.

## ✅ Solutions Implemented

### 1. **301 Redirects Added** (in `next.config.mjs`)
- All PHP pages redirect to Next.js equivalents
- PDF files redirect to relevant course pages
- Permanent redirects (301) tell Google the pages have moved permanently

### 2. **Updated Robots.txt** (in `src/utils/metadata.js`)
- Explicitly disallows crawling of `.php` files
- Blocks access to `/studypdfs/` directory
- Prevents crawling of PDF files

### 3. **Custom 404 Page** (in `src/app/not-found.js`)
- User-friendly error page
- Auto-redirects for common old URLs
- Suggests correct new pages

## 🎯 **Immediate Actions Required**

### Step 1: Deploy Your Changes
```bash
npm run build
npm run start
# OR deploy to your hosting platform
```

### Step 2: Submit Updated Sitemap to Google
1. Go to Google Search Console
2. Navigate to Sitemaps
3. Delete old sitemap if exists
4. Add: `https://www.vritsol.com/sitemap.xml`

### Step 3: Request Re-crawling
1. Go to Google Search Console → URL Inspection
2. Test key pages:
   - `https://www.vritsol.com/`
   - `https://www.vritsol.com/courses`
   - `https://www.vritsol.com/aboutus`
3. Click "Request Indexing" for each

### Step 4: Mark Old URLs as "Fixed" in GSC
1. Go to Coverage Report
2. Find the "Not Found" URLs
3. Click "Mark as Fixed" after deploying redirects

## 📋 **URL Mapping Reference**

### Main Pages:
- `aboutus.php` → `/aboutus`
- `contactus.php` → `/contactus`
- `courses.php` → `/courses`
- `index.php` → `/`
- `services.php` → `/courses`

### Course Pages:
- `google-cloud-training.php` → `/google-cloud-training-in-hyderabad`
- `snowflake-training-in-hyderabad.php` → `/snowflake-training-in-hyderabad`
- `servicenow-training-in-hyderabad.php` → `/servicenow-training-in-hyderabad`
- `sap-mm-online-training.php` → `/sap-mm-online-training`
- `sap-security-training.php` → `/sap-security-training`
- `informatica-mdm-training.php` → `/informatica-mdm-training`
- `sap-basis-online-training.php` → `/sap-basis-online-training`
- `mulesoft-training-in-hyderabad.php` → `/mulesoft-training-in-hyderabad`
- `edi-training.php` → `/edi-training`

### Special Cases:
- All PDF files (`/studypdfs/*.pdf`) → `/courses`
- `docker-with-kubernatees` → `/devops-training-in-hyderabad`
- `blogloadData_cat.php` → `/blog`

## 🔍 **Monitoring & Verification**

### Check Redirects Work:
Test these URLs in your browser:
- `https://www.vritsol.com/aboutus.php` → should redirect to `/aboutus`
- `https://www.vritsol.com/courses.php` → should redirect to `/courses`
- `https://www.vritsol.com/studypdfs/any-file.pdf` → should redirect to `/courses`

### Monitor Google Search Console:
1. **Coverage Report**: Should see decrease in "Not Found" errors
2. **Core Web Vitals**: Monitor performance impact
3. **Search Performance**: Track rankings and clicks

## ⏱️ **Expected Timeline**

- **Week 1**: Redirects start working, GSC shows fewer errors
- **Week 2-3**: Google re-crawls and updates index
- **Month 1**: Most old URLs should be removed from index
- **Month 2+**: Clean index with only new Next.js URLs

## 🚨 **If Issues Persist**

### Additional Actions:
1. **Remove URLs from Google Index**:
   - Use Google Search Console → Removals
   - Submit temporary removal requests for stubborn old URLs

2. **Manual 404 Cleanup**:
   - Create a list of all old URLs from GSC
   - Submit as "Outdated Content" removal requests

3. **Update External Links**:
   - Check if other websites link to your old PHP URLs
   - Contact them to update links to new Next.js URLs

## ✅ **Verification Checklist**

- [ ] Deploy website with redirects
- [ ] Test redirect URLs manually
- [ ] Submit new sitemap to GSC
- [ ] Request indexing for key pages
- [ ] Mark old URLs as "Fixed" in GSC
- [ ] Monitor coverage report weekly
- [ ] Check search performance metrics

## 📞 **Need Help?**

If errors persist after 2 weeks:
1. Export the "Not Found" URLs from GSC
2. Check which ones aren't covered by current redirects
3. Add specific redirects for any missed URLs
4. Consider using removal tool for stubborn URLs

Your website migration is now properly configured to handle the transition from PHP to Next.js! 🎉