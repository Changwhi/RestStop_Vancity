"use client";
import React, { useState } from "react";

const Header = () => {
  const HEADER_TITLE = "RestStop Vancity";
  const HEADER_SUBTITLE1 = "Find My Washroom 🚽";
  const HEADER_SUBTITLE2 = "Testimonial 👨‍👩‍👧‍👦";
  const HEADER_SUBTITLE3 = "Contact 📬";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (sectionId: string) => {

    const currentSection: any= document.getElementById(sectionId);
    if (currentSection) {
      currentSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-3 flex justify-between items-center">
        <h1 className="text-lg md:text-xl">
          <a href="/">{HEADER_TITLE}</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-md" aria-label="main">
            <a
              href="#"
              className="hover:opacity-70"
              onClick={() => handleSectionClick("map")}
            >
              {HEADER_SUBTITLE1}
            </a>
            <a
              href="#"
              className="hover:opacity-70"
              onClick={() => handleSectionClick("testimonial")}
            >
              {HEADER_SUBTITLE2}
            </a>
            <a
              href="#"
              className="hover:opacity-70"
              onClick={() => handleSectionClick("contact")}
            >
              {HEADER_SUBTITLE3}
            </a>
          </nav>
        </div>
      </section>
      <div
        className={`fixed top-0 right-0 w-4/7 h-fit bg-teal-700 text-white z-20 p-3 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="mobile"
      >
        <div className="flex justify-end">
          <button className="text-4xl mb-4" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              className="hover:opacity-70 hover:cursor-pointer block"
              onClick={() => handleSectionClick("map")}
            >
              {HEADER_SUBTITLE1}
            </a>
          </li>
          <li>
            <a
              className="hover:opacity-70 hover:cursor-pointer block"
              onClick={() => handleSectionClick("testimonial")}
            >
              {HEADER_SUBTITLE2}
            </a>
          </li>
          <li>
            <a
              className="hover:opacity-70 hover:cursor-pointer block"
              onClick={() => handleSectionClick("contact")}
            >
              {HEADER_SUBTITLE3}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
