import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import Reveal from "../features/common/Reveal";
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import ShinyEffect from "../features/common/ShinyEffect";
const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-cyan-500" />,
      },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },

      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "React", icon: <DiReact className="text-cyan-400" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-cyan-400" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },

    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-20 text-gray-100 flex flex-col md:flex-row justify-center items-center"
    >
      {/* <ShinyEffect top={800} left={500} size={900} /> */}


      <Reveal>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold tracking-tight mb-4">Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I use to build modern, scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-sm
                         hover:border-white/20 hover:bg-white/10
                         transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-6 text-white">
                {skill.category}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 
                               text-gray-300 hover:text-white 
                               transition-colors duration-200"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
