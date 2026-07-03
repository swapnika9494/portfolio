import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiScikitlearn,
} from "react-icons/si";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center pt-28 px-5 lg:px-10 overflow-hidden">
      <div className="absolute top-32 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-500 font-medium mb-4">
            AI & Machine Learning Student | Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm Swapnika
            <br />
            Satti
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            Passionate about building intelligent applications and scalable web
            solutions using React, Node.js, Express.js, MongoDB, and Machine
            Learning. I enjoy solving real-world problems through technology and
            continuously improving my software development skills.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="border border-white/10 hover:border-purple-500 px-6 py-3 rounded-xl font-medium transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <div className="relative w-[450px] h-[450px] mx-auto flex items-center justify-center">
        <motion.img
          animate={{ y: [0, -12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          src={assets.avatar}
          alt="avatar"
          className="w-80 h-80 rounded-full object-cover border-4 border-purple-500 z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center">

  <div className="relative w-[400px] h-[400px]">

    <div className="absolute top-0 left-1/2 -translate-x-1/2">
      <FaReact className="text-cyan-400 text-4xl" />
    </div>

    <div className="absolute top-[15%] right-0">
      <FaPython className="text-blue-400 text-4xl" />
    </div>

    <div className="absolute top-1/2 right-0 -translate-y-1/2">
      <FaNodeJs className="text-green-500 text-4xl" />
    </div>

    <div className="absolute bottom-[15%] right-0">
      <SiMysql className="text-blue-500 text-4xl" />
    </div>

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <SiScikitlearn className="text-orange-400 text-4xl" />
    </div>

    <div className="absolute bottom-[15%] left-0">
      <SiMongodb className="text-green-500 text-4xl" />
    </div>

    <div className="absolute top-1/2 left-0 -translate-y-1/2">
      <FaJava className="text-orange-500 text-4xl" />
    </div>

    <div className="absolute top-[15%] left-0">
      <FaJsSquare className="text-yellow-400 text-4xl" />
    </div>

  </div>

</div>

  
</div>
    

      </div>
    </section>
  );
};

export default Hero;