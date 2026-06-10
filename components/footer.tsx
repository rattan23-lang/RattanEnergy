import Link from "next/link";
import logoImg from "@/image/logo.png";
import Image from "next/image";
import RattanImg from "@/image/RATTAN energy.png"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Logo + description */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <Image
                src={RattanImg}
                alt="RattanEnergy"
                width={160}
                height={24}
                priority
                className="w-[150px] md:w-[180px] h-auto"
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-[240px]">
              Leading manufacturer of industrial generators and machinery solutions since 1995.
            </p>
            <Image
              src="/images/trustseal.png"
              alt="Trust Seal"
              width={100}
              height={44}
              className="mt-3 w-[100px] h-auto"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacypolicy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/dealership" className="text-sm text-muted-foreground hover:text-primary">Become a Dealer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-muted-foreground">Rattan Square</li>
              <li className="text-sm text-muted-foreground">Sector 23, Chandigarh</li>
              <li className="text-sm text-muted-foreground">+91-9814008335</li>
              <li className="text-sm text-muted-foreground break-words max-w-[200px] mx-auto">
                rattanenergyindia@gmail.com
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold">Business Hours</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 7:00 PM</li>
              <li className="text-sm text-muted-foreground">Sunday: 9:00 AM – 1:00 PM</li>
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
