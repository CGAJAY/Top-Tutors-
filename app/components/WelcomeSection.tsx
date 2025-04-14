// components/HeroSection.tsx
"use client";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="w-full bg-white pt-20 md:pt-24 md:pb-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Heading */}
        <h1 className="text-[#011b36] text-3xl sm:text-4xl md:text-5xl font-bold py-4 mb-4">
          WELCOME TO TOP TUTORS HUB!
        </h1>

        {/* Subheading */}
        <h2 className="text-orange-500 text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          - YOUR ULTIMATE ASSIGNMENT HELP SOLUTION
        </h2>

        {/* Paragraphs */}
        <div className="prose prose-sm sm:prose md:prose-lg max-w-3xl  text-gray-800">
          <p className="mb-6">
            Are looming deadlines causing you stress? Do you find yourself
            struggling to juggle multiple assignments & college life at once? Look
            no further! Top Tutors Hub is here to rescue you from academic
            turmoil and pave your way to success.
          </p>

          <p>
            At Top Tutors, we understand the challenges students face in meeting the demands of their coursework: College life is complicated. That&apos;s why we offer comprehensive assignment help services tailored to your specific needs. Whether you&apos;re grappling with a complex essay, a daunting research paper, or a tricky programming assignment, our team of expert tutors and writers is dedicated to delivering high-quality, customized solutions that boost your grades and reduce your stress.
          </p>
        </div>
      </div>
    </section>
  );
}