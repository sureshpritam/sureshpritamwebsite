"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/assets/images/IMG_4627.webp",
  "/assets/images/IMG_4671.webp",
  "/assets/images/1744435050240.webp",
];

const music = [
  "/assets/images/IMG_4627.webp",
  "/assets/images/IMG_4671.webp",
  "/assets/images/1744435050240.webp",
  "/assets/images/IMG_4627.webp",
  "/assets/images/IMG_4671.webp",
  "/assets/images/1744435050240.webp",
];

const videos = [
  "dQw4w9WgXcQ",
  "3JZ_D3ELwOQ",
  "kxopViU98Xo",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden">
        <Image
          key={index}
          src={images[index]}
          alt="Suresh Pritam"
          fill
          className="object-cover opacity-70 animate-zoom"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-7xl tracking-[0.4em] font-semibold">
            SURESH PRITAM
          </h1>

          <p className="mt-6 text-zinc-300 font-semibold">
            Singer • Lyricist • Composer
          </p>
        </div>
      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

      {/* 🔥 LISTEN NOW (WITH LINKS) */}
      <section className="bg-[#1a1a1a] py-14 text-center">

        <div className="flex justify-center items-center gap-8 mb-6">

          <a href="https://youtube.com/@SPMusicBeats" target="_blank">
            <Image src="/assets/social-icon/youtube.svg" alt="YouTube" width={28} height={28} className="hover:opacity-70 hover:scale-110 transition duration-300" />
          </a>

          <a href="https://open.spotify.com" target="_blank">
            <Image src="/assets/social-icon/spotify.svg" alt="Spotify" width={28} height={28} className="hover:opacity-70 hover:scale-110 transition duration-300" />
          </a>

          <a href="https://soundcloud.com" target="_blank">
            <Image src="/assets/social-icon/soundcloud.svg" alt="SoundCloud" width={28} height={28} className="hover:opacity-70 hover:scale-110 transition duration-300" />
          </a>

          <a href="https://music.apple.com" target="_blank">
            <Image src="/assets/social-icon/apple.svg" alt="Apple Music" width={28} height={28} className="hover:opacity-70 hover:scale-110 transition duration-300" />
          </a>

          <a href="https://gaana.com" target="_blank">
            <Image src="/assets/social-icon/gaana.svg" alt="Gaana" width={28} height={28} className="hover:opacity-70 hover:scale-110 transition duration-300" />
          </a>

        </div>

        <p className="tracking-[0.4em] text-sm text-zinc-300">
          LISTEN TO MY MUSIC
        </p>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

      {/* 🔥 MUSIC + VIDEO */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">

          {/* 🎵 MUSIC */}
          <div className="flex flex-col justify-between">

            <h2 className="text-3xl font-bold tracking-[0.4em] mb-10">
              MUSIC
            </h2>

            <div className="grid grid-cols-2 gap-5">
              {music.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square cursor-pointer group overflow-hidden"
                >
                  <Image
                    src={img}
                    alt="music"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/music"
                className="inline-block border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
              >
                MORE...
              </a>
            </div>

          </div>

          {/* 🎬 VIDEOS */}
          <div className="flex flex-col justify-between">

            <h2 className="text-3xl font-bold tracking-[0.4em] mb-10 text-left md:text-right">
              VIDEOS
            </h2>

            <div className="flex flex-col gap-8 items-start md:items-end">
              {videos.map((id, i) => (
                <div key={i} className="w-full max-w-[480px] aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?controls=1&rel=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-start md:justify-end">
              <a
                href="/videos"
                className="inline-block border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
              >
                MORE...
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

    </main>
  );
}