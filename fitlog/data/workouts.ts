export interface Workout {
  id: string | number;
  name: string;
  category: string[];
  equipment: string;
  duration: string;
  calories: string | number;
  rating: string | number;
  difficulty: string;
  description: string;
  instructions: string[];
  image: string;
}

export const WORKOUTS: Workout[] = [
  {
    id: "barbell-bench-press",
    name: "Barbell Bench Press",
    category: ["Chest", "Upper Body", "Strength"],
    equipment: "Barbell",
    duration: "20 min",
    calories: "180",
    rating: "4.9",
    difficulty: "Intermediate",
    description: "The classic upper body strength builder targeting the chest, shoulders, and triceps.",
    instructions: [
      "Lie flat on the bench with your feet planted firmly on the floor.",
      "Grip the barbell slightly wider than shoulder-width.",
      "Unrack the bar and lower it slowly to mid-chest level.",
      "Press the bar forcefully upward until your arms are fully extended."
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop"
  },
  {
    id: "conventional-deadlift",
    name: "Conventional Deadlift",
    category: ["Back", "Legs", "Strength"],
    equipment: "Barbell",
    duration: "25 min",
    calories: "250",
    rating: "5.0",
    difficulty: "Advanced",
    description: "A foundational full-body exercise for developing posterior chain power and mass.",
    instructions: [
      "Stand with feet hip-width apart and the barbell over your mid-foot.",
      "Hinge at the hips and grip the bar outside your knees.",
      "Keep your spine neutral, brace your core, and drive through the heels to lift."
    ],
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&auto=format&fit=crop"
  },
  {
    id: "pull-ups",
    name: "Wide-Grip Pull-Ups",
    category: ["Back", "Upper Body"],
    equipment: "Pull-up Bar",
    duration: "15 min",
    calories: "120",
    rating: "4.8",
    difficulty: "Intermediate",
    description: "An unmatched bodyweight movement for building a wide latissimus dorsi and back strength.",
    instructions: [
      "Grip the bar slightly wider than shoulder-width with an overhand grip.",
      "Pull your body up until your chin clears the bar.",
      "Lower back down slowly with full control."
    ],
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop"
  },
  {
    id: "barbell-squat",
    name: "Barbell Back Squat",
    category: ["Legs", "Strength"],
    equipment: "Barbell",
    duration: "25 min",
    calories: "230",
    rating: "4.9",
    difficulty: "Intermediate",
    description: "The primary compound movement for quad, hamstrings, and glute development.",
    instructions: [
      "Set the bar on your upper traps and unrack.",
      "Squat down by bending hips and knees simultaneously until thighs are parallel.",
      "Drive back up through your feet."
    ],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop"
  }
];