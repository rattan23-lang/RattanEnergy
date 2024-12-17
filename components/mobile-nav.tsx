"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative h-6 w-6">
                  <motion.span
                    className="absolute left-0 top-2.5 h-0.5 w-6 bg-current"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                  />
                  <motion.span
                    className="absolute left-0 top-2.5 h-0.5 w-6 bg-current"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -45 }}
                  />
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
          <VisuallyHidden>Toggle menu</VisuallyHidden>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle> </SheetTitle>
        <nav className="flex flex-col space-y-4 mt-6">
          <Link
            href="/"
            className={`nav-link text-lg ${isActive("/") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link text-lg ${isActive("/about") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className={`nav-link text-lg ${isActive("/products") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`nav-link text-lg ${isActive("/contact") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            Contact
          </Link>
          <Link
            href="/blogs"
            className={`nav-link text-lg ${isActive("/blogs") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            Blogs
          </Link>
          <Link
            href="/privacypolicy"
            className={`nav-link text-lg ${isActive("/privacypolicy") ? "active" : ""}`}
            onClick={() => onOpenChange(false)}
          >
            Privacy Policy
          </Link>
          <Button
            variant="secondary"
            asChild
            className="mt-4 w-full font-semibold"
            onClick={() => onOpenChange(false)}
          >
            <Link href="/dealership">Become a Dealer</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}