"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/features/contact/actions/submit-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState = null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div>
        <Label htmlFor="name" className="mb-2 block">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          required
          autoComplete="name"
          aria-describedby={state && !state.success ? "form-status" : undefined}
        />
      </div>
      <div>
        <Label htmlFor="email" className="mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <Label htmlFor="phone" className="mb-2 block">
          Phone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXXXXXXX"
          autoComplete="tel"
        />
      </div>
      <div>
        <Label htmlFor="message" className="mb-2 block">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          rows={4}
          required
        />
      </div>

      {state && (
        <p
          id="form-status"
          role="status"
          className={cn(
            "text-sm font-medium",
            state.success ? "text-primary" : "text-error"
          )}
        >
          {state.message}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
