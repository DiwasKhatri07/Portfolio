import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Terminal,
  Twitter,
  X,
  Youtube,
  Zap,
} from "lucide-react";

const profileImage = "https://github.com/DiwasKhatri07.png?size=800";

const socials = [
  { label: "GitHub", href: "https://github.com/DiwasKhatri07", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diwaskhatri/", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@gatewaymaker", icon: Youtube },
  { label: "X", href: "https://x.com/a1diwas", icon: Twitter },
  { label: "Gitea", href: "https://gitea.com/diwash", icon: Code2 },
  { label: "GitLab", href: "https://gitlab.com/diwaskhatri", icon: GitBranchIcon },
  { label: "Telegram", href: "https://t.me/diwazz", icon: Send },
];

function GitBranchIcon({ size = 18 }: { size?: number }) {
  return <span className="git-branch-icon" style={{ fontSize: size }}>⑂</span>;
}

const projects = [
  {
    number: "01",
    title: "NepBot",
    type: "Bot dashboard",
    description: "A polished WhatsApp linked-device bot dashboard with pairing flow, country-code validation, feature controls, and a Python-facing service.",
    tags: ["TypeScript", "Python", "Automation"],
    href: "https://github.com/DiwasKhatri07/nep-bot",
    accent: "lime",
    icon: Bot,
  },
  {
    number: "02",
    title: "NepTLS",
    type: "Python toolkit",
    description: "A dependency-light HTTP client and TLS research toolkit for authorized diagnostics, networking experiments, and security learning.",
    tags: ["Python", "HTTP/3", "Networking"],
    href: "https://github.com/DiwasKhatri07/NepTLS",
    accent: "blue",
    icon: Terminal,
  },
  {
    number: "03",
    title: "NepaliCode",
    type: "Language + IDE",
    description: "A Nepali-inspired programming language, runtime direction, and modern Kotlin/Compose Android IDE concept.",
    tags: ["Kotlin", "Compose", "Language design"],
    href: "https://github.com/DiwasKhatri07/NepaliCode",
    accent: "orange",
    icon: Code2,
  },
  {
    number: "04",
    title: "Automate YT",
    type: "Creator automation",
    description: "Authorized Instagram-to-YouTube workflow automation with media import, rendering, metadata generation, and duplicate protection.",
    tags: ["Python", "APIs", "Scheduling"],
    href: "https://github.com/DiwasKhatri07/Automate-YT-Channel",
    accent: "pink",
    icon: Zap,
  },
  {
    number: "05",
    title: "Nepali IDE",
    type: "AI-native mobile IDE",
    description: "An Android coding workspace direction with Python execution, live preview, Git integration, AI completion, and project history.",
    tags: ["Kotlin", "Android", "AI tools"],
    href: "https://github.com/DiwasKhatri07/Nepali-IDE",
    accent: "violet",
    icon: Cpu,
  },
  {
    number: "06",
    title: "World Explorer",
    type: "Interactive portfolio",
    description: "An explorable React and Three.js developer portfolio with 3D routes, gesture controls, and a Code City quest.",
    tags: ["React", "Three.js", "TypeScript"],
    href: "https://github.com/DiwasKhatri07/diwas-world-explorer",
    accent: "cyan",
    icon: Globe2,
  },
];

const skills = [
  { name: "Python & automation", level: "Core craft", width: "88%" },
  { name: "Telegram / chat bots", level: "Building daily", width: "84%" },
  { name: "React & web apps", level: "Shipping projects", width: "76%" },
  { name: "AI / ML experiments", level: "Growing fast", width: "64%" },
  { name: "APIs & integrations", level: "Practical", width: "72%" },
  { name: "Kotlin / Android", level: "Exploring", width: "50%" },
];

const journey = [
  {
    date: "01 / ORIGIN",
    title: "Telegram opened the door",
    text: "At 13, while studying in class 8, I downloaded Telegram. I was curious about how bots could respond, automate work, and feel almost alive.",
    marker: "13",
  },
  {
    date: "02 / CURIOSITY",
    title: "From trying code to understanding it",
    text: "I started learning programming through free YouTube courses and Udemy. Every small script became a reason to try one more thing.",
    marker: "LEARN",
  },
  {
    date: "03 / BUILDING",
    title: "Ideas became public projects",
    text: "Python utilities, chat bots, web apps, browser extensions, APIs, and early AI/ML experiments now live across my public repositories.",
    marker: "SHIP",
  },
  {
    date: "04 / NOW",
    title: "Looking for the next hard problem",
    text: "I’m currently in high school, freelancing, and looking for people who value an eager builder who learns quickly and ships with care.",
    marker: "NOW",
  },
];

