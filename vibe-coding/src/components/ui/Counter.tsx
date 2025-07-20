import React from 'react';
import { cn } from '@/lib/utils';

export interface CounterProps {
  count?: number;
  loading?: boolean;
  label?: string;
  className?: string;
  variant?: 'default' | 'large' | 'small';
}

const Counter: React.FC<CounterProps> = ({
  count = 0,
  loading = false,
  label = 'People interested',
  className,
  variant = 'default',
}) => {
  const variants = {
    small: 'text-lg font-semibold',
    default: 'text-2xl font-bold',
    large: 'text-4xl font-bold',
  };

  const labelVariants = {
    small: 'text-sm text-gray-600',
    default: 'text-base text-gray-600',
    large: 'text-lg text-gray-600',
  };

  return (
    <div className={cn('text-center', className)}>
      <div className={cn('text-blue-600', variants[variant])}>
        {loading ? (
          <div className="inline-flex items-center">
            <svg
              className="mr-2 h-6 w-6 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </div>
        ) : (
          count.toLocaleString()
        )}
      </div>
      <p className={cn('mt-1', labelVariants[variant])}>{label}</p>
    </div>
  );
};

export { Counter };
