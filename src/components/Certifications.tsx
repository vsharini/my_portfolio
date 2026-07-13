import { Reveal } from "./Reveal";
import { CERTIFICATIONS } from "../data/portfolio";

export function Certifications() {
  return (
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
  );
}
