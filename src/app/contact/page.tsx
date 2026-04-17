"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/IMG_4627.webp"
          alt="Contact"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl tracking-[0.35em] font-light ml-6">
            CONTACT
          </h1>

          {/* BREADCRUMB */}
          <p className="mt-4 text-sm italic ml-6">

            <Link
              href="/"
              className="text-zinc-300 hover:text-white transition cursor-pointer"
            >
              Home
            </Link>

            {" / "}

            <span className="text-zinc-300">
              Contact
            </span>

          </p>

        </div>
      </section>

      {/* 🔥 FORM SECTION */}
      <section className="bg-[#e5e5e5] text-black py-16 px-6">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-base tracking-[0.35em] mb-10">
            CONTACT
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex flex-col gap-6">
              <input
                placeholder="First Name"
                className="border-b border-black bg-transparent outline-none py-2 focus:border-black"
              />
              <input
                placeholder="Email"
                className="border-b border-black bg-transparent outline-none py-2 focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-6">
              <input
                placeholder="Last Name"
                className="border-b border-black bg-transparent outline-none py-2 focus:border-black"
              />
              <input
                placeholder="Phone"
                className="border-b border-black bg-transparent outline-none py-2 focus:border-black"
              />
            </div>

          </div>

          {/* MESSAGE */}
          <div className="mt-8">
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full border-b border-black bg-transparent outline-none py-2 focus:border-black"
            />
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <button className="border border-black px-8 py-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              SUBMIT
            </button>
          </div>

        </div>

      </section>

      {/* DIVIDER */}
      <div className="border-t border-zinc-700"></div>

      {/* CONTACT INFO */}
      <section className="bg-black text-white text-center py-14">

        <h2 className="text-xl tracking-[0.35em] mb-6">
          CONTACT US
        </h2>

        <p className="text-sm mb-2">
          <span className="font-semibold">MOBILE:</span> +91 9129495442
        </p>

        <p className="text-sm">
          <span className="font-semibold">EMAIL:</span> contact@sureshpritam.com
        </p>

      </section>

    </main>
  );
}