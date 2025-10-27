"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="w-full flex justify-center sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center w-[90%] md:w-[70%] bg-background border border-border rounded-full px-6 py-3 shadow-sm">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-foreground">
          <FaReact className="text-sky-400 text-2xl" />
          <Link href="/" className="font-medium text-lg">
            Programming with Diganta
          </Link>
        </div>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 font-semibold text-sm">{navLinks}</ul>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link
            href="/login"
            className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost text-muted-foreground hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-background border border-border rounded-2xl w-56 space-y-2"
          >
            {navLinks}
            <hr className="border-border" />
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link
                href="/login"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
