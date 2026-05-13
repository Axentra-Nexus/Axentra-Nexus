import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const ApplicationSchema = z.object({
  position: z.string().min(1).max(200),
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  experience: z.string().trim().min(1).max(60),
  location: z.string().trim().max(120).optional().default(""),
  coverLetter: z.string().trim().max(3000).optional().default(""),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ApplicationSchema.parse(data))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RECIPIENT = "nithin.axentra1@gmail.com";

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const html = `
      <h2>New Job Application — ${escapeHtml(data.position)}</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
        <tr><td><strong>Name:</strong></td><td>${escapeHtml(data.fullName)}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><strong>Experience:</strong></td><td>${escapeHtml(data.experience)}</td></tr>
        <tr><td><strong>Location:</strong></td><td>${escapeHtml(data.location || "—")}</td></tr>
      </table>
      <h3>Cover Letter / Notes</h3>
      <p style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px">${escapeHtml(data.coverLetter || "—")}</p>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Axentra Careers <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: data.email,
        subject: `New Application — ${data.position} — ${data.fullName}`,
        html,
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("Resend send failed", response.status, payload);
      throw new Error(`Failed to submit application [${response.status}]`);
    }

    return { ok: true };
  });
