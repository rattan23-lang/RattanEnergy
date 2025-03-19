import './globals.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Jost } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import MarqueeAnnouncement from '@/components/marquee-announcement';
import Script from 'next/script';
import Image from 'next/image';
import Head from 'next/head';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'Rattan Energy - Generators',
  description: 'Leading manufacturer of commercial and residential generators across India.At Rattan Energy, we are committed to delivering top-quality generators in commercial as well as residential sector across India. With a strong focus on performance, durability, and innovation, we provide power solutions that keep your world running without interruption.From sales to expert installation, maintenance, and repairs, our team ensures you get the best service and support. Whether for commercial or residential use, we help you find the perfect generator to match your needs. Reliable power starts here! ⚡',
  twitter: {
    card: "summary_large_image",
    description: "Leading manufacturer of commercial and residential generators across India. Get Best Deals on generators now"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Noscript fallback for Facebook Pixel */}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3941434876174089&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </Head>
      <body className={`${jost.variable} font-jost`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MarqueeAnnouncement />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        
        {/* Facebook Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3941434876174089');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
      
     
      
      <GoogleAnalytics gaId="G-JGFQ9RXWXK" />
    </html>
  );
}