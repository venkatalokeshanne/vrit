import { generateRobotsTxt } from '../../utils/metadata';

export async function GET() {
  const robotsTxt = generateRobotsTxt();
  
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
