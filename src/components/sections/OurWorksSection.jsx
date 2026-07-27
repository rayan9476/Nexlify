import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
const ProjectModal = lazy(() => import("../ui/ProjectModal"));

import { AnimatePresence } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import { div } from "framer-motion/client";

const works = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    description: "Modern, responsive and high-performance websites.",
    longDesc:
      "We built a fully responsive, high-performance website with modern animations, optimized load times under 2 seconds, and a conversion-focused layout. The result was a 40% increase in user engagement for the client.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    id: 2,
    title: "UI / UX Design",
    category: "Design",
    description: "Beautiful interfaces focused on user experience.",
    longDesc:
      "A complete UI/UX redesign for a SaaS platform. We ran user research, built wireframes, and delivered a Figma design system with 80+ components that the dev team could implement directly.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    tags: ["Figma", "Design System", "Wireframing", "Prototyping"],
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    description: "Creative branding and visual identity solutions.",
    longDesc:
      "Full brand identity package including logo design, color palette, typography system, brand guidelines document, and social media kit. Delivered within 2 weeks for a fintech startup.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
    tags: ["Logo Design", "Brand Guidelines", "Typography", "Illustrator"],
  },
  {
    id: 4,
    title: "Mobile Apps",
    category: "Development",
    description: "Fast and intuitive Android & iOS applications.",
    longDesc:
      "Cross-platform mobile app built with React Native for both Android and iOS. Features include real-time notifications, offline mode, and a smooth onboarding flow with a 4.8 star App Store rating.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    tags: ["React Native", "Firebase", "iOS", "Android"],
  },
  {
    id: 5,
    title: "E-Commerce",
    category: "Development",
    description: "Scalable online stores with premium experience.",
    longDesc:
      "Full e-commerce platform built with Next.js and Stripe integration. Includes product management, cart, checkout, order tracking, and an admin dashboard. Launched in 3 weeks.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "SEO & Marketing",
    category: "Marketing",
    description: "Grow your business with digital marketing.",
    longDesc:
      "Full SEO audit and strategy for a local business. We optimized 80+ pages, built backlinks, and set up Google Analytics tracking. Organic traffic increased by 120% in 3 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["SEO", "Google Analytics", "Content Strategy", "Link Building"],
  },
];

export default function OurWorksSection({ id }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <LayoutGroup>
        <section
          id={id}
          className="bg-black pt-24 lg:py-24 px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
        >
          <div className="max-w-7xl  2mxl:max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm  lg:text-base xl:text-lg  font-medium mb-3">
                Portfolio
              </p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold">
                Our Works
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, i) => (
                <motion.div
                  key={work.id}
                  onClick={() => setSelectedProject(work)}
                  layoutId={`card-${work.id}`}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                    }}
                    data-cursor="pointer"
                    className="h-full  group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,.5)]  hover:border-[#4CAF4F]/50                
            hover:-translate-y-3      transition-all duration-500 ease-in "
                  >
                    <div
                      className="not-last-of-type:overflow-hidden relative 
                    
                    group-hover:scale-110  transition-transform duration-700 
                   "
                    >
                      <motion.img
                        layoutId={`image-${work.id}`}
                        src={work.image}
                        alt={work.title}
                        className="block h-64 3xl:h-80 w-full object-cover "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                    </div>

                    <div className="p-7">
                      <motion.h3
                        layoutId={`title-${work.id}`}
                        className="text-white text-2xl 3xl:text-3xl font-semibold"
                      >
                        {work.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`desc-${work.id}`}
                        className="text-zinc-400 3xl:text-lg mt-3 leading-7"
                      >
                        {work.description}
                      </motion.p>
                      <motion.button
                        layoutId={`category-${work.id}`}
                        className="mt-6 cursor-pointer text-[#4CAF4F] font-medium lg:text-xl 3xl:text-2xl flex items-center gap-1 group-hover:gap-3 transition-all duration-300"
                      >
                        View Project
                        <ArrowRight className=" " size={22} />
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <Suspense fallback={null}>
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </Suspense>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
