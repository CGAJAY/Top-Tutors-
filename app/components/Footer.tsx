// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Top Tutors Hub Logo"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="flex flex-col gap-2">
          <Link href="/#welcome">Welcome</Link>
          <Link href="/samples">Samples</Link>
          <Link href="/#we-offer">We offer</Link>
          <Link href="/#how-it-works">How It Works</Link>
        </div>
  
        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/+254707919856?text=Hello%20Top%20Tutors!%20I%27m%20interested%20in%20assignment%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:Toptutors101@Gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Top Tutors Hub. All rights reserved.
      </div>
    </footer>
  );
}
