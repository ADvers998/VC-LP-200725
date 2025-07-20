-- Create the interest_submissions table
CREATE TABLE IF NOT EXISTS public.interest_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    subscribed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_interest_submissions_email ON public.interest_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_interest_submissions_created_at ON public.interest_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.interest_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" ON public.interest_submissions
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for all users (for public count)
CREATE POLICY "Allow reads for all users" ON public.interest_submissions
    FOR SELECT USING (true);

-- Create policy to allow updates only for service role (admin operations)
CREATE POLICY "Allow updates for service role only" ON public.interest_submissions
    FOR UPDATE USING (auth.role() = 'service_role');

-- Create policy to allow deletes only for service role (admin operations)
CREATE POLICY "Allow deletes for service role only" ON public.interest_submissions
    FOR DELETE USING (auth.role() = 'service_role');

-- Create a function to get the total count
CREATE OR REPLACE FUNCTION get_interest_submissions_count()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
AS $$
    SELECT COUNT(*) FROM public.interest_submissions;
$$;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.interest_submissions TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_interest_submissions_count() TO anon, authenticated; 