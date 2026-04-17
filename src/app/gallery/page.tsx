"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/assets/images/IMG_4627.webp",
    title: "Live Stage",
  },
  {
    src: "/assets/images/IMG_4671.webp",
    title: "Studio Session",
  },
  {
    src: "/assets/images/1744435050240.webp",
    title: "Behind the Scenes",
  },
  {
    src: "/assets/images/IMG_4627.webp",
    title: "Fans and Events",
  },
  {
    src: "/assets/images/IMG_4671.webp",
    title: "Music Video",
  },
  {
    src: "/assets/images/1744435050240.webp",
    title: "Media Shoot",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/1744435050240.webp"
          alt="Gallery"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-6">
            GALLERY
          </h1>

          <p className="mt-4 text-sm italic ml-6">
            <Link href="/" className="text-zinc-300 cursor-pointer">
              Home
            </Link>
            {" / "}
            <span className="text-zinc-300">Gallery</span>
          </p>

        </div>
      </section>

      {/* 🔥 GALLERY SECTION */}
      <section className="bg-[#e5e5e5] py-16 px-6">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-base tracking-[0.35em] mb-10 text-black">
            GALLERY
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {galleryImages.map((item, i) => (
              <div
                key={i}
                className="relative h-[300px] overflow-hidden group cursor-pointer"
              >
                {/* IMAGE */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY TEXT */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <p className="text-sm text-white tracking-wide">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-zinc-700"></div>

      {/* 🔥 EXTRA TEXT */}
      <section className="bg-black text-white text-center py-14">

        <h2 className="text-xl tracking-[0.35em] mb-4">
          MOMENTS
        </h2>

        <p className="text-sm text-zinc-400">
          Capturing live performances, studio vibes, and unforgettable memories.
        </p>

      </section>

    </main>
  );
}