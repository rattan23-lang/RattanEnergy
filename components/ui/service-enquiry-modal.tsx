"use client";

import { useState } from "react";
import { toast } from "sonner";

interface ServiceEnquiryModalProps {
  buttonLabel?: string;
  buttonClassName?: string;
}

const SHEETDB_URL = "https://sheetdb.io/api/v1/l2cg8liw8exu6";

export function ServiceEnquiryModal({
  buttonLabel = "Book Service / Enquiry",
  buttonClassName = "",
}: ServiceEnquiryModalProps) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      data: [
        {
          Name: formData.get("name") as string,
          Email: formData.get("email") as string,
          Phone: formData.get("phone") as string,
          Requirement: formData.get("requirement") as string,
          "Product Name": "MRF Tyres",
          "Source Page": window.location.href,
        },
      ],
    };

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success("Enquiry submitted! Our team will contact you soon.");
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
    <>
      {open && (
        <div className="mt-6 w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
          <div className="border-b border-zinc-200 px-6 py-6">
            <p className="text-sm font-medium text-orange-600">Service Enquiry</p>
            <h2 className="text-2xl font-bold text-zinc-900">
              Book Service / Enquiry
            </h2>
          </div>

          <div className="px-6 py-6">
            {submitted ? (
              <div className="text-center py-6">
                <p className="text-xl font-bold text-green-700">
                  Enquiry Submitted!
                </p>
                <p className="text-sm text-zinc-500">
                  Thank you! Our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form id="serviceForm" onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                {/* Name */}
                <div className="flex items-center gap-4">
                  <label htmlFor="enq-name" className="w-32 text-sm font-medium text-zinc-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="enq-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className={`${inputCls} w-full`}
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <label htmlFor="enq-email" className="w-32 text-sm font-medium text-zinc-700">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="enq-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className={`${inputCls} w-full`}
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <label htmlFor="enq-phone" className="w-32 text-sm font-medium text-zinc-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="enq-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className={`${inputCls} w-full`}
                  />
                </div>

                {/* Requirement */}
                <div className="flex items-center gap-4">
                  <label htmlFor="enq-requirement" className="w-32 text-sm font-medium text-zinc-700">
                    Requirement <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="enq-requirement"
                    name="requirement"
                    required
                    defaultValue=""
                    className={`${inputCls} w-full cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select Requirement
                    </option>
                    <option value="Maruti Car Services">Maruti Car Services</option>
                    <option value="Tyre Replacement">Tyre Replacement</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow"
                >
                  {loading ? "Submitting…" : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* shared input / select class string */
const inputCls = [
  "rounded-lg border border-zinc-300",
  "bg-zinc-50 px-4 py-2.5 text-sm",
  "placeholder:text-zinc-400",
  "focus:outline-none focus:ring-2 focus:ring-orange-400",
].join(" ");
