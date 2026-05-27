import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, BriefcaseBusiness, Github, Linkedin, Mail, PenLine, User } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Your Name',
  title: 'Software Developer and Writer',
  intro: [
    'Write a short introduction about who you are, what you work on, and what readers can expect from the blog.',
    'Add a second paragraph for background, interests, education, or the thread that connects your work.'
  ],
  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80'
};

const navItems = [
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#resume' },
  { label: 'About', href: '#about' }
];

const categories = ['Book Reviews', 'Posts', 'School Notes'];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', Icon: Github },
  { label: 'Email', href: 'mailto:hello@example.com', Icon: Mail }
];

const posts = [
  {
    title: 'Notes on Building Reliable Systems',
    date: 'May 2026',
    category: 'Posts',
    summary: 'A sample post excerpt. Replace this with a quick description of your writing.'
  },
  {
    title: 'The Book That Changed How I Debug',
    date: 'April 2026',
    category: 'Book Reviews',
    summary: 'Use these entries as compact previews for recent writing or highlighted essays.'
  },
  {
    title: 'Distributed Systems Reading List',
    date: 'March 2026',
    category: 'School Notes',
    summary: 'A tidy card for notes, references, or evergreen learning material.'
  }
];

const experiences = [
  {
    company: 'Current Company',
    role: 'Software Engineer',
    period: '2022 - Present',
    bullets: [
      'Describe the systems, products, or responsibilities you owned.',
      'Add a concise achievement with measurable or concrete impact.'
    ],
    environment: 'Java, Python, React, Kubernetes, AWS'
  },
  {
    company: 'Previous Company',
    role: 'Application Developer',
    period: '2019 - 2022',
    bullets: [
      'Summarize the team, domain, and important projects.',
      'Mention the tools and practices that shaped the work.'
    ],
    environment: 'TypeScript, Node.js, SQL, CI/CD'
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

      <section className="categories" aria-labelledby="categories-heading">
        <h2 id="categories-heading">Categories</h2>
        {categories.map((category) => (
          <a href={`#${category.toLowerCase().replaceAll(' ', '-')}`} key={category}>
            {category}
          </a>
        ))}
      </section>
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
      <img src={profile.image} alt="Outdoor landscape placeholder" className="profile-image" />
    </section>
  );
}

function BlogSection() {
  return (
    <section className="section" id="blog" aria-labelledby="blog-heading">
      <div className="eyebrow">
        <PenLine size={17} aria-hidden="true" />
        Latest Writing
      </div>
      <h2 id="blog-heading">Recent Posts</h2>
      <div className="post-list">
        {posts.map((post) => (
          <article className="post-card" key={post.title}>
            <div>
              <span>{post.category}</span>
              <time>{post.date}</time>
            </div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
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
        <BlogSection />
        <ResumeSection />
        <Footer />
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
