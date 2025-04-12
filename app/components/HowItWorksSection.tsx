// components/HowItWorksSection.tsx
"use client";

interface Step {
  number: number;
  text: string;
}

const steps: Step[] = [
  { number: 1, text: "Send your assignment to us" },
  { number: 2, text: "Get a Quote" },
  { number: 3, text: "Negotiate" },
  { number: 4, text: "A writer completes your assignment" },
  { number: 5, text: "You receive your assignment" },
  { number: 6, text: "You make payment" },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-white ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          How It Works
        </h2>

        {/* Steps */}
        <div>
          {steps.map((step: Step) => (
            <div
              key={step.number}
              className="flex flex-col items-center bg-[#011b36] pt-4 pb-4 px-6 rounded-b-full"
            >
              {/* Step Number */}
              <div className="text-orange-500 flex items-center justify-cente font-bold text-xl mb-4">
                {step.number}
              </div>

              {/* Step Text */}
              <span className="text-white text-lg sm:text-xl mx-10 font-medium text-center">
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}