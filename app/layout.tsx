import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://toolscout.juyeop198.chatgpt.site'),
  title: { default: 'ToolScout - Find the right AI tool', template: '%s | ToolScout' },
  description: 'Independent AI tool comparisons for creators.',
  alternates: { canonical: '/' },
  openGraph: { title: 'ToolScout - Find the right AI tool', description: 'Independent AI tool comparisons for creators.', url: 'https://toolscout.juyeop198.chatgpt.site', siteName: 'ToolScout', type: 'website' },
  twitter: { card: 'summary', title: 'ToolScout - Find the right AI tool', description: 'Independent AI tool comparisons for creators.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
