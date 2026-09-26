"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, toggleSaved } = usePlan();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  useEffect(() => {
    if (tabParam === "saved") {
      setActiveTab("saved");
    } else {
      setActiveTab("plan");
    }
  }, [tabParam]);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const currentItems = activeTab === "plan" ? plan : saved;

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const toggleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const isDone = prev.includes(id);
      if (isDone) {
        return prev.filter((item) => item !== id);
      } else {
        triggerToast("Workout marked as done!");
        return [...prev, id];
      }
    });
  };

  const handleRemove = (workout: any) => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
      triggerToast("Removed from today's plan");
    } else {
      toggleSaved(workout);
      triggerToast("Removed from saved list");
    }
  };

  // Metrics
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((acc, item) => {
    const mins = parseInt(item.duration) || 0;
    return acc + mins;
  }, 0);
  const totalCalories = plan.reduce((acc, item) => {
    const cals = parseInt(item.calories) || 0;
    return acc + cals;
  }, 0);

  // Sorting functionality (Duration, Calories, Rating)
  const sortedItems = [...currentItems].sort((a, b) => {
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
    <main className="max-w-[1200px] mx-auto px-6 py-10 min-h-[calc(100vh-140px)] flex flex-col justify-between relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#a3e635] text-black text-xs font-black uppercase px-5 py-3 rounded-xl shadow-2xl shadow-[#a3e635]/20 animate-bounce">
          ✓ {toast}
        </div>
      )}

      <div>
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white tracking-wider uppercase">
            MY PLAN
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metric Cards Banner */}
        <div className="bg-[#111319] border border-neutral-800/60 rounded-xl p-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-semibold text-neutral-400 mb-1">Exercises</p>
            <p className="text-4xl font-black text-[#a3e635]">{totalExercises}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-400 mb-1">Minutes</p>
            <p className="text-4xl font-black text-white">{totalMinutes}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-400 mb-1">Calories</p>
            <p className="text-4xl font-black text-white">{totalCalories}</p>
          </div>
        </div>

        {/* Tab & Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="inline-flex bg-[#111319] p-1 rounded-lg border border-neutral-800/60 self-start">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-2 text-xs font-bold rounded-md transition ${
                activeTab === "plan"
                  ? "bg-[#1d212b] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-bold rounded-md transition ${
                activeTab === "saved"
                  ? "bg-[#1d212b] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown with Chevron Icon */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-neutral-400 font-medium">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#111319] border border-neutral-800/80 text-white text-xs font-bold rounded-lg px-3 py-2 pr-8 appearance-none outline-none cursor-pointer hover:border-neutral-700 transition"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Workout List Section */}
        {sortedItems.length === 0 ? (
          <div className="border border-dashed border-neutral-800/80 rounded-xl p-16 md:p-24 text-center bg-[#0d0e12]">
            <h2 className="text-2xl font-black text-white tracking-wider uppercase mb-2">
              NOTHING HERE YET
            </h2>
            <p className="text-neutral-400 text-xs mb-6 max-w-sm mx-auto">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Browse the library and save lifts for quick access later."}
            </p>
            <Link
              href="/"
              className="inline-block bg-[#a3e635] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-full hover:bg-[#b5f846] transition shadow-lg shadow-[#a3e635]/10"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedItems.map((workout) => {
              const isDone = completedIds.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`bg-[#111319] border border-neutral-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition ${
                    isDone && activeTab === "plan" ? "opacity-60" : ""
                  }`}
                >
                  {/* Left Side: Image & Meta */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative aspect-[16/10] w-28 md:w-36 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                      <img
                        src={workout.image}
                        alt={workout.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-black text-white text-base md:text-lg tracking-wide uppercase">
                        {workout.title}
                      </h3>
                      <p className="text-neutral-400 text-xs mt-0.5">
                        {workout.equipment}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium mt-2">
                        <span>⏱ {workout.duration}</span>
                        <span>🔥 {workout.calories}</span>
                        <span>⭐ {workout.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Actions */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="px-5 py-2.5 bg-[#181a20] border border-neutral-800 hover:border-neutral-700 text-white font-bold text-xs uppercase rounded-full transition"
                    >
                      View Details
                    </Link>

                    {/* Show Mark as Done only on Today's Plan tab */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => toggleComplete(workout.id)}
                        className={`px-5 py-2.5 font-bold text-xs uppercase rounded-full transition flex items-center gap-1.5 ${
                          isDone
                            ? "bg-neutral-800 text-neutral-400 border border-neutral-700"
                            : "bg-[#a3e635] text-black hover:bg-[#b5f846]"
                        }`}
                      >
                        ✓ {isDone ? "Completed" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(workout)}
                      className="text-neutral-500 hover:text-white p-2 text-sm transition"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}