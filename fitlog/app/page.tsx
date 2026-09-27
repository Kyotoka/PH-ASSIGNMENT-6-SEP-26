"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { WORKOUTS } from "@/data/workouts";

interface Workout {
  id: string;
  title: string;
  description: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  tags: string[];
  duration: string;
  calories: string;
  rating: number;
  image: string;
  instructions: string[];
}

export default function HomePage() {
  // Initialize directly with your local workouts so they load instantly and reliably
  const [workouts] = useState<Workout[]>(WORKOUTS);
  const [loading] = useState(false);
  
  // Search and Sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  // 1. Filter workouts safely with optional chaining
  const filteredWorkouts = workouts.filter((workout) => {
    const matchesTitle = workout.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
    const matchesTag = workout.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ?? false;
    return matchesTitle || matchesTag;
  });

  // 2. Sort filtered workouts
  const sortedAndFilteredWorkouts = [...filteredWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0);
    }
    if (sortBy === "calories") {
      return (parseInt(a.calories) || 0) - (parseInt(b.calories) || 0);
    }
    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  return (
    <main className="max-w-350 mx-auto px-6 py-8">
      {/* Hero Section */}
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
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
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

        <div className="relative w-full lg:w-105 aspect-4/3 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/resources/banner 1.png"
            alt="Workout Banner"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-contain"
          />
        </div>
      </section>

      {/* Library Section */}
      <div id="library" className="pt-2">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white tracking-wide uppercase">
              THE LIBRARY
            </h2>
            <p className="text-neutral-400 text-xs mt-1">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Controls: Search Bar & Sort Dropdown side by side */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              placeholder="Search by name or tag (e.g. chest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#111319] border border-neutral-800 text-white text-xs px-4 py-2.5 rounded-xl outline-none focus:border-neutral-700 w-full sm:w-64"
            />

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-medium whitespace-nowrap">Sort By</span>
              <div className="relative w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "duration" | "calories" | "rating")
                  }
                  className="bg-[#111319] border border-neutral-800/80 text-white text-xs font-bold rounded-xl px-3 py-2.5 pr-8 appearance-none outline-none cursor-pointer hover:border-neutral-700 transition w-full"
                >
                  <option value="duration">Duration</option>
                  <option value="calories">Calories</option>
                  <option value="rating">Rating</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none text-xs">
                  ▼
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State Animation */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-neutral-800 border-t-[#a3e635] rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-400 text-xs font-medium tracking-wider uppercase">
              Loading workouts…
            </p>
          </div>
        ) : sortedAndFilteredWorkouts.length === 0 ? (
          <div className="border border-dashed border-neutral-800/80 rounded-xl p-16 text-center bg-[#0d0e12]">
            <p className="text-neutral-400 text-xs uppercase font-bold mb-4">No matching workouts found</p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2.5 bg-[#a3e635] text-black font-extrabold text-xs uppercase rounded-full hover:bg-[#b5f846] transition"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAndFilteredWorkouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workout/${workout.id}`}
                className="group bg-[#111319] border border-neutral-800/80 rounded-xl overflow-hidden hover:border-neutral-700 transition flex flex-col cursor-pointer"
              >
                <div className="relative aspect-16/10 w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={workout.image}
                    alt={workout.title || "Workout"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {workout.tags?.map((tag) => (
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
        )}
      </div>
    </main>
  );
}