import { NextRequest, NextResponse } from 'next/server';
import { createInterestSubmission, checkEmailExists } from '@/lib/database';
import { validateInterestSubmission } from '@/lib/validation';
import type { ApiResponse, CreateInterestSubmission } from '@/types/database';

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subscribed = false }: CreateInterestSubmission = body;

    // Validate input data
    const validation = validateInterestSubmission({ name, email, subscribed });
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { exists, error: checkError } = await checkEmailExists(email);
    if (checkError) {
      console.error('Error checking email existence:', checkError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to check email existence',
        },
        { status: 500 }
      );
    }

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already registered',
        },
        { status: 409 }
      );
    }

    // Create interest submission
    const { data, error } = await createInterestSubmission({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subscribed,
    });

    if (error) {
      console.error('Error creating interest submission:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to submit interest',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          message: 'Interest submitted successfully',
          submission: data,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error in submit-interest:', error);
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
export async function GET() {
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
