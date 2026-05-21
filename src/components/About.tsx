import React from 'react';
import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export default function About() {
  const steps = [
    {
      icon: <Cloud className="w-6 h-6 text-natural-brand" />,
      title: 'Solusi Berbasis Cloud',
      description: 'Keamanan data tingkat tinggi yang dapat diakses dari web browser, tablet, maupun ponsel pintar Anda secara instan kapan pun dan di mana pun.',
    },
    {
      icon: <Zap className="w-6 h-6 text-natural-brand" />,
      title: 'Efisiensi Waktu Kerja',
      description: 'Hemat hingga 15+ jam per minggu dengan mengotomatiskan penerbitan draf konten Anda ke multi-platform jejaring sosial sekaligus.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-natural-brand" />,
      title: 'Kolaborasi Tanpa Batas',
      description: 'Beri peran khusus pada editor video, penulis skrip, atau asisten visual untuk bekerja secara sinergis dalam satu kanvas bersama.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-natural-brand" />,
      title: 'Sinkronisasi Otomatis',
      description: 'Setiap ide tulisan, kalender revisi, dan feedback direkam serta disinkronisasi dalam hitungan milidetik secara aman.',
    }
  ];

  return (
    <section id="about" className="py-20 bg-natural-sec border-y border-natural-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Platform Terpadu Konten Kreator
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Mengapa Memilih CreatorFlow?
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Kami memahami bahwa membuat konten membutuhkan lebih dari sekadar kamera. CreatorFlow dikembangkan sebagai aplikasi berbasis cloud untuk membantu konten kreator mengatur ide kreatif, mempercepat penerbitan jadwal, menganalisis performa, dan merajut kolaborasi tim dalam satu platform yang estetik dan efisien.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-natural-border custom-shadow flex flex-col sm:flex-row items-start gap-5 hover:border-natural-brand/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-natural-brand/10 flex items-center justify-center shrink-0 border border-natural-brand/25">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-natural-dark hover:text-natural-brand transition-colors">
                  {step.title}
                </h4>
                <p className="text-natural-text text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra brand statement */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <div className="p-4 rounded-xl bg-natural-brand/10 border border-natural-border text-sm text-natural-text">
            💬 <strong className="text-natural-dark">Fun Fact:</strong> Lebih dari <span className="font-bold text-natural-brand">4.500+ kreator aktif</span> di seluruh Asia Tenggara mengandalkan workflow CreatorFlow untuk terus konsisten berkarya.
          </div>
        </div>

      </div>
    </section>
  );
}
