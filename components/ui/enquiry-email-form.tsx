"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const SHEETDB_URL = "https://sheetdb.io/api/v1/l2cg8liw8exu6";

interface EnquiryEmailFormProps {
  productName?: string;
}

export function EnquiryEmailForm({
  productName = "MRF Tyres",
}: EnquiryEmailFormProps) {
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData    = new FormData(e.currentTarget);
    const name        = formData.get("name")        as string;
    const email       = formData.get("email")       as string;
    const phone       = formData.get("phone")       as string;
    const requirement = formData.get("requirement") as string;
    const sourcePage  = typeof window !== "undefined" ? window.location.href : "";

    try {
      // ── 1. Save to Google Sheet ──────────────────────────────
      const sheetPromise = fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            Name: name,
            Email: email,
            Phone: phone,
            Requirement: requirement,
            "Product Name": productName,
            "Source Page": sourcePage,
          }],
        }),
      });

      // ── 2. Send email via API route ──────────────────────────
      const emailPromise = fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, requirement, productName, sourcePage }),
      });

      const [sheetRes, emailRes] = await Promise.all([sheetPromise, emailPromise]);
      const emailData = await emailRes.json();

      if (sheetRes.ok || emailData.success) {
        setSubmitted(true);
        toast.success("Enquiry submitted! Our team will contact you soon.");

        // ✅ Google Ads conversion tracking
        if (
          typeof window !== "undefined" &&
          typeof (window as any).gtag_report_signup === "function"
        ) {
          (window as any).gtag_report_signup();
        }
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
      {/* Header */}
      <div className="border-b border-zinc-200 px-6 py-6">
        <p className="text-sm font-medium text-orange-600">Service Enquiry</p>
        <h2 className="text-2xl font-bold text-zinc-900">Book Service / Enquiry</h2>
      </div>

      {/* Body */}
      <div className="px-6 py-6">
        {submitted ? (
          <div className="text-center py-8">
            <p className="text-xl font-bold text-green-700">Enquiry Submitted! ✅</p>
            <p className="mt-2 text-sm text-zinc-500">
              Thank you! Our team will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

            {/* Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label htmlFor="enq-name" className="sm:w-32 text-sm font-medium text-zinc-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="enq-name" name="name" type="text"
                placeholder="Your full name" required
                className={`${inputCls} w-full`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label htmlFor="enq-email" className="sm:w-32 text-sm font-medium text-zinc-700">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                id="enq-email" name="email" type="email"
                placeholder="your@email.com" required
                className={`${inputCls} w-full`}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label htmlFor="enq-phone" className="sm:w-32 text-sm font-medium text-zinc-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="enq-phone" name="phone" type="tel"
                placeholder="+91 98765 43210" required
                className={`${inputCls} w-full`}
              />
            </div>

            {/* Requirement */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label htmlFor="enq-requirement" className="sm:w-32 text-sm font-medium text-zinc-700">
                Requirement <span className="text-red-500">*</span>
              </label>
              <select
                id="enq-requirement" name="requirement"
                required defaultValue=""
                className="rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-orange-400
                           w-full cursor-pointer dark:bg-zinc-800 dark:text-white dark:border-zinc-600"
              >
                <option value="" disabled>Select Requirement</option>
                <option value="Maruti Car Services">Maruti Car Services</option>
                <option value="Tyre Replacement">Tyre Replacement</option>
                <option value="Wheel Alignment">Wheel Alignment</option>
                <option value="Battery Replacement">Battery Replacement</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              className="mt-2 w-full rounded-md bg-orange-500 hover:bg-orange-600
                         px-6 py-3 text-sm font-semibold text-white shadow
                         disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Submitting…" : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputCls = [
  "rounded-lg border border-zinc-300",
  "bg-zinc-50 px-4 py-2.5 text-sm",
  "placeholder:text-zinc-400",
  "focus:outline-none focus:ring-2 focus:ring-orange-400",
].join(" ");
