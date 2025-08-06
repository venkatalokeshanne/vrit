import { NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    const body = await request.json();
    const { secret, type, slug } = body;

    // Verify webhook secret (you should set this in your environment)
    if (secret !== process.env.SANITY_REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    console.log('Revalidation webhook triggered:', { type, slug });

    
    // Revalidate based on document type
    if (type === 'courseMetadata') {
      // Revalidate specific course page
      if (slug) {
        await revalidatePath(`/${slug}`);
        console.log(`Revalidated path: /${slug}`);
      }
      
      // Revalidate metadata cache
      await revalidateTag('course-metadata');
      
      // Revalidate courses listing page
      await revalidatePath('/courses');
      
      // Revalidate homepage if it's the index course
      if (slug === 'index') {
        await revalidatePath('/');
      }
      
      console.log('Revalidated course metadata cache');
    }

    // Revalidate sitemap
    await revalidatePath('/sitemap.xml');

    return NextResponse.json({ 
      message: 'Revalidation successful',
      timestamp: new Date().toISOString(),
      revalidated: { type, slug }
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error.message },
      { status: 500 }
    );
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'Revalidation endpoint is working',
    timestamp: new Date().toISOString(),
    usage: 'POST with { secret, type, slug } to trigger revalidation'
  });
}
