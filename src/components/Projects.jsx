import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <section
  id="projects"
  className="py-24 px-5 lg:px-10"
>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects I've Built
        </motion.h2>

        {/* Bike Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-10 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-4 md:p-6 flex items-center">
              <img
                src={assets.bikeSharing}
                alt="Bike Sharing Demand Prediction"
                className="rounded-2xl w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-purple-500 font-medium mb-3 flex gap-2">
                <img src={assets.star_icon} alt="" />
                <span>Featured Project</span>
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Bike Sharing Demand Prediction
              </h3>

              <p className="text-zinc-400 leading-7 text-sm md:text-base">
                Built an end-to-end Machine Learning application to predict hourly
                bike rental demand using historical usage patterns and weather
                conditions. Implemented data preprocessing, feature engineering,
                model evaluation, and deployed an interactive Streamlit web
                application for real-time predictions.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Streamlit",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-black border border-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
                  Real-Time Predictions
                </div>

                <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
                  Feature Engineering
                </div>

                <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
                  Streamlit Dashboard
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://bike-sharing-demand.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
                <a
                  href="https://github.com/swapnika9494/bike-sharing-demand-prediction"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-5 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Smart Invigilation Management System */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-10 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
  >
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="p-4 md:p-6 flex items-center">
      <img
        src={assets.smartInvigilation}
        alt="Smart Invigilation Management System"
        className="rounded-2xl w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
      />
    </div>

    <div className="p-6 md:p-8 flex flex-col justify-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Smart Invigilation Management System
        <span className="text-purple-500 font-medium mb-3 flex gap-2">
        <img src={assets.star_icon} alt="" />
        <span>Featured Project</span>
      </span>
      </h3>

      <p className="text-zinc-400 leading-7 text-sm md:text-base">
        Developed a full-stack web application to automate examination
        invigilation scheduling with secure role-based authentication,
        conflict-free faculty allocation, leave management, and balanced
        workload distribution. Built responsive dashboards for Admin, HOD,
        and Teachers with real-time exam and duty management.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "React.js",
          "Tailwind CSS",
          "Redux Toolkit",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT",
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-black border border-white/10 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
        <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
          Role-Based Access
        </div>

        <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
          Conflict-Free Scheduling
        </div>

        <div className="bg-black/40 rounded-xl p-3 text-sm text-center">
          Faculty Workload Management
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="https://smart-invigilation-management-syste.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
        >
          <FiExternalLink />
          Live Demo
        </a>

        <a
          href="https://github.com/swapnika9494/smart-invigilation-management-system"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-5 py-3 rounded-xl transition"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  </div>
</motion.div>

        {/* AI Gift Suggestor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-4 md:p-6 flex items-center">
              <img
                src={assets.aiGift}
                alt="AI Gift Suggestor"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI Gift Suggestor System
              </h3>

              <p className="text-zinc-400 leading-7 text-sm md:text-base">
                Developed an AI-powered gift recommendation system using Flask
                and Scikit-learn. The application recommends personalized gifts
                based on user preferences using feature encoding, preprocessing,
                and a Random Forest model.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "Python",
                  "Flask",
                  "Scikit-learn",
                  "HTML",
                  "CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-black border border-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>

                <a
                  href="https://github.com/swapnika9494/AI-Gift-Suggestor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-5 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
