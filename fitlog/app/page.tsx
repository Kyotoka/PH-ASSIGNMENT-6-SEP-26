"use client";

import Link from "next/link";
import { WORKOUTS } from "@/data/workouts";

export default function HomePage() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      {/* Hero Section matching your design */}
      <section className="bg-[#111319] border border-neutral-800/80 rounded-2xl p-8 md:p-12 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-[#a3e635] text-xs font-black uppercase tracking-wider block mb-3">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-[1.1]">
            TRAIN WITH INTENT. <br />
            LOG EVERY SET.
          </h1>
          <p className="text-neutral-400 text-sm mt-4 leading-relaxed max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          <div className="mt-6">
            <a
              href="#library"
              className="inline-block bg-[#a3e635] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-md hover:bg-[#b5f846] transition shadow-lg shadow-[#a3e635]/10"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>

        <div className="relative w-full lg:w-[420px] aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="/resources/banner 1.png"
            alt="Workout Banner"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Library Section */}
      <div id="library" className="pt-2">
        <h2 className="text-2xl font-black text-white tracking-wide uppercase mb-6">
          THE LIBRARY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKOUTS.map((workout) => (
            <Link
              key={workout.id}
              href={`/workout/${workout.id}`}
              className="group bg-[#111319] border border-neutral-800/80 rounded-xl overflow-hidden hover:border-neutral-700 transition flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {workout.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#a3e635] text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-black text-white text-base tracking-wide uppercase group-hover:text-[#a3e635] transition">
                    {workout.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1">
                    {workout.equipment}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 mt-4 border-t border-neutral-800/60 font-medium">
                  <span>⏱ {workout.duration}</span>
                  <span>🔥 {workout.calories}</span>
                  <span>⭐ {workout.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}