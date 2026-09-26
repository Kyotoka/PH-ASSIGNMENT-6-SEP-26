"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import toast from "react-hot-toast";

interface PlanContextType {
  plan: any[];
  saved: any[];
  addToPlan: (workout: any) => void;
  addToSaved: (workout: any) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
  toggleDone: (id: string | number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<any[]>([]);
  const [saved, setSaved] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const localPlan = localStorage.getItem("fitlog_plan");
    const localSaved = localStorage.getItem("fitlog_saved");
    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));
      localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    }
  }, [plan, saved, isLoaded]);

  const addToPlan = (workout: any) => {
    if (plan.length >= 5) {
      toast.error("Cap reached! You can only add up to 5 lifts for today.");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan!");
      return;
    }
    setPlan([...plan, { ...workout, done: false }]);
    toast.success("Added to today's plan!");
  };

  const addToSaved = (workout: any) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved for later!");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later!");
  };

  const removeFromPlan = (id: string | number) => {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from today's plan!");
  };

  const removeFromSaved = (id: string | number) => {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved!");
  };

  const toggleDone = (id: string | number) => {
    setPlan(
      plan.map((item) =>
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