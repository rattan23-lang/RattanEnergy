"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Settings2,
  Monitor,
  Package,
  ClipboardCheck,
  Car,
  Truck,
  Timer,
  FileText,
  Coffee,
} from "lucide-react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import HeroBgImg from "@/image/hero-bg.jpg";

// Dynamic imports
const ServiceEnquiryModal = dynamic(
  () => import("@/components/ui/service-enquiry-modal").then((mod) => mod.ServiceEnquiryModal),
  { ssr: false }
);
const TestimonialsSlider = dynamic(
  () => import("@/components/ui/testimonials").then((mod) => mod.TestimonialsSlider),
  { ssr: false }
);

const ServicePage: React.FC = () => {
  return (
    <div className="service-page-theme">
      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src={HeroBgImg}
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Choose Our Authorized Maruti Service Center?
          </h1>
          <p className="mt-3 mb-5 text-sm md:text-lg">
            Professional Care, Genuine Parts & Customer‑First Service
          </p>
          <a
            href="tel:+919814008335"
            onClick={() => {
              if (typeof window !== "undefined" && typeof (window as any).gtag_report_call === "function") {
                (window as any).gtag_report_call("tel:+919814008335");
              }
            }}
            className="mt-4 inline-block text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* PROFESSIONAL EXCELLENCE */}
      <section className="py-12 px-4 md:px-6 relative z-20">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-8 md:mb-10">
          Professional Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Settings2 className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-[#2563eb] mb-2">
              Maruti Trained Technicians
            </h3>
            <p className="text-sm md:text-base text-[#334155]">
              Your car is handled by factory-certified experts who know every Maruti Suzuki model inside out.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Monitor className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-[#2563eb] mb-2">
              Advanced Diagnostic Tools
            </h3>
            <p className="text-sm md:text-base text-[#334155]">
              We use the latest computerized systems for precise fault detection and high-tech repairs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Package className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-[#2563eb] mb-2">
              Genuine Spare Parts (MGP)
            </h3>
            <p className="text-sm md:text-base text-[#334155]">
              We exclusively use 100% authentic Maruti Genuine Parts to ensure longevity and safety.
            </p>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICE RANGE */}
      <section className="py-12 px-4 md:px-6 bg-gray-50 relative z-20">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-8 md:mb-10">
          Comprehensive Service Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <ClipboardCheck className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-[#2563eb] mb-2">
              Periodic Maintenance Service (PMS)
            </h3>
            <p className="text-sm md:text-base text-[#334155]">
              Routine check-ups to keep your car's warranty intact and performance optimized.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Car className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-[#2563eb] mb-2">
              Wheel Care Services
            </h3>
            <p className="text-sm md:text-base text-[#334155]">
              Precision 3D wheel alignment, balancing, and tire rotation for a smoother drive.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER-CENTRIC FEATURES */}
      <section className="py-12 px-4 md:px-6 relative z-20">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-8 md:mb-10">
          Customer‑Centric Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center hover:-translate-y-1 transition">
            <Truck className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-sm md:text-lg font-semibold text-[#2563eb] mb-2">
              Pick‑up & Drop Facility
            </h3>
            <p className="text-xs md:text-base text-[#334155]">Convenient doorstep car collection and delivery to save you time.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center hover:-translate-y-1 transition">
            <Timer className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-sm md:text-lg font-semibold text-[#2563eb] mb-2">
              Express Service
            </h3>
            <p className="text-xs md:text-base text-[#334155]">Quick 90‑minute service options for routine maintenance.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center hover:-translate-y-1 transition">
            <FileText className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-sm md:text-lg font-semibold text-[#2563eb] mb-2">
              Transparent Billing
            </h3>
            <p className="text-xs md:text-base text-[#334155]">Detailed digital estimates provided upfront with no hidden costs.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center hover:-translate-y-1 transition">
            <Coffee className="text-[#2563eb] w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-sm md:text-lg font-semibold text-[#2563eb] mb-2">
              Comfortable Lounge
            </h3>
            <p className="text-xs md:text-base text-[#334155]">
              Relax in our air‑conditioned waiting area with Wi‑Fi and refreshments while your car is serviced.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT with Error Boundary */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 mt-12 relative z-30">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-[#1e3a8a]">
            Visit Us in Sector 23, Chandigarh
          </h3>
          <p className="mb-4 text-[#334155]">
            📞 Call us at{" "}
            <a
              href="tel:+919814008335"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag_report_call === "function") {
                  (window as any).gtag_report_call("tel:+919814008335");
                }
              }}
              className="mt-4 inline-block text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Call Now
            </a>
            {" "}
            to book your slot or walk in today!
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl relative z-40">
              <ErrorBoundary fallback={<div>Unable to load enquiry form.</div>}>
                <ServiceEnquiryModal />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS with Error Boundary */}
      <div className="relative z-40">
        <ErrorBoundary fallback={<div>Testimonials unavailable right now.</div>}>
          <TestimonialsSlider />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ServicePage;
