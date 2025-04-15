// app/components/SplashModal.tsx
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function SplashModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/40">
      <div className="relative bg-white p-12 rounded-xl text-center max-w-sm shadow-lg mx-auto ">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-green-700">First Assignment is 100% Free!</h2>
        <p className="mb-6 text-gray-700">Contact us now to get started.</p>
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/+254707919856?text=Hello%20Top%20Tutors!%20I%27m%20interested%20in%20assignment%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>
          
        </div>
      </div>
    </div>
  );
}