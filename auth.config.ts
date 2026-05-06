import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isOnRegister = nextUrl.pathname.startsWith('/register');
      const isOnHome = nextUrl.pathname === '/';
      const isApiRoute = nextUrl.pathname.startsWith('/api');

      // Allow access to public routes
      if (isOnHome || isOnLogin || isOnRegister || isApiRoute) {
        // Redirect logged-in users away from login/register
        if (isLoggedIn && (isOnLogin || isOnRegister)) {
          return Response.redirect(new URL('/articles', nextUrl));
        }
        return true;
      }

      // Protect all other routes
      if (isLoggedIn) return true;
      return false; // Redirect to login
    },
  },
  providers: [], // Providers are added in auth.ts
} satisfies NextAuthConfig;
