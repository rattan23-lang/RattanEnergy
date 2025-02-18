import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const BROWSER_AGENTS = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
  safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
  edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('Image ID is required', { status: 400 });
  }

  // Try with different browser agents if one fails
  for (const [browser, userAgent] of Object.entries(BROWSER_AGENTS)) {
    try {
      const response = await fetch(`https://drive.google.com/uc?export=view&id=${id}`, {
        headers: {
          'User-Agent': userAgent,
          'Accept': 'image/webp,image/jpeg,image/png,image/*,*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Referer': 'https://drive.google.com/'
        },
        next: { revalidate: 0 }
      });

      if (!response.ok) continue;

      const blob = await response.blob();
      return new NextResponse(blob, {
        headers: {
          'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (error) {
      console.error(`Failed with ${browser} user agent:`, error);
      continue;
    }
  }

  // If all attempts fail
  console.error('All attempts to fetch image failed for ID:', id);
  return new NextResponse('Failed to fetch image', { status: 500 });
}