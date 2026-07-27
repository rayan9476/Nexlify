import HeroSection from "../components/sections/HeroSection";
import { lazy, Suspense } from "react";
const ServicesSection = lazy(
  () => import("../components/sections/ServicesSection"),
);
const OurWorksSection = lazy(
  () => import("../components/sections/OurWorksSection"),
);
const TestimonialsSection = lazy(
  () => import("../components/sections/TestimonialsSection"),
);
const InstagramSection = lazy(
  () => import("../components/sections/InstagramSection"),
);
const CTASection = lazy(() => import("../components/sections/CTASection"));
const ContactSection = lazy(
  () => import("../components/sections/ContactSection"),
);
const Footer = lazy(() => import("../components/layout/Footer"));
import Navbar from "../components/layout/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection id="home" />
      <Suspense fallback={null}>
        <ServicesSection id="services" />
        <OurWorksSection id="works" />
        <TestimonialsSection id="testimonials" />
        <InstagramSection id="instagram" />
        <CTASection id="FAQ" />
        <ContactSection id="contact" />
        <Footer id="footer" />
      </Suspense>
    </>
  );
}

export default HomePage;
