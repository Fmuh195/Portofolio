import { motion } from "framer-motion";
import { FaPhp, FaLaravel } from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: "ri-html5-fill", level: "95%", color: "text-orange-500", bg: "bg-orange-500" },
  { name: "CSS", icon: "ri-css3-fill", level: "90%", color: "text-blue-500", bg: "bg-blue-500" },
  { name: "JavaScript", icon: "ri-javascript-fill", level: "85%", color: "text-yellow-400", bg: "bg-yellow-400" },
  { name: "React", icon: "ri-reactjs-fill", level: "80%", color: "text-cyan-400", bg: "bg-cyan-400" },
  { name: "Tailwind CSS", icon: "ri-tailwind-css-fill", level: "90%", color: "text-teal-400", bg: "bg-teal-400" },
  { name: "Vite", icon: "ri-flashlight-fill", level: "85%", color: "text-purple-500", bg: "bg-purple-500" },
  { name: "Git", icon: "ri-github-fill", level: "80%", color: "text-gray-300", bg: "bg-gray-500" },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    level: "80%",
    color: "text-indigo-300",
    bg: "bg-indigo-500"
  },
  {
    name: "Laravel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    level: "80%",
    color: "text-red-300",
    bg: "bg-red-500"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl shadow-xl hover:shadow-violet-900/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-zinc-800 shadow-inner ${skill.color}`}>
                {skill.img ? (
                  <img src={skill.img} alt={skill.name} className="w-8 h-8 object-contain" />
                ) : (
                  <i className={`${skill.icon} text-3xl`}></i>
                )}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                {skill.name}
              </h3>
            </div>

            <div>
              <div className="flex justify-between mb-2 text-sm text-gray-400">
                <span>Proficiency</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full ${skill.bg}`}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
