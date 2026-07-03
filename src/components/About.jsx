import { motion } from "framer-motion";
import { FaCode, FaBrain, FaDatabase } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";

const About = () => {
  const highlights = [
    {
      icon: <FaCode size={24} />,
      title: "Full Stack Development",
    },
    {
      icon: <FaBrain size={24} />,
      title: "AI & Machine Learning",
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Data Structures & Databases",
    },
    {
      icon: <MdOutlineDevices size={24} />,
      title: "Responsive Web Applications",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-400 text-lg leading-8">
              I'm <span className="text-white font-semibold">Swapnika Satti</span>, a B.Tech student in Artificial Intelligence and Machine Learning at Shri Vishnu Engineering College for Women. I enjoy building modern web applications and AI-powered solutions that solve real-world problems.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mt-6">
              My interests include Full Stack Development, Machine Learning, and Software Engineering. I have experience developing responsive web applications using React, Node.js, Express.js, and MongoDB, along with building machine learning projects using Python and Scikit-learn.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mt-6">
              Currently, I am strengthening my Data Structures & Algorithms, MERN Stack, and System Design skills while building impactful projects to prepare for Software Development Engineer roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-purple-500
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="text-purple-500 mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;