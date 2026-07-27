import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useScrollTo } from "../hooks/useScrollTo";

const TRANSITION = {
  type: "spring",
  stiffness: 340,
  damping: 32,
  mass: 0.85,
};

export default function ServiceModal({ service, onClose, onContact }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.stop();
    return () => {
      if (lenis) lenis.start();
    };
  }, []);

  const scrollTo = useScrollTo();

  const handleClick = (e, target) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      scrollTo(target);
    }, 800);
  };

  if (!service) return null;

  const Icon = service.icon;

  return (
    <>
      {/* Backdrop  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/*  wrapper  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Modal card  */}
        <motion.div
          layoutId={`service-card-${service.id}`}
          onClick={(e) => e.stopPropagation()}
          transition={TRANSITION}
          data-lenis-prevent
          className="relative overflow-hidden w-full max-w-2xl 3xl:max-w-3xl max-h-[80vh] md:max-h-[90vh] scrollbar-none rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          <div
            data-lenis-prevent
            className="h-full max-h-[80vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            {/* Close button  */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 2xl:h-10 2xl:w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer border-none"
            >
              <FaTimes size={22} />
            </button>

            {/* Header  */}
            <div className="relative h-48 md:h-64 3xl:h-80 overflow-hidden  bg-gradient-to-br from-[#4CAF4F]/10 via-[#0a0a0a] to-[#0a0a0a] flex items-center justify-center">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[#4CAF4F]/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4CAF4F]/10 rounded-full blur-[80px]" />

              <motion.div
                layoutId={`service-icon-${service.id}`}
                transition={TRANSITION}
                className="relative rounded-2xl z-10 w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 border border-[#4CAF4F]/20 bg-[#4CAF4F]/10 flex items-center justify-center"
              >
                <Icon
                  className="w-9 h-9 2xl:w-11 2xl:h-11 3xl:w-14 3xl:h-14 text-[#4CAF4F]"
                  strokeWidth={2.2}
                />
              </motion.div>

              {/* Category badge */}
              <div className="absolute top-5 left-5">
                <motion.span
                  layoutId={`service-category-${service.id}`}
                  transition={TRANSITION}
                  className="bg-[#4CAF4F]/20 border border-[#4CAF4F]/40 text-[#4CAF4F] text-xs 2xl:text-base font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest"
                >
                  {service.category}
                </motion.span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* Content  */}
            <div className="p-2.5 md:p-8">
              {/* Title  */}
              <motion.h3
                layoutId={`service-title-${service.id}`}
                transition={TRANSITION}
                className="text-white text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold mb-3"
              >
                {service.title}
              </motion.h3>

              {/* Desc  */}
              <motion.p
                layoutId={`service-desc-${service.id}`}
                transition={TRANSITION}
                className="text-zinc-400 leading-7 2xl:text-lg 3xl:text-xl mb-6"
              >
                {service.longDesc}
              </motion.p>

              {/* Tags  */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    data-cursor="pointer"
                    className="2xl:text-base 3xl:text-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-[#4CAF4F] hover:border-[#4CAF4F]/40 transition-colors duration-200 ease-in-out cursor-pointer text-xs px-3 2xl:px-4 3xl:px-5 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Divider  */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
                className="w-full h-px bg-white/10 mb-8"
              />

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="mb-8"
              >
                <p className="text-zinc-500 text-xs 2xl:text-sm 3xl:text-base uppercase tracking-widest mb-4">
                  What you get
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    >
                      <div className="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 3xl:h-3 3xl:w-3 rounded-full bg-[#4CAF4F] flex-shrink-0" />
                      <span className="text-zinc-300 xs-b-text text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Availability notice */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="flex items-start gap-4 rounded-2xl border border-[#4CAF4F]/20 bg-[#4CAF4F]/5 p-5 mb-8"
              >
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F]" />
                  <div className="absolute inset-0 w-2.5 h-2.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F] animate-ping opacity-40" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm 2xl:text-base 3xl:text-lg mb-1">
                    Currently available for this service
                  </p>
                  <p className="text-zinc-500 text-sm 2xl:text-base 3xl:text-lg leading-6">
                    We have limited spots open. Reach out now and we'll get back
                    to you within 24 hours to discuss your project.
                  </p>
                </div>
              </motion.div>

              {/* CTA  */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                onClick={(e) => {
                  handleClick(e, "#contact");
                }}
                className="w-full xs-text text-sm 2xl:text-xl 3xl:text-2xl bg-[#4CAF4F] hover:bg-[#43A047] text-white font-semibold py-4 md:px-8 rounded-xl flex items-center justify-center xs-gap gap-2 md:gap-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-none shadow-[0_4px_20px_rgba(76,175,79,0.3)]"
              >
                Get Started with {service.title}
                <FaArrowRight size={18} className="xs-w-h 3xl:h-7 3xl:w-7" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
