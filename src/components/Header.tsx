"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/music", label: "MUSIC" },
  { href: "/videos", label: "VIDEOS" },
  { href: "/biography", label: "BIOGRAPHY" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-black border-b border-zinc-800">

      <div className="flex w-full items-center justify-between px-4 md:px-6 py-3">

        {/* 🔥 LOGO */}
        <Link href="/" className="cursor-pointer z-50">
          <div className="relative h-12 w-[140px]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* 🔥 DESKTOP NAV (FIXED) */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm text-white font-medium tracking-[0.15em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-pointer hover:opacity-70 transition whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 🔥 DESKTOP SOCIAL */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://youtube.com" target="_blank" className="cursor-pointer">
            <Image src="/assets/social-icon/youtube.svg" alt="YouTube" width={20} height={20} />
          </a>
          <a href="https://facebook.com" target="_blank" className="cursor-pointer">
            <Image src="/assets/social-icon/facebook.svg" alt="Facebook" width={20} height={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="cursor-pointer">
            <Image src="/assets/social-icon/instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="cursor-pointer">
            <Image src="/assets/social-icon/twitter.svg" alt="Twitter" width={20} height={20} />
          </a>
        </div>

        {/* 🔥 MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden cursor-pointer z-50"
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>

      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black z-[9998] transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg tracking-[0.2em] text-white font-medium">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:opacity-70 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* 🔥 SOCIAL */}
          <div className="flex gap-6 mt-6">
            <a href="https://youtube.com" target="_blank" className="cursor-pointer">
              <Image src="/assets/social-icon/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" className="cursor-pointer">
              <Image src="/assets/social-icon/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" className="cursor-pointer">
              <Image src="/assets/social-icon/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" className="cursor-pointer">
              <Image src="/assets/social-icon/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
          </div>

        </div>

      </div>

    </header>
  );
}