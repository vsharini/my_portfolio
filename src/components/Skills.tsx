import { useState } from "react";
import { Reveal } from "./Reveal";
import { SKILLS, GROUPS } from "../data/portfolio";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState("All");

  const filteredSkills =
    activeGroup === "All" ? SKILLS : SKILLS.filter((s) => s.group === activeGroup);

  return (
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
  );
}
