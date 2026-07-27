import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope size={22} className="3xl:w-7 3xl:h-7" />,
    label: "Email Us",
    value: "hello@nexlify.com",
    href: "mailto:hello@nexlify.com",
  },
  {
    icon: <FaPhone size={22} className="3xl:w-7 3xl:h-7" />,
    label: "Call Us",
    value: "+92 300 0000000",
    href: "tel:+923000000000",
  },
  {
    icon: <FaMapMarkerAlt size={22} className="3xl:w-7 3xl:h-7" />,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "https://www.google.com/maps/search/?api=1&query=V37J%2BQ42%20Umar%20Colony%2C%20Karachi%2C%20Pakistan",
  },
];

const socials = [
  {
    icon: <FaInstagram size={22} className="3xl:w-9 3xl:h-9" />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaTwitter size={22} className="3xl:w-9 3xl:h-9" />,
    href: "#",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin size={22} className="3xl:w-9 3xl:h-9" />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook size={22} className="3xl:w-9 3xl:h-9" />,
    href: "#",
    label: "Behance",
  },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Brand Identity",
  "Mobile Apps",
  "E-Commerce",
  "SEO & Marketing",
];

const budgets = ["Under $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];

export default function ContactSection({ id }) {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name must contain only letters";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phone.trim() &&
      !/^[\d\s\+\-\(\)]{7,15}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw300eyX2vr6CRrP2y8cZW2diPQYq-1gaQMRaOG-GFudXguftT9b5CWOH_9UmT9QtDZhA/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }).toString(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="bg-black py-24 px-2 lg:px-4 xl:px-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4CAF4F]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2mxl:max-w-full mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-medium">
            Get In Touch
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl text-xl mx-auto leading-7">
            Have a project in mind? We'd love to hear about it. Send us a
            message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          {/* LEFT — Info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact info cards */}
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 group hover:border-[#4CAF4F]/40 transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 3xl:w-14 3xl:h-14 rounded-xl bg-[#4CAF4F]/10 border border-[#4CAF4F]/20 flex items-center justify-center text-[#4CAF4F] text-lg flex-shrink-0 group-hover:bg-[#4CAF4F]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-zinc-500 text-xs 3xl:text-base uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-white 3xl:text-lg font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />

            {/* Socials */}
            <div>
              <p className="text-zinc-500 text-xs 3xl:text-base  uppercase tracking-widest mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    className="w-10 h-10 2xl:w-12 2xl:h-12  3xl:w-16 3xl:h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#4CAF4F] hover:border-[#4CAF4F]/50 transition-all duration-300 will-change-transform"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 rounded-2xl border border-[#4CAF4F]/20 bg-[#4CAF4F]/5 p-4 mt-2"
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F]" />
                <div className="absolute inset-0 w-3 h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F] animate-ping opacity-40" />
              </div>
              <p className="text-zinc-300 text-sm 3xl:text-lg">
                Currently available for new projects —
                <span className="text-[#4CAF4F] font-semibold">
                  {" "}
                  2 spots left
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
              {submitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div className="w-20 h-20 3xl:w-24 3xl:h-24 rounded-full bg-[#4CAF4F]/20 border border-[#4CAF4F]/40 flex items-center justify-center text-4xl">
                    ✓
                  </div>
                  <h3 className="text-white text-2xl 3xl:text-4xl font-bold">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-400 max-w-sm 3xl:text-lg 3xl:max-w-md leading-7">
                    Thanks for reaching out. We'll review your project and get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    className="mt-2 text-[#4CAF4F] border border-[#4CAF4F]/40 hover:bg-[#4CAF4F]/10 px-6 py-3 3xl:text-2xl rounded-xl font-medium transition-all duration-300 cursor-pointer"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      {
                        name: "name",
                        label: "Your Name",
                        type: "text",
                        placeholder: "John Doe",
                      },
                      {
                        name: "email",
                        label: "Your Email",
                        type: "email",
                        placeholder: "john@example.com",
                      },
                      {
                        name: "phone",
                        label: "Phone / WhatsApp",
                        type: "tel",
                        placeholder: "+92 300 0000000",
                        fullWidth: true,
                      },
                    ].map((field) => (
                      <div
                        key={field.name}
                        // className="flex flex-col gap-2"
                        className={`flex flex-col gap-2 ${field.fullWidth ? "sm:col-span-2" : ""}`}
                      >
                        <label className="text-zinc-400 text-sm 3xl:text-lg font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused("")}
                          placeholder={field.placeholder}
                          required
                          className={`bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm 3xl:text-lg placeholder-zinc-600 outline-none transition-all duration-300
                            ${
                              focused === field.name
                                ? "border-[#4CAF4F]/60 bg-[#4CAF4F]/5 shadow-[0_0_0_3px_rgba(76,175,79,0.1)]"
                                : "border-white/10 hover:border-white/20"
                            }`}
                        />
                        {errors[field.name] && (
                          <p className="text-red-400 text-xs 3xl:text-base mt-1 flex items-center gap-1">
                            <span>⚠</span> {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Service select */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-400 text-sm 3xl:text-lg font-medium">
                        Service Needed
                      </label>

                      <div className="relative">
                        {/* Trigger */}
                        <button
                          type="button"
                          onClick={() => setServiceOpen((prev) => !prev)}
                          onBlur={() =>
                            setTimeout(() => setServiceOpen(false), 150)
                          }
                          className={`w-full cursor-pointer flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300
      ${
        focused === "service"
          ? "border-[#4CAF4F]/60 bg-[#4CAF4F]/5 shadow-[0_0_35px_rgba(76,175,79,0.18)]"
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
                        >
                          <span
                            className={
                              formData.service ? "text-white" : "text-zinc-500"
                            }
                          >
                            {formData.service || "Select a service"}
                          </span>

                          <svg
                            className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                              serviceOpen ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {errors.service && (
                          <p className="text-red-400 text-xs 3xl:text-base mt-3 flex items-center gap-1">
                            <span>⚠</span> {errors.service}
                          </p>
                        )}

                        {/* Menu */}
                        <AnimatePresence mode="wait">
                          {serviceOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -12,
                                scale: 0.97,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              exit={{
                                y: -12,
                                scale: 0.98,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.22,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="absolute left-0 right-0 mt-3 z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#111]/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.45)]"
                            >
                              {services.map((service, index) => (
                                <motion.button
                                  key={service}
                                  type="button"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: index * 0.05,
                                    duration: 0.18,
                                    ease: "easeIn",
                                  }}
                                  onClick={() => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      service,
                                    }));
                                    setServiceOpen(false);
                                  }}
                                  className={`flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left transition-all duration-200
            ${
              formData.service === service
                ? "bg-[#4CAF4F]/15 text-[#4CAF4F]"
                : "text-white hover:bg-white/5"
            }`}
                                >
                                  <span>{service}</span>

                                  {formData.service === service && (
                                    <span className="text-[#4CAF4F] text-lg">
                                      ✓
                                    </span>
                                  )}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Budget pills */}
                  <div className="flex flex-col gap-3">
                    <label className="text-zinc-400 text-sm 3xl:text-lg  font-medium">
                      Project Budget
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, budget: b }))
                          }
                          className={`px-4 py-2 rounded-full text-sm 3xl:text-lg  font-medium border transition-all duration-300 cursor-pointer
                            ${
                              formData.budget === b
                                ? "bg-[#4CAF4F] border-[#4CAF4F] text-black"
                                : "border-white/10 text-zinc-400 hover:border-[#4CAF4F]/40 hover:text-white bg-white/5"
                            }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 overflow-hidden scrollbar-none rounded-xl">
                    <label className="text-zinc-400 text-sm 3xl:text-lg font-medium">
                      Project Details
                    </label>

                    <div
                      className={`bg-white/5  rounded-xl   border  w-full overflow-hidden 
                    
                     ${
                       focused === "message"
                         ? "border-[#4CAF4F]/60 bg-[#4CAF4F]/5 shadow-[0_0_0_3px_rgba(76,175,79,0.1)]"
                         : "border-white/10 hover:border-white/20"
                     }`}
                    >
                      <textarea
                        name="message"
                        data-lenis-prevent
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        placeholder="Tell us about your project, goals, timeline..."
                        required
                        rows={5}
                        className={`  custom-scrollbar w-full   px-4 py-3.5 text-white text-sm 3xl:text-lg  placeholder-zinc-600 outline-none transition-all duration-300 resize-none
                        `}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs 2xl:text-[14px] 3xl:text-base mt-1 flex items-center gap-1">
                          <span>⚠</span> {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="mt-2 w-full 3xl:text-2xl bg-[#4CAF4F] hover:bg-[#43A047] disabled:opacity-70 disabled:cursor-not-allowed text-white   font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer border-none shadow-[0_4px_20px_rgba(76,175,79,0.3)] hover:shadow-[0_6px_30px_rgba(76,175,79,0.45)]"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="white"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message{" "}
                        <FaArrowRight size={18} className="3xl:w-7 3xl:h-7" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
