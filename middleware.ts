import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * SPA fallback for the embedded Restaurant Kiosk (static files in /public/restaurant-kiosk).
 * Serves index.html for client routes while leaving /assets/* and vite.svg untouched.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/restaurant-kiosk')) {
    return NextResponse.next();
  }
  if (
    pathname.startsWith('/restaurant-kiosk/assets/') ||
    pathname === '/restaurant-kiosk/vite.svg'
  ) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(
    new URL('/restaurant-kiosk/index.html', request.url)
  );
}

export const config = {
  matcher: ['/restaurant-kiosk', '/restaurant-kiosk/:path*'],
};
