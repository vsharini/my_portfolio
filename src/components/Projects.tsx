import { Reveal } from "./Reveal";
import { PROJECTS } from "../data/portfolio";
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

export function Projects() {
  return (
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
  );
}
