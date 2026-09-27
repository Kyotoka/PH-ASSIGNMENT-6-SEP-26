"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface Workout {
  id: string;
  title: string;
  image: string;
  tags: string[];
  equipment: string;
  duration: string;
  calories: string;
  rating: number;
}

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: string) => void;
  toggleSaved: (workout: Workout) => void;
  isSaved: (id: string) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

function getStoredWorkouts(key: string): Workout[] {
  if (typeof window === "undefined") return [];

  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as Workout[]) : [];
  } catch (e) {
    console.error(`Failed to load ${key} from localStorage`, e);
    return [];
  }
}

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>(() =>
    getStoredWorkouts("fitlog_plan")
  );
  const [saved, setSaved] = useState<Workout[]>(() =>
    getStoredWorkouts("fitlog_saved")
  );

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));
      localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }, [plan, saved]);

  const addToPlan = (workout: Workout): boolean => {
    if (plan.length >= 5) return false; // Enforce the 5-lift cap
    if (plan.some((item) => item.id === workout.id)) return true;
    setPlan((prev) => [...prev, workout]);
    return true;
  };

  const removeFromPlan = (id: string) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleSaved = (workout: Workout) => {
    setSaved((prev) => {
      const exists = prev.some((item) => item.id === workout.id);
      if (exists) {
        return prev.filter((item) => item.id !== workout.id);
      } else {
        return [...prev, workout];
      }
    });
  };

  const isSaved = (id: string) => saved.some((item) => item.id === id);

  return (
    <PlanContext.Provider value={{ plan, saved, addToPlan, removeFromPlan, toggleSaved, isSaved }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used within a PlanProvider");
  return context;
}