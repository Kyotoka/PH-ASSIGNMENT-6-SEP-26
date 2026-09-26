"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0e12]/90 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-wider text-white">
        <span className="text-[#ccff00]">⚡</span> FITLOG
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-semibold uppercase tracking-wider text-xs">
        <Link
          href="/"
          className={pathname === "/" ? "text-[#ccff00] border-b-2 border-[#ccff00] pb-1" : "text-neutral-400 hover:text-white transition"}
        >
          Workout
        </Link>
        <Link
          href="/my-plan"
          className={pathname === "/my-plan" ? "text-[#ccff00] border-b-2 border-[#ccff00] pb-1" : "text-neutral-400 hover:text-white transition"}
        >
          My Plan
        </Link>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-3">
        <Link
          href="/my-plan"
          className="bg-[#ccff00] text-black font-extrabold px-3.5 py-1.5 rounded-full text-xs flex items-center gap-2 hover:bg-lime-400 transition"
        >
          Plan <span className="bg-black text-white px-2 py-0.5 rounded-full text-[10px]">{plan.length}</span>
        </Link>
        <Link
          href="/my-plan"
          className="border border-neutral-700 text-neutral-300 font-semibold px-3.5 py-1.5 rounded-full text-xs flex items-center gap-2 hover:border-neutral-400 transition"
        >
          Saved <span className="bg-neutral-800 text-white px-2 py-0.5 rounded-full text-[10px]">{saved.length}</span>
        </Link>
      </div>
    </nav>
  );
}