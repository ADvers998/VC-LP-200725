# Component Documentation

This document provides comprehensive documentation for all UI components in the Vibe Coding landing page.

## Table of Contents

- [Button](#button)
- [Input](#input)
- [Checkbox](#checkbox)
- [Counter](#counter)
- [LoadingSpinner](#loadingspinner)
- [HeroSection](#herosection)
- [ErrorBoundary](#errorboundary)

---

## Button

A versatile button component with multiple variants, sizes, and loading states.

### Props

| Prop       | Type                                               | Default     | Description          |
| ---------- | -------------------------------------------------- | ----------- | -------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size`     | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | Button size          |
| `loading`  | `boolean`                                          | `false`     | Show loading spinner |
| `disabled` | `boolean`                                          | `false`     | Disable button       |
| `children` | `ReactNode`                                        | -           | Button content       |

### Variants

- **Primary**: Blue background with white text
- **Secondary**: Gray background with dark text
- **Outline**: Transparent with border
- **Ghost**: Transparent with hover effect

### Sizes

- **Small**: `h-8 px-3 text-sm`
- **Medium**: `h-10 px-4 py-2`
- **Large**: `h-12 px-6 text-lg`

### Examples

```tsx
// Basic button
<Button>Click me</Button>

// Primary button with loading state
<Button variant="primary" loading={isLoading}>
  Submit
</Button>

// Large outline button
<Button variant="outline" size="lg">
  Cancel
</Button>

// Disabled button
<Button disabled>
  Unavailable
</Button>
```

---

## Input

A form input component with validation states and error messages.

### Props

| Prop          | Type                                | Default     | Description      |
| ------------- | ----------------------------------- | ----------- | ---------------- |
| `label`       | `string`                            | -           | Input label      |
| `error`       | `string`                            | -           | Error message    |
| `helperText`  | `string`                            | -           | Helper text      |
| `variant`     | `'default' \| 'error' \| 'success'` | `'default'` | Input state      |
| `type`        | `string`                            | `'text'`    | Input type       |
| `placeholder` | `string`                            | -           | Placeholder text |
| `required`    | `boolean`                           | `false`     | Required field   |
| `disabled`    | `boolean`                           | `false`     | Disable input    |

### States

- **Default**: Gray border
- **Error**: Red border with error message
- **Success**: Green border with helper text

### Examples

```tsx
// Basic input
<Input label="Name" placeholder="Enter your name" />

// Input with error
<Input
  label="Email"
  type="email"
  error="Please enter a valid email"
/>

// Input with helper text
<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>

// Required input
<Input
  label="Username"
  required
  placeholder="Choose a username"
/>
```

---

## Checkbox

An accessible checkbox component with label and error states.

### Props

| Prop         | Type      | Default | Description      |
| ------------ | --------- | ------- | ---------------- |
| `label`      | `string`  | -       | Checkbox label   |
| `error`      | `string`  | -       | Error message    |
| `helperText` | `string`  | -       | Helper text      |
| `checked`    | `boolean` | `false` | Checked state    |
| `disabled`   | `boolean` | `false` | Disable checkbox |

### Examples

```tsx
// Basic checkbox
<Checkbox label="I agree to the terms" />

// Checkbox with error
<Checkbox
  label="Accept terms"
  error="You must accept the terms"
/>

// Checkbox with helper text
<Checkbox
  label="Newsletter subscription"
  helperText="Receive updates about new features"
/>

// Controlled checkbox
<Checkbox
  label="Remember me"
  checked={rememberMe}
  onChange={(e) => setRememberMe(e.target.checked)}
/>
```

---

## Counter

A component for displaying numerical counts with loading states.

### Props

| Prop        | Type                              | Default               | Description            |
| ----------- | --------------------------------- | --------------------- | ---------------------- |
| `count`     | `number`                          | `0`                   | Count to display       |
| `loading`   | `boolean`                         | `false`               | Show loading state     |
| `label`     | `string`                          | `'People interested'` | Count label            |
| `variant`   | `'small' \| 'default' \| 'large'` | `'default'`           | Size variant           |
| `className` | `string`                          | -                     | Additional CSS classes |

### Variants

- **Small**: `text-lg font-semibold`
- **Default**: `text-2xl font-bold`
- **Large**: `text-4xl font-bold`

### Examples

```tsx
// Basic counter
<Counter count={42} />

// Counter with custom label
<Counter
  count={1234}
  label="people have signed up"
/>

// Large counter
<Counter
  count={56789}
  variant="large"
  label="Total users"
/>

// Loading counter
<Counter loading label="Loading count..." />
```

---

## LoadingSpinner

A customizable loading spinner component.

### Props

| Prop        | Type                             | Default     | Description            |
| ----------- | -------------------------------- | ----------- | ---------------------- |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`   | `'md'`      | Spinner size           |
| `color`     | `'default' \| 'blue' \| 'white'` | `'default'` | Spinner color          |
| `className` | `string`                         | -           | Additional CSS classes |

### Examples

```tsx
// Basic spinner
<LoadingSpinner />

// Large blue spinner
<LoadingSpinner size="lg" color="blue" />

// Small white spinner on dark background
<div className="bg-gray-800 p-4">
  <LoadingSpinner size="sm" color="white" />
</div>
```

---

## HeroSection

The main landing page component featuring an animated hero section with form integration.

### Features

- Animated gradient background with floating elements
- Interest form with real-time validation
- Counter displaying submission count
- Responsive design (mobile-first)
- Error handling and loading states

### Props

No props required - this is a self-contained component.

### Usage

```tsx
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
```

### Form Validation

The component includes built-in validation for:

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Newsletter**: Optional checkbox

### API Integration

The component automatically:

- Fetches and displays the current interest count
- Submits form data to `/api/submit-interest`
- Handles success/error states
- Refreshes the counter after successful submission

---

## ErrorBoundary

A React error boundary component for graceful error handling.

### Props

| Prop       | Type        | Default | Description        |
| ---------- | ----------- | ------- | ------------------ |
| `children` | `ReactNode` | -       | Components to wrap |
| `fallback` | `ReactNode` | -       | Custom error UI    |

### Usage

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}
```

### Custom Fallback

```tsx
<ErrorBoundary
  fallback={
    <div className="error-page">
      <h1>Something went wrong</h1>
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </div>
  }
>
  <YourComponent />
</ErrorBoundary>
```

---

## Best Practices

### Accessibility

- All components include proper ARIA attributes
- Keyboard navigation is supported
- Focus states are clearly visible
- Screen reader compatibility

### Performance

- Components use React.memo where appropriate
- Lazy loading for heavy components
- Optimized re-renders with proper dependencies

### Styling

- Consistent design system with TailwindCSS
- Responsive design patterns
- Dark mode support (where applicable)
- Smooth animations and transitions

### TypeScript

- All components are fully typed
- Props interfaces are documented
- Generic types for flexibility
- Strict type checking enabled

---

## Troubleshooting

### Common Issues

1. **Form validation not working**
   - Ensure all required fields are filled
   - Check email format is valid
   - Verify API endpoints are accessible

2. **Counter not updating**
   - Check network connectivity
   - Verify API response format
   - Ensure error handling is working

3. **Styling issues**
   - Verify TailwindCSS is properly configured
   - Check for CSS conflicts
   - Ensure responsive breakpoints are correct

4. **TypeScript errors**
   - Run `npm run build` to check for type errors
   - Ensure all props are properly typed
   - Check for missing dependencies

### Development Tips

- Use the test page at `/components-test` to see all components
- Check the browser console for any errors
- Use React DevTools for component debugging
- Monitor network requests in browser dev tools
