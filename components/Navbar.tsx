"use client";

import {
  faAddressCard,
  faBars,
  faBookmark,
  faCircleQuestion,
  faHome,
  faRestroom,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex justify-between bg-nav p-4">
      <span className=" text-default-text text-base sm:text-xl">
        RestStop Vancity 🚻
      </span>
      <div id="desktop-menu" className="hidden sm:flex justify-between">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            {/* HOME */}
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faHome} className="icon mb-2" />
              Home
            </div>
          </Link>
          <Link href={"/"}>
            {/* Find Bathroom */}
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faRestroom} className="icon mb-2" />
              Bathroom
            </div>
          </Link>
          <Link href={"/"}>
            {/* About */}
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faCircleQuestion} className="icon mb-2" />
              About
            </div>
          </Link>
          <Link href={"/"}>
            {/* Favorites */}
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faBookmark} className="icon mb-2" />
              Favorites
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            {/* Log In  */}
            <Link href={"/LogIn"}>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="icon mb-2"
                />
                LogIn
              </div>
            </Link>
            <Link href={"/Profile"}>
              {/* Profile */}
              <div className="flex flex-col text-default-text text-xs">
                <FontAwesomeIcon icon={faAddressCard} className="icon mb-2" />
                Profile
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className="sm:hidden">
        <FontAwesomeIcon icon={faBars} className="icon mb-2"/>
      </div>
    </nav>
  );
};

export default Navbar;
