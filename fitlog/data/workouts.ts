export interface Workout {
  id: string;
  title: string;
  description: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  tags: string[];
  duration: string;
  calories: string;
  rating: number;
  image: string;
  instructions: string[];
}

export const WORKOUTS: Workout[] = [
  {
    id: "1",
    title: "BARBELL BENCH PRESS",
    description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    sets: 4,
    reps: "6-8",
    tags: ["Chest", "Arms"],
    duration: "25 min",
    calories: "180 kcal",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  },
  {
    id: "2",
    title: "PULL-UP",
    description: "An essential upper-body pull targeting lat width, upper back density, and grip strength.",
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    sets: 4,
    reps: "8-12",
    tags: ["Back", "Arms"],
    duration: "15 min",
    calories: "120 kcal",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Grasp the bar with an overhand grip slightly wider than shoulder-width.",
      "Hang with fully extended arms and core engaged.",
      "Pull your chest up toward the bar by driving elbows down.",
      "Lower yourself back down under control to a dead hang."
    ]
  },
  {
    id: "3",
    title: "BACK SQUAT",
    description: "The primary compound movement for lower-body power, quadriceps hypertrophy, and glute development.",
    equipment: "Barbell, Rack",
    difficulty: "Advanced",
    sets: 4,
    reps: "5-8",
    tags: ["Legs", "Core"],
    duration: "30 min",
    calories: "240 kcal",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Position the barbell across your upper trapezius and unrack.",
      "Stand with feet shoulder-width apart and toes pointed slightly outward.",
      "Break at the hips and knees simultaneously to squat below parallel.",
      "Drive through your mid-foot to stand back up powerfully."
    ]
  },
  {
    id: "4",
    title: "OVERHEAD PRESS",
    description: "A foundational vertical pressing movement for shoulder strength and core stability.",
    equipment: "Barbell",
    difficulty: "Intermediate",
    sets: 3,
    reps: "6-8",
    tags: ["Shoulders", "Arms"],
    duration: "20 min",
    calories: "150 kcal",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Hold the bar at collarbone height with hands shoulder-width apart.",
      "Brace your core and glutes tightly before pressing overhead.",
      "Press the barbell straight up, clearing your chin.",
      "Lock out overhead with the bar aligned over your mid-foot."
    ]
  },
  {
    id: "5",
    title: "DUMBBELL BICEP CURL",
    description: "An isolation movement designed to maximize bicep hypertrophy and elbow flexion control.",
    equipment: "Dumbbells",
    difficulty: "Beginner",
    sets: 3,
    reps: "10-12",
    tags: ["Arms"],
    duration: "12 min",
    calories: "80 kcal",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Stand tall holding dumbbells at your sides with palms facing forward.",
      "Keep your elbows tucked close to your torso throughout.",
      "Curl the weights up toward shoulder level while squeezing biceps.",
      "Lower the dumbbells back down slowly under control."
    ]
  },
  {
    id: "6",
    title: "HAMMER CURL",
    description: "A neutral-grip curl variant targeting the brachialis and forearm flexors.",
    equipment: "Dumbbells",
    difficulty: "Beginner",
    sets: 3,
    reps: "10-12",
    tags: ["Arms"],
    duration: "12 min",
    calories: "85 kcal",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Hold dumbbells at your sides with palms facing inward toward each other.",
      "Maintain stationary upper arms and curl the weights upward.",
      "Squeeze at the peak contraction near shoulder height.",
      "Lower under control back to the starting position."
    ]
  },
  {
    id: "7",
    title: "HOLLOW-BODY PLANK",
    description: "An advanced isometric core exercise building deep abdominal tension and posterior pelvic tilt.",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    sets: 3,
    reps: "45 sec",
    tags: ["Core"],
    duration: "10 min",
    calories: "60 kcal",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Place forearms on the floor with elbows directly under shoulders.",
      "Extend legs behind you and press into toes.",
      "Tuck pelvis under to flatten lower back and contract core.",
      "Hold rigid position while breathing evenly."
    ]
  },
  {
    id: "8",
    title: "INCLINE BENCH PRESS",
    description: "An angled press focusing upper chest emphasis and anterior deltoid engagement.",
    equipment: "Barbell, Incline Bench",
    difficulty: "Intermediate",
    sets: 4,
    reps: "8-10",
    tags: ["Chest", "Shoulders"],
    duration: "22 min",
    calories: "170 kcal",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Set bench to 30-45 degree incline and lie back firmly.",
      "Unrack bar and lower it under control to upper chest.",
      "Press straight up until arms are extended above shoulders.",
      "Maintain pinched scapulae throughout the full movement."
    ]
  },
  {
    id: "9",
    title: "CONVENTIONAL DEADLIFT",
    description: "The ultimate total-body pulling movement for posterior chain strength and back thickness.",
    equipment: "Barbell",
    difficulty: "Advanced",
    sets: 3,
    reps: "5",
    tags: ["Back", "Legs"],
    duration: "28 min",
    calories: "260 kcal",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Stand with feet hip-width apart and bar over mid-foot.",
      "Hinge down and grip bar just outside legs with flat spine.",
      "Pull slack out of bar, drive hips through, and stand tall.",
      "Hinge at hips to lower bar smoothly back to the ground."
    ]
  },
  {
    id: "10",
    title: "PUSH-UP",
    description: "A staple bodyweight pressing exercise developing chest, triceps, and core stamina.",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    sets: 3,
    reps: "15-20",
    tags: ["Chest", "Arms", "Core"],
    duration: "12 min",
    calories: "90 kcal",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Place hands slightly wider than shoulder-width in high plank position.",
      "Lower body in a straight line until chest almost touches floor.",
      "Keep elbows flared at 45 degrees relative to torso.",
      "Push back up aggressively to full arm extension."
    ]
  },
  {
    id: "11",
    title: "WALKING LUNGE",
    description: "A dynamic unilateral leg movement strengthening quads, glutes, and balance.",
    equipment: "Dumbbells (optional)",
    difficulty: "Intermediate",
    sets: 3,
    reps: "12 steps/leg",
    tags: ["Legs"],
    duration: "18 min",
    calories: "170 kcal",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Step forward with right foot and lower back knee toward floor.",
      "Ensure front knee stays aligned above ankle.",
      "Drive off front foot to step through into next lunge step.",
      "Maintain upright torso throughout the set."
    ]
  },
  {
    id: "12",
    title: "RUSSIAN TWIST",
    description: "A rotational core movement targeting obliques and abdominal control.",
    equipment: "Medicine Ball",
    difficulty: "Beginner",
    sets: 3,
    reps: "20 total",
    tags: ["Core"],
    duration: "10 min",
    calories: "70 kcal",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    instructions: [
      "Sit on floor with knees bent and heels slightly elevated.",
      "Lean back slightly to engage core in a V-sit posture.",
      "Rotate torso side to side, tapping weight on ground.",
      "Control rotation from obliques without swinging arms."
    ]
  }
];