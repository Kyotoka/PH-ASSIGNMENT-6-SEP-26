"use client";

import React, { createContext, useContext, useState } from "react";
import { Workout } from "@/data/workouts";

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: string) => void;
  toggleSaved: (workout: Workout) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) =>
      prev.some((item) => String(item.id) === String(workout.id))
        ? prev
        : [...prev, workout]
    );
  };

  const removeFromPlan = (id: string) => {
    setPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const toggleSaved = (workout: Workout) => {
    setSaved((prev) =>
      prev.some((item) => String(item.id) === String(workout.id))
        ? prev.filter((item) => String(item.id) !== String(workout.id))
        : [...prev, workout]
    );
  };

  return (
    <PlanContext.Provider
      value={{ plan, saved, addToPlan, removeFromPlan, toggleSaved }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}