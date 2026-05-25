"use client";

import React from "react";
import Image from "next/image";
import {
  Bike,
  Car,
  Wrench,
  ShieldCheck,
  Route,
  Recycle,
} from "lucide-react";
import TyresHeroImg from "@/image/tyres-hero.png";
import TyreImg from "@/image/mechanic-tyre.png";

const TyresPage: React.FC = () => {
  return (
    <div className="service-page-theme">
      {/* HERO SECTION */}
      <section className="hero relative h-[280px] sm:h-[340px] md:h-[400px] w-full">
        <Image
          src={TyresHeroImg}
          alt="MRF Tyres Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">MRF Tyres</h1>
          <p className="mt-3 mb-5 px-2 text-sm sm:text-base md:text-lg font-semibold leading-relaxed max-w-3xl">
            Ensure smoother rides and longer tyre life with expert wheel
            alignment and balancing for your MRF Tyres.
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
      </section>

      {/* AUTHORIZED DEALER SECTION */}
      <section className="product-section py-10 md:py-12 px-4 md:px-6">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
          Authorized MRF Tyres Dealer
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8 md:mb-10 text-sm md:text-base text-foreground">
          Rattan Motors is an authorized MRF Tyres franchise dealer offering the
          full range of MRF tyres — from 2‑wheeler and scooter tyres to car, SUV,
          and premium radial tyres.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Bike className="text-primary w-7 h-7 md:w-8 md:h-8 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-primary mb-2">
              2‑Wheeler & Scooter Tyres
            </h3>
            <p className="text-sm md:text-base text-foreground">
              Designed for superior grip and long life on Indian roads.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Car className="text-primary w-7 h-7 md:w-8 md:h-8 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-primary mb-2">
              Car & SUV Tyres
            </h3>
            <p className="text-sm md:text-base text-foreground">
              World‑class radial tyres ensuring safety, comfort, and performance.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow p-5 md:p-6 text-center hover:-translate-y-1 transition">
            <Wrench className="text-primary w-7 h-7 md:w-8 md:h-8 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-base md:text-xl font-semibold text-primary mb-2">
              Wheel Alignment & Balancing
            </h3>
            <p className="text-sm md:text-base text-foreground">
              Professional fitting and expert guidance for maximum tyre life.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MRF */}
      <section className="features py-10 md:py-12 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-8 md:mb-10">
          Why Choose MRF Tyres?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Left side: bullet points */}
          <ul className="space-y-4 md:space-y-6 text-foreground text-base md:text-lg leading-relaxed">
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-primary w-5 h-5 shrink-0" />
              Superior safety and road grip in all terrains.
            </li>
            <li className="flex items-center gap-3">
              <Route className="text-primary w-5 h-5 shrink-0" />
              Smooth and quiet ride with advanced tread design.
            </li>
            <li className="flex items-center gap-3">
              <Recycle className="text-primary w-5 h-5 shrink-0" />
              Eco‑friendly materials for reduced carbon footprint.
            </li>
            <li className="flex items-center gap-3">
              <Wrench className="text-primary w-5 h-5 shrink-0" />
              Long‑lasting durability with reinforced sidewalls.
            </li>
            <li className="flex items-center gap-3">
              <Car className="text-primary w-5 h-5 shrink-0" />
              Wide range of tyres for every vehicle category.
            </li>
            <li className="flex items-center gap-3">
              <Bike className="text-primary w-5 h-5 shrink-0" />
              Trusted brand with decades of proven performance.
            </li>
          </ul>

          {/* Right side: image */}
          <div className="flex justify-center">
            <Image
              src={TyreImg}
              alt="Mechanic fitting a tyre"
              className="rounded-lg shadow-lg object-contain w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta py-12 text-center">
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
      </section>
    </div>
  );
};

export default TyresPage;
