import { Reveal } from "./Reveal";
import { EXPERIENCE } from "../data/portfolio";

export function Experience() {
  return (
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
  );
}
