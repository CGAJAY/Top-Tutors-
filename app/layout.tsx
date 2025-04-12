// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Top Tutors Academy | Assignment Help & Academic Success",
  description:
    "Ace your assignments with Top Tutors Academy. Expert help, 0% plagiarism, and your first assignment free. Contact us today!",
  openGraph: {
    title: "Top Tutors Academy | Assignment Help & Academic Success",
    description:
      "Get professional assignment help from Top Tutors Academy. Free first assignment, 24/7 support, and top grades guaranteed!",
    url: "https://toptutors.academy",
    siteName: "Top Tutors Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Tutors Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tutors Academy | Assignment Help",
    description:
      "Free first assignment! Expert help with assignments, essays, and more at Top Tutors Academy.",
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}