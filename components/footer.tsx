import Link from "next/link";
import logoImg from "@/image/logo.png";
import Image from "next/image";
import RattanImg from "@/image/RATTAN energy.png"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2">
            {/* <Image
            src={logoImg} 
            alt="RattanEnergy" 
            className="h-16 w-16" 
            width={300} 
            height={200}
            priority
          /> */}
          <Image 
            src={RattanImg} 
            alt="RattanEnergy" 
            className="h-8 w-[200px]" 
            width={500} 
            height={200}
            priority
          />
              {/* <span className="text-xl font-bold">Rattan Energy</span> */}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading manufacturer of industrial generators and machinery solutions since 1995.
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
              <li className="text-sm text-muted-foreground">Rattan Square</li>
              <li className="text-sm text-muted-foreground">Sector 23, Chandigarh</li>
              <li className="text-sm text-muted-foreground">Phone: +91-7888733548 , +91-9814008335</li>
              <li className="text-sm text-muted-foreground">Email: RattanEnergyindia@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</li>
              <li className="text-sm text-muted-foreground">Sunday: 9:00 AM - 1:00 PM</li>
              <li className="text-sm text-muted-foreground"></li>
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