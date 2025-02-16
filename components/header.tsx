"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import Image from "next/image";
import logoImg from "@/image/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ms-10">
          <Image 
            src={logoImg} 
            alt="RattanEnergy" 
            className="h-16 w-16" 
            width={300} 
            height={200}
            priority
          />
          <span className="text-xl font-bold">Rattan Energy</span>
        </Link>
        <div className="flex items-center space-x-4">
          <DesktopNav />
          <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}