import React, { useState, useEffect, useRef } from "react";

import {
  GitHub,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Download,
} from "lucide-react";

const SKILLS = [
  { name: "Java", group: "Language" },
  { name: "SQL", group: "Language" },
  { name: "HTML", group: "Language" },
  { name: "CSS", group: "Language" },
  { name: "Spring Boot", group: "Framework" },
  { name: "MySQL", group: "Database" },
  { name: "PostgreSQL", group: "Database" },
  { name: "GitHub", group: "Tools" },
  { name: "VS Code", group: "Tools" },
  { name: "Postman", group: "Tools" },
  { name: "Problem-Solving", group: "Core" },
  { name: "Communication", group: "Core" },
  { name: "Analytical Thinking", group: "Core" },
  { name: "Creativity", group: "Core" },
];

const GROUPS = ["All", ...Array.from(new Set(SKILLS.map((s) => s.group)))];

const PROJECTS = [
  {
    id: "01",
    title: "Drug detection system",
    blurb:
      "AI-powered facial analysis system using computer vision and deep learning to identify drug-affected individuals, with real-time webcam monitoring and detection pipelines.",
    stack: ["Python", "OpenCV", "YOLOv8"],
    link: "#",
  },
  {
    id: "02",
    title: "CyberNest",
    blurb:
      "Android-based child safety application that detects harmful messages using NLP, with secure MongoDB storage, real-time alerts, and a monitoring dashboard.",
    stack: ["FastAPI", "NLP", "MongoDB", "Android Studio"],
    link: "#",
  },
  {
    id: "03",
    title: "Digital fortune teller",
    blurb:
      "A cloud-native fortune-telling app delivering real-time predictions with secure data handling, built for scale on serverless infrastructure.",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway"],
    link: "#",
  },
];

const CERTIFICATIONS = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Certified" },
  { name: "Database Management System", issuer: "NPTEL · 30 Days Cloud Challenge", status: "Completed" },
  { name: "Design Thinking — A Primer", issuer: "NPTEL Hack-A-Cloud 2.0 Hackathon", status: "Participant" },
  { name: "Python for Data Science", issuer: "NPTEL", status: "Completed" },
];

