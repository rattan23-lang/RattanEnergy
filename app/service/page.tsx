"use client";

import React from "react";
import Image from "next/image";
import { ServiceEnquiryModal } from "@/components/ui/service-enquiry-modal";
import { TestimonialsSlider } from "@/components/ui/testimonials";

const ServicePage: React.FC = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-[500px]">
        <Image
          src="../image/hero-bg.jpg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Why Choose Our Authorized Maruti Service Center?
          </h1>
          <p className="mt-4 mb-6 text-lg">
            Professional Care, Genuine Parts & Customer‑First Service
          </p>
         <a
                href="tel:+919876543210"
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Call Now
              </a>
        </div>
      </div>

      {/* PROFESSIONAL EXCELLENCE */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Professional Excellence
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* cards */}
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-user-gear fa-3x text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Maruti Trained Technicians
            </h3>
            <p>
              Your car is handled by factory-certified experts who know every
              Maruti Suzuki model inside out.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-computer fa-3x text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Advanced Diagnostic Tools
            </h3>
            <p>
              We use the latest computerized systems for precise fault detection
              and high-tech repairs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-box-open fa-3x text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Genuine Spare Parts (MGP)
            </h3>
            <p>
              We exclusively use 100% authentic Maruti Genuine Parts to ensure
              longevity and safety.
            </p>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICE RANGE */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Comprehensive Service Range
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* cards */}
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-clipboard-check fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Periodic Maintenance Service (PMS)
            </h3>
            <p>
              Routine check-ups to keep your car’s warranty intact and
              performance optimized.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-car-side fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Wheel Care Services
            </h3>
            <p>
              Precision 3D wheel alignment, balancing, and tire rotation for a
              smoother drive.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER-CENTRIC FEATURES */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Customer‑Centric Features
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* cards */}
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-truck-pickup fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Pick‑up & Drop Facility
            </h3>
            <p>Convenient doorstep car collection and delivery to save you time.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-stopwatch fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Express Service
            </h3>
            <p>Quick 90‑minute service options for routine maintenance.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-file-invoice fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Transparent Billing
            </h3>
            <p>Detailed digital estimates provided upfront with no hidden costs.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <i className="fa-solid fa-mug-hot fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Comfortable Lounge
            </h3>
            <p>
              Relax in our air‑conditioned waiting area with Wi‑Fi and
              refreshments while your car is serviced.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        {/* CONTACT */}
<section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
  <div className="text-center">
    <h3 className="text-xl font-semibold mb-4">
      Visit Us in Sector 23, Chandigarh
    </h3>
    <p className="mb-4">
      📞 Call us at{" "}
      <a href="tel:9814008335" className="font-bold text-blue-600">
        9814008335
      </a>{" "}
      to book your slot or walk in today!
    </p>
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        <ServiceEnquiryModal />
      </div>
    </div>
  </div>
</section>

      </section>
<TestimonialsSlider/>
    </div>
    
  );
};

export default ServicePage;
