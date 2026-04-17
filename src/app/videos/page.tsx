"use client";

import Image from "next/image";
import Link from "next/link";

// 🎬 12 VIDEOS
const videos = [
  "kJQP7kiw5Fk",
  "3JZ_D3ELwOQ",
  "kxopViU98Xo",
  "fLexgOxsZu0",
  "RgKAFK5djSk",
  "OPf0YbXqDm0",
  "CevxZvSJLk8",
  "hT_nvWreIhg",
  "uelHwf8o7_U",
  "60ItHLz5WEA",
  "ktvTqknDobU",
  "YQHsXMglC9A",
];

export default function VideosPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/IMG_4627.webp"
          alt="Videos"
          fill
          className="object-cover opacity-60 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-2 md:ml-6">
            VIDEOS
          </h1>

          <p className="mt-4 text-sm italic ml-2 md:ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Videos</span>
          </p>
        </div>
      </section>

      {/* 🔥 VIDEO GRID */}
      <section className="bg-[#e5e5e5] text-black py-14 px-4 md:px-6">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-base tracking-[0.35em] mb-8 font-semibold">
            VIDEOS
          </h2>

          {/* ✅ GRID FIX */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {videos.map((id, i) => (
              <div key={i} className="w-full aspect-video">

                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="w-full h-full rounded-sm"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

      {/* 🔥 WATCH SECTION */}
      <section className="bg-black text-white text-center py-12">

        <h2 className="text-lg md:text-xl tracking-[0.35em] mb-3 font-semibold">
          WATCH NOW
        </h2>

        <p className="text-sm text-zinc-400">
          Discover visuals that bring music to life.
        </p>

      </section>

    </main>
  );
}