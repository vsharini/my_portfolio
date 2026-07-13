import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
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

        /* SOCIAL SIDEBAR */
        .social-sidebar {
          position: fixed;
          left: 28px;
          bottom: 0;
          z-index: 40;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding-bottom: 24px;
        }
        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-soft);
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .social-icon:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-3px); }
        .social-line { width: 1px; height: 90px; background: var(--border-strong); margin-top: 4px; }
        @media (max-width: 900px) { .social-sidebar { display: none; } }

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
        .hero-role {
          font-size: clamp(1.75rem, 4vw, 2.6rem);
          font-weight: 600;
          color: var(--ink-soft);
          margin: 0 0 1rem;
          line-height: 1.1;
        }
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
        .hero-cta {
          display: inline-block;
          margin-top: 1.75rem;
          padding: 12px 22px;
          border: 1.5px solid var(--accent);
          border-radius: 8px;
          color: var(--accent);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          width: fit-content;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .hero-cta:hover { background: var(--accent); color: var(--bg); }
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
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: stretch; }
        .project-grid > .reveal { display: flex; height: 100%; }
        .project-card { padding: 1.6rem; display: flex; flex-direction: column; flex: 1; }
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

      <Navbar />
      <Sidebar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />

      <div className="footer-note">© 2026 Harini V S · All rights reserved</div>
    </div>
  );
}
