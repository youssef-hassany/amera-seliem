"use client";

import { useState, useEffect } from "react";

const sections = ["home", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-indigo-600/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide hover:text-pink-300 transition"
        >
          Amera Seliem
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-pink-300 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
