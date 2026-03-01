import React from "react";
import Image from "next/image";

const page: React.FC = () => {
  const heroImage =
    "https://res.cloudinary.com/dzuz1ba3u/image/upload/v1772351099/WhatsApp_Image_2026-02-26_at_9.09.26_PM_hq8ztc.jpg";

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        <div className="h-[250px] min-h-[250px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
          <div className="w-full max-w-[1116px] mx-auto">
            <Image
              src={heroImage}
              alt="Rattan Energy"
              width={1116}
              height={1031}
              className="w-full h-auto object-contain"
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR AUTHORIZED MARUTI SERVICE CENTER */}
      <section className="w-full py-12 px-4 flex justify-center bg-black">
        <div className="max-w-5xl text-white space-y-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose Our Authorized Maruti Service Center?
          </h2>

          {/* Professional Excellence */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Excellence</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold">Maruti Trained Technicians:</span> 
                {" "}Your car is handled by factory-certified experts who know every Maruti Suzuki model inside out.
              </li>
              <li>
                <span className="font-semibold">Advanced Diagnostic Tools:</span> 
                {" "}We use the latest computerized systems for precise fault detection and high-tech repairs.
              </li>
              <li>
                <span className="font-semibold">Genuine Spare Parts (MGP):</span> 
                {" "}We exclusively use 100% authentic Maruti Genuine Parts to ensure longevity and safety.
              </li>
            </ul>
          </div>

          {/* Comprehensive Service Range */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Service Range</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold">Periodic Maintenance Service (PMS):</span> 
                {" "}Routine check-ups to keep your car’s warranty intact and performance optimized.
              </li>
              <li>
                <span className="font-semibold">Wheel Care Services:</span> 
                {" "}Precision 3D wheel alignment, balancing, and tire rotation for a smoother drive.
              </li>
            </ul>
          </div>

          {/* Customer-Centric Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Customer-Centric Features</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold">Pick-up & Drop Facility:</span> 
                {" "}Convenient doorstep car collection and delivery to save you time.
              </li>
              <li>
                <span className="font-semibold">Transparent Billing:</span> 
                {" "}Detailed digital estimates provided upfront with no hidden costs.
              </li>
              <li>
                <span className="font-semibold">Express Service:</span> 
                {" "}Quick 90-minute service options for routine maintenance.
              </li>
              <li>
                <span className="font-semibold">Comfortable Lounge:</span> 
                {" "}Relax in our air-conditioned waiting area with Wi-Fi and refreshments while your car is serviced.
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Location & Contact</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold">Strategic Location:</span> 
                {" "}Easily accessible in the heart of Sector 23, Chandigarh.
              </li>
              <li>
                <span className="font-semibold">Service Reminders:</span> 
                {" "}Automated alerts for your next scheduled maintenance.
              </li>
            </ul>
          </div>

          {/* Call To Action */}
          <div className="text-center pt-6">
            <p className="text-xl font-semibold mb-2">
              Ready to give your car the best care?
            </p>
            <p className="text-lg">
              📞 Call us at <span className="font-bold">9814008335</span> to book your slot or walk in today!
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default page;
