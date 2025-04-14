// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashModal from './components/SplashModal';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Top Tutors Hub | Assignment Help & Academic Success",
  description:
    "Ace your assignments with Top Tutors Hub. Expert help, 0% plagiarism, and your first assignment free. Contact us today!",
  openGraph: {
    title: "Top Tutors Hub | Assignment Help & Academic Success",
    description:
      "Get professional assignment help from Top Tutors Hub. Free first assignment, 24/7 support, and top grades guaranteed!",
    url: "https://toptutors.academy",
    siteName: "Top Tutors Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Tutors Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tutors Hub | Assignment Help",
    description:
      "Free first assignment! Expert help with assignments, essays, and more at Top Tutors Hub.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SplashModal />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}