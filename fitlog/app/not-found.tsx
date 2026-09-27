import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-300 mx-auto px-6 py-24 min-h-[calc(100vh-140px)] flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl font-black text-white tracking-wider uppercase mb-4">404</h2>
      <h3 className="text-2xl font-black text-white tracking-wide uppercase mb-2">
        PAGE NOT FOUND
      </h3>
      <p className="text-neutral-400 text-xs mb-8 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#a3e635] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-full hover:bg-[#b5f846] transition shadow-lg shadow-[#a3e635]/10"
      >
        Back to Home
      </Link>
    </main>
  );
}