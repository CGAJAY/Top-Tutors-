// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashModal from "./components/SplashModal";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Top Tutors Hub | Expert Assignment Help & Academic Success",
    description:
        "Ace your assignments with Top Tutors Hub. Expert help, 0% plagiarism, and your first assignment free. Contact us today!",
    keywords: [
        "assignment help",
        "university assignment help",
        "online tutors",
        "Online Course Assistance",
        "Literature Review",
        "Admission Essay Writing",
        "Article Critique",
        "Resume/CV Writing",
        "Lab Report Writing",
        "Case Study Analysis",
        "Business Plan Creation",
        "Creative Writing",
        "Proofreading and Editing",
        "academic writing services",
        "essay help",
        "programming assignment help",
        "research paper assistance",
        "student homework help",
        "Top Tutors Hub",
        "Tutors",
        "Top",
        "Top Tutors Academy",
    ],
    openGraph: {
        title: "Top Tutors Hub | Expert Assignment Help & Academic Success",
        description:
            "Get professional assignment help from Top Tutors Hub. Free first assignment, 24/7 support, and top grades guaranteed!",
        url: "https://toptutorshub.com",
        siteName: "Top Tutors Hub",
        images: [
            {
                url: "https://toptutorshub.com/logo.jpg",
                width: 1200,
                height: 630,
                alt: "Top Tutors Hub",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/logo.jpg",
        other: {
            rel: "icon",
            url: "/favicon.ico",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://toptutorshub.com",
        languages: {
            "en-ca": "https://toptutorshub.com",
            "en-gb": "https://toptutorshub.com",
        },
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
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="Top Tutors Hub" />

                {/* Apple Touch Icon */}
                <link rel="apple-touch-icon" href="/logo.jpg" />

                {/* Web Manifest */}
                <link rel="manifest" href="/site.webmanifest" />

                {/* Favicon (standard for most browsers) */}
                <link rel="icon" href="/favicon.ico" sizes="any" />

                {/* Structured Data for Google */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Top Tutors Hub",
                            url: "https://toptutorshub.com",
                            logo: "https://toptutorshub.com/logo.jpg",
                        }),
                    }}
                />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <SplashModal />
                {children}
                <Footer />
                <WhatsAppButton />
                <Analytics />
            </body>
        </html>
    );
}
