// ============================================================================
//  EDIT THIS FILE to update your portfolio content.
//  Everything the site renders (identity, projects, skills, links) lives here.
//
//  PROJECT IMAGES: drop a screenshot into `public/projects/<name>.png` and set
//  `image: "projects/<name>.png"` on that project. If `image` is omitted, a
//  premium on-theme gradient "poster" is generated automatically.
// ============================================================================

export const identity = {
  name: "Ritesh Kelkar",
  role: "Website & App Developer · Graphic Designer",
  tagline:
    "I build premium websites and apps end-to-end — and design the graphics that make them unforgettable. Cinematic front-ends, real payment flows, and creative visuals that turn visitors into customers.",
  location: "India",
  availableForWork: true,
  resumeUrl: "",
  avatar: "hero-img.png",
};

export const about = {
  heading: "Websites & apps that look premium and convert.",
  paragraphs: [
    "I'm Ritesh Kelkar, a website and app developer. I ship complete products — from cinematic marketing sites and real-estate launches to full payment platforms with Razorpay, dashboards, and conversion tracking.",
    "My work spans the whole stack: polished React / Next.js front-ends, Node/Express + MySQL back-ends, and the motion & detail that make an interface feel high-end. I care about the last 10% — the animations, the load time, the checkout that actually works.",
  ],
  stats: [
    { value: "5+", label: "Live Products" },
    { value: "8+", label: "Industries" },
    { value: "100%", label: "Hands-on Built" },
  ],
};

// ---------------------------------------------------------------------------
//  PROJECTS
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: "ForexGreek.com",
    category: "Payments · EdTech",
    year: "2026",
    client: "Rohan Kelkar",
    description:
      "A forex-course selling platform engineered to convert. Cinematic video intro, a live currency ticker, a slick enrollment modal, an end-to-end Razorpay payment flow, and full conversion tracking — built to turn visitors into paying students.",
    tech: ["HTML", "Express / Node.js", "MySQL", "Razorpay", "GTM / Pixel"],
    live: "https://www.forexgreek.in",
    source: "",
    accent: "#34e39b",
    poster: "linear-gradient(135deg,#03130d 0%,#062a1c 45%,#0b3d29 100%)",
    image: "projects/forex-1.png",
    gallery: [
      "projects/forex-1.png", "projects/forex-3.png", "projects/forex-4.png",
      "projects/forex-5.png", "projects/forex-7.png", "projects/forex-2.png",
      "projects/forex-6.png",
    ],
    featured: true,
  },
  {
    title: "Basil Vrundavan",
    category: "Real Estate · Property Launch",
    year: "2026",
    client: "",
    description:
      "A premium property-launch site for a residential tower — a cinematic sunset hero, curated amenities and residences, and a smooth “Book a Visit” flow. Motion-rich and built to sell the lifestyle.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    live: "https://cyberking-coder.github.io/BASIL_VRUNDAVAN/",
    source: "",
    accent: "#ff9d5c",
    poster: "linear-gradient(135deg,#1a0e07 0%,#3a1d0c 45%,#7a3d14 100%)",
    image: "projects/basil-2.png",
    gallery: [
      "projects/basil-2.png", "projects/basil-3.png", "projects/basil-4.png",
      "projects/basil-5.png", "projects/basil-6.png", "projects/basil-7.png",
      "projects/basil-1.png",
    ],
    featured: false,
  },
  {
    title: "Basil Vrundavan — Residences",
    category: "Real Estate · Editorial",
    year: "2026",
    client: "",
    description:
      "An alternate editorial design for the same launch — a serif “Culture of Excellence” hero, MahaRERA details, amenities, and a downloadable brochure. Quieter, more luxury-print in feel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://real-estate-omsis7c3b-ritesh-s-projects9.vercel.app",
    source: "",
    accent: "#d9b26a",
    poster: "linear-gradient(135deg,#14110a 0%,#2b2415 50%,#4a3f22 100%)",
    image: "projects/basiled-1.png",
    gallery: [
      "projects/basiled-1.png", "projects/basiled-2.png", "projects/basiled-3.png",
      "projects/basiled-4.png", "projects/basiled-6.png", "projects/basiled-7.png",
      "projects/basiled-5.png",
    ],
    featured: false,
  },
  {
    title: "Know Thyself",
    category: "Mobile App · Meditation",
    year: "2026",
    client: "Anurag Rishi",
    description:
      "A meditation and inner-growth mobile app built for spiritual guide Anurag Rishi. Members sign in with email or Google, browse guided meditations by category, follow paid multi-lesson courses, download sessions for offline play, and track streaks and achievements from their profile — all in a calm, botanical green interface. Download the app from the Play Store.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "MySQL", "Razorpay"],
    live: "https://play.google.com/store/apps/details?id=com.knowthyself.app",
    liveLabel: "Download on Play Store",
    source: "",
    accent: "#5f8a72",
    poster: "linear-gradient(135deg,#0d1512 0%,#1b2b23 50%,#2f4a3c 100%)",
    image: "projects/01_splash.png",
    gallery: [
      "projects/01_splash.png", "projects/06_login.png", "projects/03_home.png",
      "projects/02_courses.png", "projects/04_profile.png", "projects/05_downloads.png",
    ],
    featured: false,
  },
  {
    title: "Gurukul Academy",
    category: "Coaching Institute",
    year: "2026",
    client: "Gurukul Academy",
    description:
      "A landing site for a Pune coaching institute (Class 8–12) — programs, a photo gallery, Google reviews, and WhatsApp-driven enrollment, all in a polished dark-gold theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],
    live: "https://cyberking-coder.github.io/Gurukul_Academy/",
    source: "",
    accent: "#ffd76a",
    poster: "linear-gradient(135deg,#100d05 0%,#26200c 50%,#43391a 100%)",
    image: "projects/gurukul-1.png",
    gallery: [
      "projects/gurukul-1.png", "projects/gurukul-2.png", "projects/gurukul-3.png",
      "projects/gurukul-4.png", "projects/gurukul-5.png",
    ],
    featured: false,
  },
  {
    title: "LookOut Salon & Academy",
    category: "Salon · Booking",
    year: "2023",
    client: "LookOut Salon & Academy",
    description:
      "A bold, high-contrast site for a Mumbai salon & academy — services, gallery, reviews, and a chair-reservation booking flow. Loud, confident, and unmistakably branded.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://cyberking-coder.github.io/Lookout_salon.com/",
    source: "",
    accent: "#ff4d4d",
    poster: "linear-gradient(135deg,#1a0505 0%,#3a0b0b 45%,#7a1414 100%)",
    image: "projects/lookout-1.png",
    gallery: [
      "projects/lookout-1.png", "projects/lookout-2.png", "projects/lookout-3.png",
      "projects/lookout-4.png", "projects/lookout-5.png", "projects/lookout-6.png",
    ],
    featured: false,
  },
];

