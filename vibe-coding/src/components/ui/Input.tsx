import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, helperText, variant = 'default', ...props },
    ref
  ) => {
    const inputId =
      props.id || `input-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`;

    const baseStyles =
      'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variants = {
      default: 'border-gray-300',
      error: 'border-red-500 focus-visible:ring-red-500',
      success: 'border-green-500 focus-visible:ring-green-500',
    };

    const getVariant = () => {
      if (error) return 'error';
      if (variant === 'success') return 'success';
      return 'default';
    };

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          className={cn(baseStyles, variants[getVariant()], className)}
          ref={ref}
          id={inputId}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn('text-sm', error ? 'text-red-600' : 'text-gray-500')}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
