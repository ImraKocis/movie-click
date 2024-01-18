import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import React from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import Providers from '@/app/util/Providers';

const lato = Lato({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie Click',
  description: 'Next JS and React Training Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
