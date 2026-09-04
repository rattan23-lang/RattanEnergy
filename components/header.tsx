"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RattanImg from "@/image/RATTAN energy.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  return (
    <>
      {/* Call Now Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center space-y-4">
            <h2 className="text-xl font-semibold">Call Us</h2>
            <p className="text-lg font-bold text-blue-600">+91 9814008335</p>

            <div className="flex justify-center space-x-3">
              <a
                href="tel:+919814008335"
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Call Now
              </a>

              <button
                onClick={() => setShowCallPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-3 md:px-6">
          {/* LEFT: Logo + Desktop Nav */}
          <div className="flex items-center space-x-4 md:space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={RattanImg}
                alt="RattanEnergy"
                width={160}
                height={24}
                priority
                className="w-[130px] h-auto sm:w-[160px] md:w-[200px]"
                style={{ height: 'auto' }}
              />
            </Link>
            <DesktopNav />
          </div>

          {/* RIGHT: Become Dealer + Call Now + Mobile Nav + Mode Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop-only Become Dealer button */}
            


            <div className="hidden md:flex items-center gap-3">
              <!--<span className="text-[11px] font-bold text-black dark:text-white">GSTIN: 04ADGPA1811N1ZZ</span>-->
              <Button
                variant="secondary"
                asChild
                className="font-semibold"
              >
                <Link href="/dealership">Become a Dealer</Link>
              </Button>
            </div>

            {/* Desktop-only Call Now button that opens popup */}
            {/* Desktop-only Call Now button that opens popup */}
<Button
  variant="secondary"
  className="font-semibold hidden md:inline-flex"
  onClick={() => {
    // ✅ Fire Google Ads conversion tracking
    if (typeof window !== "undefined" && typeof (window as any).gtag_report_call === "function") {
      (window as any).gtag_report_call("tel:+919814008335");
    }

    // ✅ Then open your popup
    setShowCallPopup(true);
  }}
>
  Call Now
</Button>


            <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} />
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
