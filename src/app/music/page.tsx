"use client";

import Image from "next/image";
import Link from "next/link";

// 🎵 12 TRACKS (ARTWORK + SPOTIFY LINK)
const songs = [
  {
    title: "Tera Saath",
    image: "/assets/images/IMG_4627.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Dil Ki Baat",
    image: "/assets/images/IMG_4671.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Yaadein",
    image: "/assets/images/1744435050240.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Raat Ka Safar",
    image: "/assets/images/IMG_4627.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Mohabbat",
    image: "/assets/images/IMG_4671.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Aankhon Mein",
    image: "/assets/images/1744435050240.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Dil Se",
    image: "/assets/images/IMG_4627.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Teri Yaad",
    image: "/assets/images/IMG_4671.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Safar",
    image: "/assets/images/1744435050240.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Khamoshi",
    image: "/assets/images/IMG_4627.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Intezaar",
    image: "/assets/images/IMG_4671.webp",
    link: "https://open.spotify.com",
  },
  {
    title: "Pyaar Ki Kahani",
    image: "/assets/images/1744435050240.webp",
    link: "https://open.spotify.com",
  },
];

export default function MusicPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/IMG_4671.webp"
          alt="Music"
          fill
          className="object-cover opacity-60 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">

          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-2 md:ml-6">
            MUSIC
          </h1>

          <p className="mt-4 text-sm italic ml-2 md:ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Music</span>
          </p>

        </div>
      </section>

      {/* 🔥 MUSIC GRID */}
      <section className="bg-[#e5e5e5] text-black py-14 px-4 md:px-6">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-base tracking-[0.35em] mb-8 font-semibold">
            TRACKS
          </h2>

          {/* ✅ GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {songs.map((song, i) => (
              <a
                key={i}
                href={song.link}
                target="_blank"
                className="group block"
              >

                {/* ARTWORK */}
                <div className="relative aspect-square overflow-hidden">

                  <Image
                    src={song.image}
                    alt={song.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                    <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center text-white">
                      ▶
                    </div>

                  </div>

                </div>

                {/* TITLE */}
                <p className="mt-3 text-sm tracking-wide text-black">
                  {song.title}
                </p>

              </a>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

      {/* 🔥 BOTTOM */}
      <section className="bg-black text-white text-center py-12">

        <h2 className="text-lg md:text-xl tracking-[0.35em] mb-3 font-semibold">
          LISTEN NOW
        </h2>

        <p className="text-sm text-zinc-400">
          Explore music that connects emotions with melody.
        </p>

      </section>

    </main>
  );
}