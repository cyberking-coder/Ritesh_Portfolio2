import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./App.css";
import { identity, about, projects, skills, socials, contact } from "./data/content";

/* prefix a public asset path with the deploy base (works in dev + GitHub Pages) */
const asset = (p) => (p ? import.meta.env.BASE_URL + p.replace(/^\.?\//, "") : p);

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
          {identity.avatar ? (
            <img className="avatar" src={asset(identity.avatar)} alt={identity.name} />
          ) : (
            <div className="avatar-fallback">{words.map((w) => w[0]).join("")}</div>
          )}
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
function ProjectCard({ p, i, onOpen }) {
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
  const hasGallery = p.gallery && p.gallery.length > 0;
  return (
    <Reveal className={`project-card glass ${p.featured ? "wide" : ""}`} i={i}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transition: "transform 0.3s" }}>
        <div
          className="project-media"
          onClick={() => hasGallery && onOpen(0)}
          style={{ cursor: hasGallery ? "zoom-in" : "default" }}
        >
          {p.image ? (
            p.portrait ? (
              <div className="portrait-shot">
                <span className="portrait-bg" style={{ backgroundImage: `url(${asset(p.image)})` }} />
                <span className="portrait-tint" style={{ background: p.poster }} />
                <img src={asset(p.image)} alt={p.title} loading="lazy" />
              </div>
            ) : (
              <img src={asset(p.image)} alt={p.title} loading="lazy" />
            )
          ) : (
            <div className="project-poster" style={{ background: p.poster }}>
              <span className="poster-glow" style={{ background: `radial-gradient(circle, ${p.accent}55, transparent 65%)` }} />
              <span className="poster-cat" style={{ color: p.accent }}>{p.category}</span>
              <span className="poster-title">{p.title}</span>
              <span className="poster-dot" style={{ background: p.accent }} />
            </div>
          )}
          <span className="project-year glass">{p.year}</span>
          {hasGallery && (
            <span className="project-gallery-badge glass">
              ⛶ {p.gallery.length} shots
            </span>
          )}
        </div>
        <div className="project-body">
          <div className="project-cat" style={{ color: p.accent }}>
            {p.category}{p.client ? ` · ${p.client}` : ""}
          </div>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.description}</p>
          <div className="project-tech">
            {p.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="project-links">
            {p.live && (
              <a className="plink live" href={p.live} target="_blank" rel="noreferrer">
                ↗ {p.liveLabel || "Live Demo"}
              </a>
            )}
            {hasGallery && (
              <button className="plink src" onClick={() => onOpen(0)}>
                ⛶ Gallery
              </button>
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

/* ---------- lightbox gallery ---------- */
function Lightbox({ project, index, setIndex, onClose }) {
  const imgs = project.gallery;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % imgs.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [imgs.length, onClose, setIndex]);

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="lightbox-inner glass" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-head">
          <div>
            <div className="lightbox-cat" style={{ color: project.accent }}>{project.category}</div>
            <div className="lightbox-title">{project.title}</div>
          </div>
          <div className="lightbox-actions">
            {project.live && (
              <a className="plink live" href={project.live} target="_blank" rel="noreferrer">
                ↗ {project.liveLabel || "Visit live"}
              </a>
            )}
            <button className="lightbox-close" onClick={onClose} aria-label="close">✕</button>
          </div>
        </div>
        <div className="lightbox-stage">
          <button className="lb-nav prev" onClick={() => setIndex((i) => (i - 1 + imgs.length) % imgs.length)} aria-label="previous">‹</button>
          <motion.img key={index} src={asset(imgs[index])} alt="" className="lightbox-img"
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} />
          <button className="lb-nav next" onClick={() => setIndex((i) => (i + 1) % imgs.length)} aria-label="next">›</button>
        </div>
        <div className="lightbox-thumbs">
          {imgs.map((src, k) => (
            <button key={src} className={`lb-thumb ${k === index ? "on" : ""}`} onClick={() => setIndex(k)}
              style={{ borderColor: k === index ? project.accent : "transparent" }}>
              <img src={asset(src)} alt="" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [active, setActive] = useState(null); // project index
  const [slide, setSlide] = useState(0);
  const open = (pi, si) => { setActive(pi); setSlide(si); };
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
          <Reveal className="muted" i={2}>Click any project to explore the full build.</Reveal>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} onOpen={(si) => open(i, si)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <Lightbox
            project={projects[active]}
            index={slide}
            setIndex={setSlide}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
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
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.12.56 4.19 1.62 6.01L4 29l8.16-1.59a12 12 0 0 0 3.85.64h.01C22.64 28.05 28 22.67 28 16.04 28 9.4 22.64 3 16.01 3Zm0 21.9h-.01c-1.2 0-2.38-.32-3.4-.93l-.24-.14-4.84.95.97-4.72-.16-.25a9.9 9.9 0 0 1-1.52-5.28c0-5.47 4.46-9.92 9.94-9.92 2.65 0 5.14 1.04 7.02 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.46 9.93-9.93 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.27.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
    </svg>
  );
}

function Contact() {
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-card glass" i={0}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Get in touch</span>
          <h2 style={{ marginTop: 18 }}>
            Let's build something <span className="gradient-text">unforgettable.</span>
          </h2>
          <p>
            Have a project in mind, or just want to say hi? Message me on WhatsApp,
            drop an email, or give me a call — I'll get back to you as soon as I can.
          </p>
          <div className="contact-actions">
            <a href={waLink} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              ✉ Email me
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
              ☎ {contact.phone}
            </a>
          </div>
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
      <a href={waLink} className="whatsapp-fab" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
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
