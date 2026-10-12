import { Plus_Jakarta_Sans } from 'next/font/google';
import Preloader from '@/components/Preloader';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Alurin - Platform Operasional Bisnis',
  description: 'Kelola Proses Bisnis Anda Lebih Cepat dan Rapi dengan Alurin.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className={`${jakarta.className} font-sans`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
