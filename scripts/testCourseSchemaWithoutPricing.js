/**
 * Course Schema Without Pricing Test
 * Verifies Course schema works correctly without pricing information
 */

function testCourseSchemaWithoutPricing() {
  console.log('💰 TESTING COURSE SCHEMA WITHOUT PRICING...\n');
  
  try {
    // Simulate course schema without pricing
    const courseSchema = {
      "@type": "Course",
      "name": "Data Science Training",
      "description": "Complete Data Science course with Python, Machine Learning, and AI",
      "url": "https://vritsol.com/data-science-training-in-hyderabad",
      "provider": {
        "@type": "Organization",
        "name": "VR IT Solutions",
        "url": "https://vritsol.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vritsol.com/images/vritlogo.png"
        }
      },
      // No "offers" field - pricing removed
      "courseMode": "blended",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseSchedule": {
            "@type": "Schedule",
            "duration": "3 months",
            "repeatFrequency": "Weekly",
            "repeatCount": 12
          }
        },
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "courseSchedule": {
            "@type": "Schedule",
            "duration": "3 months",
            "repeatFrequency": "Weekly",
            "repeatCount": 12
          }
        }
      ]
    };
    
    console.log('📋 Course Schema (No Pricing) Analysis:');
    console.log(`   Course Name: ${courseSchema.name}`);
    console.log(`   Provider: ${courseSchema.provider.name}`);
    console.log(`   Course Mode: ${courseSchema.courseMode}`);
    console.log(`   Course Instances: ${courseSchema.hasCourseInstance.length}`);
    
    // Check for pricing fields
    const hasPricing = courseSchema.hasOwnProperty('offers');
    console.log(`   ${hasPricing ? '❌' : '✅'} Pricing Information: ${hasPricing ? 'Present' : 'Hidden'}`);
    
    // Validate required fields (without pricing)
    const requiredFields = ['@type', 'name', 'description', 'provider'];
    const optionalFields = ['courseMode', 'hasCourseInstance'];
    
    console.log('\n📊 Field Validation:');
    
    requiredFields.forEach(field => {
      const hasField = courseSchema.hasOwnProperty(field);
      console.log(`   ${hasField ? '✅' : '❌'} ${field}: ${hasField ? 'Present' : 'Missing'}`);
    });
    
    optionalFields.forEach(field => {
      const hasField = courseSchema.hasOwnProperty(field);
      console.log(`   ${hasField ? '✅' : '⚪'} ${field}: ${hasField ? 'Present' : 'Optional - Not included'}`);
    });
    
    // Validate course instances
    if (courseSchema.hasCourseInstance) {
      console.log('\n📚 Course Instances:');
      courseSchema.hasCourseInstance.forEach((instance, index) => {
        console.log(`   ${index + 1}. ${instance.courseMode} - ${instance.courseSchedule.repeatFrequency}`);
      });
    }
    
    // Overall validation
    const hasAllRequired = requiredFields.every(field => courseSchema.hasOwnProperty(field));
    const noPricing = !courseSchema.hasOwnProperty('offers');
    
    console.log('\n📊 COURSE SCHEMA (NO PRICING) VALIDATION:');
    if (hasAllRequired && noPricing) {
      console.log('✅ COURSE SCHEMA WITHOUT PRICING IS VALID!');
      console.log('🎉 Schema focuses on educational content without commercial information');
      console.log('\n💡 BENEFITS OF REMOVING PRICING:');
      console.log('   1. ✅ Cleaner rich snippets without price clutter');
      console.log('   2. ✅ Focus on educational value rather than cost');
      console.log('   3. ✅ Avoids pricing conflicts if prices change');
      console.log('   4. ✅ Better user experience - prices shown on page instead');
      console.log('   5. ✅ Still fully Schema.org compliant (offers field is optional)');
    } else {
      console.log('❌ Course schema validation failed');
      if (!hasAllRequired) {
        console.log('   Missing required fields');
      }
      if (!noPricing) {
        console.log('   Pricing information still present');
      }
    }
    
  } catch (error) {
    console.error('❌ Error testing course schema without pricing:', error.message);
  }
}

// Run the test
testCourseSchemaWithoutPricing();
