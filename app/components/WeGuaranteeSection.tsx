// components/WeGuaranteeSection.tsx
"use client";

import { Check } from "lucide-react";
import Image from "next/image";

const guarantees: string[] = [
  "Grade A",
  "0% Plagiarism",
  "Proper APA/MLA/HAVARD Formatting, referencing & delivery",
  "On time delivery",
  "24/7 Support",
];

export default function WeGuaranteeSection() {
  return (
    <section id="we-guarantee" className="w-full bg-white py-4">
        {/* Image */}
        <div className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/boy-cartoon.jpg"
            alt="A boy cartoon reeding books"
            width={800}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-3">
          We Guarantee
        </h2>

        {/* Guarantees List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2  max-w-3xl mx-auto">
          {guarantees.map((guarantee: string, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full shadow-sm">
                <Check className="text-white" size={20} />
              </div>
              <span className="text-gray-700 text-lg">{guarantee}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}