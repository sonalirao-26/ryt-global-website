import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function validateString(val: unknown, maxLen: number): string | null {
  if (val == null || val === "") return null;
  if (typeof val !== "string") return null;
  return val.trim().slice(0, maxLen) || null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const errors: string[] = [];

    // Required fields
    const organizationName = validateString(body.organization_name, 200);
    const requestorName = validateString(body.requestor_name, 100);
    const email = validateString(body.email, 255);
    const phone = validateString(body.phone, 20);

    if (!organizationName) errors.push("Organization name is required (max 200 chars)");
    if (!requestorName) errors.push("Requestor name is required (max 100 chars)");
    if (!email) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Invalid email format");
    }
    if (!phone) errors.push("Phone is required");

    // Validate training_types array
    let trainingTypes: string[] | null = null;
    if (body.training_types) {
      if (!Array.isArray(body.training_types) || body.training_types.length > 10) {
        errors.push("Invalid training types");
      } else {
        trainingTypes = body.training_types
          .filter((t: unknown) => typeof t === "string")
          .map((t: string) => t.trim().slice(0, 50));
        if (trainingTypes!.length === 0) trainingTypes = null;
      }
    }

    if (errors.length > 0) {
      return new Response(JSON.stringify({ error: errors.join(", ") }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("training_requests").insert({
      organization_name: organizationName,
      requestor_name: requestorName,
      email: email,
      phone: phone,
      industry: validateString(body.industry, 50),
      company_size: validateString(body.company_size, 20),
      designation: validateString(body.designation, 100),
      department: validateString(body.department, 50),
      country: validateString(body.country, 50),
      city: validateString(body.city, 100),
      description: validateString(body.description, 5000),
      training_types: trainingTypes,
      delivery_mode: validateString(body.delivery_mode, 50),
      target_audience: validateString(body.target_audience, 50),
      experience_level: validateString(body.experience_level, 50),
      participants: validateString(body.participants, 20),
      skill_category: validateString(body.skill_category, 100),
      preferred_start_date: validateString(body.preferred_start_date, 20),
      duration: validateString(body.duration, 50),
      budget_range: validateString(body.budget_range, 50),
      certification_required: validateString(body.certification_required, 20),
      customization_required: validateString(body.customization_required, 50),
      additional_notes: validateString(body.additional_notes, 5000),
    });

    if (error) {
      return new Response(JSON.stringify({ error: "Failed to submit" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
