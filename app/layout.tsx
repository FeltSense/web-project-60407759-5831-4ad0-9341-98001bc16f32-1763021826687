import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechBusiness - Transform Your Business with Technology',
  description: 'Leading technology solutions provider offering custom software development, cloud infrastructure, cybersecurity, and digital transformation services.',
  keywords: 'technology, software development, cloud solutions, cybersecurity, digital transformation, mobile apps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}