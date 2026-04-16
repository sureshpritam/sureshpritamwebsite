"use client";

import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    title: "Romantic Song",
    thumbnail: "/assets/images/IMG_4627.jpg.jpeg",
  },
  {
    title: "Live Performance",
    thumbnail: "/assets/images/IMG_4671.jpg.jpeg",
  },
  {
    title: "Studio Session",
    thumbnail: "/assets/images/1744435050240.jpg.jpeg",
  },
  {
    title: "Behind The Scenes",
    thumbnail: "/assets/images/IMG_4627.jpg.jpeg",
  },
];

export default function VideosPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/assets/images/IMG_4627.jpg.jpeg"
          alt="Videos"
          fill
          className="object-cover opacity-60 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-6">
            VIDEOS
          </h1>

          <p className="mt-4 text-sm italic ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Videos</span>
          </p>

        </div>
      </section>

      {/* 🔥 VIDEO GRID */}
      <section className="bg-[#e5e5e5] text-black py-16 px-6">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-base tracking-[0.35em] mb-10">
            VIDEOS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {videos.map((video, i) => (
              <div
                key={i}
                className="relative h-[250px] overflow-hidden group cursor-pointer"
              >

                {/* THUMBNAIL */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                    ▶
                  </div>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-0 w-full p-4 bg-black/60">
                  <p className="text-sm text-white tracking-wide">
                    {video.title}
                  </p>
                </div>

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
          WATCH NOW
        </h2>

        <p className="text-sm text-zinc-400">
          Discover visuals that bring music to life.
        </p>

      </section>

    </main>
  );
}