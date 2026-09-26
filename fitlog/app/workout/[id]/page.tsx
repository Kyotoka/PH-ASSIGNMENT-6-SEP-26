"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { WORKOUTS } from "@/data/workouts";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToPlan, toggleSaved, plan, saved } = usePlan();

  const [toast, setToast] = useState<string | null>(null);

  const workoutId = params.id as string;
  const workout = WORKOUTS.find((w) => w.id === workoutId);

  if (!workout) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-black text-white uppercase mb-4">Workout Not Found</h2>
        <Link href="/" className="text-xs font-bold text-[#a3e635] underline">
          Back to Library
        </Link>
      </div>
    );
  }

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToPlan = () => {
    if (plan.length >= 5) {
      triggerToast("Daily plan limit reached (max 5 lifts)!");
      return;
    }
    addToPlan(workout);
    triggerToast("Added to today's plan");
  };

  const handleSaveForLater = () => {
    toggleSaved(workout);
    triggerToast("Saved for later");
  };

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-10 relative">
      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#a3e635] text-black text-xs font-black uppercase px-5 py-3 rounded-xl shadow-2xl shadow-[#a3e635]/20 animate-bounce">
          ✓ {toast}
        </div>
      )}

      {/* Back Link */}
      <Link href="/" className="text-neutral-400 hover:text-white text-xs font-bold uppercase tracking-wider mb-6 inline-block">
        ← Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        {/* Left Side: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
          <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
        </div>

        {/* Right Side: Details & Actions */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {workout.tags.map((tag) => (
              <span key={tag} className="bg-[#a3e635] text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-black text-white uppercase tracking-wider">{workout.title}</h1>
          <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
            A compound press that builds chest thickness, triceps, and pressing power from a stable bench.
          </p>

          {/* Key Specs Table */}
          <div className="mt-6 border border-neutral-800/80 rounded-xl overflow-hidden bg-[#111319]">
            <div className="grid grid-cols-2 p-3 border-b border-neutral-800 text-xs">
              <span className="text-neutral-500 font-bold uppercase">Equipment</span>
              <span className="text-white font-bold">{workout.equipment}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-neutral-800 text-xs">
              <span className="text-neutral-500 font-bold uppercase">Difficulty</span>
              <span className="text-white font-bold">Intermediate</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-neutral-800 text-xs">
              <span className="text-neutral-500 font-bold uppercase">Duration</span>
              <span className="text-white font-bold">{workout.duration}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-neutral-800 text-xs">
              <span className="text-neutral-500 font-bold uppercase">Calories</span>
              <span className="text-white font-bold">{workout.calories}</span>
            </div>
            <div className="grid grid-cols-2 p-3 text-xs">
              <span className="text-neutral-500 font-bold uppercase">Rating</span>
              <span className="text-white font-bold">⭐ {workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h3 className="text-xs font-black text-neutral-400 uppercase tracking-wider mb-3">Instructions</h3>
            <ol className="space-y-2 text-xs text-neutral-300 list-decimal list-inside">
              <li>Lie back on the flat bench with your eyes under the bar.</li>
              <li>Grip the bar slightly wider than shoulder-width apart.</li>
              <li>Unrack the bar smoothly and lower it controlled to mid-chest.</li>
              <li>Drive the bar explosively back up to the starting position.</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleAddToPlan}
              className="flex-1 bg-[#a3e635] text-black font-black text-xs uppercase px-6 py-3.5 rounded-xl hover:bg-[#b5f846] transition text-center shadow-lg shadow-[#a3e635]/10"
            >
              + Add to today's plan
            </button>
            <button
              onClick={handleSaveForLater}
              className="flex-1 bg-[#181a20] border border-neutral-800 hover:border-neutral-700 text-white font-black text-xs uppercase px-6 py-3.5 rounded-xl transition text-center"
            >
              ⭐ Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}