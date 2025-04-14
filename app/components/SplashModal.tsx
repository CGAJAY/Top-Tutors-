// app/components/SplashModal.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SplashModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-white p-12 rounded-xl text-center max-w-sm shadow-lg mx-auto pointer-events-auto">
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
          <Link
            href="/samples"
            className="mt-4 text-sm text-white rounded-md bg-blue-500 hover:bg-blue-700 py-2 px-4"
          >
            View Our Samples
          </Link>
        </div>
        <button
          onClick={() => setShow(false)}
          className="mt-4 text-sm text-gray-500 border-2 hover:border-none hover:text-white rounded-md hover:bg-red-500 py-2 px-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}
