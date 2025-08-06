import { getAllCoursesMetadata } from '../../../lib/sanity';

export async function GET() {
  try {
    const courses = await getAllCoursesMetadata();
    
    return Response.json({
      success: true,
      count: courses.length,
      message: `Successfully fetched ${courses.length} courses from Sanity`,
      sampleCourse: courses[0] || null
    });
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return Response.json({
      success: false,
      error: error.message,
      message: 'Failed to fetch courses from Sanity'
    }, { status: 500 });
  }
}
