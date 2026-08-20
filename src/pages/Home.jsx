import { Link } from "react-router-dom";
import heroImg from "../assets/profile.jpeg";
import Reveal from "../components/Reveal";
import HeroBackground from "../components/HeroBackground";
import LazyScene from "../components/LazyScene";
import { skillIcons, personalIcons } from "../components/icons";

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
  return (
    <>
      <section className="hero relative isolate overflow-hidden">
        <HeroBackground />
        <div className="pointer-events-none absolute inset-0 isolate hidden lg:block">
          <LazyScene />
        </div>
        <div className="hero-content flex-col-reverse gap-10 py-16 lg:flex-row-reverse lg:gap-16">
          <Reveal y={60}>
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100 sm:w-72">
                <img
                  src={heroImg}
                  alt="Utkarsh Turkane"
                  className="object-top"
                />
              </div>
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

      <section className="relative overflow-hidden bg-base-200 py-16">
        <div className="pointer-events-none absolute inset-0 isolate hidden md:block">
          <LazyScene position={[-3.2, 0, 0]} scale={0.7} icons={skillIcons} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
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

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 isolate hidden md:block">
          <LazyScene position={[3.2, 0, 0]} scale={0.7} icons={personalIcons} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
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