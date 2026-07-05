import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission logic here
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const socialLinks = [
    { icon: "ri-github-fill", href: "https://github.com", color: "hover:text-gray-300 hover:bg-zinc-700" },
    { icon: "ri-linkedin-fill", href: "https://linkedin.com", color: "hover:text-blue-500 hover:bg-blue-500/10" },
    { icon: "ri-instagram-line", href: "https://instagram.com", color: "hover:text-pink-500 hover:bg-pink-500/10" },
    { icon: "ri-mail-send-fill", href: "mailto:email@example.com", color: "hover:text-violet-500 hover:bg-violet-500/10" },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-zinc-800/30 p-8 md:p-12 rounded-3xl border border-zinc-700/50 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently available to take on new projects. Fill out the form and I'll get in touch with you shortly.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-400 border border-violet-800/50">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="font-semibold">Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-400 border border-violet-800/50">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <p className="font-semibold">fauziladdin@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Follow Me</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-zinc-800 flex items-center justify-center rounded-xl text-2xl transition-all duration-300 border border-zinc-700 ${social.color}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-5 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-5 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full bg-zinc-900/50 border ${errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-5 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none`}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-violet-700 hover:bg-violet-600 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-violet-700/20 flex justify-center items-center gap-2"
            >
              Send Message <i className="ri-send-plane-fill"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
