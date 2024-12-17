"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeAnnouncement() {
  return (
    <Marquee className="marquee-container" speed={50}>
      <span className="mx-4">🎉 Special Offer: 15% off on all industrial generators this month!</span>
      <span className="mx-4">|</span>
      <span className="mx-4">📢 New Product Launch: Smart Power Series 2024</span>
      <span className="mx-4">|</span>
      <span className="mx-4">🌟 24/7 Customer Support Available</span>
      <span className="mx-4">|</span>
      <span className="mx-4">🚚 Free Shipping on Orders Over $5000</span>
    </Marquee>
  );
}