"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import Image from "next/image";
import Script from "next/script";
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
            <p className="text-lg font-bold text-blue-600">+91 7888733548</p>

            <div className="flex justify-center space-x-3">
              <a
                href="tel:+919876543210"
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

      {/* Google Tag Manager Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10941887411"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10941887411');
        `}
      </Script>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* LEFT: Logo + Desktop Nav */}
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2 ms-8">
              <Image
                src={RattanImg}
                alt="RattanEnergy"
                className="h-8 w-[200px]"
                width={500}
                height={200}
                priority
              />
            </Link>
            <DesktopNav />
          </div>

          {/* RIGHT: Become Dealer + Call Now + Mobile Nav + Mode Toggle */}
          <div className="flex items-center space-x-4 me-8">
            {/* Desktop-only Become Dealer button */}
            <Button
              variant="secondary"
              asChild
              className="font-semibold hidden md:inline-flex"
            >
              <Link href="/dealership">Become a Dealer</Link>
            </Button>

            {/* Desktop-only Call Now button that opens popup */}
            <Button
              variant="secondary"
              className="font-semibold hidden md:inline-flex"
              onClick={() => setShowCallPopup(true)}
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