function External({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className={`topbar ${menuOpen ? "topbar-open" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Diwas Khatri home">
          <span className="brand-mark">DK</span>
          <span className="brand-name">Diwas<span>.</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <aside className="social-rail" aria-label="Social links">
        <span className="rail-label">CONNECT</span>
        {socials.map(({ label, href, icon: Icon }) => (
          <External href={href} key={label} className="rail-link" aria-label={label}>
            <Icon size={16} />
          </External>
        ))}
        <span className="rail-line" />
      </aside>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for freelance &amp; junior opportunities</div>
          <h1>Curious mind.<br /><em>Useful things.</em></h1>
          <p className="hero-lede">I&apos;m <strong className="verified-name">Diwas Khatri <BadgeCheck size={17} aria-label="Verified-style identity badge" /></strong> — a young builder from Nepal turning curiosity into bots, automations, web apps, and experiments that make the internet more useful.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">See my work <ArrowDown size={16} /></a>
            <a href="mailto:diwaskhatri@proton.me" className="button button-ghost">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14} /> Nepal</span><span className="meta-divider" /><span>Started building at 13</span></div>
        </div>

        <div className="hero-visual" aria-label="Diwas Khatri profile">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-grid" />
          <div className="avatar-frame"><img src={profileImage} alt="Diwas Khatri" /></div>
          <div className="badge badge-top"><span className="badge-ping" /> Building in public</div>
          <div className="badge badge-bottom"><span className="badge-symbol">✦</span> curious by default</div>
          <div className="code-card"><div className="code-bar"><span /><span /><span /><small>diwas.py</small></div><pre><span className="code-purple">def</span> <span className="code-blue">build</span>():{`\n`}  <span className="code-muted"># one idea at a time</span>{`\n`}  <span className="code-green">return</span> <span className="code-orange">"keep shipping"</span></pre></div>
          <div className="visual-corner">DK / 2026</div>
        </div>
      </section>

      <div className="ticker" aria-label="Specialties">
        <div className="ticker-track"><span>PYTHON</span><b>✳</b><span>TELEGRAM BOTS</span><b>✳</b><span>WEB AUTOMATION</span><b>✳</b><span>AI / ML</span><b>✳</b><span>OPEN SOURCE</span><b>✳</b><span>PYTHON</span><b>✳</b><span>TELEGRAM BOTS</span><b>✳</b><span>WEB AUTOMATION</span><b>✳</b><span>AI / ML</span><b>✳</b></div>
      </div>

      <section className="section container about-section" id="about">
        <div className="section-index">01 <span>/</span> ABOUT</div>
        <div className="about-grid">
          <h2>Still learning.<br /><span>Already building.</span></h2>
          <div className="about-copy"><p>I like the space between an idea and a working thing. That usually means a Python script at midnight, a bot that saves someone time, or a web app that turns a messy workflow into a simple one.</p><p>I don&apos;t have a long list of awards yet. I have something better for this stage: momentum, public projects, and the willingness to figure things out.</p><a className="text-link" href="https://github.com/DiwasKhatri07?tab=repositories" target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="about-stats"><div><strong>13</strong><span>when the journey began</span></div><div><strong>20<span>+</span></strong><span>public experiments</span></div><div><strong>∞</strong><span>things left to learn</span></div></div>
      </section>

      <section className="section container work-section" id="work">
        <div className="section-head"><div><div className="section-index">02 <span>/</span> SELECTED WORK</div><h2>Things I&apos;ve<br /><span>made real.</span></h2></div><p>Small tools, big curiosity. A selection from my GitHub — each one a snapshot of what I was learning and what I wanted to solve next.</p></div>
        <div className="project-grid">
          {projects.map(({ number, title, type, description, tags, href, accent, icon: Icon }) => <article className={`project-card accent-${accent}`} key={title}><div className="project-top"><span className="project-number">{number}</span><span className="project-type">{type}</span><External href={href} className="project-link" aria-label={`Open ${title}`}><ArrowUpRight size={17} /></External></div><div className="project-icon"><Icon size={22} strokeWidth={1.7} /></div><h3>{title}</h3><p>{description}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
        <div className="center-link"><External href="https://github.com/DiwasKhatri07?tab=repositories" className="button button-outline">View all on GitHub <Github size={17} /></External></div>
      </section>

      <section className="section container journey-section" id="journey">
        <div className="section-index">03 <span>/</span> MY JOURNEY</div>
        <div className="journey-intro"><h2>A timeline of<br /><span>tiny leaps.</span></h2><p>No overnight success story here. Just a young developer who kept coming back to the keyboard.</p></div>
        <div className="journey-list">{journey.map(({ date, title, text, marker }, index) => <article className="journey-item" key={date}><div className="journey-marker">{marker}</div><div className="journey-date">{date}</div><div className="journey-body"><h3>{title}</h3><p>{text}</p></div><span className="journey-arrow"><ChevronRight size={18} /></span></article>)}</div>
      </section>

      <section className="section container skills-section" id="skills">
        <div className="section-index">04 <span>/</span> TOOLKIT</div>
        <div className="skills-layout"><div><h2>My current<br /><span>toolkit.</span></h2><p className="skills-note">Tools are just tools. I care most about whether the thing works, feels good, and helps someone.</p><div className="tool-cloud"><span>Flask</span><span>React</span><span>Git</span><span>REST APIs</span><span>Chrome Extensions</span><span>Three.js</span><span>Prompting</span></div></div><div className="skill-bars">{skills.map(({ name, level, width }) => <div className="skill-row" key={name}><div className="skill-label"><span>{name}</span><small>{level}</small></div><div className="skill-track"><span style={{ width }} /></div></div>)}</div></div>
      </section>

      <section className="section container proof-section" id="proof">
        <div className="section-index">05 <span>/</span> PROGRESS LOG</div>
        <div className="proof-grid"><div><h2>Early days.<br /><span>Real momentum.</span></h2><p className="proof-lede">I&apos;m not going to pad this page with made-up awards or fake client quotes. I&apos;m building my track record in public, one useful project and one honest collaboration at a time.</p></div><div className="proof-list"><div className="proof-item"><span className="proof-icon"><Check size={17} /></span><div><strong>First open-source releases</strong><p>Publishing Python packages, APIs, experiments, and tools for other builders to explore.</p></div></div><div className="proof-item"><span className="proof-icon"><Check size={17} /></span><div><strong>Freelancing in progress</strong><p>Open to practical projects where a fast learner can create real value.</p></div></div><div className="proof-item"><span className="proof-icon"><Sparkles size={17} /></span><div><strong>Next milestone: your project</strong><p>Let&apos;s turn your workflow, idea, or automation problem into something that ships.</p></div></div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-orb" /><div className="container contact-inner"><div className="section-index light-index">06 <span>/</span> CONTACT</div><h2>Have a problem<br /><em>worth building?</em></h2><p>I&apos;m available for freelance work, collaborations, and opportunities to learn by doing. Tell me what you&apos;re working on.</p><a className="button button-light" href="mailto:diwaskhatri@proton.me">Email Diwas <Mail size={17} /></a><div className="contact-details"><a href="mailto:diwaskhatri@proton.me">diwaskhatri@proton.me</a><span>Based in Nepal · Working globally</span></div></div></section>

      <footer className="footer container"><div className="footer-brand"><span className="brand-mark">DK</span><span>Diwas Khatri</span></div><p>Built with curiosity, caffeine, and a lot of learning.</p><div className="footer-links"><External href="https://www.linkedin.com/in/diwaskhatri/">LinkedIn</External><External href="https://www.fiverr.com/sellers/diwaskhatri07/">Fiverr</External><External href="https://ko-fi.com/diwaskhatri">Ko-fi</External><External href="https://www.buymeacoffee.com/diwaskhatri">Buy me a coffee</External><External href="https://t.me/diwazz">@diwazz</External><External href="https://t.me/diwasxd">@diwasxd</External></div><span className="copyright">© {new Date().getFullYear()} DK</span></footer>
    </main>
  );
}

export function SocialIcon({ label }: { label: string }) {
  const Icon = label === "Instagram" ? Instagram : label === "YouTube" ? Youtube : Send;
  return <Icon size={16} />;
}

export const unusedIcons = { ExternalLink, Mail, SocialIcon };

    
