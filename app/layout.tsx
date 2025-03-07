import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import MarqueeAnnouncement from '@/components/marquee-announcement';

const jost = Jost({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'Rattan Energy - Generators',
  description: 'Leading manufacturer of commercial and residential generators across India.At Rattan Energy, we are committed to delivering top-quality generators in commercial as well as residential sector across India. With a strong focus on performance, durability, and innovation, we provide power solutions that keep your world running without interruption.From sales to expert installation, maintenance, and repairs, our team ensures you get the best service and support. Whether for commercial or residential use, we help you find the perfect generator to match your needs. Reliable power starts here! ⚡',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}