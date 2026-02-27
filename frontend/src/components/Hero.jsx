import { TypeAnimation } from "react-type-animation";
import Reveal from "../features/common/Reveal";
import ShinyEffect from "../features/common/ShinyEffect";
import Screenshot_1 from "../assets/Screenshot_1.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen  text-white flex items-center justify-center mt-32 md:mt-6 overflow-hidden">
      {/* Shiny Orbs */}
      <ShinyEffect left={5} size={600} maxWidth={600} />

      <Reveal>
        <div className=" max-w-7xl mx-auto md:px-12 grid md:grid-cols-2 gap-12 items-center py-10 px-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-lg text-gray-400">Hello, I'm</p>

            <h1 className="text-4xl md:text-6xl font-bold">Arafat Islam</h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "Full Stack Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-[#1E2839]"
            />

            <p className="text-gray-400 max-w-lg">
              I build modern, scalable, and high-performing web applications
              using React, Node.js, MongoDB and ExpressJS.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 border border-gray-500 hover:border-[#1E2839] hover:text-[#1E2839] transition rounded-lg font-medium cursor-pointer">
                View Projects
              </button>

              <button className="px-6 py-3 border border-gray-500 hover:border-[#1E2839] hover:text-[#1E2839] transition rounded-lg font-medium cursor-pointer">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (Profile Image / Illustration) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-gray-600 text-xl overflow-hidden">
                <img
                  src={Screenshot_1}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
