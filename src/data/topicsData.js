/* ════════════════════════════════════════════
    BIOME SYSTEM ════════════════════════════════════════════ */
export const BIOMES = {
  home: { color: "#b8ff3c", rgb: "184,255,60", name: "CHARTREUSE" },
  intro: { color: "#00ffd5", rgb: "0,255,213", name: "MINT" },
  types: { color: "#c084fc", rgb: "192,132,252", name: "VIOLET" },
  techniques: { color: "#fbbf24", rgb: "251,191,36", name: "AMBER" },
  examples: { color: "#fb7185", rgb: "251,113,133", name: "ROSE" },
  "best-practices": { color: "#34d399", rgb: "52,211,153", name: "EMERALD" },
  topics: { color: "#c084fc", rgb: "192,132,252", name: "VIOLET" },
  article: { color: "#00ffd5", rgb: "0,255,213", name: "MINT" },
};

/* ════════════════════════════════════════════
    GAME CONSTANTS ════════════════════════════════════════════ */
export const XP_TABLE = {
  section: 40,
  quiz: 60,
  copy: 15,
  pageVisit: 20,
  firstVisit: 100,
};

export const RANKS = [
  { min: 0, title: "NOVICE", icon: "⬡" },
  { min: 100, title: "APPRENTICE", icon: "◈" },
  { min: 300, title: "ENGINEER", icon: "◉" },
  { min: 600, title: "ARCHITECT", icon: "◆" },
  { min: 1000, title: "MASTER", icon: "★" },
];

export const getRank = (xp) =>
  [...RANKS].reverse().find((r) => xp >= r.min) || RANKS[0];
export const getLevelXP = (xp) => ({
  current: xp % 200,
  max: 200,
  level: Math.floor(xp / 200) + 1,
});

export const ACHIEVEMENTS = [
  {
    id: "first_blood",
    icon: "🧠",
    title: "First Synapse",
    desc: "Complete your first section",
    xp: 50,
  },
  {
    id: "explorer",
    icon: "🗺️",
    title: "Neural Explorer",
    desc: "Visit all 6 modules",
    xp: 80,
  },
  {
    id: "quiz_ace",
    icon: "⚡",
    title: "Quiz Ace",
    desc: "Answer 5 quiz questions correctly",
    xp: 100,
  },
  {
    id: "copy_cat",
    icon: "📋",
    title: "Template Hunter",
    desc: "Copy 5 prompt templates",
    xp: 60,
  },
  {
    id: "half_way",
    icon: "🔥",
    title: "Halfway Synced",
    desc: "Complete 3 full chapters",
    xp: 80,
  },
  {
    id: "completionist",
    icon: "🏆",
    title: "Prompt Master",
    desc: "Complete all 6 chapters",
    xp: 200,
  },
  {
    id: "speed_reader",
    icon: "⚡",
    title: "Speed Reader",
    desc: "Complete a chapter in under 2 min",
    xp: 70,
  },
];

/* ════════════════════════════════════════════
    NAV / SUBTOPICS ════════════════════════════════════════════ */
export const PAGE_NAV = [
  { id: "home", label: "Home", short: "HOME" },
  { id: "intro", label: "Intro", short: "INTRO" },
  { id: "types", label: "Types", short: "TYPES" },
  { id: "tech", label: "Tech", short: "TECH" },
  { id: "ex", label: "Ex", short: "EX" },
  { id: "best", label: "Best", short: "BEST" },
];

export const PAGE_SUBTOPICS = {
  home: [
    { id: "s-welcome", title: "Welcome" },
    { id: "s-overview", title: "What You'll Learn" },
    { id: "s-modules", title: "Modules" },
  ],
  intro: [
    { id: "s-what-is-ai", title: "What is AI?" },
    { id: "s-ai-evolution", title: "AI Evolution" },
    { id: "s-prompting-basics", title: "Prompting Basics" },
    { id: "s-why-matters", title: "Why It Matters" },
  ],
  types: [
    { id: "s-prompt-types", title: "Types of Prompts" },
    { id: "s-instructional", title: "Instructional Prompts" },
    { id: "s-conversational", title: "Conversational Prompts" },
    { id: "s-creative", title: "Creative Prompts" },
    { id: "s-analytical", title: "Analytical Prompts" },
  ],
  tech: [
    { id: "s-llm-fundamentals", title: "LLM Fundamentals" },
    { id: "s-tokenization", title: "Tokenization" },
    { id: "s-attention-mechanism", title: "Attention Mechanism" },
    { id: "s-fine-tuning", title: "Fine-tuning" },
    { id: "s-model-architectures", title: "Model Architectures" },
  ],
  ex: [
    { id: "s-basic-examples", title: "Basic Examples" },
    { id: "s-advanced-examples", title: "Advanced Examples" },
    { id: "s-real-world-cases", title: "Real-world Cases" },
    { id: "s-case-studies", title: "Case Studies" },
  ],
  best: [
    { id: "s-best-practices", title: "Best Practices" },
    { id: "s-common-mistakes", title: "Common Mistakes" },
    { id: "s-optimization-tips", title: "Optimization Tips" },
    { id: "s-ethical-considerations", title: "Ethical Considerations" },
  ],
};
