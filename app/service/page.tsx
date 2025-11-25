import React from "react";
import Image from "next/image";

const page: React.FC = () => {
  const heroImage =
    "https://res.cloudinary.com/dzuz1ba3u/image/upload/v1763996099/WhatsApp_Image_2025-11-23_at_18.50.57_95b394d8_rcz0uc.jpg";

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

      {/* MARUTI AUTHORISED SERVICE CENTRE SECTION */}
      <section className="w-full py-12 px-4 flex justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Maruti Authorised Service Centre
          </h2>

          <div className="text-white text-lg leading-relaxed space-y-6">
            <p>
              At <span className="font-semibold">Rattan Motors</span>, we take
              pride in being a trusted Maruti Authorized Service Station located
              in Sector 23, Chandigarh. Our team is committed to delivering{" "}
              <span className="font-semibold">
                reliable, transparent, and high-quality
              </span>{" "}
              car care for all Maruti Suzuki vehicles. Whether it's routine
              maintenance, expert repairs, accident work, wheel alignment, or
              advanced engine diagnostics, every service is carried out using{" "}
              <span className="font-semibold">100% genuine Maruti parts</span>{" "}
              and advanced diagnostic equipment to ensure long-lasting
              performance. With skilled technicians and a smooth pick-and-drop
              facility, we ensure a seamless, hassle-free, and customer-first
              service experience from start to finish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
