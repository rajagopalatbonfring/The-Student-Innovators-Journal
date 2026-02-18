"use client"

import React, { useState, useEffect } from 'react';
// import type { Metadata } from 'next';
import { Nunito, Balsamiq_Sans } from 'next/font/google';
import WelcomeModal from '@/components/welcome-modal';
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

// export const metadata: Metadata = {
//   title: 'TSIJ - Blueprint for Innovation',
//   description: 'A STEM journal by and for innovative students, sparking creativity and curiosity.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show only if not seen before
    const hasSeen = localStorage.getItem('tsijWelcomeSeen');
    if (!hasSeen) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('tsijWelcomeSeen', 'true');
    setShowModal(false);
  };


  return (
    <html lang="en" className={`${nunito.variable} ${balsamiqSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-background font-sans">
        <Header />

        <main className="flex-grow">
          {showModal && <WelcomeModal onClose={handleClose} />}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
