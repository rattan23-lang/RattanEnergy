"use client";

import React from "react";

export default function GeneratorsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* HERO BANNER */}
      <section
        className="relative h-[300px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/generators-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Generators</h1>
          <p className="mt-4 text-lg">
            Reliable power solutions for commercial and residential needs
          </p>
        </div>
      </section>

      {/* GENERATOR MODELS */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Our Generator Models
        </h2>

        {/* Generator EYG6500GE */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
  src="/images/generator-eyg6500ge.png"
  alt="Generator EYG6500GE"
  className="md:w-1/2 w-full object-cover"
/>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Generator EYG6500GE (Residential - 7 KVA)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              High-performance industrial generator for continuous power supply.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 flex-1">
              <li>Weight (Approx.): 46.5 kg</li>
  <li>Fuel Used: Petrol</li>
  <li>Source Type: AC</li>
  <li>Power Backup: 8 HOURS</li>
  <li>Portable: Yes</li>
  <li>Fuel Tank Capacity: 15 L</li>
  <li>Material: Iron</li>
  <li>Power Rating: 3 KVA</li>
  <li>Current Rating: 12.5 A</li>
  <li>Socket: A3600-2x16A</li>
  <li>Frequency: 50Hz</li>
  <li>Suitable For: Homes, Offices, Industries, Factories</li>
  <li>Output DC Voltage: 230 V</li>
  <li>Noise Level: 68 dB</li>
  <li>Electric and self start</li>
            </ul>
            <a
              href="tel:9814008335"
              className="mt-4 inline-block text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Generator GE3310 — reversed layout */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row-reverse">
         <img
    src="/images/generator-ge3310.png"
    alt="Generator GE3310"
    className="md:w-1/2 w-full max-h-[400px] object-contain"
  />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Generator GE3310 (Commercial - 1 KVA)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              High-performance industrial generator for continuous power supply.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 flex-1">
             <li>Max power: 1000W</li>
  <li>Rated power: 850W</li>
  <li>Rated Voltage: 220V–240V</li>
  <li>Frequency: 60Hz</li>
  <li>Motor type: Brush motor</li>
  <li>Phase: Single phase</li>
  <li>Engine type: Single cylinder, OHV, 4-stroke, air cooled</li>
  <li>Fuel type: Gasoline engine</li>
  <li>Fuel tank: 15 litres</li>
  <li>Continuous working hours: 6h</li>
  <li>Starting system: Recoil</li>
  <li>Dimensions: 477 × 385 × 422 mm</li>
            </ul>
            <a
              href="tel:9814008335"
              className="mt-4 inline-block text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Generator EYG3900GE */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
         <img
  src="/images/generator-eyg3900ge.png"
  alt="Generator EYG3900GE"
  className="md:w-1/2 w-full object-cover"
/>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Generator EYG3900GE (Commercial - 4 KVA)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              High-performance portable generator for continuous power supply.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 flex-1">
               <li>Max power: 5500W</li>
  <li>Rated power: 5000W</li>
  <li>Rated Voltage: 220V / 230V / 240V</li>
  <li>Frequency: 50Hz / 60Hz</li>
  <li>Motor type: Brush motor</li>
  <li>Phase: Single phase</li>
  <li>Engine type: Single cylinder, OHV, 4-stroke, air cooled</li>
  <li>Fuel type: Gasoline engine</li>
  <li>Displacement: 420CC</li>
  <li>Power/Speed: 9.0 kW / 3600 r/min</li>
  <li>Fuel tank: 25 litres</li>
  <li>Continuous working hours: 10h</li>
  <li>Starting system: Recoil / Electric start</li>
  <li>Dimensions: 680 × 515 × 535 mm</li>
  <li>Wheels and handles</li>
            </ul>
            <a
              href="tel:9814008335"
              className="mt-4 inline-block text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
