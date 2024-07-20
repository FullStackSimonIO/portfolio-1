"use client";
import React, { useState } from "react";

// import { DarkModeConfig } from "tailwindcss/types/config";
// import { DarkmodeButton } from "./DarkmodeButton";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CyberSync
            </span>
          </a>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-label="Open main menu"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              {isMobileMenuOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h9M4 12h9"
                />
              )}
            </svg>
          </button>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:w-auto md:block`}
          >
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="flex justify-center py-2 px-3 text-black dark:text-white bg-transparent rounded md:bg-transparent md:p-0 md:text-black  md:dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-500 dark:md:active:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/technologies"
                  className="flex justify-center py-2 px-3 text-black dark:text-white bg-transparent rounded md:bg-transparent  md:p-0 md:text-black  md:dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-500 dark:md:active:text-blue-500"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="flex justify-center py-2 px-3 text-black dark:text-white bg-transparent rounded md:bg-transparent  md:p-0 md:text-black  md:dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-500 dark:md:active:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="flex justify-center py-2 px-3 text-black dark:text-white bg-transparent rounded md:bg-transparent  md:p-0 md:text-black  md:dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-500 dark:md:active:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="./contact"
                  className="flex justify-center py-2 px-3 text-black dark:text-white bg-transparent rounded md:bg-transparent  md:p-0 md:text-black  md:dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-500 dark:md:active:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
