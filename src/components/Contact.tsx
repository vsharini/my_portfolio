import { Reveal } from "./Reveal";
import { LuGithub as Github, LuLinkedin as Linkedin, LuMail as Mail } from "react-icons/lu";

export function Contact() {
  const email = "harinisridharan10@gmail.com";
  const linkedin = "https://www.linkedin.com/in/harini-v-s-382795257";

  return (
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
          <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a className="contact-link" href="#" target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
