import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./App.css";
import { identity, about, projects, skills, socials } from "./data/content";

/* ---------- animation presets ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

function Reveal({ children, i = 0, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </M>
  );
}

/* ---------- background ---------- */
function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <>
      <div className="bg-fx">
        <motion.div className="orb orb-1" style={{ y: y1 }} />
        <motion.div className="orb orb-2" style={{ y: y2 }} />
        <motion.div className="orb orb-3" style={{ y: y3 }} />
      </div>
      <div className="bg-grid" />
      <div className="bg-noise" />
    </>
  );
}

/* ---------- cursor glow ---------- */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div className="cursor-glow" ref={ref} />;
}

/* ---------- nav ---------- */
const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="nav-inner glass">
          <a href="#home" className="nav-logo">
            RK<span>.</span>
          </a>
          <div className="nav-links">
            {links.map(([l, h]) => (
              <a key={l} href={h}>{l}</a>
            ))}
          </div>
          <a href="#contact" className="nav-cta">Let's talk</a>
          <button className="nav-burger" onClick={() => setOpen(true)} aria-label="menu">☰</button>
        </div>
      </motion.nav>
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          <button className="close" aria-label="close">✕</button>
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------- hero ---------- */
function Hero() {
  const words = identity.name.split(" ");
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <Reveal className="hero-badge glass" i={0}>
            <span className="dot" />
            {identity.availableForWork ? "Available for freelance & full-time" : identity.role}
          </Reveal>
          <h1>
            {words.map((w, idx) => (
              <span className="line" key={idx}>
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + idx * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                  className={idx === words.length - 1 ? "gradient-text" : ""}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <Reveal className="hero-sub" i={2}>{identity.tagline}</Reveal>
          <Reveal className="hero-actions" i={3}>
            <a href="#work" className="btn btn-primary">View my work →</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </Reveal>
        </div>

        <motion.div
          className="hero-card glass"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="avatar-fallback">{words.map((w) => w[0]).join("")}</div>
          <motion.div
            className="chip chip-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚡ {identity.role}
          </motion.div>
          <motion.div
            className="chip chip-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            📍 {identity.location}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- marquee ---------- */
function Marquee() {
  const items = skills.slice(0, 8);
  return (
    <div className="container">
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...items, ...items].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- about ---------- */
function About() {
  const cls = ["g", "e", "b"];
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <Reveal as="div" i={0}><span className="eyebrow">About me</span></Reveal>
          <Reveal as="h2" className="section-title" i={1}>{about.heading}</Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" i={i + 2} key={i}>{p}</Reveal>
          ))}
        </div>
        <div className="stats">
          {about.stats.map((s, i) => (
            <Reveal className="stat glass" i={i} key={s.label}>
              <div className={`value ${cls[i % 3]}`}>{s.value}</div>
              <div className="label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- project card w/ tilt ---------- */
function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-8px) perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <Reveal className={`project-card glass ${p.featured ? "wide" : ""}`} i={i}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transition: "transform 0.3s" }}>
        <div className="project-media">
          <img src={p.image} alt={p.title} loading="lazy" />
          <span className="project-year glass">{p.year}</span>
        </div>
        <div className="project-body">
          <div className="project-cat" style={{ color: p.accent }}>{p.category}</div>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.description}</p>
          <div className="project-tech">
            {p.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="project-links">
            {p.live && (
              <a className="plink live" href={p.live} target="_blank" rel="noreferrer">
                ↗ Live Demo
              </a>
            )}
            {p.source && (
              <a className="plink src" href={p.source} target="_blank" rel="noreferrer">
                {"< >"} Source
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="work">
      <div className="container">
        <div className="projects-head">
          <div>
            <Reveal as="div" i={0}><span className="eyebrow">Selected work</span></Reveal>
            <Reveal as="h2" className="section-title" i={1}>
              Projects I've <span className="gradient-text">crafted</span>
            </Reveal>
          </div>
          <Reveal className="muted" i={2}>A blend of engineering &amp; cinematic design.</Reveal>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- skills ---------- */
function Skills() {
  return (
    <section id="skills">
      <div className="container" style={{ textAlign: "center" }}>
        <Reveal as="div" i={0}><span className="eyebrow" style={{ justifyContent: "center" }}>Toolbox</span></Reveal>
        <Reveal as="h2" className="section-title" i={1}>
          Technologies I <span className="gradient-text">work with</span>
        </Reveal>
        <div className="skills-wrap" style={{ marginTop: 40 }}>
          {skills.map((s, i) => (
            <Reveal className="skill-pill" i={i * 0.4} key={s}>{s}</Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function Contact() {
  const email = socials.find((s) => s.label === "Email");
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-card glass" i={0}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Get in touch</span>
          <h2 style={{ marginTop: 18 }}>
            Let's build something <span className="gradient-text">unforgettable.</span>
          </h2>
          <p>
            Have a project in mind, or just want to say hi? My inbox is always open —
            I'll get back to you as soon as I can.
          </p>
          <a href={email ? email.url : "#"} className="btn btn-primary" style={{ margin: "0 auto" }}>
            ✉ Say hello
          </a>
          <div className="socials">
            {socials.filter((s) => s.url).map((s) => (
              <a key={s.label} className="social" href={s.url} target="_blank" rel="noreferrer">
                <span className="l">{s.label}</span>
                <span className="h">{s.handle}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- app ---------- */
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX, width: "100%" }} />
      <Background />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {identity.name} — Designed &amp; built with{" "}
          <span className="heart">♥</span> and React.
        </div>
      </footer>
    </>
  );
}
