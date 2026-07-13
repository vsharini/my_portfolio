import { useState } from "react";
import { LuSend as Send, LuDownload as Download } from "react-icons/lu";

export function Hero() {
  const [path, setPath] = useState("harini");
  const [showResponse, setShowResponse] = useState(false);
  const [responseType, setResponseType] = useState("harini");
  const resumeFileUrl = "#";

  const runCommand = (override?: string) => {
    const raw = override !== undefined ? override : path;
    const cmd = raw.trim().toLowerCase().replace(/^\//, "");
    setShowResponse(false);

    if (cmd === "resume" || cmd === "resume.pdf") {
      setResponseType("resume");
    } else if (cmd === "harini" || cmd === "") {
      setResponseType("harini");
    } else {
      setResponseType("404");
    }
    setTimeout(() => setShowResponse(true), 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") runCommand();
  };

  return (
    <section className="hero">
      <div className="hero-eyebrow">Hi, my name is</div>
      <h1 className="hero-name display">Harini <span className="accent">V S</span></h1>
      <h2 className="hero-role display">Backend Developer.</h2>
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
            <a className="response-download-link" href={resumeFileUrl} target="_blank" rel="noreferrer">
              <Download size={13} /> View / Download Resume
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

      <a className="hero-cta" href="#projects">Check out my projects</a>
    </section>
  );
}
