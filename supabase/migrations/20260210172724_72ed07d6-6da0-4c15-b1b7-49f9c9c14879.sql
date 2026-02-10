
-- Explicit deny UPDATE/DELETE on contact_submissions
CREATE POLICY "No public updates"
  ON public.contact_submissions
  FOR UPDATE
  USING (false);

CREATE POLICY "No public deletes"
  ON public.contact_submissions
  FOR DELETE
  USING (false);

-- Explicit deny UPDATE/DELETE on training_requests
CREATE POLICY "No public updates"
  ON public.training_requests
  FOR UPDATE
  USING (false);

CREATE POLICY "No public deletes"
  ON public.training_requests
  FOR DELETE
  USING (false);
