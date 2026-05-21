import React from 'react';
import { motion } from 'motion/react';
import { marketFactors, statsMarketList } from '../data';
import { Users2, Target, Globe, BarChart3, TrendingUp, HelpCircle } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <section id="market" className="py-20 bg-natural-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Peluang Bisnis & Lanskap Industri
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Target Pasar & Sizing CreatorFlow
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Menyelami demografis pengguna dan ukuran pasar yang kami tuju untuk memperbesar jangkauan CreatorFlow sebagai market leader baru.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Market Demographics Column - 6/12 */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 text-natural-dark border-b border-natural-border pb-4">
              <Users2 className="w-5 h-5 text-natural-brand" />
              <h4 className="text-xl font-bold tracking-tight">Karakteristik Target Market</h4>
            </div>
            
            <p className="text-natural-text text-sm font-normal text-left">
              Berikut adalah pemetaan analisis terperinci terhadap segmen pengguna primer yang membutuhkan kesistematisan platform kerja daring CreatorFlow:
            </p>

            {/* Custom Styled responsive table of factors */}
            <div className="overflow-hidden rounded-[2rem] border border-natural-border custom-shadow scrollbar-thin">
              <table className="min-w-full divide-y divide-natural-border text-left">
                <thead className="bg-natural-sec">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-xs font-bold text-natural-dark uppercase tracking-widest w-1/4">
                      Aspek Pasar
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-bold text-natural-dark uppercase tracking-widest">
                      Detail Target
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-natural-border">
                  {marketFactors.map((factor, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-natural-brand/5 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-natural-dark">
                        {factor.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-natural-text font-light leading-relaxed">
                        <strong className="text-natural-dark font-medium block mb-0.5">
                          {factor.details}
                        </strong>
                        <span className="text-xs text-natural-muted">
                          {factor.subDetails}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TAM SAM SOM Statistics Column - 6/12 */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 text-natural-dark border-b border-natural-border pb-4">
              <Target className="w-5 h-5 text-natural-brand" />
              <h4 className="text-xl font-bold tracking-tight">Analisis Ukuran Pasar (Market Sizing)</h4>
            </div>

            <p className="text-natural-text text-sm font-normal text-left">
              Proyeksi peningkatan potensi pengguna berdasarkan pemetaan TAM, SAM, dan target SOM jangka dekat:
            </p>

            {/* Stats list of TAM SAM SOM inside bento-grid cards */}
            <div className="space-y-4">
              {statsMarketList.map((stat, idx) => (
                <motion.div
                  key={stat.tier}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-natural-sec p-6 rounded-[2rem] border border-natural-border custom-shadow flex items-start gap-4 lg:gap-6 hover:border-natural-brand transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-natural-border shadow-xs shrink-0 font-extrabold text-[#78695a] text-sm">
                    {stat.tier}
                  </div>
                  <div className="space-y-1.5 text-left flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-natural-dark truncate">{stat.label}</h5>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-natural-brand/10 text-natural-brand border border-natural-brand/20">
                        {stat.scope}
                      </span>
                    </div>
                    {/* Size value styled grandly */}
                    <div className="text-2xl lg:text-3xl font-black text-natural-brand tracking-tight">
                      {stat.value}
                    </div>
                    <p className="text-xs text-natural-text leading-relaxed font-light">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
