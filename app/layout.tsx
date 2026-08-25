import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grandstrategy.llc'),
  title: 'AI Workforce Transformation, Skills and Change Readiness | Grand Strategy Consulting',
  description: 'Grand Strategy Consulting helps organizations assess AI readiness, build role-specific AI skills, strengthen emotional intelligence and sustain adoption through Learning Circles, employee engagement surveys and change support.',
  openGraph: {
    title: 'AI Access Is Not AI Readiness | Grand Strategy Consulting',
    description: 'Build a workforce that can use AI well and lead the change around it.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AI access is not AI readiness' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Access Is Not AI Readiness | Grand Strategy Consulting',
    description: 'Build a workforce that can use AI well and lead the change around it.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
