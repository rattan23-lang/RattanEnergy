"use client";

import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactInfoSection />
      <ContactFormSection />
    </div>
  );
}