// ---------------------------------------------------------------------------
//  DESIGNS & CREATIVES  (Graphic-design portfolio pieces)
// ---------------------------------------------------------------------------
//  Each item renders as a visual card in the "Designs & Creatives" section.
//  Drop your artwork in `public/designs/<file>.png|jpg|webp` and reference it
//  with `image: "designs/<file>.png"`. Add a `gallery` array to open a
//  lightbox with multiple shots (same behavior as projects).
//
//  Fields:
//    title       – piece name
//    category    – "Poster", "Logo", "Social Post", "Brand Identity", etc.
//    year        – "2026"
//    client      – optional
//    description – 1–2 sentences on the brief and outcome
//    tools       – array, e.g. ["Photoshop", "Illustrator", "Figma"]
//    accent      – hex color used for tag/category tint
//    image       – primary/cover image path
//    gallery     – optional array of image paths (opens lightbox)
//    featured    – true = spans a wider tile
// ---------------------------------------------------------------------------
export const designs = [
  {
    title: "Real Estate Brochure / Ad Creatives",
    category: "Real Estate · Concept Creatives",
    year: "2026",
    client: "",
    description:
      "Real Estate Brochure/Ad Creatives — Concept marketing creatives for fictional property brands, exploring different visual tones (luxury warm, premium dark, corporate clean, minimal elegant). AI-assisted visuals + manual layout, typography, and messaging direction.",
    tools: ["Photoshop", "AI-assisted visuals", "Typography", "Layout"],
    accent: "#d9b26a",
    image: "designs/real-estate-brochure.png",
    gallery: [
      "designs/real-estate-brochure.png",
      "designs/real-estate-ad-1.png",
      "designs/real-estate-ad-2.png",
      "designs/real-estate-ad-3.png",
      "designs/real-estate-ad-4.png",
    ],
    featured: true,
  },
  {
    title: "Product & Packaging Creatives",
    category: "FMCG · Beauty · Concept Ads",
    year: "2026",
    client: "",
    description:
      "Concept ad visuals for fictional FMCG/beauty brands — perfume, snacks, skincare, cosmetics. AI-assisted product renders + label design, typography, and prop styling.",
    tools: ["Photoshop", "AI-assisted renders", "Label Design", "Typography"],
    accent: "#ff9d5c",
    image: "designs/product-1.png",
    gallery: [
      "designs/product-1.png",
      "designs/product-2.png",
      "designs/product-3.png",
      "designs/product-4.png",
      "designs/product-5.png",
      "designs/product-6.jpg",
    ],
    featured: true,
  },
];

// ---------------------------------------------------------------------------
//  SKILLS
// ---------------------------------------------------------------------------
export const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "MySQL", "Tailwind CSS", "Framer Motion", "GSAP", "Razorpay",
  "HTML5", "CSS3", "GTM / Pixel", "UI / UX", "Responsive Design",
];

// ---------------------------------------------------------------------------
//  SOCIAL / CONTACT
// ---------------------------------------------------------------------------
export const contact = {
  email: "riteshkelkar45@gmail.com",
  phone: "+91 81808 04366",
  whatsapp: "918180804366", // digits only, country code first (91 = India)
  whatsappMessage: "Hi Ritesh, I saw your portfolio and would like to talk about a project.",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/cyberking-coder", handle: "@cyberking-coder" },
  { label: "Email", url: `mailto:${contact.email}`, handle: contact.email },
  { label: "Phone", url: `tel:${contact.phone.replace(/\s/g, "")}`, handle: contact.phone },
];
