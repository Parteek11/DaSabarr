import type { ContactFormData, ContactSubmissionResult } from "@/features/contact/schemas/contact";

export interface EmailProvider {
  readonly name: string;
  sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult>;
}

export type EmailProviderType = "console" | "resend" | "nodemailer" | "crm";
