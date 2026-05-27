import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, BriefcaseBusiness, Github, Linkedin, Mail, PenLine, User } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Andy Kwan',
  title: 'Software Developer',
  intro: [
    '',
    ''
  ],
  image:
    ''
};

const navItems = [
  { label: 'Resume', href: '#resume' },
  { label: 'About', href: '#about' }
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andy-k-15a9817b/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Zelthrox', Icon: Github },
  { label: 'Email', href: 'mailto:kwan.andy@hotmail.com', Icon: Mail }
];

const experiences = [
  {
    company: 'Stamped.io',
    role: 'Software Engineer',
    period: 'Aug 2023 - Aug 2025',
    bullets: [
      '',
      ''
    ],
    environment: ''
  }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="identity">
        <a className="site-title" href="#about">
          {profile.name}
        </a>
        <p>{profile.title}</p>
      </div>

      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="socials" aria-label="Social links">
        {socialLinks.map(({ label, href, Icon }) => (
          <a href={href} key={label} aria-label={label} title={label}>
            <Icon size={22} strokeWidth={2.2} />
          </a>
        ))}
      </div>
    </aside>
  );
}

function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="eyebrow">
        <User size={17} aria-hidden="true" />
        About
      </div>
      <h1 id="about-heading">Hello, I am {profile.name}.</h1>
      {profile.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <img src={profile.image} alt="image placeholder" className="profile-image" />
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="section" id="resume" aria-labelledby="resume-heading">
      <div className="eyebrow">
        <BriefcaseBusiness size={17} aria-hidden="true" />
        Resume
      </div>
      <h2 id="resume-heading">Work Experience</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <article className="experience" key={`${item.company}-${item.period}`}>
            <header>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </header>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="environment">Environment - {item.environment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <BookOpen size={16} aria-hidden="true" />
      <span>Blog template powered by React and Vite.</span>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <AboutSection />
        <ResumeSection />
        <Footer />
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
