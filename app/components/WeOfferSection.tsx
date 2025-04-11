// components/WeOfferSection.tsx
"use client";

import { Check } from "lucide-react";

const services: string[] = [
  "Online Course Assistance",
  "Lab Report Writing",
  "Literature Review",
  "Case Study Analysis",
  "Admission Essay Writing",
  "Business Plan Creation",
  "Article Critique",
  "Creative Writing",
  "Resume/CV Writing",
  "Proofreading and Editing",
];

export default function WeOfferSection(){
  return (
    <section id="we-offer" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          We Offer:
        </h2>

        {/* Services List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl mx-auto">
          {services.map((service: string, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full shadow-sm">
                <Check className="text-white" size={15} />
              </div>
              <span className="text-gray-700 text-lg">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}