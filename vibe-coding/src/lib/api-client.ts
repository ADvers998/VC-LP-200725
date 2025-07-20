import type { InterestCountResponse } from '@/types/database';

export interface SubmitInterestRequest {
  name: string;
  email: string;
  subscribed?: boolean;
}

export interface SubmitInterestResponse {
  success: boolean;
  data?: {
    message: string;
    submission: unknown;
  };
  error?: string;
  details?: unknown[];
}

export interface GetCountResponse {
  success: boolean;
  data?: InterestCountResponse;
  error?: string;
}

// Submit interest form data
export async function submitInterest(
  data: SubmitInterestRequest
): Promise<SubmitInterestResponse> {
  try {
    const response = await fetch('/api/submit-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit interest',
        details: result.details,
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting interest:', error);
    return {
      success: false,
      error: 'Network error occurred',
    };
  }
}

// Get interest submissions count
export async function getInterestCount(): Promise<GetCountResponse> {
  try {
    const response = await fetch('/api/interest-count', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to get count',
      };
    }

    return result;
  } catch (error) {
    console.error('Error getting interest count:', error);
    return {
      success: false,
      error: 'Network error occurred',
    };
  }
}

// Rate limiting utility (basic implementation)
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> =
    new Map();
  private readonly maxAttempts = 5;
  private readonly windowMs = 60000; // 1 minute

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const record = this.attempts.get(identifier);

    if (!record || now > record.resetTime) {
      this.attempts.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    if (record.count >= this.maxAttempts) {
      return false;
    }

    record.count++;
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const rateLimiter = new RateLimiter();
