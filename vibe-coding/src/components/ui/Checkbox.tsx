import React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const checkboxId =
      props.id || `checkbox-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`;

    return (
      <div className="space-y-2">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            ref={ref}
            id={checkboxId}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
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

Checkbox.displayName = 'Checkbox';

export { Checkbox };
