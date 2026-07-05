import { motion } from "framer-motion";
import { listProyek } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listProyek.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-zinc-800/80 rounded-2xl overflow-hidden shadow-xl border border-zinc-700/50 hover:shadow-violet-900/30 transition-all duration-300 flex flex-col h-full group"
          >
            <div className="overflow-hidden relative">
              <img
                src={project.gambar}
                alt={project.nama}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                {project.nama}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.desk}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full border border-violet-800/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href="#"
                  className="flex-1 bg-violet-700 hover:bg-violet-600 text-center py-2.5 rounded-xl font-medium transition-colors"
                >
                  <i className="ri-external-link-line mr-2"></i>Live Demo
                </a>
                <a
                  href="#"
                  className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-center py-2.5 rounded-xl font-medium transition-colors"
                >
                  <i className="ri-github-fill mr-2"></i>GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
