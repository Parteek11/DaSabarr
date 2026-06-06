import { ConsoleEmailProvider } from "@/features/contact/services/email/console-provider";
import { ResendEmailProvider } from "@/features/contact/services/email/resend-provider";
import type { EmailProvider, EmailProviderType } from "@/features/contact/services/email/types";

const providers: Record<EmailProviderType, () => EmailProvider> = {
  console: () => new ConsoleEmailProvider(),
  resend: () => new ResendEmailProvider(),
  nodemailer: () => {
    throw new Error("NodemailerProvider not yet implemented. Use 'resend' or 'console'.");
  },
  crm: () => {
    throw new Error("CRM provider not yet implemented. Use 'resend' or 'console'.");
  },
};

export function getEmailProvider(): EmailProvider {
  const type = (process.env.EMAIL_PROVIDER ?? "console") as EmailProviderType;
  const factory = providers[type] ?? providers.console;
  return factory();
}
