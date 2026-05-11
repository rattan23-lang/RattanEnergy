"use client";

import React from "react";
import Image from "next/image";
import { ServiceEnquiryModal } from "@/components/ui/service-enquiry-modal";
import { TestimonialsSlider } from "@/components/ui/testimonials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faComputer,
  faBoxOpen,
  faClipboardCheck,
  faCarSide,
  faTruckPickup,
  faStopwatch,
  faFileInvoice,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const ServicePage: React.FC = () => {
  return (
    <div className="services">
      {/* HERO SECTION */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Our Authorized Maruti Service Center?
          </h1>
          <p className="mt-4 mb-6 text-lg text-white">
            Professional Care, Genuine Parts & Customer‑First Service
          </p>
          <a
            href="tel:+919876543210"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* PROFESSIONAL EXCELLENCE */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-10">
          Professional Excellence
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faUserGear} className="text-[#2563eb] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
              Maruti Trained Technicians
            </h3>
            <p className="text-[#334155]">
              Your car is handled by factory-certified experts who know every Maruti Suzuki model inside out.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faComputer} className="text-[#2563eb] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
              Advanced Diagnostic Tools
            </h3>
            <p className="text-[#334155]">
              We use the latest computerized systems for precise fault detection and high-tech repairs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faBoxOpen} className="text-[#2563eb] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
              Genuine Spare Parts (MGP)
            </h3>
            <p className="text-[#334155]">
              We exclusively use 100% authentic Maruti Genuine Parts to ensure longevity and safety.
            </p>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICE RANGE */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-10">
          Comprehensive Service Range
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
              Periodic Maintenance Service (PMS)
            </h3>
            <p className="text-[#334155]">
              Routine check-ups to keep your car’s warranty intact and performance optimized.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faCarSide} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
              Wheel Care Services
            </h3>
            <p className="text-[#334155]">
              Precision 3D wheel alignment, balancing, and tire rotation for a smoother drive.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER-CENTRIC FEATURES */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-10">
          Customer‑Centric Features
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faTruckPickup} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
              Pick‑up & Drop Facility
            </h3>
            <p className="text-[#334155]">Convenient doorstep car collection and delivery to save you time.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faStopwatch} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
              Express Service
            </h3>
            <p className="text-[#334155]">Quick 90‑minute service options for routine maintenance.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faFileInvoice} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
              Transparent Billing
            </h3>
            <p className="text-[#334155]">Detailed digital estimates provided upfront with no hidden costs.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faMugHot} className="text-[#2563eb] text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
              Comfortable Lounge
            </h3>
            <p className="text-[#334155]">
              Relax in our air‑conditioned waiting area with Wi‑Fi and refreshments while your car is serviced.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#1e3a8a]">
              Visit Us in Sector 23, Chandigarh
            </h3>
            <p className="mb-4 text-[#334155]">
              📞 Call us at{" "}
              <a href="tel:9814008335" className="font-bold text-[#2563eb]">
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

      {/* TESTIMONIALS */}
      <TestimonialsSlider />
    </div>
  );
};

export default ServicePage;
