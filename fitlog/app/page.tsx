"use client";
import { useState } from "react";
import { WORKOUTS } from "@/data/workouts";
import { usePlan } from "@/context/PlanContext";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const { addToPlan, addToSaved } = usePlan();

  const categories = ["All", "Chest", "Back", "Legs", "Upper Body", "Strength"];

  const filteredWorkouts = WORKOUTS.filter((w) => {
    const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCat === "All" || w.category.includes(selectedCat);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Header */}
      <section className="mb-10 text-center md:text-left border-b border-neutral-800 pb-8">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-2">
          BUILD YOUR <span className="text-[#ccff00]">SESSION</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl">
          Browse compound movements, filter by target muscle groups, and customize today's training regimen.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition ${
                selectedCat === cat
                  ? "bg-[#ccff00] text-black"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search exercise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-[#ccff00]"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-neutral-700 text-[#ccff00] font-bold text-[10px] px-2.5 py-1 rounded-md uppercase">
                  {workout.difficulty}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{workout.name}</h3>
                <p className="text-neutral-400 text-xs line-clamp-2 mb-4">
                  {workout.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-0 flex gap-2">
              <button
                onClick={() => addToPlan(workout)}
                className="flex-1 bg-[#ccff00] hover:bg-lime-400 text-black font-extrabold text-xs py-2.5 rounded-lg transition"
              >
                + ADD TO PLAN
              </button>
              <button
                onClick={() => addToSaved(workout)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs px-3 rounded-lg transition border border-neutral-700"
              >
                SAVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}