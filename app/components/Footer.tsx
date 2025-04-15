// app/components/Footer.tsx
"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left">

        {/* Contact Details */}
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">WeChat ID:</span>{" "}
            <span className="text-green-600">Toptutors_hub</span>
          </p>

          <p>
            <span className="font-semibold">iMessage:</span>{" "}
            <a href="sms:+254707919856" className="text-green-600 hover:underline">
              +254707919856
            </a>
          </p>

          <p>
            <span className="font-semibold">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/254707919856?text=Hello%20Top%20Tutors!%20I'm%20interested%20in%20assignment%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +254707919856
            </a>
          </p>

          <p>
            <span className="font-semibold">Telegram:</span>{" "}
            <a
              href="https://t.me/Toptutors_Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              @Toptutors_Hub
            </a>
          </p>

          <p>
            <a
              href="mailto:Toptutors101@Gmail.com"
              className="text-blue-600 hover:underline"
            >
              Email: Toptutors101@Gmail.com
            </a>
          </p>
        </div>

        {/* WeChat QR Code */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="/wechat-qr.jpeg" target="_blank" rel="noopener noreferrer">
            <Image
              src="/wechat-qr.jpeg"
              alt="Scan to add on WeChat"
              width={120}
              height={120}
              className="rounded shadow-md"
            />
          </a>
          <a
            href="/wechat-qr.jpeg"
            download
            className="text-sm text-blue-600 hover:underline"
          >
            Download WeChat QR Code
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Top Tutors Hub. All rights reserved.
      </div>
    </footer>
  );
}
