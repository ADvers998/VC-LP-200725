# Troubleshooting Guide

This guide helps you resolve common issues when working with the Vibe Coding landing page.

## Table of Contents

- [Build Issues](#build-issues)
- [Runtime Errors](#runtime-errors)
- [Styling Problems](#styling-problems)
- [API Issues](#api-issues)
- [Testing Issues](#testing-issues)
- [Deployment Problems](#deployment-problems)
- [Performance Issues](#performance-issues)

---

## Build Issues

### TypeScript Errors

**Problem**: TypeScript compilation fails with type errors.

**Solutions**:

1. Check for missing type definitions:

   ```bash
   npm install --save-dev @types/node @types/react @types/react-dom
   ```

2. Verify TypeScript configuration:

   ```bash
   npx tsc --noEmit
   ```

3. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run build
   ```

### ESLint Errors

**Problem**: ESLint reports code quality issues.

**Solutions**:

1. Fix auto-fixable issues:

   ```bash
   npm run lint -- --fix
   ```

2. Check ESLint configuration:

   ```bash
   npx eslint --print-config src/components/HeroSection.tsx
   ```

3. Disable specific rules if needed (add to eslint.config.mjs):
   ```javascript
   rules: {
     '@typescript-eslint/no-explicit-any': 'off',
   }
   ```

### Prettier Issues

**Problem**: Code formatting is inconsistent.

**Solutions**:

1. Format all files:

   ```bash
   npm run format
   ```

2. Check formatting without changes:

   ```bash
   npm run format:check
   ```

3. Configure your editor to format on save with Prettier.

---

## Runtime Errors

### React Hydration Errors

**Problem**: Mismatch between server and client rendering.

**Solutions**:

1. Use `useEffect` for client-only code:

   ```tsx
   useEffect(() => {
     // Client-only code here
   }, []);
   ```

2. Check for dynamic content that differs between server and client.

3. Use `suppressHydrationWarning` for intentional mismatches.

### Component Errors

**Problem**: Components fail to render or throw errors.

**Solutions**:

1. Check browser console for error details.
2. Verify all required props are passed.
3. Ensure components are properly imported.
4. Check for circular dependencies.

### API Route Errors

**Problem**: API routes return errors or don't work.

**Solutions**:

1. Check environment variables:

   ```bash
   # Verify .env.local exists and has correct values
   cat .env.local
   ```

2. Test API routes directly:

   ```bash
   curl http://localhost:3000/api/interest-count
   ```

3. Check Supabase connection:
   - Verify project URL and keys
   - Check database schema
   - Ensure RLS policies are correct

---

## Styling Problems

### TailwindCSS Not Working

**Problem**: TailwindCSS classes don't apply or styles are missing.

**Solutions**:

1. Verify TailwindCSS is installed:

   ```bash
   npm list tailwindcss
   ```

2. Check configuration files:
   - `tailwind.config.js`
   - `postcss.config.js`
   - `globals.css`

3. Restart development server:
   ```bash
   npm run dev
   ```

### Responsive Design Issues

**Problem**: Layout breaks on different screen sizes.

**Solutions**:

1. Test on different devices and browsers.
2. Use browser dev tools to simulate different screen sizes.
3. Check TailwindCSS breakpoint classes.
4. Verify CSS custom properties are working.

### Animation Problems

**Problem**: CSS animations don't work or are choppy.

**Solutions**:

1. Check browser support for CSS animations.
2. Verify animation classes are properly defined.
3. Use `will-change` property for performance.
4. Consider using `transform` instead of `position` for animations.

---

## API Issues

### Supabase Connection Errors

**Problem**: Cannot connect to Supabase or database operations fail.

**Solutions**:

1. Verify environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

2. Check Supabase project status:
   - Visit Supabase dashboard
   - Verify project is active
   - Check API limits

3. Test database connection:
   ```javascript
   // In browser console
   const { createClient } = require('@supabase/supabase-js');
   const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   );
   ```

### Form Submission Errors

**Problem**: Form data is not submitted or validation fails.

**Solutions**:

1. Check form validation logic.
2. Verify API endpoint is accessible.
3. Check network tab for request/response details.
4. Ensure all required fields are filled.

### Counter Not Updating

**Problem**: Interest counter doesn't show correct count.

**Solutions**:

1. Check API response format.
2. Verify database has data.
3. Check for caching issues.
4. Ensure error handling is working.

---

## Testing Issues

### Jest Configuration Problems

**Problem**: Tests fail to run or have configuration errors.

**Solutions**:

1. Verify Jest dependencies:

   ```bash
   npm list jest @testing-library/react
   ```

2. Check Jest configuration:
   - `jest.config.js`
   - `jest.setup.js`
   - `babel.config.js`

3. Clear Jest cache:
   ```bash
   npx jest --clearCache
   ```

### Test Failures

**Problem**: Tests fail with unexpected results.

**Solutions**:

1. Check test output for specific error messages.
2. Verify mock implementations.
3. Check for async/await issues.
4. Ensure test environment is properly set up.

### Component Testing Issues

**Problem**: Component tests don't work as expected.

**Solutions**:

1. Check component imports and exports.
2. Verify test queries match component structure.
3. Use React Testing Library's debug function:
   ```javascript
   screen.debug();
   ```

---

## Deployment Problems

### Netlify Build Failures

**Problem**: Build fails on Netlify.

**Solutions**:

1. Check build logs in Netlify dashboard.
2. Verify build command and publish directory.
3. Ensure all dependencies are in `package.json`.
4. Check for environment variables in Netlify.

### Environment Variables

**Problem**: Environment variables not available in production.

**Solutions**:

1. Add variables to Netlify dashboard.
2. Use `NEXT_PUBLIC_` prefix for client-side variables.
3. Check variable names match exactly.

### Performance Issues

**Problem**: Site is slow or has poor Core Web Vitals.

**Solutions**:

1. Optimize images and assets.
2. Use Next.js Image component.
3. Implement code splitting.
4. Check bundle size:
   ```bash
   npm run build
   ```

---

## Performance Issues

### Slow Loading

**Problem**: Site takes too long to load.

**Solutions**:

1. Optimize images and use WebP format.
2. Implement lazy loading for components.
3. Use Next.js built-in optimizations.
4. Check for large dependencies.

### Memory Leaks

**Problem**: Site becomes slow over time.

**Solutions**:

1. Check for event listeners not being cleaned up.
2. Use React DevTools Profiler.
3. Implement proper cleanup in useEffect.
4. Check for infinite loops.

### Bundle Size

**Problem**: JavaScript bundle is too large.

**Solutions**:

1. Analyze bundle:

   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

2. Remove unused dependencies.
3. Use dynamic imports for large components.
4. Implement tree shaking.

---

## Common Commands

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

### Debugging

```bash
# Check TypeScript errors
npx tsc --noEmit

# Check ESLint errors
npx eslint src/ --ext .ts,.tsx

# Check Prettier formatting
npx prettier --check src/

# Clear Next.js cache
rm -rf .next

# Clear Jest cache
npx jest --clearCache
```

### Environment

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Update dependencies
npm update
```

---

## Getting Help

If you're still experiencing issues:

1. **Check the logs**: Look at browser console, terminal output, and build logs.
2. **Search existing issues**: Check GitHub issues for similar problems.
3. **Create a minimal reproduction**: Isolate the problem in a simple example.
4. **Document the issue**: Include error messages, steps to reproduce, and environment details.

### Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
