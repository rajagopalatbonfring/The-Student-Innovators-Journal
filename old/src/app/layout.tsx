import type { Metadata } from 'next';
import { Nunito, Balsamiq_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

const balsamiqSans = Balsamiq_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-balsamiq-sans',
});

export const metadata: Metadata = {
  title: 'TSIJ - The Student Innovators Journal',
  description: 'A STEM journal by and for innovative students, sparking creativity and curiosity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${balsamiqSans.variable} light`}>
      <body className="flex flex-col min-h-screen bg-background font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
