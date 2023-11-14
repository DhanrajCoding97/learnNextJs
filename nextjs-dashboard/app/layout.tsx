import '@/app/ui/global.css';
import '@/app/ui/fonts'
import { roboto, lusitana , roboto_mono } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} antialiased`}>{children}</body>
    </html>
  );
}
