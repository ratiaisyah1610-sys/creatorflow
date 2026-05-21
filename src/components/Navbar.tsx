import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSection, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Tentang', id: 'about' },
    { label: 'Galeri', id: 'gallery' },
    { label: 'Fitur', id: 'features' },
    { label: 'Analisis Pasar', id: 'market' },
    { label: 'Kompetitor', id: 'competitors' },
    { label: 'Harga', id: 'pricing' },
    { label: 'Kontak', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-stone-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => onScrollToSection('home')}
            className="flex items-center space-x-2 focus:outline-none cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-natural-brand flex items-center justify-center shadow-md shadow-natural-brand/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-natural-dark">
              Creator<span className="text-natural-brand">Flow</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-natural-brand bg-natural-brand/10'
                    : 'text-natural-text hover:text-natural-brand hover:bg-natural-sec'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => onScrollToSection('pricing')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-natural-brand hover:bg-natural-hover rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Coba Gratis
              <Send className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 hover:text-stone-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-xl py-3 px-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onScrollToSection(item.id);
                setIsOpen(false);
              }}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-natural-brand bg-natural-brand/10'
                  : 'text-natural-text hover:text-natural-brand hover:bg-natural-sec'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 pb-1 border-t border-stone-100 px-4">
            <button
              onClick={() => {
                onScrollToSection('pricing');
                setIsOpen(false);
              }}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-white bg-natural-brand hover:bg-natural-hover rounded-full text-center cursor-pointer shadow-sm transition-all"
            >
              Mulai Uji Coba Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
