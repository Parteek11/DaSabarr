"use server";

import {
  contactFormSchema,
  type ContactSubmissionResult,
} from "@/features/contact/schemas/contact";
import { getEmailProvider } from "@/features/contact/services/email";

export async function submitContactForm(
  _prevState: ContactSubmissionResult | null,
  formData: FormData
): Promise<ContactSubmissionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Invalid form data";
    return { success: false, message: firstError };
  }

  try {
    const provider = getEmailProvider();
    return await provider.sendContactEmail(parsed.data);
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
