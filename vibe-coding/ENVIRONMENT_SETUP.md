# Environment Variables Setup Guide

This document explains how to set up the environment variables for the Vibe Coding landing page.

## Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## How to Get Your Supabase Credentials

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - Name: `vibe-coding` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Select the region closest to your users
6. Click "Create new project"

### 2. Get Your Project URL and Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. You'll find:
   - **Project URL**: Copy this to `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public**: Copy this to `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret**: Copy this to `SUPABASE_SERVICE_ROLE_KEY`

### 3. Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql` from this project
3. Paste and run the SQL script to create the table and policies

## Environment Variables Explained

### `NEXT_PUBLIC_SUPABASE_URL`

- **Purpose**: Your Supabase project URL
- **Example**: `https://your-project-id.supabase.co`
- **Scope**: Public (accessible in browser)

### `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- **Purpose**: Anonymous/public key for client-side operations
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Scope**: Public (accessible in browser)
- **Permissions**: Limited by Row Level Security (RLS) policies

### `SUPABASE_SERVICE_ROLE_KEY`

- **Purpose**: Service role key for server-side admin operations
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Scope**: Private (server-side only)
- **Permissions**: Bypasses RLS policies for admin operations

## Security Notes

- **Never expose** `SUPABASE_SERVICE_ROLE_KEY` to the client
- The `NEXT_PUBLIC_` prefix makes variables available in the browser
- Use RLS policies to control data access
- The service role key should only be used in API routes or server-side code

## Testing Your Setup

1. Start the development server: `npm run dev`
2. The application should load without errors
3. Check the browser console for any Supabase connection errors
4. Test form submission functionality when implemented

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Verify you copied the correct keys from Supabase dashboard
   - Check that the keys are not truncated

2. **"Project not found" error**
   - Verify the project URL is correct
   - Ensure the project is active in Supabase

3. **Database connection errors**
   - Run the SQL schema script in Supabase SQL Editor
   - Check that RLS policies are properly configured

### Getting Help

- Check the [Supabase documentation](https://supabase.com/docs)
- Verify your environment variables are correctly set
- Ensure the database schema has been created
