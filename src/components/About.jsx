import { motion } from "framer-motion";
import DataImage from "../data";

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-violet-600/20 blur-2xl rounded-full transform group-hover:scale-105 transition-transform duration-500 -z-10 w-64 h-64 md:w-[400px] md:h-[400px] mx-auto"></div>
            <img
              src="/assets/oci1.jpeg"
              alt="Profile"
              className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full shadow-2xl shadow-black/50 object-cover border-4 border-zinc-700/30"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Hi, I'm <span className="text-violet-500">Oci</span>, a Passionate Web Developer
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a dedicated web developer with a strong passion for creating beautiful, responsive, and user-friendly websites. I enjoy solving complex problems and turning ideas into reality through code.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-500 font-semibold mb-1">Name:</p>
              <p className="font-medium">Muh Fauzil Addin</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold mb-1">Role:</p>
              <p className="font-medium">Web Developer</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold mb-1">Location:</p>
              <p className="font-medium">Indonesia</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold mb-1">Experience:</p>
              <p className="font-medium">1+ Years</p>
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-600 transition-colors shadow-lg shadow-violet-700/30"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
