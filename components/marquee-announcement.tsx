"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeAnnouncement() {
  return (
    <Marquee className="marquee-container" speed={50}>
      <span className="mx-4">🎉 Special Offer: 10% off on all Summer generators !</span>
      <span className="mx-4">|</span>
      <span className="mx-4">📢 High Quality Products At Lowest Prices</span>
      <span className="mx-4">|</span>
      <span className="mx-4">🌟 Portable Powerful</span>
      <span className="mx-4">|</span>
      <span className="mx-4"> ✆ Call us now @ +91-7888733548 to get exciting deals</span>
    </Marquee>
  );
}