import "./App.css";

const skills = ["Java", "Spring Boot", "MongoDB", "Git"];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/binaryxor",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vaibhavi-patil-265a0b244/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.4V9Z"
        />
      </svg>
    ),
  },
 {
  name: "LeetCode",
  url: "https://leetcode.com/u/binaryxor/",
  icon: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 3.5 7 12l8.5 8.5M10 7l-5 5 5 5M13 12h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
},
{
    name: "X",
    url: "https://x.com/binaryxor",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.6l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/binaryxor/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

const projects = [
  {
    number: "01",
    name: "Filesleuth",
    type: "FILE INTELLIGENCE",
    description:
      "A tool to explore files, understand their contents, and find what matters.",
    color: "lime",
    icon: "▤",
    tags: ["Java", "Spring Boot", "MongoDB"],
    status: "IN PROGRESS",
    github: "https://github.com/binaryxor/filesleuth",
    demo: "",
  },
  {
    number: "02",
    name: "DeFi Risk Lab",
    type: "BLOCKCHAIN SIMULATION",
    description:
      "Explore lending, borrowing, liquidations, and financial risk in a controlled environment.",
    color: "pink",
    icon: "◈",
    tags: ["Java", "Blockchain", "Simulation"],
    status: "IN PROGRESS",
    github: "",
    demo: "",
  },
  {
    number: "03",
    name: "Airline DB",
    type: "DATABASE SYSTEM",
    description:
      "A database-driven airline management system with flights, bookings, and passenger records.",
    color: "yellow",
    icon: "✈",
    tags: ["SQL", "Database", "Web"],
    status: "IN PROGRESS",
    github: "",
    demo: "",
  },
];

function PixelCloud({ className = "" }) {
  return (
    <div
      className={`pixel-cloud ${className}`}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <main className="portfolio">
      <nav className="nav">
        <a className="logo" href="#home" aria-label="Home">
          <span className="logo-icon">✳</span>
          <span>DEV.EXE</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>

         <div className="social-links">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      title={social.name}
    >
      {social.icon}
    </a>
  ))}
</div>
        </div>

        <a
          className="nav-contact"
          href="mailto:your.email@example.com"
        >
          <span>✉</span> Say hello
        </a>
      </nav>

      <section className="hero" id="home">
        <PixelCloud className="cloud-one" />
        <PixelCloud className="cloud-two" />

        <div className="hero-topline">
          <span>PLAYER 01</span>
          <span className="online">
            <i /> AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">HELLO WORLD! I'M A</p>

            <h1>
              SOFTWARE
              <br />
              <span>DEVELOPER</span>
            </h1>

            <p className="hero-description">
              I build useful things, solve interesting problems, and turn
              ambitious ideas into working software.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <span>↘</span>
              </a>
              <a className="button button-light" href="#about">
                Get to know me
              </a>
            </div>
          </div>

          <div className="pixel-scene" aria-label="Pixel art developer">
            <div className="scene-sun" />
            <div className="scene-star star-one">✦</div>
            <div className="scene-star star-two">✳</div>

            <div className="scene-cloud">
              <PixelCloud />
            </div>

            <div className="scene-ground">
              <div className="pixel-tree">
                <span />
                <span />
                <span />
              </div>

              <div className="pixel-character">
                <div className="character-hair" />
                <div className="character-head">
                  <i />
                  <i />
                </div>
                <div className="character-body">
                  <span />
                  <span />
                </div>
                <div className="character-legs">
                  <i />
                  <i />
                </div>
              </div>

              <div className="pixel-computer">
                <div className="computer-screen">
                  <span>&gt;_</span>
                </div>
                <div className="computer-base" />
              </div>
            </div>

            <div className="scene-label label-left">BUILD MODE</div>
            <div className="scene-label label-right">LVL. 01</div>
          </div>
        </div>

        <div className="hero-footer">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
          <span>EST. 2026 · ALWAYS LEARNING</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>
          <span className="hand-note">a little about me ✳</span>
        </div>

        <div className="about-grid">
          <div className="about-stamp">
            <span className="stamp-star">✳</span>
            <span className="stamp-title">
              CURIOUS
              <br />
              BY DESIGN
            </span>
            <span className="stamp-small">ALWAYS BUILDING</span>
          </div>

          <div className="about-copy">
            <h2>
              Curious mind.
              <br />
              <span>Builder's hands.</span>
            </h2>
            <p>
              I'm a developer who enjoys making complicated things feel
              simple. I learn by building real projects, breaking things,
              and figuring out how to make them better.
            </p>
            <p>
              Right now, I'm exploring Java, backend development, databases,
              and the little details that turn good software into great
              software.
            </p>
            <a className="text-link" href="#projects">
              See what I'm building <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <span className="section-number">02 / SKILL TREE</span>
          <span className="hand-note">things in my toolbox</span>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-tile" key={skill}>
              <span className="skill-icon">
                {["⌘", "⚙", "▤", "⚛", "JS", "⌥"][index]}
              </span>
              <span>{skill}</span>
              <span className="skill-level">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / QUEST LOG</span>
          <span className="hand-note">currently in my world</span>
        </div>

        <div className="projects-intro">
          <h2>
            Things I've
            <br />
            <span>been building.</span>
          </h2>
          <p>
            Every project is a new level. Here are a few things I'm working
            on, learning from, and making better.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const projectUrl = project.demo || project.github;

            return (
              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <span>QUEST {project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-art">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-spark">✳</span>
                  <span className="project-orbit">✦</span>
                </div>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-bottom">
                    <span>PROJECT FILE // {project.number}</span>

                    {projectUrl ? (
                      <a
                        className="project-arrow"
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.name}`}
                        title={`Open ${project.name}`}
                      >
                        ↗
                      </a>
                    ) : (
                      <span
                        className="project-arrow project-arrow-disabled"
                        aria-label="Project link not available yet"
                        title="Project link not available yet"
                      >
                        ↗
                      </span>
                    )}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <span className="footer-logo">
            DEV.EXE <span>✳</span>
          </span>
          <a href="mailto:your.email@example.com">
            LET'S BUILD SOMETHING <span>↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>MADE WITH CURIOSITY & LOTS OF COFFEE</span>
          <span>© 2026 · PLAYER 01</span>
        </div>
      </footer>
    </main>
  );
}

export default App;