"use client";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, toggleDone } = usePlan();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <section className="mb-10 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          MY <span className="text-[#ccff00]">SESSION</span> &amp; SAVED
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl">
          Manage today&apos;s active workouts or review exercises saved for later.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Today's Plan Column */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-neutral-800 pb-3">
            <h2 className="text-2xl font-black uppercase text-white flex items-center gap-2">
              <span className="text-[#ccff00]">⚡</span> Today&apos;s Plan
            </h2>
            <span className="bg-[#ccff00] text-black font-extrabold text-xs px-3 py-1 rounded-full">
              {plan.length} / 5 Max
            </span>
          </div>

          {plan.length === 0 ? (
            <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-xl p-8 text-center">
              <p className="text-neutral-400 text-sm mb-4">
                No exercises added to today&apos;s routine yet.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#ccff00] text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-lime-400 transition"
              >
                Browse Exercises
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {plan.map((item) => (
                <div
                  key={item.id}
                  className={`bg-neutral-900/80 border ${
                    item.done ? "border-emerald-500/50 opacity-70" : "border-neutral-800"
                  } rounded-xl p-4 flex items-center gap-4 transition`}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-800">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-bold text-sm ${
                        item.done ? "line-through text-neutral-400" : "text-white"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.equipment} &bull; {item.duration}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleDone(item.id)}
                      className={`text-xs px-3 py-1.5 rounded-md font-bold transition ${
                        item.done
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-neutral-800 text-neutral-300 hover:text-white"
                      }`}
                    >
                      {item.done ? "Done ✓" : "Mark Done"}
                    </button>
                    <button
                      onClick={() => removeFromPlan(item.id)}
                      className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1.5 transition"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Saved Items Column */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-neutral-800 pb-3">
            <h2 className="text-2xl font-black uppercase text-white flex items-center gap-2">
              <span className="text-neutral-400">🔖</span> Saved for Later
            </h2>
            <span className="bg-neutral-800 text-neutral-300 font-bold text-xs px-3 py-1 rounded-full border border-neutral-700">
              {saved.length} Saved
            </span>
          </div>

          {saved.length === 0 ? (
            <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-xl p-8 text-center">
              <p className="text-neutral-400 text-sm">
                No workouts saved for later.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {saved.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-neutral-800 flex-shrink-0">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="truncate">
                      <h3 className="font-bold text-sm text-white truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {item.difficulty}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromSaved(item.id)}
                    className="text-xs text-neutral-400 hover:text-rose-400 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}