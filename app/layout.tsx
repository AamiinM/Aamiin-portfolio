import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const display = Manrope({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Aamiin Wanis — Portfolio',
  description: 'Computer science, cinematography, and modern product craftsmanship.',
  openGraph: {
    title: 'Aamiin Wanis',
    description: 'Code in systems. See in scenes. Build with intent.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
