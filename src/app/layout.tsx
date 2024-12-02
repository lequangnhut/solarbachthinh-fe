import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Roboto, Open_Sans } from 'next/font/google';

import '../styles/index.scss';
import { cn } from '@/utils';
import { Toaster } from '@/components/ui/Toaster';
import StoreProvider from '@/providers/StoreProvider';
import InitData from '@/components/commons/InitData';

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
    'Solar Bách Thịnh là một thương hiệu hàng đầu chuyên cung cấp và phân phối các thiết bị điện năng lượng mặt trời chất lượng cao. Với mục tiêu mang đến giải pháp năng lượng sạch và bền vững cho mọi gia đình và doanh nghiệp, chúng tôi cung cấp các sản phẩm như pin mặt trời, inverter, bộ điều khiển sạc, hệ thống điện năng lượng mặt trời trọn gói và các thiết bị liên quan khác.',
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
        <NextTopLoader color="#32C36C" showSpinner={false} />
        <StoreProvider>
          <InitData />
          <Toaster />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
