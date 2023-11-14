import { Roboto, Inter, Lusitana, Roboto_Mono } from 'next/font/google';
 
export const roboto = Roboto({ weight: '400' , subsets: ['latin'] });
export const roboto_mono = Roboto_Mono({ weight: '400' , subsets: ['latin'] });
 
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});