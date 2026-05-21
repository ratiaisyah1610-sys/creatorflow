import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Trophy } from 'lucide-react';
import dashboardImg from '../assets/images/dashboard_mockup_1779381710101.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradients for startup aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#d4a373]/10 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#e8e2d9]/25 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#d4a373]/10 border border-natural-border text-natural-brand px-3.5 py-1.5 rounded-full text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-natural-brand animate-pulse" />
              <span>Platform SaaS Kreator Terbaik #1</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-natural-dark leading-[1.15]"
            >
              Kelola Konten Digital Lebih Mudah dengan <span className="text-[#d4a373]">CreatorFlow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-natural-text text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Bawa konten digital Anda ke tingkat profesional. Atur ide mentah, jadwalkan posting otomatis di multi-platform, dan analisis performa audiens Anda dalam satu platform cerdas berbasis cloud.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onScrollToSection('pricing')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-base font-bold text-white bg-natural-brand hover:bg-natural-hover transition-all duration-200 cursor-pointer shadow-lg shadow-natural-brand/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Mulai Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onScrollToSection('features')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-base font-bold text-natural-text bg-white border border-natural-border hover:bg-natural-sec transition-all duration-200 cursor-pointer"
              >
                Pelajari Fitur
              </button>
            </motion.div>

            {/* Micro proof statements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-natural-border grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-natural-brand shrink-0" />
                <span className="text-xs text-natural-text font-medium text-left">Set-up Mudah (Aman & Terenkripsi)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-natural-brand shrink-0" />
                <span className="text-xs text-natural-text font-medium text-left">Dibuat Berbasis Masukan Kreator</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Dashboard Column */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] p-2 bg-gradient-to-tr from-natural-brand/5 to-natural-hover/5 border border-natural-border shadow-2xl overflow-hidden group"
            >
              {/* Glass reflection header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/45 border-b border-natural-border backdrop-blur-sm px-4 flex items-center justify-between pointer-events-none z-10">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-stone-300" />
                  <span className="w-3 h-3 rounded-full bg-stone-200" />
                  <span className="w-3 h-3 rounded-full bg-natural-brand" />
                </div>
                <div className="text-[10px] text-natural-muted font-mono tracking-widest uppercase">creatorflow.io/workspace</div>
                <div className="w-6" />
              </div>

              {/* The generated image with absolute protection to render properly */}
              <img
                src={dashboardImg}
                alt="CreatorFlow Workspace Dashboard"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-[1.5rem] object-cover shadow-sm select-none pt-10 group-hover:scale-[1.01] transition-transform duration-700"
              />

              {/* Floating aesthetic stats component */}
              <div className="absolute -bottom-4 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-natural-border flex items-center space-x-3 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-natural-brand opacity-75 animate-duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-natural-brand"></span>
                </span>
                <div>
                  <div className="text-[10px] text-natural-muted uppercase font-mono tracking-wider">Status Post</div>
                  <div className="text-sm font-bold text-natural-dark">14 Konten Berhasil Terjadwal</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
