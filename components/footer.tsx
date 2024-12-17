import Link from "next/link";
import { Power } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Power className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Rattan Energy</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading manufacturer of industrial generators and machinery solutions since 1970.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/dealership" className="text-sm text-muted-foreground hover:text-primary">Become a Dealer</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">123 Industrial Ave</li>
              <li className="text-sm text-muted-foreground">Power City, PC 12345</li>
              <li className="text-sm text-muted-foreground">Phone: (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">Email: info@agenerator.com</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</li>
              <li className="text-sm text-muted-foreground">Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rattan Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}