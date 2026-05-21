import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth click scroll handler with top offset buffer
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const navbarOffset = 70; // buffer height for sticky navbar
      window.scrollTo({
        top: offsetTop - navbarOffset,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy effect to highlight navigation tabs dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'features', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 220; // safe threshold trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col bg-[#fdfaf6] selection:bg-orange-100 selection:text-orange-950 antialiased overflow-hidden">
      {/* Sticky Top Navbar */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Tentang CreatorFlow */}
        <About />

        {/* Galeri Konten Kreator */}
        <Gallery />

        {/* Fitur Utama */}
        <Features />

        {/* Pricing List Packages */}
        <Pricing onScrollToSection={handleScrollToSection} />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Modern startup footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}

