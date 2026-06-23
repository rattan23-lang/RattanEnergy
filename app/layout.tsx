import './globals.css';
import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Jost } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import MarqueeAnnouncement from '@/components/marquee-announcement';
import { WhatsAppWidget } from '@/components/whatsapp-widget';
import Script from 'next/script';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${jost.variable} font-jost`}>
        {/* Noscript fallback for Facebook Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3941434876174089&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
     <ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem={false}
  disableTransitionOnChange
>


          <MarqueeAnnouncement />
          <Header />
          <main className="min-h-screen min-h-dvh">{children}</main>
          <Footer />
          <Toaster />
          <WhatsAppWidget />
          <GoogleAnalytics gaId="G-JGFQ9RXWXK" />
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
<Script id="force-light" strategy="beforeInteractive">
  {`
    try {
      localStorage.removeItem('theme'); // clear any saved theme
    } catch (e) {}
  `}
</Script>

        {/* Google Ads Global Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10941887411"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'AW-10941887411');
            `,
          }}
        />
          {/* Sign-up tracking */}
        <Script id="signup-tracking" strategy="afterInteractive">
          {`
            function gtag_report_signup(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-10941887411/gTzbCPfw_a8cELPnv-Eo',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        {/* Call Now tracking */}
        <Script id="call-tracking" strategy="afterInteractive">
          {`
            function gtag_report_call(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-10941887411/2c-rCPTw_a8cELPnv-Eo',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
