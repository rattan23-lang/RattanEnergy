import { useState } from "react";

const testimonials = [
  {
    text: "This Maruti Authorised Service Centre provides one of the best car service experiences. The technicians diagnose issues accurately and fix them with genuine Maruti parts.",
    author: "Anshuman Umar Vaishy",
    role: "Local Guide",
  },
  {
    text: "Outstanding workmanship and top-class service! The technicians handled my car with great care and did a thorough job.",
    author: "Rani Pal",
    role: "",
  },
  {
    text: "Excellent service experience! The team is well-trained, the process is smooth, and my car now runs like new.",
    author: "Ashish Maurya",
    role: "",
  },
  {
    text: "Great service and polite staff! My car was serviced perfectly, and they kept me updated throughout the process.",
    author: "Dharmendra Kumar",
    role: "",
  },
  {
    text: "This is a Maruti authorised service centre in Sector 23. If your car breaks down or needs regular service, you can rely on their team.",
    author: "Wanderlustkapoor",
    role: "Local Guide",
  },
];

export function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(testimonials.length - 3, 0) : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 mt-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">
        What Our Customers Say
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100 mr-4"
        >
          {"<"}
        </button>

        {/* Reviews row */}
        <div className="grid md:grid-cols-3 gap-6 flex-1">
          {testimonials.slice(startIndex, startIndex + 3).map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <div className="mt-4">
                <p className="font-semibold text-blue-600">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-100 ml-4"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
