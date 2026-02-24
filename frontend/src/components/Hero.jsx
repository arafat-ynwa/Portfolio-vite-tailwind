import { TypeAnimation } from "react-type-animation";
import Reveal from "../features/common/Reveal";
import ShinyEffect from "../features/common/ShinyEffect";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen   text-white flex items-center justify-center mt-32 md:mt-6 overflow-hidden">

       {/* Shiny Orbs */}
      <ShinyEffect top={50} left={-100} size={600} />
      <ShinyEffect top={200} right={-150} size={500} />
      
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
            className="text-2xl md:text-3xl font-semibold text-blue-400"
          />

          <p className="text-gray-400 max-w-lg">
            I build modern, scalable, and high-performing web applications using
            React, Node.js, MongoDB and ExpressJS.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition rounded-lg font-medium">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition rounded-lg font-medium">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Profile Image / Illustration) */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-gray-600 text-xl">
              Your Image Here
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default Hero;
