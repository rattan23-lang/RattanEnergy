"use client";

import { useState } from "react";
import Link from "next/link";
import { Power } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ms-10">
          <Power className="h-6 w-6 text-primary" />
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