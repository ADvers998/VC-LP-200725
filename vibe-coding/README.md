# Vibe Coding Landing Page

## Project Overview

A modern, animated, and accessible landing page for Vibe Coding, built with Next.js, TypeScript, TailwindCSS, and Supabase.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (see below)
4. Run the development server:
   ```sh
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file in the root with the following:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Testing

Run all tests:

```sh
npm test
```

## Deployment (Netlify)

1. Push your code to GitHub or your preferred Git provider.
2. Connect your repo to Netlify.
3. Set the build command to `npm run build` and the publish directory to `.next`.
4. Add the required environment variables in Netlify dashboard.
5. Netlify will auto-detect Next.js and use the official plugin.

## Production Optimization

- TypeScript strict mode is enabled
- Core Web Vitals and accessibility best practices
- Modern, animated, and responsive UI

## Error Monitoring

For basic error monitoring, you can:

- Use [Sentry](https://sentry.io/) or [LogRocket](https://logrocket.com/) for advanced error tracking (add their SDK in `ErrorBoundary.tsx`)
- All client errors are caught by the custom ErrorBoundary

## Troubleshooting

- If you see build or test errors, ensure your Node.js version is 18+ and all dependencies are installed.
- For Supabase issues, check your project keys and database schema.

## API Documentation

See `API_DOCUMENTATION.md` for details on API routes and expected payloads.
