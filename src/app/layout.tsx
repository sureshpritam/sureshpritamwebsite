import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Official Website | Suresh Pritam",
  description: "Official website of Suresh Pritam.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">

        {/* 🔥 HEADER */}
        <Header />

        {/* 🔥 MAIN CONTENT (expand karega) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 🔥 FOOTER (always bottom) */}
        <Footer />

      </body>
    </html>
  );
}