import { supabase, createServerSupabaseClient } from './supabase';
import type { CreateInterestSubmission } from '@/types/database';

export async function createInterestSubmission(data: CreateInterestSubmission) {
  try {
    const { data: submission, error } = await supabase()
      .from('interest_submissions')
      .insert([data as unknown as Record<string, unknown>])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data: submission, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

export async function getInterestSubmissionsCount() {
  try {
    const { count, error } = await supabase()
      .from('interest_submissions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    return { count: count || 0, error: null };
  } catch (error) {
    return { count: 0, error: error as Error };
  }
}

export async function checkEmailExists(email: string) {
  try {
    const { data, error } = await supabase()
      .from('interest_submissions')
      .select('email')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return { exists: !!data, error: null };
  } catch (error) {
    return { exists: false, error: error as Error };
  }
}

// Server-side functions for admin operations
export async function getAllSubmissions() {
  const supabaseAdmin = createServerSupabaseClient();

  try {
    const { data, error } = await supabaseAdmin
      .from('interest_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

export async function deleteSubmission(id: string) {
  const supabaseAdmin = createServerSupabaseClient();

  try {
    const { error } = await supabaseAdmin
      .from('interest_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}
