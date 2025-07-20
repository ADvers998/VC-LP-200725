# UI Components Documentation

This document describes all the reusable UI components available in the Vibe Coding project.

## Overview

All components are built with TypeScript, Tailwind CSS, and follow accessibility best practices. They use the Inter font family and are fully responsive.

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
  // ... all standard button HTML attributes
}
```

#### Usage Examples

```tsx
import { Button } from '@/components/ui'

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
```

### Input

A form input component with validation states and error handling.

#### Props

```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
  // ... all standard input HTML attributes
}
```

#### Usage Examples

```tsx
import { Input } from '@/components/ui'

// Basic input
<Input placeholder="Enter your name" />

// With label
<Input label="Name" placeholder="Enter your name" />

// With error
<Input
  label="Email"
  error="Please enter a valid email"
  placeholder="Enter your email"
/>

// With helper text
<Input
  label="Username"
  helperText="Must be at least 3 characters"
  placeholder="Enter username"
/>

// Success state
<Input
  label="Email"
  variant="success"
  helperText="Email is valid"
/>
```

### Checkbox

An accessible checkbox component with label and error states.

#### Props

```typescript
interface CheckboxProps {
  label?: string;
  error?: string;
  helperText?: string;
  // ... all standard checkbox HTML attributes (except type)
}
```

#### Usage Examples

```tsx
import { Checkbox } from '@/components/ui'

// Basic checkbox
<Checkbox />

// With label
<Checkbox label="Subscribe to newsletter" />

// With error
<Checkbox
  label="Accept terms"
  error="You must accept the terms"
/>

// With helper text
<Checkbox
  label="Marketing emails"
  helperText="Receive updates about new features"
/>
```

### Counter

A component for displaying numerical counts with loading states.

#### Props

```typescript
interface CounterProps {
  count?: number;
  loading?: boolean;
  label?: string;
  className?: string;
  variant?: 'default' | 'large' | 'small';
}
```

#### Usage Examples

```tsx
import { Counter } from '@/components/ui'

// Basic counter
<Counter count={42} />

// With custom label
<Counter count={1234} label="Total users" />

// Different sizes
<Counter count={42} variant="small" label="Small" />
<Counter count={1234} variant="default" label="Default" />
<Counter count={56789} variant="large" label="Large" />

// Loading state
<Counter loading label="Loading count" />
```

### LoadingSpinner

A customizable loading spinner component.

#### Props

```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'default' | 'white' | 'blue';
}
```

#### Usage Examples

```tsx
import { LoadingSpinner } from '@/components/ui'

// Basic spinner
<LoadingSpinner />

// Different sizes
<LoadingSpinner size="sm" />
<LoadingSpinner size="md" />
<LoadingSpinner size="lg" />
<LoadingSpinner size="xl" />

// Different colors
<LoadingSpinner color="default" />
<LoadingSpinner color="blue" />
<LoadingSpinner color="white" />
```

## Design System

### Colors

- **Primary**: Blue (`blue-600`, `blue-700`)
- **Secondary**: Gray (`gray-100`, `gray-200`)
- **Error**: Red (`red-500`, `red-600`)
- **Success**: Green (`green-500`)
- **Text**: Gray scale (`gray-700`, `gray-600`, `gray-500`)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Sizes**: Follow Tailwind's text scale

### Spacing

- **Component Spacing**: Uses Tailwind's spacing scale
- **Form Spacing**: Consistent 2-unit spacing between form elements
- **Section Spacing**: 12-unit spacing between major sections

### Accessibility

All components include:

- **Focus States**: Visible focus rings for keyboard navigation
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper HTML structure

## Best Practices

### Component Usage

1. **Always provide labels** for form inputs when possible
2. **Use appropriate variants** for different contexts
3. **Handle loading states** for better UX
4. **Provide error messages** for form validation
5. **Use consistent spacing** between components

### Form Validation

```tsx
// Example form with validation
const [errors, setErrors] = useState({})

<Input
  label="Email"
  error={errors.email}
  onChange={(e) => {
    // Clear error when user types
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }))
    }
    setEmail(e.target.value)
  }}
/>
```

### Responsive Design

All components are responsive by default:

- **Mobile**: Components stack vertically
- **Tablet**: Components use grid layouts
- **Desktop**: Components use optimal spacing

## Testing

Visit `/components-test` to see all components in action with different variants and states.

## Customization

### Adding New Variants

```tsx
// In Button.tsx
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
  ghost: 'hover:bg-gray-100',
  // Add your custom variant here
  custom: 'bg-purple-600 text-white hover:bg-purple-700',
};
```

### Extending Components

```tsx
// Create a specialized button
const SubmitButton = ({ children, ...props }) => (
  <Button variant="primary" size="lg" className="w-full" {...props}>
    {children}
  </Button>
);
```

## Dependencies

- **clsx**: For conditional class names
- **tailwind-merge**: For merging Tailwind classes
- **React**: For component development
- **TypeScript**: For type safety

## File Structure

```
src/components/ui/
├── Button.tsx
├── Input.tsx
├── Checkbox.tsx
├── Counter.tsx
├── LoadingSpinner.tsx
└── index.ts
```
