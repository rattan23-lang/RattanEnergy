import Link from "next/link";
import logoImg from "@/image/logo.png";
import Image from "next/image";
import RattanImg from "@/image/RATTAN energy.png"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-2 gap-6 md:gap-8 text-center md:grid-cols-4">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
  {/* Logo */}
<Image
  src={RattanImg}
  alt="RattanEnergy"
  width={160}
  height={24}
  priority
  className="w-[140px] md:w-[180px] h-auto"
  style={{ height: 'auto' }}
/>

  {/* Trust Seal below logo */}
 

</div>
{/* <span className="text-xl font-bold">Rattan Energy</span> */}
            </Link>
            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              Leading manufacturer of industrial generators and machinery solutions since 1995.
            </p>
            <Image
  src="/images/trustseal.png"
  alt="Trust Seal"
  width={100}
  height={44}
  className="mt-2 w-[90px] md:w-[120px] h-auto"
  style={{ height: 'auto' }}
/>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm md:text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 md:mt-4 space-y-1 md:space-y-2">
              <li><Link href="/about" className="text-xs md:text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="text-xs md:text-sm text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacypolicy" className="text-xs md:text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/dealership" className="text-xs md:text-sm text-muted-foreground hover:text-primary">Become a Dealer</Link></li>
              <li><span className="text-xs md:text-sm text-muted-foreground">GSTIN:04ADGPA1811N1ZZ</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm md:text-lg font-semibold">Contact</h3>
            <ul className="mt-3 md:mt-4 space-y-1 md:space-y-2">
              <li className="text-xs md:text-sm text-muted-foreground">Rattan Square</li>
              <li className="text-xs md:text-sm text-muted-foreground">Sector 23, Chandigarh</li>
              <li className="text-xs md:text-sm text-muted-foreground">Phone: +91-9814008335</li>
              <li className="text-xs md:text-sm text-muted-foreground break-all">Email: RattanEnergyindia@gmail.com</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <h3 className="text-sm md:text-lg font-semibold">Business Hours</h3>
            <ul className="mt-3 md:mt-4 space-y-1 md:space-y-2">
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