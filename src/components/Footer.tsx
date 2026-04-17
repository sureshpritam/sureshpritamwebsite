"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-black py-12 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 NAV LINKS */}
        <div className="flex justify-center flex-wrap gap-6 text-sm font-medium mb-8">

          <Link href="/" className="cursor-pointer hover:opacity-70 transition">
            HOME
          </Link>

          <Link href="music" className="cursor-pointer hover:opacity-70 transition">
            MUSIC
          </Link>

          <Link href="videos" className="cursor-pointer hover:opacity-70 transition">
            VIDEOS
          </Link>                    

          <Link href="/gallery" className="cursor-pointer hover:opacity-70 transition">
            GALLERY
          </Link>

          <Link href="/biography" className="cursor-pointer hover:opacity-70 transition">
            BIOGRAPHY
          </Link>

          <Link href="/contact" className="cursor-pointer hover:opacity-70 transition">
            CONTACT
          </Link>

        </div>

        {/* 🔥 SOCIAL ICONS (BLACK FIXED) */}
        <div className="flex justify-center gap-6 mb-6">

          <a href="https://youtube.com/SureshPritamOfficial" target="_blank" className="cursor-pointer">
            <Image
              src="/assets/social-icon/youtube.svg"
              alt="YouTube"
              width={28}
              height={28}
              className="brightness-0 hover:opacity-70 transition"
            />
          </a>

          <a href="https://instagram.com/sureshpritamofficial" target="_blank" className="cursor-pointer">
            <Image
              src="/assets/social-icon/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
              className="brightness-0 hover:opacity-70 transition"
            />
          </a>

          <a href="https://facebook.com/SureshPritamOfficial" target="_blank" className="cursor-pointer">
            <Image
              src="/assets/social-icon/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
              className="brightness-0 hover:opacity-70 transition"
            />
          </a>          

          <a href="https://twitter.com/SureshPritam2" target="_blank" className="cursor-pointer">
            <Image
              src="/assets/social-icon/twitter.svg"
              alt="Twitter"
              width={28}
              height={28}
              className="brightness-0 hover:opacity-70 transition"
            />
          </a>

        </div>

        {/* 🔥 MESSAGE BOX */}
        <div className="max-w-md mx-auto flex mb-8">

          <input
            type="text"
            placeholder="Leave Message here"
            className="w-full px-4 py-3 outline-none border border-black"
          />

          <button className="bg-black text-white px-6 cursor-pointer hover:opacity-80 transition">
            →
          </button>

        </div>

        {/* 🔥 COPYRIGHT */}
        <p className="text-xs tracking-widest">
          © 2026 SURESH PRITAM. ALL RIGHTS RESERVED
        </p>

      </div>

    </footer>
  );
}