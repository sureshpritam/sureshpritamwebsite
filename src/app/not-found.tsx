import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <p className="text-lg text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>

    </div>
  );
}