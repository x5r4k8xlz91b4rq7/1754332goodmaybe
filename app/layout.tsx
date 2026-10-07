import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import CursorAura from '@/components/luxe/CursorAura';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Vanta Row Luxe | Culture, Curated.',
  description: 'Sneakers, trading cards, streetwear, football kits, collectibles and collab watches people are actually looking for.',
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
