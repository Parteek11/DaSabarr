import type { ContactFormData, ContactSubmissionResult } from "@/features/contact/schemas/contact";
import type { EmailProvider } from "@/features/contact/services/email/types";

/**
 * Development provider — logs submissions to console.
 * Replace with ResendProvider or NodemailerProvider in production.
 */
export class ConsoleEmailProvider implements EmailProvider {
  readonly name = "console";

  async sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult> {
    console.info("[Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return {
      success: true,
      message: "Thank you for reaching out. We'll get back to you within 24 hours.",
    };
  }
}
