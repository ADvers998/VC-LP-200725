// This file is for testing Supabase configuration
// It will be removed in the final implementation

import { supabase } from './supabase';

export async function testSupabaseConnection() {
  try {
    // Test basic connection
    const { error } = await supabase()
      .from('interest_submissions')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }

    console.log('Supabase connection successful');
    return true;
  } catch (error) {
    console.error('Supabase connection test error:', error);
    return false;
  }
}
