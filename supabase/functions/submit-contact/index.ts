import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, company, email, phone, requirement } = body;

    // Validate required fields
    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required");
    } else if (name.trim().length > 100) {
      errors.push("Name must be less than 100 characters");
    }

    if (!company || typeof company !== "string" || company.trim().length === 0) {
      errors.push("Company is required");
    } else if (company.trim().length > 200) {
      errors.push("Company must be less than 200 characters");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.push("Email is required");
    } else if (email.trim().length > 255) {
      errors.push("Email must be less than 255 characters");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("Invalid email format");
    }

    if (phone && (typeof phone !== "string" || phone.length > 20)) {
      errors.push("Phone must be less than 20 characters");
    }

    if (!requirement || typeof requirement !== "string" || requirement.trim().length === 0) {
      errors.push("Requirement is required");
    } else if (requirement.trim().length > 5000) {
      errors.push("Requirement must be less than 5000 characters");
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

    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      requirement: requirement.trim(),
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
