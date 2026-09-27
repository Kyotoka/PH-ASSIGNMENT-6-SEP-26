"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan } = usePlan();

  return (
    <header className="w-full bg-[#0a0a0c] border-b border-neutral-900 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 h-16 flex items-center justify-between relative">
        {/* Left: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/resources/logo.png"
            alt="FitLog Logo"
            className="h-6 w-auto object-contain"
            width={24}
            height={24}
          />
          <span className="font-black text-white text-lg tracking-wider uppercase">
            FITLOG
          </span>
        </Link>

        {/* Center: Pill Navigation Tabs */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#111318] p-1 rounded-full border border-neutral-800/80">
          <Link
            href="/"
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition ${
              pathname === "/"
                ? "bg-[#1f290d] text-[#a3e635]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition ${
              pathname === "/my-plan"
                ? "bg-[#1f290d] text-[#a3e635]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right: Counter Badges */}
        <div className="flex items-center gap-4 text-xs font-medium text-neutral-300">
          <div className="flex items-center gap-2">
            <span>Plan</span>
            <span className="bg-[#a3e635] text-black font-extrabold text-[11px] px-2 py-0.5 rounded-full min-w-5 text-center">
              {plan?.length || 0}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Saved</span>
            <span className="bg-[#181a20] text-neutral-300 border border-neutral-700 font-extrabold text-[11px] px-2 py-0.5 rounded-full min-w-5 text-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}