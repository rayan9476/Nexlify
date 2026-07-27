import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useScrollTo } from "../hooks/useScrollTo";

export default function CTASection({ id }) {
  const scrollTo = useScrollTo();

  const handleClick = (e, target) => {
    e.preventDefault();
    scrollTo(target);
  };

  return (
    <section
      id={id}
      className="bg-black py-24 px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      <div className="max-w-7xl   2mxl:max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] border border-[#4CAF4F]/20 bg-gradient-to-br from-[#4CAF4F]/10 via-black to-black overflow-hidden p-12 md:p-20 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#4CAF4F]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#4CAF4F]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[5px] text-[#4CAF4F] text-sm  lg:text-base xl:text-lg 3xl:text-2xl font-medium mb-4"
            >
              Start Today
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-bold mb-6 leading-tight"
            >
              Ready to Build Something <br />
              <span className="text-[#4CAF4F]">Amazing?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-zinc-400 max-w-xl 3xl:max-w-2xl mx-auto mb-10 leading-7 lg:text-lg 3xl:text-2xl"
            >
              Let's talk about your project. We'll help you build a digital
              product that stands out and delivers real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                type="button"
                onClick={(e) => handleClick(e, "#contact")}
                className="bg-[#4CAF4F] hover:bg-[#43A047] text-white font-semibold px-8 md:px-10 py-4  rounded-sm flex items-center gap-3 hover:gap-5 transition-all duration-300  hover:shadow-[0_0_30px_rgba(76,175,79,0.4)] cursor-pointer  lg:text-lg  2xl:text-xl 3xl:text-2xl
              
               transform-gpu
    will-change-transform
              "
              >
                Start a Project
                <FaArrowRight />
              </button>

              <button
                type="button"
                onClick={(e) => handleClick(e, "#works")}
                className="border border-white/20 hover:border-[#4CAF4F]/50 text-white font-semibold px-10 py-4  rounded-sm transition-all duration-300 cursor-pointer hover:text-[#4CAF4F] lg:text-lg  2xl:text-xl 3xl:text-2xl"
              >
                View Our Work
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
