import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const experience = [
  {
    period: "Feb 2026 - Apr 2026",
    role: "Web Developer",
    company: "Ad Engage",
    description: [
      "Developed responsive websites using HTML, CSS, JavaScript, PHP, Python, and Django",
    ],
  },
  {
    period: "Sep 2023 - Jun 2025",
    role: "Web Developer",
    company: "Realatte Ventures LLP",
    description: [
      "Developed responsive real estate and corporate websites",
      "Built landing pages and websites using HTML5, CSS3, JavaScript, React, and Redux",
      "Optimized website performance and cross-browser compatibility",
      "Worked closely with design and backend teams",
    ],
  },
  {
    period: "Jan 2023 - Apr 2023",
    role: "Web Developer",
    company: "Furation Tech Solutions",
    description: [
      "Developed responsive frontend interfaces using HTML5, CSS3, JavaScript, Bootstrap, and Webflow",
      "Transformed designs into fully functional, optimized websites",
      "Ensured performance optimization and mobile responsiveness",
    ],
  },
  {
    period: "Jun 2022 - Dec 2022",
    role: "Web Developer Intern",
    company: "Spicetree Design Agency",
    description: [
      "Developed websites and emailers using HTML, CSS, JavaScript, PHP, and jQuery",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Bootstrap", "Node.js", "Redux", "GSAP", "Tailwind CSS"],
  },
  {
    title: "Version Control",
    items: ["Git"],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Mumbai University",
    period: "2017 - 2020",
  },
  {
    degree: "Bachelor of Information Technology (BSc IT)",
    school: "Mumbai University",
    period: "2014 - 2017",
  },
];

const certifications = [
  {
    title: "Modern React with Redux",
    issuer: "Udemy",
    year: "2023",
  },
  {
    title: "The Complete Node.js Developer Course (3rd edition)",
    issuer: "Udemy",
    year: "2026",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section>
        <Reveal y={40}>
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-4 max-w-3xl text-lg text-base-content/70">
            Passionate Web Developer with 2+ years of experience building
            responsive, high-performance websites and landing pages. I enjoy
            turning design into polished, functional products and working
            closely with design and backend teams.
          </p>
        </Reveal>
      </section>

      <section className="mt-12">
          <Reveal y={30}>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </Reveal>
        <div className="mt-6 space-y-6">
          {experience.map((entry, index) => (
            <Reveal key={entry.period + entry.company} y={40} delay={index * 0.05}>
              <article className="overflow-hidden rounded-xl border border-base-300 bg-base-100">
                <header className="flex flex-wrap items-center justify-between gap-3 border-b border-base-200 bg-base-200/50 px-5 py-4">
                  <div>
                    <h3 className="text-lg font-bold">{entry.role}</h3>
                    <p className="text-sm font-medium text-primary">
                      {entry.company}
                    </p>
                  </div>
                  <span className="badge badge-outline badge-primary">
                    {entry.period}
                  </span>
                </header>
                <div className="px-5 py-4">
                  <ul className="list-disc space-y-1.5 pl-5 text-base-content/70">
                    {entry.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Reveal y={30}>
          <h2 className="text-3xl font-bold">Skills</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} y={40} delay={index * 0.08}>
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">{group.title}</h3>
                  <ul className="mt-2 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-primary">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal y={40}>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-2xl">Education</h2>
              <div className="mt-2 space-y-4">
                {education.map((entry) => (
                  <div key={entry.degree}>
                    <p className="font-semibold">{entry.degree}</p>
                    <p className="text-base-content/70">
                      {entry.school}
                    </p>
                    <span className="badge badge-soft badge-secondary mt-1">
                      {entry.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal y={40} delay={0.1}>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-2xl">Certifications</h2>
              <div className="mt-2 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title}>
                    <p className="font-semibold">{cert.title}</p>
                    <p className="text-base-content/70">{cert.issuer}</p>
                    <span className="badge badge-soft badge-secondary mt-1">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal y={40}>
        <section className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-primary p-8 text-primary-content">
          <div>
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-1 text-primary-content/80">
              Let us build something great together.
            </p>
          </div>
          <Link to="/contact" className="btn btn-neutral">
            Get in touch
          </Link>
        </section>
      </Reveal>
    </div>
  );
}