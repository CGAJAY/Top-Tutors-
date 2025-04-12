// components/WhatsAppButton.tsx
"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5-second delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Wave Animations */}
      <span className="absolute inset-0 bg-green-600 rounded-full animate-wave animate-delay-0 opacity-40" />
      <span className="absolute inset-0 bg-green-600 rounded-full animate-wave animate-delay-300 opacity-40" />
      <span className="absolute inset-0 bg-green-600 rounded-full animate-wave animate-delay-600 opacity-40" />

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/+254707919856?text=Hello%20Top%20Tutors!%20I%27m%20interested%20in%20assignment%20help."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </Link>
    </div>
  );
}