const EXPERIENCE = [
  {
    role: "Intern (Trainee)",
    company: "Neurealm Private Limited",
    period: "2026 · 3 months · Chennai",
    points: [
      "Contributed to backend feature development using Java, Spring Boot, and PostgreSQL.",
      "Designed and tested RESTful APIs using Postman to support application functionality and system integration.",
      "Collaborated on requirement understanding, debugging, and feature validation.",
    ],
  },
  {
    role: "Student Intern",
    company: "Ashok Leyland Limited",
    period: "2026 · 3 months · Chennai",
    points: [
      "Observed IT department operations, gaining exposure to enterprise software systems and support processes.",
      "Learned about system analysis, troubleshooting workflows, and IT infrastructure management.",
    ],
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [copied, setCopied] = useState(false);
  const [path, setPath] = useState("harini");
  const [showResponse, setShowResponse] = useState(false);
  const [responseType, setResponseType] = useState("harini");
  const email = "harinisridharan10@gmail.com";
  const phone = "+91 7010936440";
  const linkedin = "https://www.linkedin.com/in/harini-v-s-382795257";
  const resumeFileUrl = "#"; // replace with your actual resume PDF path, e.g. "/Harini_Resume.pdf"

  const runCommand = (override) => {
    const raw = override !== undefined ? override : path;
    const cmd = raw.trim().toLowerCase().replace(/^\//, "");
    setShowResponse(false);

    if (cmd === "resume" || cmd === "resume.pdf") {
      setResponseType("resume");
      const link = document.createElement("a");
      link.href = resumeFileUrl;
      link.download = "Harini_V_S_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (cmd === "harini" || cmd === "") {
      setResponseType("harini");
    } else {
      setResponseType("404");
    }
    setTimeout(() => setShowResponse(true), 350);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") runCommand();
  };

  const filteredSkills =
    activeGroup === "All" ? SKILLS : SKILLS.filter((s) => s.group === activeGroup);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .portfolio-root {
          --bg: #15130E;
          --surface: #1D1B15;
          --ink: #F4F0E8;
          --ink-soft: #9C9186;
          --border: rgba(244, 240, 232, 0.09);
          --border-strong: rgba(244, 240, 232, 0.18);
          --accent: #D9A94D;
          --accent-soft: rgba(217, 169, 77, 0.14);
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--ink);
          min-height: 100vh;
          width: 100%;
        }
        .portfolio-root * { box-sizing: border-box; }
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .section { max-width: 900px; margin: 0 auto; padding: 5rem 2rem; }
        @media (max-width: 640px) { .section { padding: 3.5rem 1.25rem; } }

        .reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-in { opacity: 1; transform: translateY(0); }

        .card {
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--surface);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .card:hover { border-color: var(--border-strong); transform: translateY(-2px); }

        .eyebrow-label {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.9rem;
        }
        h2.section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.6rem, 3.2vw, 2rem); font-weight: 600; margin: 0 0 2.25rem; color: var(--ink); }

        /* NAV */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(21, 19, 14, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner { max-width: 900px; margin: 0 auto; padding: 16px 2rem; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 14.5px; color: var(--ink); }
        .nav-links { display: flex; gap: 26px; }
        .nav-link { font-size: 13.5px; font-weight: 500; color: var(--ink-soft); text-decoration: none; transition: color 0.2s ease; }
        .nav-link:hover { color: var(--ink); }
        .nav-resume {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          background: transparent;
          border: 1px solid var(--border-strong);
          padding: 7px 15px;
          border-radius: 7px;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .nav-resume:hover { background: var(--accent-soft); }
        @media (max-width: 640px) { .nav-links { display: none; } }

        /* HERO */
        .hero {
          min-height: 84vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-eyebrow { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 1rem; }
        .hero-name {
          font-size: clamp(2.5rem, 6.5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.05;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .hero-name .accent { color: var(--accent); }
        .hero-tagline {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--ink-soft);
          max-width: 460px;
          margin: 0 0 2.25rem;
          line-height: 1.65;
          font-weight: 400;
        }

        .request-window { max-width: 440px; padding: 0; overflow: hidden; }
        .window-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background: #211E17;
          border-bottom: 1px solid var(--border);
        }
        .window-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border-strong); }
        .window-label { margin-left: 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-soft); }
        .request-row { display: flex; align-items: center; gap: 10px; padding: 12px; }
        .request-method {
          background: var(--accent-soft);
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 8px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 12px;
          color: var(--accent);
        }
        .request-slash { font-family: 'JetBrains Mono', monospace; font-size: 13.5px; color: var(--ink-soft); }
        .request-path {
          flex: 1;
          padding: 8px 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13.5px;
          color: var(--ink);
          background: transparent;
          border: none;
          outline: none;
          min-width: 0;
        }
        .request-path::placeholder { color: var(--ink-soft); }
        .request-hint {
          font-size: 11.5px;
          color: var(--ink-soft);
          padding: 0 13px 11px;
          font-style: italic;
        }
        .send-btn {
          background: var(--accent);
          color: #1A1710;
          border: none;
          border-radius: 7px;
          padding: 8px 15px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.15s ease;
        }
        .send-btn:hover { opacity: 0.85; }
        .send-btn:active { opacity: 0.7; }

        .response-panel {
          max-width: 440px;
          margin-top: 14px;
          padding: 16px 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          line-height: 1.85;
          color: var(--ink-soft);
        }
        .response-line { opacity: 0; transform: translateX(-6px); transition: opacity 0.35s ease, transform 0.35s ease; }
        .response-panel.show .response-line { opacity: 1; transform: translateX(0); }
        .response-download-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 12px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid var(--border-strong);
          color: var(--accent);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.2s ease;
        }
        .response-download-link:hover { background: var(--accent-soft); }
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-soft);
          color: var(--accent);
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid var(--border);
          font-size: 10.5px;
          margin-bottom: 9px;
        }
        .status-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
        .status-chip-error { background: rgba(224, 108, 90, 0.14); color: #E06C5A; }
        .status-dot-error { background: #E06C5A; }
        .resp-key { color: var(--accent); }
        .resp-val { color: var(--ink); }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 1.5rem;
          padding: 10px 18px;
          border-radius: 8px;
          border: 1px solid var(--border-strong);
          background: transparent;
          color: var(--ink);
          font-weight: 600;
          font-size: 13.5px;
          text-decoration: none;
          transition: background 0.2s ease;
          width: fit-content;
        }
        .resume-btn:hover { background: var(--accent-soft); }

        /* SKILLS */
        .filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.75rem; }
        .filter-chip {
          font-size: 13px;
          font-weight: 500;
          padding: 7px 15px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--ink-soft);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .filter-chip:hover { border-color: var(--border-strong); color: var(--ink); }
        .filter-chip.active { background: var(--accent); border-color: var(--accent); color: #1A1710; }

        .skill-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-btn {
          font-size: 13.5px;
          font-weight: 500;
          padding: 9px 16px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--ink);
          cursor: default;
          transition: border-color 0.2s ease;
        }
        .skill-btn:hover { border-color: var(--accent); }

        /* PROJECTS */
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
        .project-card { padding: 1.6rem; display: flex; flex-direction: column; }
        .project-id { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--ink-soft); margin-bottom: 0.8rem; }
        .project-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; margin: 0 0 0.55rem; }
        .project-blurb { font-size: 13.5px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 1.2rem; flex-grow: 1; }
        .stack-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.2rem; }
        .stack-tag { font-size: 11px; font-weight: 500; padding: 3px 9px; border-radius: 20px; background: var(--bg); border: 1px solid var(--border); color: var(--ink-soft); }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          padding-top: 0.9rem;
          border-top: 1px solid var(--border);
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .project-link:hover { color: var(--accent); gap: 9px; }

        /* EXPERIENCE */
        .exp-item { display: grid; grid-template-columns: 140px 1fr; gap: 22px; padding: 1.5rem; margin-bottom: 12px; }
        .exp-period { font-size: 12.5px; font-weight: 500; color: var(--ink-soft); padding-top: 3px; }
        .exp-role { font-family: 'Space Grotesk', sans-serif; font-size: 1.02rem; font-weight: 600; margin: 0 0 3px; }
        .exp-company { font-size: 13px; color: var(--accent); font-weight: 600; margin: 0 0 9px; }
        .exp-points { margin: 0; padding-left: 18px; color: var(--ink-soft); font-size: 13px; line-height: 1.7; }
        @media (max-width: 640px) { .exp-item { grid-template-columns: 1fr; gap: 6px; } }

        /* CERTIFICATIONS */
        .cert-grid { display: flex; flex-direction: column; gap: 10px; }
        .cert-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 1rem 1.3rem; }
        .cert-name { font-size: 14px; font-weight: 600; color: var(--ink); }
        .cert-issuer { font-size: 12.5px; color: var(--ink-soft); margin-top: 2px; }
        .cert-status { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; background: var(--accent-soft); color: var(--accent); white-space: nowrap; }

        /* CONTACT */
        .contact-section { text-align: center; }
        .contact-links { display: flex; justify-content: center; gap: 10px; margin-top: 1.75rem; flex-wrap: wrap; }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 17px;
          border-radius: 8px;
          border: 1px solid var(--border);
          color: var(--ink);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          background: var(--surface);
          transition: border-color 0.2s ease;
          cursor: pointer;
        }
        .contact-link:hover { border-color: var(--border-strong); }
        .contact-heading { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.7rem, 3.6vw, 2.3rem); font-weight: 600; margin: 0 0 0.7rem; }
        .contact-sub { color: var(--ink-soft); max-width: 400px; margin: 0 auto; font-size: 14px; line-height: 1.6; }
        .footer-note { text-align: center; font-size: 12px; color: var(--ink-soft); padding: 2.5rem 2rem 3rem; }
      `}</style>

      <nav className="navbar">
        <div className="nav-inner">
          <span className="nav-logo">Harini V S</span>
          <div className="nav-links">
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#certifications">Certifications</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Backend Developer</div>
        <h1 className="hero-name display">Harini <span className="accent">V S</span></h1>
        <p className="hero-tagline">
          I build clean, secure APIs — currently exploring where engineering meets product thinking.
        </p>

        <div className="request-window card">
          <div className="window-bar">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-label">api-playground</span>
          </div>
          <div className="request-row">
            <span className="request-method">GET</span>
            <span className="request-slash">/</span>
            <input
              className="request-path"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
            />
            <button className="send-btn" onClick={() => runCommand()}>
              Send <Send size={12} />
            </button>
          </div>
          <div className="request-hint">try "harini" for details, or "resume" to download</div>
        </div>

        <div className={`response-panel ${showResponse ? "show" : ""}`}>
          {responseType === "harini" && (
            <>
              <span className="status-chip"><span className="status-dot" />200 OK</span>
              <div className="response-line" style={{ transitionDelay: "50ms" }}>{"{"}</div>
              <div className="response-line" style={{ transitionDelay: "120ms" }}>&nbsp;&nbsp;<span className="resp-key">"role"</span>: <span className="resp-val">"Backend Developer"</span>,</div>
              <div className="response-line" style={{ transitionDelay: "190ms" }}>&nbsp;&nbsp;<span className="resp-key">"based_in"</span>: <span className="resp-val">"Chennai, India"</span>,</div>
              <div className="response-line" style={{ transitionDelay: "260ms" }}>&nbsp;&nbsp;<span className="resp-key">"education"</span>: <span className="resp-val">"B.E CSE, 8.95 CGPA"</span>,</div>
              <div className="response-line" style={{ transitionDelay: "330ms" }}>&nbsp;&nbsp;<span className="resp-key">"open_to"</span>: <span className="resp-val">"Backend / APM / AI Eng"</span></div>
              <div className="response-line" style={{ transitionDelay: "400ms" }}>{"}"}</div>
            </>
          )}
          {responseType === "resume" && (
            <>
              <span className="status-chip"><span className="status-dot" />200 OK</span>
              <div className="response-line" style={{ transitionDelay: "50ms" }}>{"{"}</div>
              <div className="response-line" style={{ transitionDelay: "120ms" }}>&nbsp;&nbsp;<span className="resp-key">"file"</span>: <span className="resp-val">"Harini_V_S_Resume.pdf"</span>,</div>
              <div className="response-line" style={{ transitionDelay: "190ms" }}>&nbsp;&nbsp;<span className="resp-key">"status"</span>: <span className="resp-val">"ready"</span></div>
              <div className="response-line" style={{ transitionDelay: "260ms" }}>{"}"}</div>
              <a className="response-download-link" href={resumeFileUrl} download="Harini_V_S_Resume.pdf">
                <Download size={13} /> Download Harini_V_S_Resume.pdf
              </a>
            </>
          )}
          {responseType === "404" && (
            <>
              <span className="status-chip status-chip-error"><span className="status-dot status-dot-error" />404 Not Found</span>
              <div className="response-line" style={{ transitionDelay: "50ms" }}>{"{"}</div>
              <div className="response-line" style={{ transitionDelay: "120ms" }}>&nbsp;&nbsp;<span className="resp-key">"error"</span>: <span className="resp-val">"no route for /{path}"</span>,</div>
              <div className="response-line" style={{ transitionDelay: "190ms" }}>&nbsp;&nbsp;<span className="resp-key">"try"</span>: <span className="resp-val">"harini or resume"</span></div>
              <div className="response-line" style={{ transitionDelay: "260ms" }}>{"}"}</div>
            </>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <Reveal>
          <div className="eyebrow-label">Skills</div>
          <h2 className="section-title display">What I work with</h2>
          <div className="filter-row">
            {GROUPS.map((g) => (
              <button
                key={g}
                className={`filter-chip ${activeGroup === g ? "active" : ""}`}
                onClick={() => setActiveGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="skill-grid">
            {filteredSkills.map((s) => (
              <span className="skill-btn" key={s.name}>{s.name}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <Reveal>
          <div className="eyebrow-label">Projects</div>
          <h2 className="section-title display">Things I've built</h2>
        </Reveal>
        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <div className="project-card card">
                <div className="project-id">{p.id}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-blurb">{p.blurb}</p>
                <div className="stack-row">
                  {p.stack.map((t) => (
                    <span className="stack-tag" key={t}>{t}</span>
                  ))}
                </div>
                <a className="project-link" href={p.link}>
                  View project <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <Reveal>
          <div className="eyebrow-label">Experience</div>
          <h2 className="section-title display">Where I've worked</h2>
        </Reveal>
        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="exp-item card">
                <div className="exp-period">{e.period}</div>
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                  <ul className="exp-points">
                    {e.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" id="certifications">
        <Reveal>
          <div className="eyebrow-label">Certifications</div>
          <h2 className="section-title display">Learning along the way</h2>
          <div className="cert-grid">
            {CERTIFICATIONS.map((c, i) => (
              <div className="cert-row card" key={i}>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
                <span className="cert-status">{c.status}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <Reveal>
          <div className="eyebrow-label">Contact</div>
          <h2 className="contact-heading display">Let's talk</h2>
          <p className="contact-sub">
            Open to backend, APM, and AI engineering roles. Reach out — happy to chat.
          </p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${email}`}>
              <Mail size={15} /> Email
            </a>
            <button className="contact-link" onClick={copyEmail}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a className="contact-link" href="#" target="_blank" rel="noreferrer">
              <GitHub size={15} /> GitHub
            </a>
            <a className="contact-link" href={`tel:${phone}`}>{phone}</a>
          </div>
        </Reveal>
      </section>

      <div className="footer-note">© 2026 Harini V S · All rights reserved</div>
    </div>
  );
}