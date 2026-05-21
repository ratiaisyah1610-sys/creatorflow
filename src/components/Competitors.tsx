import React from 'react';
import { motion } from 'motion/react';
import { competitorComparisonData } from '../data';
import { Check, Flame, Trophy, Scale } from 'lucide-react';

export default function Competitors() {
  return (
    <section id="competitors" className="py-20 bg-natural-sec border-y border-natural-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-natural-brand">
            Analisis Komparatif
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-natural-dark">
            Unggul dalam Mutu, Ramah di Kantong
          </h3>
          <p className="text-natural-text text-lg leading-relaxed font-light">
            Bandingkan keunggulan layanan, fungsionalitas cerdas, dan fleksibilitas CreatorFlow dengan kompetitor media sosial global lainnya.
          </p>
        </div>

        {/* Responsive Table Wrapper with startup accent board */}
        <div className="overflow-x-auto rounded-[2rem] border border-natural-border bg-white custom-shadow scrollbar-thin">
          <table className="min-w-full divide-y divide-natural-border text-left">
            <thead className="bg-[#fcf8f4]">
              <tr className="divide-x divide-natural-border">
                <th scope="col" className="px-6 py-5 text-sm font-bold text-natural-dark w-2/5">
                  Fungsionalitas Utama
                </th>
                
                {/* CreatorFlow highlighted header */}
                <th scope="col" className="px-6 py-5 bg-natural-brand/10 text-sm font-black text-natural-dark text-center relative w-1/5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-natural-brand" />
                  <div className="flex items-center justify-center space-x-1">
                    <Flame className="w-4 h-4 text-natural-brand animate-pulse fill-natural-brand/10" />
                    <span className="text-natural-dark font-extrabold">CreatorFlow</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider block font-bold text-natural-brand mt-0.5">Satu untuk Semua</span>
                </th>

                <th scope="col" className="px-6 py-5 text-sm font-bold text-natural-muted text-center w-1/5">
                  Hootsuite
                </th>
                <th scope="col" className="px-6 py-5 text-sm font-bold text-natural-muted text-center w-1/5">
                  Buffer
                </th>
                <th scope="col" className="px-6 py-5 text-sm font-bold text-natural-muted text-center w-1/5">
                  Later
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-natural-border">
              {competitorComparisonData.map((row, idx) => (
                <tr key={idx} className="divide-x divide-natural-border hover:bg-natural-sec transition-colors">
                  {/* Feature description name */}
                  <td className="px-6 py-4.5 text-sm font-semibold text-natural-dark">
                    {row.featureName}
                  </td>

                  {/* CreatorFlow Column highly highlighted */}
                  <td className="px-6 py-4.5 bg-natural-brand/5 text-center text-sm font-bold text-natural-dark border-x border-natural-border">
                    <span className="inline-flex items-center px-3 py-1 bg-natural-brand/15 text-natural-brand rounded-full border border-natural-brand/20">
                      <Check className="w-3.5 h-3.5 mr-1" />
                      {row.creatorFlow}
                    </span>
                  </td>

                  {/* Competitors column */}
                  <td className="px-6 py-4.5 text-center text-sm font-light text-natural-muted">
                    {row.hootsuite}
                  </td>
                  <td className="px-6 py-4.5 text-center text-sm font-light text-natural-muted">
                    {row.buffer}
                  </td>
                  <td className="px-6 py-4.5 text-center text-sm font-light text-natural-muted">
                    {row.later}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small comparative summary footer */}
        <div className="mt-8 text-center text-natural-muted text-xs font-light flex items-center justify-center gap-2">
          <Scale className="w-4 h-4 text-natural-muted shrink-0" />
          <span>Informasi per Mei 2026. CreatorFlow terbukti menghemat hingga 70% pengeluaran langganan kreator lokal.</span>
        </div>

      </div>
    </section>
  );
}
