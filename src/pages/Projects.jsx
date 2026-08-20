import Reveal from "../components/Reveal";
import LazyScene from "../components/LazyScene";
import { companyIcons, personalIcons } from "../components/icons";

const companyProjects = [
  {
    title: "Puravankara",
    url: "https://www.puravankara.com/",
    tech: ["React.js", "HTML5", "CSS3"],
  },
  {
    title: "Atharv Lifestyle",
    url: "https://atharvlifestyle.com/",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Sheth Realty",
    url: "https://sheth-realty.com/",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Dosti West County",
    url: "https://www.dostiwestcounty.co.in/",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Naman Group",
    url: "https://www.namangroup.com/",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Rumah Bali by Puranik Builders",
    url: "https://rumahbali.puranikbuilders.com/",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

const personalProjects = [
  {
    title: "Future Ready Media",
    url: "https://utkarshturkane.github.io/futurereadymedia/",
    description:
      "A responsive media landing experience with smooth animations and a clean layout.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AdEngage Assignment",
    url: "https://utkarshturkane.github.io/adengage_assignment/",
    description:
      "A frontend assignment project demonstrating responsive components and interactivity.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "DeepshiTech",
    url: "https://deepshitech-utkarsh-turkane.netlify.app/",
    description:
      "A business website built with React and deployed on Netlify for fast delivery.",
    tech: ["React.js", "JavaScript", "Netlify"],
  },
];

function ProjectCard({ title, url, tech, description }) {
  return (
    <div className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="text-base-content/70">{description}</p>}
        <div className="mt-2 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="badge badge-soft badge-primary">
              {item}
            </span>
          ))}
        </div>
        <div className="card-actions mt-4 justify-start">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal y={40}>
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <p className="mt-2 max-w-2xl text-base-content/70">
          A collection of websites and applications I have built during work and
          on my own time.
        </p>
      </Reveal>

      <section className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 isolate hidden md:block">
          <LazyScene position={[-3.2, 0, 0]} scale={0.7} icons={companyIcons} />
        </div>
        <div className="relative">
        <Reveal y={30}>
          <h2 className="text-3xl font-bold">Company Projects</h2>
          <p className="mt-2 text-base-content/60">
            Real estate and corporate websites built for clients.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companyProjects.map((project, index) => (
            <Reveal key={project.title} y={40} delay={(index % 3) * 0.08}>
              <ProjectCard
                title={project.title}
                url={project.url}
                tech={project.tech}
              />
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 isolate hidden md:block">
          <LazyScene position={[3.2, 0, 0]} scale={0.7} icons={personalIcons} />
        </div>
        <div className="relative">
        <Reveal y={30}>
          <h2 className="text-3xl font-bold">Personal Projects</h2>
          <p className="mt-2 text-base-content/60">
            Side projects and assignments I built to learn and experiment.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Reveal key={project.title} y={40} delay={(index % 2) * 0.08}>
              <ProjectCard
                title={project.title}
                url={project.url}
                tech={project.tech}
                description={project.description}
              />
            </Reveal>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}