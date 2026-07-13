import { LuGithub as Github, LuLinkedin as Linkedin } from "react-icons/lu";

export function Sidebar() {
  const linkedin = "https://www.linkedin.com/in/harini-v-s-382795257";
  return (
    <div className="social-sidebar">
      <a className="social-icon" href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
        <Github size={17} />
      </a>
      <a className="social-icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={17} />
      </a>
      <span className="social-line" />
    </div>
  );
}
