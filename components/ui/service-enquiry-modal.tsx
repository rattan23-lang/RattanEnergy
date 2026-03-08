"use client";

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

interface ServiceEnquiryModalProps {
  /** Button label — defaults to "Book Service / Enquiry" */
  buttonLabel?: string;
  /** Extra Tailwind classes applied to the trigger button */
  buttonClassName?: string;
}

const SHEETDB_URL = "https://sheetdb.io/api/v1/l2cg8liw8exu6";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

export function ServiceEnquiryModal({
  buttonLabel = "Book Service / Enquiry",
  buttonClassName = "",
}: ServiceEnquiryModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  /* ── sync <dialog> open state ── */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [open]);

  /* close on backdrop click */
  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      setOpen(false);
      setSubmitted(false);
    }
  }

  /* ── Google Ads conversion helper ── */
  function gtag_report_conversion(url?: string) {
    const callback = function () {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-10941887411/KI6WCPz65IMcELPnv-Eo",
        event_callback: callback,
      });
    }
    return false;
  }

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
        gtag_report_conversion();
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
      {/* ── Trigger Button ── */}
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setOpen(true);
        }}
        className={[
          "enquiry-btn",
          "w-full flex items-center justify-center gap-2",
          "rounded-md px-6 py-3 text-sm font-semibold",
          "bg-orange-500 hover:bg-orange-600 active:scale-[0.98]",
          "text-white shadow-md transition-all duration-200",
          buttonClassName,
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
          />
        </svg>
        {buttonLabel}
      </button>

      {/* ── Modal ── */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className={[
          "fixed inset-0 z-50 m-auto w-[92vw] max-w-md rounded-2xl p-0",
          "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100",
          "shadow-2xl border border-zinc-200 dark:border-zinc-700",
          "backdrop:bg-black/60 backdrop:backdrop-blur-sm",
          /* native <dialog> needs explicit open visibility reset */
          "open:flex open:flex-col",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
          <h2 className="text-lg font-bold tracking-tight">
            Book Service / Enquiry
          </h2>
          <button
            type="button"
            aria-label="Close modal"
            onClick={() => {
              setOpen(false);
              setSubmitted(false);
            }}
            className="rounded-full p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">
                Enquiry Submitted!
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Thank you! Our team will get in touch with you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSubmitted(false);
                }}
                className="mt-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-2 text-sm font-semibold text-white transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form id="serviceForm" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="enq-name" className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="enq-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  minLength={2}
                  className={inputCls}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="enq-email" className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  id="enq-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className={inputCls}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="enq-phone" className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="enq-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  minLength={8}
                  className={inputCls}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="enq-requirement" className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Requirement <span className="text-red-500">*</span>
                </label>
                <select
                  id="enq-requirement"
                  name="requirement"
                  required
                  defaultValue=""
                  className={[
                    inputCls,
                    "cursor-pointer",
                  ].join(" ")}
                >
                  <option value="" disabled>
                    Select Requirement
                  </option>
                  <option value="Maruti Car Services">Maruti Car Services</option>
                  <option value="Tyre Replacement">Tyre Replacement</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-md bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3 text-sm font-semibold text-white shadow transition-all duration-200 active:scale-[0.98]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}

/* shared input / select class string */
const inputCls = [
  "w-full rounded-lg border border-zinc-300 dark:border-zinc-600",
  "bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 text-sm",
  "placeholder:text-zinc-400 dark:placeholder:text-zinc-500",
  "focus:outline-none focus:ring-2 focus:ring-orange-400",
  "transition-shadow duration-200",
].join(" ");
