import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo";
import { lazy, Suspense } from "react";
import ServiceModal from "../ui/ServiceModal";
import { useState } from "react";
import {
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  PenTool,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Palette,
    title: "UI/UX Design",
    category: "Design",
    desc: "We design interfaces that look stunning and feel effortless to use.",
    longDesc:
      "From wireframes to fully polished Figma prototypes, we design every pixel with purpose. Our UI/UX process starts with user research, moves through wireframing and component design, and ends with a complete design system your dev team can implement directly. Every interface we build is tested for usability, accessibility, and conversion.",
    tags: [
      "Figma",
      "Design System",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    deliverables: [
      "Figma File",
      "Design System",
      "Mobile & Desktop Screens",
      "Handoff Documentation",
    ],
  },
  {
    id: 2,
    icon: Code2,
    title: "Web Development",
    category: "Development",
    desc: "Fast, modern, responsive websites built with the latest tech stack.",
    longDesc:
      "We build websites and web apps using React, Next.js, and Tailwind CSS. Every site is optimized for performance — sub-2s load times, perfect Lighthouse scores, and smooth animations using Framer Motion and GSAP. Fully responsive across all devices and screen sizes.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    deliverables: [
      "Full Source Code",
      "Deployed Live Site",
      "GitHub Repository",
      "Performance Report",
    ],
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile Apps",
    category: "Development",
    desc: "Native and cross-platform apps built for Android and iOS.",
    longDesc:
      "We build cross-platform mobile apps using React Native that feel truly native on both Android and iOS. From onboarding flows to real-time features, push notifications, and offline support — we handle the full mobile experience. Published to both App Store and Google Play.",
    tags: ["React Native", "Firebase", "iOS", "Android", "Expo"],
    deliverables: [
      "App Source Code",
      "App Store Submission",
      "Google Play Submission",
      "Testing Report",
    ],
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "E-Commerce",
    category: "Development",
    desc: "Online stores that convert visitors into loyal customers.",
    longDesc:
      "We build full e-commerce platforms with product management, cart, secure checkout with Stripe, order tracking, and admin dashboards. Built on Next.js for fast SEO performance. Every store is optimized for conversion with clean UX and fast load times.",
    tags: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "Admin Dashboard",
    ],
    deliverables: [
      "Full Store",
      "Admin Panel",
      "Payment Integration",
      "Order System",
    ],
  },
  {
    id: 5,
    icon: PenTool,
    title: "Brand Identity",
    category: "Branding",
    desc: "We build brand identities that are memorable and powerful.",
    longDesc:
      "A complete brand identity package — logo design, color palette, typography system, brand voice guidelines, and a full brand guidelines document. We also deliver a social media kit so your brand looks consistent everywhere. Designed in Illustrator and delivered in all formats.",
    tags: [
      "Logo Design",
      "Brand Guidelines",
      "Typography",
      "Illustrator",
      "Social Kit",
    ],
    deliverables: [
      "Logo Files (SVG/PNG/PDF)",
      "Brand Guidelines PDF",
      "Social Media Kit",
      "Color & Font System",
    ],
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "SEO & Growth",
    category: "Marketing",
    desc: "Data-driven strategies that grow your traffic and revenue.",
    longDesc:
      "We audit your site, fix technical SEO issues, optimize on-page content, build quality backlinks, and set up proper analytics tracking. Our clients typically see 80-120% organic traffic growth within 3 months. Every strategy is data-driven and fully transparent.",
    tags: [
      "SEO Audit",
      "Google Analytics",
      "Content Strategy",
      "Link Building",
      "Technical SEO",
    ],
    deliverables: [
      "Full SEO Audit",
      "Keyword Strategy",
      "Monthly Report",
      "Analytics Setup",
    ],
  },
];

export default function ServicesSection({ id }) {
  const [selectedService, setSelectedService] = useState(null);
  const scrollTo = useScrollTo();
  return (
    <>
      <section
        id={id}
        className="bg-black py-24  relative overflow-hidden px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CAF4F]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl  2mxl:max-w-full  mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg font-medium">
              What We Do
            </p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
              Our Services
            </h2>
            <p className="text-zinc-400 mt-5 max-w-2xl text-xl mx-auto leading-7">
              From design to development, we build digital products that help
              businesses grow and stand out online.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.title}
                  layoutId={`service-card-${s.id}`}
                  onClick={() => setSelectedService(s)}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    data-cursor="pointer"
                    className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#4CAF4F]/40"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-[#4CAF4F]/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <motion.div
                        layoutId={`service-icon-${s.id}`}
                        className="w-14 h-14 3xl:w-20 3xl:h-20 rounded-2xl bg-[#4CAF4F]/10 border border-[#4CAF4F]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-300"
                      >
                        {/* {s.icon} */}
                        <Icon
                          className="w-7 h-7 3xl:w-10 3xl:h-10 text-[#4CAF4F]"
                          strokeWidth={2.2}
                        />
                      </motion.div>
                      <motion.h3
                        layoutId={`service-title-${s.id}`}
                        className="text-white text-2xl 3xl:text-3xl font-semibold mb-3"
                      >
                        {s.title}
                      </motion.h3>

                      <motion.p
                        layoutId={`service-desc-${s.id}`}
                        className="text-zinc-400 3xl:text-lg mt-3 leading-7"
                      >
                        {s.desc}
                      </motion.p>

                      <button className="mt-6 cursor-pointer text-[#4CAF4F] font-medium lg:text-xl 3xl:text-2xl flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                        Learn more
                        <ArrowRight className=" " size={22} />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedService && (
          <ServiceModal
            key={selectedService.id}
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onContact={() => scrollTo("#contact")}
          />
        )}
      </AnimatePresence>
    </>
  );
}
