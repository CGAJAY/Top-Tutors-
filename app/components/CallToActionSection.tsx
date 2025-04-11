// components/CallToActionSection.tsx
"use client";

import Image from "next/image";

export default function CallToActionSection() {
  return (
    <section
      id="we-offer"
      className="w-full bg-blue-100 py-4 md:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a
            href="#get-started"
            className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
          >
            Get A Free Assignment
          </a>
          <a
            href="https://wa.me/+254707919856"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={20}
              height={20}
              className="inline-block"
            />
            WhatsApp
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/cta-image.jpg"
            alt="Top Tutors Academy Assignment Help"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}