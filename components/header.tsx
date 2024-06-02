"use client";

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HEADER_TITLE = "RestStop Vancity";
  const HEADER_SUBTITLE1 = "Find My Washroom 🚽";
  const HEADER_SUBTITLE2 = "Testimonial 👨‍👩‍👧‍👦";
  const HEADER_SUBTITLE3 = "Contact 📬";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <a href="#rockets" className="hover:opacity-70">
              {HEADER_SUBTITLE1}
            </a>
            <a href="#testimonial" className="hover:opacity-70">
              {HEADER_SUBTITLE2}
            </a>
            <a href="#contact" className="hover:opacity-70">
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
              href="#rockets"
              className="hover:opacity-70 block"
              onClick={toggleMenu}
            >
              {HEADER_SUBTITLE1}
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:opacity-70 block"
              onClick={toggleMenu}
            >
              {HEADER_SUBTITLE2}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:opacity-70 block"
              onClick={toggleMenu}
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
