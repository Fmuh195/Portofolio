import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-zinc-950/80 backdrop-blur-lg shadow-lg shadow-black/20 py-4 border-b border-zinc-800/50" : "bg-transparent py-6"
                }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="logo z-50">
                        <a href="#home" className="text-3xl font-bold text-white tracking-wider flex items-center gap-2">
                            <span className="text-violet-500 bg-violet-500/10 px-2 py-1 rounded-lg">O</span>ci.
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.href} 
                                    className="text-gray-300 hover:text-violet-400 font-medium transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-2xl text-white focus:outline-none z-50 w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center border border-zinc-700/50 hover:bg-zinc-700/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <motion.i 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            key={isMobileMenuOpen ? "close" : "menu"}
                            className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}
                        ></motion.i>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl md:hidden overflow-hidden"
                        >
                            <ul className="flex flex-col px-6 py-8 gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <a 
                                            href={link.href} 
                                            className="text-xl font-medium text-gray-300 hover:text-white hover:bg-violet-900/30 transition-all block px-4 py-3 rounded-xl border border-transparent hover:border-violet-700/50"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* Spacer to prevent layout shift due to fixed navbar */}
            <div className="h-24"></div>
        </>
    );
};

export default Navbar;