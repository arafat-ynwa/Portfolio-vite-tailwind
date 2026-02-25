import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "../features/common/Reveal";
import Screenshot_1 from "../assets/Screenshot_1.png";
import Screenshot_2 from "../assets/Screenshot_2.png";
import Screenshot_3 from "../assets/Screenshot_3.png";

const projects = [
  {
    img: Screenshot_1,
    title: "E-Commerce Platform",
    description:
      "e-commerce application with authentication and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Screenshot_2,
    title: "Task Manager",
    description: "Modern task management website built with mern stack",
    tech: ["Next.js", "Tailwind", "Firebase"],
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Screenshot_3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website with animations, contact form and project showcase.",
    tech: ["React", "Framer Motion", "EmailJS"],
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24" id="portfolio">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4">Some of my recent work</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className="p-4 rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-sm
                         hover:border-white/20 hover:bg-white/10
                         transition-all duration-300 h-110"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-6">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FiExternalLink className="text-white text-xl" />
                  </a>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
                  >
                    <AiOutlineGithub className="text-white text-xl" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
