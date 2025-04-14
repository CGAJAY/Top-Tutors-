// components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Welcome", href: "/" },
  { name: "We Offer", href: "/#we-offer" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "We Guarantee", href: "/#we-guarantee" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Get Started", href: "/#get-started" },
  { name: "Samples", href: "/samples" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const router = useRouter();

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);
  const closeMenu = (): void => setMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    closeMenu();
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        window.history.pushState(null, "", href);
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href); // Navigate to full route
    }
  };

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#welcome");
      const welcomeElement = document.getElementById("welcome");
      if (welcomeElement) {
        welcomeElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="w-full p-4 flex items-center justify-between bg-[#011b36] md:h-16 relative z-20">
        <Link
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavClick(e, "/")
          }
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={40}
            height={40}
            priority
            className="rounded-b-xl"
          />
          <div className="flex flex-col justify-center">
            <div className="font-bold text-orange-500">TOP TUTORS</div>
            <div className="text-orange-500">Hub</div>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(e, link.href)
              }
              className="text-gray-200 hover:text-orange-300 transition-colors duration-200 relative pb-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-orange-500 p-2 rounded-md backdrop-blur-md bg-white/10 shadow-sm"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <nav
        className={`md:hidden w-full bg-white text-black flex flex-col px-10 transition-all duration-300 ease-in-out absolute top-full left-0 z-10 ${
          menuOpen ? "h-[50vh] opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link: NavLink) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, link.href)
            }
            className="text-xl font-bold py-2 transition-all hover:text-orange-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}