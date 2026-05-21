import React, { useState } from 'react';
import { motion } from 'motion/react';
import { pricingPlans } from '../data';
import { Check, Info, ShieldCheck, Flame } from 'lucide-react';

interface PricingProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Pricing({ onScrollToSection }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  // Compute discount (20% off for yearly)
  const getPrice = (monthlyPrice: number) => {
    if (isYearly) {
      // Annualized monthly rate (round to closest thousand)
      const discountedPrice = Math.round((monthlyPrice * 0.8) / 1000) * 1000;
      return discountedPrice;
    }
    return monthlyPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="pricing" className="py-20 bg-natural-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Penawaran Adil & Transparan
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Pilih Paket Produktivitas Anda
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Mulai uji coba gratis selama 7 hari tanpa syarat kartu kredit. Batalkan kapan pun Anda berubah pikiran.
          </p>
        </div>

        {/* Billing Toggle Selector */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <span className={`text-sm font-semibold transition-colors duration-200 ${!isYearly ? 'text-natural-dark' : 'text-natural-muted'}`}>
            Bulanan
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 flex items-center bg-natural-brand rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Billing Frequency"
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-semibold transition-colors duration-200 ${isYearly ? 'text-natural-dark' : 'text-natural-muted'}`}>
              Tahunan
            </span>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-natural-brand/10 text-natural-brand border border-natural-brand/20 animate-pulse">
              Hebat Hemat 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            const hasPopularBorder = plan.isPopular;
            const computedPrice = getPrice(plan.price);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 border ${
                  hasPopularBorder
                    ? 'border-natural-brand bg-natural-sec custom-shadow-lg ring-1 ring-natural-brand scale-102 z-10'
                    : 'border-natural-border bg-white custom-shadow hover:border-natural-brand/40'
                }`}
              >
                {/* Popularity ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-natural-brand text-white text-[11px] font-extrabold tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center space-x-1 uppercase">
                    <Flame className="w-3.5 h-3.5 fill-white/20" />
                    <span>Pilihan Terpopuler</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-extrabold text-natural-dark">{plan.name}</h4>
                  </div>
                  <p className="text-xs text-natural-muted font-light leading-relaxed min-h-[48px] text-left">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="pt-2 border-b border-natural-border pb-6 text-left">
                    <div className="flex items-baseline">
                      <span className="text-3xl lg:text-4xl font-black text-natural-dark tracking-tight">
                        {formatPrice(computedPrice)}
                      </span>
                      <span className="text-natural-muted text-xs ml-1 font-medium font-mono">
                        / {isYearly ? 'bulan (tahunan)' : 'bulan'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-[10px] text-natural-brand font-medium mt-1">
                        * Ditagih tahunan (Total {formatPrice(computedPrice * 12)} / tahun)
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-4 text-left">
                    <span className="text-xs uppercase tracking-wider font-bold text-natural-muted">Termasuk fitur:</span>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-natural-text font-normal">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mr-2.5 mt-0.5 ${
                            plan.isPopular ? 'bg-natural-brand/20 text-natural-brand' : 'bg-natural-sec text-natural-muted'
                          }`}>
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onScrollToSection('contact')}
                    className={`w-full py-3.5 rounded-full text-sm font-bold tracking-wide cursor-pointer transition-all duration-200 ${
                      plan.isPopular
                        ? 'bg-natural-brand hover:bg-natural-hover text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-natural-sec hover:bg-natural-brand/10 text-natural-dark border border-natural-border'
                    }`}
                  >
                    Coba Gratis 7 Hari
                  </button>
                  <div className="text-[10px] text-natural-muted text-center mt-3 flex items-center justify-center gap-1.5 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-natural-muted" />
                    <span>Enkripsi 256-Bit SSL Proteksi</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
