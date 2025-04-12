// components/ReviewsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
    id: string;
  topic: string;
  rating: number;
  description: string;
}

interface Stat {
  icon: React.ReactNode; // Fixed: Replaced 'any' with 'React.ReactNode'
  rating: string;
  topic: string;
}

const stats: Stat[] = [
  {
    icon: <Star className="text-orange-500" size={24} fill="currentColor" />,
    rating: "5.0",
    topic: "Assignment",
  },
  {
    icon: <Star className="text-orange-500" size={24} fill="currentColor" />,
    rating: "4.9",
    topic: "Lab Report",
  },
  {
    icon: <Star className="text-orange-500" size={24} fill="currentColor" />,
    rating: "4.9",
    topic: "Essay",
  },
  {
    icon: <Star className="text-orange-500" size={24} fill="currentColor" />,
    rating: "5.0",
    topic: "Resume",
  },
];

const reviews: Review[] = [
  {
    id: "Customer-4728403",
    topic: "Assignment",
    rating: 5,
    description:
      "The assignment was perfectly written, delivered on time, and scored an A+. Top Tutors Academy is my go-to service!",
  },
  {
    id: "Customer-5698324",
    topic: "Lab Report",
    rating: 5,
    description:
      "My lab report was detailed and followed all guidelines. Minor tweak needed, but overall fantastic work!",
  },
  {
    id: "Customer-2026759",
    topic: "Essay",
    rating: 5,
    description:
      "The essay had excellent arguments and flawless MLA formatting. Quick turnaround and great communication.",
  },
  {
    id: "Customer-1328654",
    topic: "Resume",
    rating: 5,
    description:
      "My resume was transformed into a professional masterpiece. Landed interviews thanks to Top Tutors!",
  },
  {
    id: "Customer-9028345",
    topic: "General Service",
    rating: 5,
    description:
      "From quote to delivery, the process was seamless. Their 24/7 support made all the difference!",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="w-full bg-blue-100 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          What Our Customers Say About Us
        </h2>

        {/* Stats */}
        <div className="flex flex-row justify-center gap-6 sm:gap-8 mb-12">
          {stats.map((stat: Stat, index: number) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <span className="text-gray-700 text-lg font-semibold mt-2">
                {stat.rating}
              </span>
              <span className="text-gray-600 text-base text-center">
                {stat.topic}
              </span>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review: Review, index: number) => (
                <div key={index} className="min-w-full flex justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h3 className="text-gray-800 text-xl font-semibold mb-2">
                      {review.id}
                    </h3>
                    <div className="flex mb-3">
                      {Array.from({ length: Math.floor(review.rating) }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="text-orange-500"
                            size={20}
                            fill="currentColor"
                          />
                        )
                      )}
                      {review.rating % 1 !== 0 && (
                        <Star
                          className="text-orange-500"
                          size={20}
                          fill="none"
                          style={{
                            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                          }}
                        />
                      )}
                    </div>
                    <h4 className="text-gray-500 text-base font-medium mb-2">
                      {review.topic}
                    </h4>
                    <p className="text-gray-600 text-sm">{review.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-black"
            aria-label="Previous review"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-black"
            aria-label="Next review"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_: Review, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}