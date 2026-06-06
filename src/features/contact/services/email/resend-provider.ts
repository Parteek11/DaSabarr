import type { ContactFormData, ContactSubmissionResult } from "@/features/contact/schemas/contact";
import type { EmailProvider } from "@/features/contact/services/email/types";
import { siteConfig } from "@/config/site";

/**
 * Resend email provider — ready for production integration.
 * Set RESEND_API_KEY and CONTACT_TO_EMAIL environment variables.
 */
export class ResendEmailProvider implements EmailProvider {
  readonly name = "resend";

  async sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult> {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Da Sabarr <noreply@${new URL(siteConfig.url).hostname}>`,
        to: [toEmail],
        subject: `New Contact: ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you for reaching out. We'll get back to you within 24 hours.",
    };
  }
}
