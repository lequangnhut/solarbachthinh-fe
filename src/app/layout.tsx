import type { Metadata } from 'next';
import { Roboto, Open_Sans } from 'next/font/google';

import '../styles/index.scss';
import { cn } from '@/utils';
import { Toaster } from '@/components/ui/Toaster';
import StoreProvider from '@/providers/StoreProvider';

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  style: ['normal', 'italic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Solar Bách Thịnh',
  description:
    'Welcome to our pet rescue website! We are dedicated to finding loving homes for animals in need. Browse our available pets and help us make a difference in their lives.',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: `/assets/icons/logo.png`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn('min-h-screen bg-background antialiased', roboto.variable, openSans.variable)}
      >
        <StoreProvider>
          <Toaster />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
