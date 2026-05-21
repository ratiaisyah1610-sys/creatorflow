import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, MonitorPlay, Heart } from 'lucide-react';
import femaleCreatorImg from '../assets/images/female_creator_1779381729686.png';
import maleCreatorImg from '../assets/images/male_creator_1779381748218.png';

export default function Gallery() {
  const creators = [
    {
      img: femaleCreatorImg,
      alt: 'Konten kreator perempuan sedang mengedit video di laptop',
      title: 'Aisha Rahmawati',
      role: 'Video Editor & Tech Influencer',
      badge: (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-natural-dark border border-natural-border backdrop-blur-xs">
          <Video className="w-3.5 h-3.5 mr-1 text-natural-brand" /> Editing Video
        </span>
      ),
      followers: '124K+ Subscriber',
      statLine: '“Penjadwalan otomatis CreatorFlow menghemat waktu saya dari posting manual setiap malam.”'
    },
    {
      img: maleCreatorImg,
      alt: 'Konten kreator laki-laki sedang membuat konten menggunakan kamera dan microphone',
      title: 'Budi Santoso',
      role: 'Podcaster & Edukator Finansial',
      badge: (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-natural-dark border border-natural-border backdrop-blur-xs">
          <Camera className="w-3.5 h-3.5 mr-1 text-natural-brand" /> Rekaman Podcast
        </span>
      ),
      followers: '85K+ Pendengar Aktif',
      statLine: '“Saya bisa dengan mudah mengirimkan draf skrip ke editor saya untuk direview di satu workspace cloud.”'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-natural-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Dibalik Layar Kreativitas
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Kisah Sukses Komunitas CreatorFlow
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Temui para profesional kreatif yang telah merevolusi cara mereka berkarya. CreatorFlow membantu mendisiplinkan alur pembuatan karya visual, audio, maupun video, apa pun media sosial pilihan Anda.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {creators.map((creator, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
              className="bg-natural-sec rounded-[2.5rem] border border-natural-border pb-6 overflow-hidden custom-shadow custom-shadow-hover flex flex-col group justify-between"
            >
              {/* Image Frame with Hover Zoom Effect */}
              <div className="relative overflow-hidden aspect-4/3 max-h-[360px]">
                <img
                  src={creator.img}
                  alt={creator.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-750 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-10">
                  {creator.badge}
                </div>
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-natural-dark/75 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Floating identity on overlay */}
                <div className="absolute bottom-4 left-6 right-6 text-white text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4a373]">Kreator Berdaya</span>
                  <h4 className="text-xl font-bold tracking-tight text-white">{creator.title}</h4>
                  <p className="text-xs text-stone-200 font-light">{creator.role}</p>
                </div>
              </div>

              {/* Card Body Information */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <blockquote className="text-natural-text text-sm md:text-base italic leading-relaxed font-normal text-left relative pl-4 border-l-2 border-natural-brand">
                  {creator.statLine}
                </blockquote>
                
                <div className="pt-4 border-t border-natural-border flex items-center justify-between text-xs text-natural-muted font-medium">
                  <span className="flex items-center text-natural-brand font-semibold">
                    <Heart className="w-4 h-4 mr-1 text-natural-brand animate-pulse fill-natural-brand" />
                    {creator.followers}
                  </span>
                  <span className="text-natural-muted font-normal">Verifikasi Pengguna ✔</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
