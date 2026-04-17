"use client";

import Image from "next/image";
import Link from "next/link";

export default function BiographyPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/IMG_4671.webp"
          alt="Biography"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-6">
            BIOGRAPHY
          </h1>

          {/* BREADCRUMB */}
          <p className="mt-4 text-sm italic ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Biography</span>
          </p>

        </div>
      </section>

      {/* 🔥 CONTENT SECTION */}
      <section className="bg-[#e5e5e5] text-black py-16 px-6">

        <div className="mx-auto max-w-5xl">

          {/* HEADING */}
          <h2 className="text-base tracking-[0.35em] mb-10">
            BIOGRAPHY
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 text-sm leading-7">

            {/* LEFT */}
            <div className="flex flex-col gap-6">

              <div>
                <p className="font-semibold mb-1">Journey</p>
                <p className="border-b border-black pb-3">
                  Suresh Pritam (born 04 July 2001) is an Indian singer,
                  lyricist, and composer who began his musical journey with a
                  passion for expressing real-life emotions through songs.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-1">Vision</p>
                <p className="border-b border-black pb-3">
                  With a clear artistic vision, he aims to create music that
                  leaves a lasting emotional impact and connects deeply with
                  listeners across generations.
                </p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">

              <div>
                <p className="font-semibold mb-1">Musical Style</p>
                <p className="border-b border-black pb-3">
                  His music blends modern production with heartfelt lyrics,
                  creating a unique sound that reflects love, life experiences,
                  and emotional storytelling.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-1">Presence</p>
                <p className="border-b border-black pb-3">
                  From digital platforms to live performances, he is steadily
                  building a strong fanbase with consistency and dedication.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-700"></div>

      {/* 🔥 EXTRA INFO SECTION */}
      <section className="bg-black text-white text-center py-14">

        <h2 className="text-xl tracking-[0.35em] mb-6">
          ABOUT THE ARTIST
        </h2>

        <p className="text-sm max-w-2xl mx-auto text-zinc-400 leading-7">
          Suresh Pritam continues to evolve as an independent artist,
          consistently delivering music that resonates with real emotions,
          modern soundscapes, and meaningful storytelling.
        </p>

      </section>

    </main>
  );
}