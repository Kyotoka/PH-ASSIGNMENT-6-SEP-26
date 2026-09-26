import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#090a0d] border-t border-neutral-800/80 px-6 py-8 mt-16 text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-black text-white text-sm">
          <span className="text-[#ccff00]">⚡</span> FITLOG
        </div>
        <div>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
}