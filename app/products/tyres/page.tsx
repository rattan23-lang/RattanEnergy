"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faCar,
  faWrench,
  faShieldHalved,
  faRoad,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

const TyresPage: React.FC = () => {
  return (
    <div className="service-page-theme">
      {/* HERO SECTION */}
      <section
        className="hero relative h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tyres-hero.png')" }}
      >
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold">MRF Tyres</h1>
          <p className="mt-6 mb-8 px-6 text-lg font-semibold leading-relaxed max-w-3xl">
            Ensure smoother rides and longer tyre life with expert wheel
            alignment and balancing for your MRF Tyres.
          </p>
          <a
            href="#book"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Service
          </a>
        </div>
      </section>

      {/* AUTHORIZED DEALER SECTION */}
      <section className="product-section py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
          Authorized MRF Tyres Dealer
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-foreground">
          Rattan Motors is an authorized MRF Tyres franchise dealer offering the
          full range of MRF tyres — from 2‑wheeler and scooter tyres to car, SUV,
          and premium radial tyres.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon
              icon={faMotorcycle}
              className="text-primary text-3xl mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">
              2‑Wheeler & Scooter Tyres
            </h3>
            <p className="text-foreground">
              Designed for superior grip and long life on Indian roads.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faCar} className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Car & SUV Tyres
            </h3>
            <p className="text-foreground">
              World‑class radial tyres ensuring safety, comfort, and performance.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow p-6 text-center hover:-translate-y-1 transition">
            <FontAwesomeIcon
              icon={faWrench}
              className="text-primary text-3xl mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Wheel Alignment & Balancing
            </h3>
            <p className="text-foreground">
              Professional fitting and expert guidance for maximum tyre life.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MRF TYRES */}
      <section className="features py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Why Choose MRF Tyres?
        </h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-foreground">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-primary" />
            Superior safety and road grip in all terrains.
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faRoad} className="text-primary" />
            Smooth and quiet ride with advanced tread design.
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faRecycle} className="text-primary" />
            Eco‑friendly materials for reduced carbon footprint.
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faWrench} className="text-primary" />
            Long‑lasting durability with reinforced sidewalls.
          </li>
        </ul>
      </section>

      {/* CTA SECTION */}
      <section className="cta py-12 text-center">
        <a
          href="https://wa.me/917888733548?text=Hi%2C%20I'm%20interested%20in%20MRF%20Tyres"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Book Service / Enquiry
        </a>
      </section>
    </div>
  );
};

export default TyresPage;
