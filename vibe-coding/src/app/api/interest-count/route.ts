import { NextResponse } from 'next/server';
import { getInterestSubmissionsCount } from '@/lib/database';
import type { ApiResponse, InterestCountResponse } from '@/types/database';

export async function GET(): Promise<
  NextResponse<ApiResponse<InterestCountResponse>>
> {
  try {
    // Get the count from database
    const { count, error } = await getInterestSubmissionsCount();

    if (error) {
      console.error('Error getting interest count:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to get interest count',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: { count },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in interest-count:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function POST() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
