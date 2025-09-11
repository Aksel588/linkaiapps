import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aqwel AI - Revolutionary Artificial Intelligence Solutions",
  description: "Aqwel AI delivers cutting-edge artificial intelligence solutions that transform businesses and drive innovation. Discover the future of AI technology.",
  keywords: "AI, artificial intelligence, machine learning, business automation, AI solutions",
  authors: [{ name: "Aqwel AI" }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Aqwel AI - Revolutionary Artificial Intelligence Solutions",
    description: "Discover the future of AI technology with Aqwel AI's cutting-edge solutions.",
    type: "website",
    images: [
      {
        url: '/icon.svg',
        width: 32,
        height: 32,
        alt: 'Aqwel AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqwel AI - Revolutionary Artificial Intelligence Solutions',
    description: 'Discover the future of AI technology with Aqwel AI\'s cutting-edge solutions.',
    images: ['/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
