import { motion } from "framer-motion";

import { Star } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Boodmoard transformed our entire digital presence. The website they built for us tripled our conversion rate in 2 months.",
    stars: 5,
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Founder, NovaBrand",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "Exceptional design work. They understood our vision perfectly and delivered something beyond what we imagined.",
    stars: 5,
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Marketing Director, Lumino",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Professional, creative, and always on time. Their attention to detail in UI/UX design is incredible.",
    stars: 5,
  },
];

export default function TestimonialsSection({ id }) {
  return (
    <section
      id={id}
      className="bg-black py-24 px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      <div className="max-w-7xl  2mxl:max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg font-medium">
            Testimonials
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              data-cursor="pointer"
              className="rounded-3xl cursor-pointer border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-[#4CAF4F]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#4CAF4F] text-lg">
                    <Star
                      key={j}
                      className=" text-[#4CAF4F] fill-[#4CAF4F]"
                      strokeWidth={2}
                      size={25}
                    />
                  </span>
                ))}
              </div>

              <p className="text-zinc-300 leading-8 text-base e xl:text-xl 3xl:text-3xl mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 rounded-full object-cover border-2 border-[#4CAF4F]/40"
                />
                <div>
                  <p className="text-white font-semibold 2xl:text-lg 3xl:text-xl">
                    {t.name}
                  </p>
                  <p className="text-zinc-500 text-sm 2xl:text-base 3xl:text-lg">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
