
CREATE TABLE public.training_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  organization_name TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  requestor_name TEXT NOT NULL,
  designation TEXT,
  department TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT,
  city TEXT,
  description TEXT,
  training_types TEXT[],
  delivery_mode TEXT,
  target_audience TEXT,
  experience_level TEXT,
  participants TEXT,
  skill_category TEXT,
  preferred_start_date TEXT,
  duration TEXT,
  budget_range TEXT,
  certification_required TEXT,
  customization_required TEXT,
  additional_notes TEXT
);

ALTER TABLE public.training_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit training request"
ON public.training_requests
FOR INSERT
WITH CHECK (true);

CREATE POLICY "No public read access"
ON public.training_requests
FOR SELECT
USING (false);
