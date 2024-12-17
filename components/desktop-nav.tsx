"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function DesktopNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      <Link
        href="/"
        className={`nav-link ${isActive("/") ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`nav-link ${isActive("/about") ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        href="/products"
        className={`nav-link ${isActive("/products") ? "active" : ""}`}
      >
        Products
      </Link>
      <Link
        href="/contact"
        className={`nav-link ${isActive("/contact") ? "active" : ""}`}
      >
        Contact
      </Link>
      <Link
        href="/blogs"
        className={`nav-link ${isActive("/blogs") ? "active" : ""}`}
      >
       Blogs
      </Link>
      <Link
        href="/privacypolicy"
        className={`nav-link ${isActive("/privacypolicy") ? "active" : ""}`}
      >
       Privacy Policy
      </Link>
      <Button
        variant="secondary"
        asChild
        className="font-semibold"
      >
        <Link href="/dealership">Become a Dealer</Link>
      </Button>
    </nav>
  );
}