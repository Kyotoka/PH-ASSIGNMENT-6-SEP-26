"use client";
import Image from "next/image";
import { WORKOUTS } from "@/data/workouts";

export default function WorkoutLibrary() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 py-8 space-y-6 bg-[#0a0a0c] min-h-screen">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>
        <p className="text-xs text-neutral-400 mt-1 font-medium">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Grid: 3 columns matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORKOUTS.map((item) => (
          <div
            key={item.id}
            className="bg-[#111318] border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-700 transition group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Category Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#a3e635] text-black font-extrabold text-[10px] px-2 py-0.5 rounded tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Workout Title */}
                <h3 className="font-black text-white text-base tracking-wide uppercase">
                  {item.title}
                </h3>

                {/* Equipment */}
                <p className="text-xs text-neutral-400 mt-0.5 font-medium">
                  {item.equipment}
                </p>
              </div>

              {/* Bottom Card Stats */}
              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-3 border-t border-neutral-800/60 font-medium">
                {/* Duration */}
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      d="M12 6v6l4 2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{item.duration}</span>
                </div>

                {/* Calories */}
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item.calories}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 ml-auto">
                  <svg
                    className="w-3.5 h-3.5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-neutral-300">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}