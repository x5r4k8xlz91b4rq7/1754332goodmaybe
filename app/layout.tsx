import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import CursorAura from '@/components/luxe/CursorAura';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'DealVault Luxe | Curated. Verified. Exclusive.',
  description: 'Verified deals on limited edition pieces, luxury watches, sneakers, bags and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <CursorAura />
        {children}
      </body>
    </html>
  );
}
