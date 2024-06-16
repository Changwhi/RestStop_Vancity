"use client";
import React, { useState } from "react";

const Header = () => {
  const HEADER_TITLE = "Washroom Finder";
  const HEADER_SUBTITLE1 = "Find My Washroom";
  const HEADER_SUBTITLE2 = "Testimonial";
  const HEADER_SUBTITLE3 = "Contact";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    const currentSection = document.getElementById(sectionId);
    if (currentSection) {
      currentSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (

    <header className="sticky top-0 z-10 bg-inherit bg-slate-200 dark:bg-slate-800 dark:text-white">
      <section className="max-w-4xl mx-auto p-3 flex justify-between items-center">
        <button className="text-lg md:text-xl font-bold">
          {HEADER_TITLE}
        </button>
        <div>
          <button
            id="mobile-open-button"
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-sm font-medium">
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              onClick={() => handleSectionClick("map")}
            >
              {HEADER_SUBTITLE1}
            </button>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              onClick={() => handleSectionClick("testimonial")}
            >
              {HEADER_SUBTITLE2}
            </button>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              onClick={() => handleSectionClick("contact")}
            >
              {HEADER_SUBTITLE3}
            </button>
          </nav>
        </div>
      </section>
      <div
        className={`fixed top-0 right-0 w-4/7 h-fit border-x-2 border-y-2 dark:bg-slate-700 border-gray-400 bg-white z-20 p-3 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="mobile"
      > 
        <div className="flex justify-between items-center">
          <h1>Menu</h1>
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
