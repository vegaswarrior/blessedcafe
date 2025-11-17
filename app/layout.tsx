import type { Metadata } from 'next';
import '@/assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    template: `%s | Blessed Angel Cafe`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-linear-to-r from-purple-400 via-teal-400 to-sky-400 flex flex-col min-h-screen overflow-x-hidden'>
          <Header />
          {children}
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}



