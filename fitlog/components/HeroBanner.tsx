"use client";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="w-full bg-[#111318] border border-neutral-800/80 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="max-w-xl space-y-6 z-10">
        <span className="text-[11px] font-bold tracking-widest text-[#a3e635] uppercase">
          WORKOUT LIBRARY
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <div>
          <button className="bg-[#a3e635] hover:bg-[#8ee01a] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition duration-200">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>

      {/* Right Graphic / Image */}
      <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[280px] md:h-[340px] flex-shrink-0 flex items-center justify-center">
        <Image
          src="/resources/banner 1.png"
          alt="Preacher Curl Gym Equipment Graphic"
          fill
          priority
          className="object-contain object-right"
        />
      </div>
    </section>
  );
}