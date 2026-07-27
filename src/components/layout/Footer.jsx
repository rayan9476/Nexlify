import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaArrowUp,
  FaFacebook,
} from "react-icons/fa";
import logo from "../../assets/nexlify-logo-transparent-bg.png";
import { motion } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FooterSection({ id }) {
  const scrollTo = useScrollTo();

  const handleClick = (e, target) => {
    e.preventDefault();
    scrollTo(target);
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id={id}
      className=" border-t border-white/10 pt-16 pb-8  px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      <div className="max-w-7xl  2mxl:max-w-full mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="site logo"
              className="w-[140px] xl:w-[160px]  3xl:w-[220px]  mb-4 xl:mb-6 2xl:mb-8 3xl:mb-12"
            />
            <p className="text-zinc-400  leading-7 max-w-sm xl:max-w-md 2xl:max-w-xl 3xl:max-w-2xl xl:mb-4 2xl:mb-6 3xl:mb-8 text-sm xl:text-base 2xl:text-lg 3xl:text-2xl">
              Nexlify is a creative digital agency building modern websites,
              bold brands, and high-converting digital products.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <FaInstagram size={22} className="3xl:w-9 3xl:h-9" />,
                  href: "#",
                },
                {
                  icon: <FaTwitter size={22} className="3xl:w-9 3xl:h-9" />,
                  href: "#",
                },
                {
                  icon: <FaLinkedin size={22} className="3xl:w-9 3xl:h-9" />,
                  href: "#",
                },
                {
                  icon: <FaFacebook size={22} className="3xl:w-9 3xl:h-9" />,
                  href: "#",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 2xl:w-12 2xl:h-12  3xl:w-16 3xl:h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#4CAF4F] hover:border-[#4CAF4F]/50 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold xl:text-base 2xl:text-lg 3xl:text-2xl mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", target: "#services" },
                { label: "UI/UX Design", target: "#services" },
                { label: "Brand Identity", target: "#services" },
                { label: "Mobile Apps", target: "#services" },
                { label: "SEO & Marketing", target: "#services" },
              ].map((l) => (
                <li key={l.label}>
                  <span
                    data-cursor="pointer"
                    onClick={(e) => handleClick(e, l.target)}
                    className="text-zinc-400 cursor-pointer hover:text-[#4CAF4F] text-sm 2xl:text-base 3xl:text-lg transition-colors duration-200"
                  >
                    {l.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold xl:text-base 2xl:text-lg 3xl:text-2xl mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", target: "#home" },
                { label: "Our Work", target: "#works" },
                { label: "Testimonials", target: "#testimonials" },
                { label: "Contact", target: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <span
                    data-cursor="pointer"
                    onClick={(e) => handleClick(e, l.target)}
                    className="text-zinc-400 cursor-pointer hover:text-[#4CAF4F] text-sm 2xl:text-base 3xl:text-lg transition-colors duration-200"
                  >
                    {l.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm xl:text-base 2xl:text-xl 3xl:text-2xl">
            © 2026 Nexlify Creative Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { item: "Privacy Policy", href: "/privacy" },
              { item: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-zinc-500 hover:text-[#4CAF4F] text-sm xl:text-base 2xl:text-lg 3xl:text-xl transition-colors duration-200"
              >
                {l.item}
              </Link>
            ))}
            <motion.button
              type="button"
              onClick={(e) => handleClick(e, "#home")}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileTap={{
                scale: 0.94,
              }}
              animate={
                isHovered
                  ? { y: 0 }
                  : {
                      y: [2, -4, 2],
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.15 }
                  : {
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="flex cursor-pointer h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#4CAF4F] text-white shadow-[0_10px_35px_rgba(76,175,79,0.35)] transition-shadow hover:shadow-[0_18px_45px_rgba(76,175,79,0.55)]"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-lg sm:text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
