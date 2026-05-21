import React from 'react';
import { motion } from 'motion/react';
import { featuresList } from '../data';
import * as Icons from 'lucide-react';

export default function Features() {
  // A dynamic helper to render Lucide Component
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className="w-6 h-6 text-natural-muted" />;
    return <IconComponent className="w-6 h-6 text-natural-brand" />;
  };

  return (
    <section id="features" className="py-20 bg-natural-sec border-t border-natural-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Kelebihan Eksklusif
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Fitur Cerdas untuk Efisiensi Anda
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            CreatorFlow dikonstruksi secara modular untuk menyelesaikan kendala-kendala harian pembuatan draf bagi konten kreator profesional.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, id) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-natural-border custom-shadow custom-shadow-hover flex flex-col items-start space-y-4"
            >
              {/* Icon Capsule */}
              <div className="w-12 h-12 rounded-xl bg-natural-brand/10 border border-natural-brand/25 flex items-center justify-center shadow-xs">
                {renderIcon(feature.iconName)}
              </div>

              {/* Text Fields */}
              <div className="space-y-2 text-left">
                <h4 className="text-lg font-bold text-natural-dark hover:text-natural-brand transition-colors">
                  {feature.title}
                </h4>
                <p className="text-natural-text text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
