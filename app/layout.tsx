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
  description: 'Leading manufacturer of commercial and residential generators',
  icons: {
    apple: '/image/apple-touch-icon.png',
    icon: [
      { url: '/image/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/image/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
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