"use client";

import Image from "next/image";
import Link from "next/link";

const songs = [
  {
    title: "Tera Saath",
    desc: "A soulful romantic track",
  },
  {
    title: "Dil Ki Baat",
    desc: "Emotional love song",
  },
  {
    title: "Yaadein",
    desc: "Heart touching memories",
  },
  {
    title: "Raat Ka Safar",
    desc: "Late night vibe music",
  },
];

export default function MusicPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/assets/images/IMG_4671.jpg.jpeg"
          alt="Music"
          fill
          className="object-cover opacity-60 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-6">
            MUSIC
          </h1>

          <p className="mt-4 text-sm italic ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Music</span>
          </p>

        </div>
      </section>

      {/* 🔥 MUSIC LIST */}
      <section className="bg-[#e5e5e5] text-black py-16 px-6">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-base tracking-[0.35em] mb-10">
            TRACKS
          </h2>

          <div className="flex flex-col gap-6">

            {songs.map((song, i) => (
              <div
                key={i}
                className="border-b border-black pb-4 flex items-center justify-between cursor-pointer hover:opacity-70 transition"
              >

                <div>
                  <p className="text-lg font-medium">
                    {song.title}
                  </p>
                  <p className="text-sm text-zinc-600">
                    {song.desc}
                  </p>
                </div>

                <span className="text-sm tracking-widest">
                  PLAY
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-800"></div>

      {/* 🔥 BOTTOM TEXT */}
      <section className="bg-black text-white text-center py-14">

        <h2 className="text-xl tracking-[0.35em] mb-4">
          LISTEN NOW
        </h2>

        <p className="text-sm text-zinc-400">
          Explore music that connects emotions with melody.
        </p>

      </section>

    </main>
  );
}