import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import PropertyListings from "@/components/PropertyListings";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Setup smooth scrolling
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavLinkClick);
    
    return () => {
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  return (
    <div className="font-sans text-dark antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <PropertyListings />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
