"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      
      {/* PRODUCTS MENU WITH SUBMENUS */}
      <div className="relative group">
  <Link
    href="/products"
    className={`nav-link ${isActive("/products") ? "active" : ""}`}
  >
    Products
  </Link>

  {/* Dropdown menu */}
  <div className="absolute left-0 top-full hidden group-hover:block hover:block bg-white shadow-lg rounded-md">
    <ul className="py-2 w-40">
      <li>
        <Link
          href="/products/tyres"
          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
        >
          Tyres
        </Link>
      </li>
      <li>
        <Link
          href="/products/generators"
          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
        >
          Generators
        </Link>
      </li>
    </ul>
  </div>
</div>

      <Link
        href="/service"
        className={`nav-link ${isActive("/service") ? "active" : ""}`}
      >
        Services
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

    </nav>
  );
}
