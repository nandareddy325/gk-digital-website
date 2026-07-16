import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, email, phone, service, budget, message } = body;

    // Email is optional — only name and phone are required.
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const lead = {
      lead_name: name,
      business_name: business || null,
      email: email || null,
      phone: normalizePhone(phone),
      service_interested: service || null,
      budget: budget || null,
      message: message || null,
      source: "website_contact_form",
      pipeline_stage: "New Lead",
      created_at: new Date().toISOString(),
    };

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      const { error } = await supabase.from("leads").insert(lead);

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Could not save your details right now." },
          { status: 500 }
        );
      }
    } else {
      // Supabase not configured yet — log so the lead isn't silently lost.
      console.log("New website lead (Supabase not configured yet):", lead);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}