import { useEffect } from "react";
import { motion } from "framer-motion";

export default function NavbarMenu({ navLinks }) {
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.stop();
    return () => {
      if (lenis) lenis.start();
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      data-lenis-prevent
      className="fixed inset-0 z-40 pt-16 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
    >
      {navLinks.map((link, i) => (
        <motion.a
          key={link.label}
          href={`#${link.label.toLowerCase()}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: i * 0.07 }}
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-2xl  md:text-5xl font-bold hover:text-[#4CAF4F] transition-colors duration-200"
        >
          {link.label}
        </motion.a>
      ))}

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: navLinks.length * 0.07 }}
        onClick={() => setIsMenuOpen(false)}
        className=" bg-[#4CAF4F] text-white font-semibold px-10 py-4 rounded-sm text-lg md:text-2xl hover:bg-[#43A047] transition-all duration-300"
      >
        Get Started
      </motion.a>
    </motion.div>
  );
}
