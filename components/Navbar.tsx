"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const navLinks = (
    <>
      <li><Link className=" sm:text-white px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border bg-black/40 text-gray-300 border-white/25 hover:border-white/20 hover:text-white hover:bg-white/5" href="/">Home</Link></li>
      <li><Link className=" sm:text-white px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border bg-black/40 text-gray-300 border-white/25 hover:border-white/20 hover:text-white hover:bg-white/5" href="/about">About</Link></li>
      <li><Link className=" sm:text-white px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border bg-black/40 text-gray-300 border-white/25 hover:border-white/20 hover:text-white hover:bg-white/5" href="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-300 via-black to-gray-900 backdrop:blur-2xl  sticky top-0 z-50">
      {/* Left side (logo + hamburger) */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-56 p-2 shadow space-y-1"
          >
            <div className="text-white">
              {navLinks}
              <li className="mt-2"><ModeToggle /></li>
            </div>
            
            <li><Link className="btn btn-primary text-white w-full" href="/login">Login</Link></li>
            <li><Link className="btn btn-outline text-white w-full" href="/signup">Sign Up</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost normal-case text-2xl  nasalization-font ">
          Programming with Diganta
        </Link>
      </div>

      {/* Center Menu (Tablet & Desktop only) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {navLinks}
        </ul>
      </div>

      {/* Right side buttons (Tablet & Desktop) */}
      <div className="navbar-end hidden md:flex items-center space-x-2">
        <ModeToggle />
        <Link className="px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border bg-black/40 text-gray-300 border-white/25 hover:border-white/20 hover:text-white hover:bg-white/5" href="/login">
          Login
        </Link>
        <Link className="px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border bg-black/40 text-gray-300 border-white/25 hover:border-white/20 hover:text-white hover:bg-white/5" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
