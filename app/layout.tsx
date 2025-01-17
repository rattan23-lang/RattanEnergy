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
  title: 'Rattan Energy - Industrial Machinery Solutions',
  description: 'Leading manufacturer of industrial generators and machinery solutions',
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