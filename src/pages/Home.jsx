import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import heroImg from "../assets/profile.jpeg";
import Reveal from "../components/Reveal";

const techBadges = [
  {
    name: "React",
    className: "-top-7 -left-6 sm:-top-8 sm:-left-10",
    color: "#61dafb",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    className: "-top-6 right-0 sm:-top-8 sm:-right-8",
    color: "#f7df1e",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M3 3h18v18H3V3zm10.2 14.3c.8.7 1.7 1.1 2.7 1.1 1.1 0 1.9-.5 1.9-1.4 0-.8-.6-1.2-1.8-1.6l-1-.3c-1.6-.5-2.6-1.3-2.6-2.9 0-1.7 1.4-2.9 3.4-2.9 1.4 0 2.5.5 3.2 1.2l-1.5 1.6c-.5-.4-1-.7-1.7-.7-.8 0-1.3.4-1.3 1 0 .7.6 1 1.6 1.3l1 .3c1.6.5 2.7 1.3 2.7 2.9 0 1.9-1.4 3-3.6 3-1.6 0-2.9-.6-3.6-1.4l1.6-1.6zM7.4 14.8c.4.7 1.1.9 1.8.9.8 0 1.2-.3 1.2-.8 0-.6-.4-.9-1.5-1.3l-.8-.3c-1.2-.5-2-1.2-2-2.6 0-1.5 1.3-2.6 3.1-2.6 1.2 0 2.2.4 2.9 1.4l-1.4 1.4c-.4-.4-.8-.8-1.4-.8-.6 0-1 .3-1 .8 0 .6.4.8 1.4 1.2l.8.3c1.3.5 2.1 1.3 2.1 2.7 0 1.6-1.3 2.7-3.3 2.7-1.5 0-2.6-.5-3.3-1.5l1.4-1.4z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    className: "-left-8 top-1/2 hidden sm:block",
    color: "#e34f26",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M4.2 2h15.6l-1.4 16.2L12 21.5 5.6 18.2 4.2 2zm4.7 6.8h6.1l-.2 2.3H10l.1 2.2h4.9l-.5 5.2-2.5.8-2.5-.8-.2-2.1H7.6l.3 4.2 4.1 1.4 4.1-1.4.6-6.3.1-.8.5-5.4H6.5L4.9 8.8z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    className: "-right-8 top-1/3 hidden sm:block",
    color: "#1572b6",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M4.2 2h15.6l-1.4 16.1L12 21.5 5.6 18.1 4.2 2zm9.9 8.6H8.5l.3 3.4h5.4l-.4 4-2.5.8-2.5-.8-.2-1.9H6.6l.3 3.7L12 22.7l5.1-1.8.7-8H14.1z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    className: "-bottom-6 left-0 sm:-bottom-8 sm:left-2",
    color: "#339933",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M12 2.6 3.6 7.3v9.4L12 21.4l8.4-4.7V7.3L12 2.6zm0 1.9 6.6 3.7v7.6L12 19.5V13l6.6-3.7v-1.4L12 11.6V4.5zm-1.5.4v7.4l-1.6.9V7.5l-3.2 1.8v5.2l1.6-.9v3.3l-1.7.9-1.6-.9V8.4l3.2-1.8 1.6.9v-3l3.1-1.8 1.6.9-1.6.9z" />
      </svg>
    ),
  },
  {
    name: "Git",
    className: "-bottom-7 right-4 sm:-bottom-9 sm:right-10",
    color: "#f05032",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M2.6 12.9a2 2 0 0 1 0-2.8l7.5-7.5a2 2 0 0 1 2.8 0l8.4 8.4a2 2 0 0 1 0 2.8l-7.5 7.5a2 2 0 0 1-2.8 0l-8.4-8.4zm5.9-6.4-1.6 1.6 1.4 1.4a1.5 1.5 0 1 0 1.1 1.1l2 2a1.5 1.5 0 1 0 1-1.1L12 10.1l1.7-1.7-3-3a1 1 0 0 0-1.2 0z" />
      </svg>
    ),
  },
];

const skills = [
  { name: "JavaScript", group: "Language" },
  { name: "React.js", group: "Framework" },
  { name: "Redux", group: "State Management" },
  { name: "Node.js", group: "Runtime" },
];

const featured = [
  {
    title: "Future Ready Media",
    description:
      "A responsive media landing experience with smooth animations and clean layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://utkarshturkane.github.io/futurereadymedia/",
  },
  {
    title: "DeepshiTech",
    description:
      "A business website built with React, deployed on Netlify for fast delivery.",
    tech: ["React.js", "JavaScript", "Netlify"],
    href: "https://deepshitech-utkarsh-turkane.netlify.app/",
  },
];

export default function Home() {
  useEffect(() => {
    const icons = gsap.utils.toArray(".float-icon");
    const tweens = icons.map((icon, i) =>
      gsap.to(icon, {
        y: -12,
        duration: 2.2 + i * 0.25,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.15,
      }),
    );
    return () => tweens.forEach((tween) => tween.kill());
  }, []);

  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
          <div className="dot-grid absolute inset-0 opacity-60" />
        </div>
        <div className="hero-content flex-col-reverse gap-10 py-16 lg:flex-row-reverse lg:gap-16">
          <Reveal y={60}>
            <div className="relative">
              <div className="avatar">
                <div className="w-64 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100 sm:w-72">
                  <img
                    src={heroImg}
                    alt="Utkarsh Turkane"
                    className="object-top"
                  />
                </div>
              </div>
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  title={badge.name}
                  className={`float-icon absolute flex h-12 w-12 items-center justify-center rounded-xl border border-base-200 bg-base-100/90 shadow-md backdrop-blur ${badge.className}`}
                  style={{ color: badge.color }}
                >
                  {badge.icon}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal y={50} delay={0.15}>
            <div>
              <p className="mb-4 badge badge-primary badge-lg">Hello, I am</p>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                Utkarsh <span className="text-primary">Turkane</span>
              </h1>
              <p className="mt-3 text-2xl font-semibold text-primary">
                Web Developer
              </p>
              <p className="mt-4 max-w-xl text-lg text-base-content/70">
                Passionate Web Developer with 2+ years of experience building
                responsive, high-performance websites and landing pages.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline btn-primary">
                  Contact Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal y={30}>
            <div className="stats w-full shadow stats-vertical sm:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Years Experience</div>
                <div className="stat-value text-primary">2+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Projects Built</div>
                <div className="stat-value text-primary">60+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Companies Served</div>
                <div className="stat-value">4</div>
              </div>
              <div className="stat">
                <div className="stat-title">Technologies Used</div>
                <div className="stat-value">10+</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-base-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal y={30}>
            <h2 className="text-center text-3xl font-bold">Core Skills</h2>
            <p className="mt-2 text-center text-base-content/60">
              Technologies I work with every day
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} y={40} delay={index * 0.08}>
                <div className="card card-body items-center bg-base-100 text-center shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                    {skill.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <p className="text-sm text-base-content/60">{skill.group}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal y={30}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="mt-2 text-base-content/60">
                  A selection of work I am proud of
                </p>
              </div>
              <Link to="/projects" className="btn btn-ghost btn-primary">
                See all projects
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.title} y={40} delay={index * 0.1}>
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="text-base-content/70">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="badge badge-soft badge-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="card-actions mt-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}