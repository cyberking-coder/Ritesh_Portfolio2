// ============================================================================
//  EDIT THIS FILE to update your portfolio content.
//  Everything the site renders (identity, projects, skills, links) lives here.
// ============================================================================

export const identity = {
  name: "Ritesh Kelkar",
  role: "Website & App Developer",
  tagline:
    "I craft immersive, high-performance web & mobile experiences — blending clean engineering with cinematic design.",
  location: "India",
  availableForWork: true,
  resumeUrl: "", // e.g. "/resume.pdf"
};

export const about = {
  heading: "Building digital products that feel alive.",
  paragraphs: [
    "I'm Ritesh Kelkar, a website and app developer who lives at the intersection of design and engineering. I turn ideas into fast, polished, memorable products — from responsive marketing sites to full-featured applications.",
    "My focus is on the details that make software feel premium: fluid motion, thoughtful interaction, and interfaces that respond to the person using them. I ship, iterate, and obsess over the last 10%.",
  ],
  stats: [
    { value: "3+", label: "Years Building" },
    { value: "20+", label: "Projects Shipped" },
    { value: "100%", label: "Passion" },
  ],
};

// ---------------------------------------------------------------------------
//  PROJECTS  — add / edit freely. `image` can be a URL or an imported asset.
//  `live` = GitHub Pages / deployed link. `source` = repo link (optional).
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: "Optimasi Prompt — Leonardo AI",
    category: "AI / Design",
    year: "2024",
    description:
      "A curated showcase of AI-generated concept art and an interactive prompt-engineering explorer. Digital illustration meets a slick, glassy UI for browsing and remixing prompts.",
    tech: ["React", "AI Prompting", "Glassmorphism UI"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    live: "https://cyberking-coder.github.io/",
    source: "",
    accent: "#7cf0a8",
    featured: true,
  },
  {
    title: "Skinwalker: Hunting",
    category: "Interactive / Cinematic",
    year: "2024",
    description:
      "A moody, film-poster-style landing experience with a horror-cinematic aesthetic — layered depth, atmospheric lighting, and a bold editorial layout inspired by streaming platforms.",
    tech: ["JavaScript", "CSS Animations", "Cinematic UI"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    live: "https://cyberking-coder.github.io/",
    source: "",
    accent: "#ffd76a",
    featured: true,
  },
  {
    title: "Project Three",
    category: "Web App",
    year: "2025",
    description:
      "Replace this with a real project. Add a short, punchy description of what it does and what makes it special.",
    tech: ["React", "Vite", "Node"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    live: "https://cyberking-coder.github.io/",
    source: "",
    accent: "#8ab4ff",
    featured: false,
  },
];

// ---------------------------------------------------------------------------
//  SKILLS
// ---------------------------------------------------------------------------
export const skills = [
  "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Vite",
  "Node.js", "Framer Motion", "React Native", "Tailwind", "Figma",
  "UI / UX", "Glassmorphism", "Responsive Design", "Git",
];

// ---------------------------------------------------------------------------
//  SOCIAL / CONTACT
// ---------------------------------------------------------------------------
export const socials = [
  { label: "GitHub", url: "https://github.com/cyberking-coder", handle: "@cyberking-coder" },
  { label: "Email", url: "mailto:ar.happinessmovement@gmail.com", handle: "ar.happinessmovement@gmail.com" },
  { label: "LinkedIn", url: "", handle: "Add your LinkedIn" },
];
