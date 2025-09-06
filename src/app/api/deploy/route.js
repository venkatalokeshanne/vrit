import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Deploy hooks for different websites
    const DEPLOY_HOOKS = {
      aws: 'https://api.vercel.com/v1/integrations/deploy/prj_9TAxwyBushMR9EWshWLZrhccVXIy/TKZqnO2jEw',
      vrit: 'https://api.vercel.com/v1/integrations/deploy/prj_RdN1eOtpaRxPdynMxucSsuLg4KnT/1lDQr8ek1G' // Add your VRIT deploy hook here
    };
    
    const body = await request.json();
    const { site = 'aws' } = body; // Default to AWS if not specified
    
    const VERCEL_DEPLOY_HOOK = DEPLOY_HOOKS[site];
    
    if (!VERCEL_DEPLOY_HOOK) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Invalid site parameter: ${site}. Must be 'aws' or 'vrit'`
        }, 
        { status: 400 }
      );
    }
    
    console.log(`Triggering ${site.toUpperCase()} deployment with:`, body);
    
    const response = await fetch(VERCEL_DEPLOY_HOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: 'main',
        message: body.message || `Manual deployment triggered at ${new Date().toISOString()}`
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Vercel API error:', response.status, errorText);
      return NextResponse.json(
        { 
          success: false, 
          error: `Vercel API error: ${response.status} ${response.statusText}`,
          details: errorText
        }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Deployment response:', data);
    
    return NextResponse.json({
      success: true,
      data: data,
      message: 'Deployment triggered successfully'
    });

  } catch (error) {
    console.error('Deployment API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        details: error.stack
      }, 
      { status: 500 }
    );
  }
}
