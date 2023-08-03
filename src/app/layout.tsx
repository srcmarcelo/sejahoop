import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HoopBank',
  description: 'Faça um pix no exterior com HoopBank!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
