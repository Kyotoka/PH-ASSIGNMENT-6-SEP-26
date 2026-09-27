"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PlanProvider, usePlan } from "@/context/PlanContext";

function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname.startsWith("/my-plan");

  return (
    <header className="bg-[#0b0c10] border-b border-neutral-900 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-350 mx-auto flex items-center justify-between">
        {/* Left: Brand Logo using logo.png */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/resources/logo.png"
            alt="FitLog Logo"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
          <span className="font-black text-white text-lg tracking-wider uppercase">
            FITLOG
          </span>
        </Link>

        {/* Center: Navigation Pills */}
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-xs font-bold transition ${
              isWorkoutsActive
                ? "bg-[#1f2a08] text-[#a3e635]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-2 rounded-full text-xs font-bold transition ${
              isMyPlanActive
                ? "bg-[#1f2a08] text-[#a3e635]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right: Counter Badges */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <Link href="/my-plan" className="flex items-center gap-2 text-neutral-300">
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-[#a3e635] text-black font-extrabold text-[11px] flex items-center justify-center">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-neutral-300">
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full border border-neutral-700 text-neutral-400 font-extrabold text-[11px] flex items-center justify-center">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0b0c10] py-6 px-6">
      <div className="max-w-350 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        {/* Left: Footer Logo using vector.png */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/resources/vector.png"
            alt="FitLog Footer Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="font-black text-white text-sm tracking-wider uppercase">
            FITLOG
          </span>
        </Link>

        {/* Right: Copyright text */}
        <div>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c10] text-white antialiased min-h-screen flex flex-col justify-between">
        <PlanProvider>
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}