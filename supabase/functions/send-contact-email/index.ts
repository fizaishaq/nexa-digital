/*
# Contact form email endpoint

1. Purpose
- Receives contact form submissions from the NEXA Digital website.
- Validates all fields server-side.
- Sends an email to the agency owner via Resend with all submitted details.
- Includes basic spam protection (honeypot + rate-limit-like field length checks).

2. Environment
- RESEND_API_KEY — Resend API key (secret, configured via Supabase secrets).
- CONTACT_TO_EMAIL — The agency owner's email address (secret).
- CONTACT_FROM_EMAIL — The verified sender email for Resend (secret).

3. Security
- CORS headers on all responses.
- Server-side validation of name, email, phone, subject, and message.
- Honeypot field check to block bots.
- Field length limits to prevent abuse.
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}

function validate(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (payload.name.trim().length > 100) {
    return "Name is too long.";
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "A valid email address is required.";
  }
  if (payload.email.length > 200) {
    return "Email is too long.";
  }
  if (payload.phone && payload.phone.length > 30) {
    return "Phone number is too long.";
  }
  if (!payload.subject || payload.subject.trim().length < 3) {
    return "Subject must be at least 3 characters.";
  }
  if (payload.subject.trim().length > 200) {
    return "Subject is too long.";
  }
  if (!payload.message || payload.message.trim().length < 10) {
    return "Message must be at least 10 characters.";
  }
  if (payload.message.length > 5000) {
    return "Message is too long (max 5000 characters).";
  }
  return null;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed." }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(
        JSON.stringify({ error: "Invalid request body." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: ContactPayload = {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      subject: String(body.subject ?? ""),
      message: String(body.message ?? ""),
      honeypot: String(body.honeypot ?? ""),
    };

    // Honeypot — if filled, silently succeed (bot caught)
    if (payload.honeypot) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const validationError = validate(payload);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const toEmail = Deno.env.get("CONTACT_TO_EMAIL") || "hello@nexadigital.io";
    const fromEmail = Deno.env.get("CONTACT_FROM_EMAIL") || "onboarding@resend.dev";

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "Email service is not configured. Please contact us directly at " + toEmail }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">NEXA Digital website</p>
        </div>
        <div style="background: #ffffff; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; width: 100px; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${escapeHtml(payload.name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;"><a href="mailto:${escapeHtml(payload.email.trim())}" style="color: #6366f1;">${escapeHtml(payload.email.trim())}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${escapeHtml(payload.phone.trim()) || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${escapeHtml(payload.subject.trim())}</td>
            </tr>
          </table>
          <div style="margin: 20px 0 8px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; font-weight: 600; margin: 0 0 10px;">Message</p>
            <div style="color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(payload.message.trim())}</div>
          </div>
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was sent from the contact form at nexadigital.io</p>
          </div>
        </div>
      </div>
    `;

    const textBody = [
      "New Contact Form Submission — NEXA Digital",
      "",
      `Name: ${payload.name.trim()}`,
      `Email: ${payload.email.trim()}`,
      `Phone: ${payload.phone.trim() || "—"}`,
      `Subject: ${payload.subject.trim()}`,
      "",
      "Message:",
      payload.message.trim(),
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: payload.email.trim(),
        subject: `[Contact Form] ${payload.subject.trim()}`,
        html,
        text: textBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text().catch(() => "Unknown error");
      console.error("Resend API error:", resendResponse.status, errorBody);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Please try again or contact us directly." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully." }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Contact email function error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
