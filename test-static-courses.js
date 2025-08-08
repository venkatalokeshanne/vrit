const fs = require('fs');
const path = require('path');

// Test the static courses data
const coursesPath = path.join(process.cwd(), 'src/data/courses-static.json');

if (fs.existsSync(coursesPath)) {
  const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf8'));
  console.log('📊 Total courses:', courses.length);
  
  const gcpCourse = courses.find(c => c.slug === 'google-cloud-training');
  console.log('🔍 GCP Course found:', !!gcpCourse);
  
  if (gcpCourse) {
    console.log('📝 GCP Title:', gcpCourse.title);
    console.log('🔗 GCP Slug:', gcpCourse.slug);
    console.log('📅 Last updated:', gcpCourse._updatedAt);
    console.log('🎯 Has metadata:', !!gcpCourse.metadata);
    console.log('📋 Has structured data:', !!gcpCourse.structuredData);
  }
} else {
  console.log('❌ Static courses file not found');
}
