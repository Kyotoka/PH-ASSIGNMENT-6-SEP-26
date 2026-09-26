"use client";

import { useParams, notFound } from "next/navigation";
import { WORKOUTS } from "@/data/workouts";
import { usePlan } from "@/context/PlanContext";
import Link from "next/link";

export default function WorkoutDetailPage() {
  const params = useParams();
  const workoutId = params?.id ? String(params.id) : null;
  const workout = WORKOUTS.find((w) => String(w.id) === workoutId);
  const { addToPlan, toggleSaved, plan, saved } = usePlan();

  if (!workout) {
    return notFound();
  }

  const isInPlan = plan?.some((item) => String(item.id) === String(workout.id));
  const isSaved = saved?.some((item) => String(item.id) === String(workout.id));

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-10 min-h-[calc(100vh-160px)]">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white mb-6 transition"
      >
        ← BACK TO LIBRARY
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Image Banner */}
        <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-[#111318] border border-neutral-800/60 aspect-square max-h-[580px] w-full">
          <img
            src={workout.image}
            alt={workout.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Workout Details */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-wider uppercase">
              {workout.title}
            </h1>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              {workout.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {workout.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#a3e635] text-black text-[11px] font-black uppercase px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats Table */}
          <div className="bg-[#111318] rounded-xl border border-neutral-800/70 p-5 space-y-3.5 text-xs">
            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">EQUIPMENT</span>
              <span className="text-white font-medium">{workout.equipment}</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">DIFFICULTY</span>
              <span className="text-white font-medium">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">SETS</span>
              <span className="text-white font-medium">{workout.sets}</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">REPS</span>
              <span className="text-white font-medium">{workout.reps}</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">DURATION</span>
              <span className="text-white font-medium">{workout.duration}</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-800/50 pb-2.5">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">CALORIES</span>
              <span className="text-white font-medium">{workout.calories}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-neutral-500 font-bold uppercase tracking-wider">RATING</span>
              <span className="text-white font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-sm font-black text-white uppercase tracking-wider mb-3">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-2.5 text-xs text-neutral-300">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="font-bold text-neutral-500">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => addToPlan(workout)}
              className={`flex-1 min-w-[200px] py-3 px-6 rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 transition ${
                isInPlan
                  ? "bg-neutral-800 text-neutral-400 cursor-default"
                  : "bg-[#a3e635] text-black hover:bg-[#b5f846]"
              }`}
            >
              <span>📅</span>
              {isInPlan ? "Added to Today's Plan" : "Add to today's plan"}
            </button>

            <button
              onClick={() => toggleSaved(workout)}
              className={`py-3 px-6 rounded-lg font-bold text-xs uppercase border transition flex items-center gap-2 ${
                isSaved
                  ? "bg-neutral-800 border-neutral-700 text-white"
                  : "bg-[#181a20] border-neutral-800 text-white hover:border-neutral-700"
              }`}
            >
              <span>🔖</span> {isSaved ? "Saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}