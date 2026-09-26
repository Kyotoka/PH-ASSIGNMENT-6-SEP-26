"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import toast from "react-hot-toast";

export interface Workout {
  id: string | number;
  name: string;
  category?: string[];
  equipment?: string;
  duration?: string;
  calories?: string | number;
  rating?: string | number;
  difficulty?: string;
  description?: string;
  instructions?: string[];
  image?: string;
  illustration?: string;
  sets?: number;
  reps?: string;
  done?: boolean;
}

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
  toggleDone: (id: string | number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  // Initialize state directly from localStorage lazily
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const localPlan = localStorage.getItem("fitlog_plan");
      return localPlan ? JSON.parse(localPlan) : [];
    } catch {
      return [];
    }
  });

  const [saved, setSaved] = useState<Workout[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const localSaved = localStorage.getItem("fitlog_saved");
      return localSaved ? JSON.parse(localSaved) : [];
    } catch {
      return [];
    }
  });

  // Sync state to localStorage whenever plan or saved changes
  useEffect(() => {
    try {
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));
      localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [plan, saved]);

  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) {
      toast.error("Cap reached! You can only add up to 5 lifts for today.");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan!");
      return;
    }
    const newWorkout: Workout = { ...workout, done: false };
    setPlan((prevPlan) => [...prevPlan, newWorkout]);
    toast.success("Added to today's plan!");
  };

  const addToSaved = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved for later!");
      return;
    }
    setSaved((prevSaved) => [...prevSaved, workout]);
    toast.success("Saved for later!");
  };

  const removeFromPlan = (id: string | number) => {
    setPlan((prevPlan) => prevPlan.filter((item) => item.id !== id));
    toast.success("Removed from today's plan!");
  };

  const removeFromSaved = (id: string | number) => {
    setSaved((prevSaved) => prevSaved.filter((item) => item.id !== id));
    toast.success("Removed from saved!");
  };

  const toggleDone = (id: string | number) => {
    setPlan((prevPlan) =>
      prevPlan.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    toast.success("Workout status updated!");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};