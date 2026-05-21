import React from 'react';
import { Sparkles, Twitter, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d2d2d] text-stone-300 pt-16 pb-12 border-t border-white/5 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => onScrollToSection('home')}
              className="flex items-center space-x-2 text-white focus:outline-none cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-natural-brand flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Creator<span className="text-natural-brand">Flow</span>
              </span>
            </button>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm font-light">
              Membantu konten kreator mempercepat proses pembuatan draf ide, otomatisasi jadwal penerbitan multi-platform, dan meningkatkan jangkauan pemirsa secara holistik & bersahabat.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-stone-100 text-xs font-bold uppercase tracking-wider">Navigasi Utama</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollToSection('home')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Home</button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('about')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Tentang Aplikasi</button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('gallery')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Kisah Kreator</button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('features')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Fitur Utama</button>
              </li>
            </ul>
          </div>

          {/* Core Analytics & Pricing Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-stone-100 text-xs font-bold uppercase tracking-wider">Penawaran & Bantuan</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollToSection('pricing')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Daftar Paket Harga</button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('contact')} className="hover:text-natural-brand block cursor-pointer transition-colors text-stone-400">Dukungan / Kontak</button>
              </li>
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-stone-100 text-xs font-bold uppercase tracking-wider">Ikuti Kami</h5>
            <div className="flex items-center space-x-3.5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-natural-brand hover:text-white transition-colors text-stone-400"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-natural-brand hover:text-white transition-colors text-stone-400"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-natural-brand hover:text-white transition-colors text-stone-400"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-natural-brand hover:text-white transition-colors text-stone-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-stone-450 leading-relaxed font-light">
              Mendukung ekosistem kreator mandiri Indonesia. 🇮🇩
            </div>
          </div>

        </div>

        {/* Lower Attribution Sign-Off */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div>
            © {currentYear} CreatorFlow. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center space-x-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>untuk konten kreator hebat di seluruh dunia.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
