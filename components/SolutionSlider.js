'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { SOLUTIONS_TABS } from '@/lib/content';
import * as icons from 'lucide-react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function SolutionSlider() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    // small delay to ensure DOM is fully painted
    setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const getTheme = (id) => {
    switch(id) {
      case 'umkm': return {
        accent: 'bg-amber-500',
        soft: 'bg-amber-50',
        border: 'border-amber-100',
        text: 'text-amber-700',
        glow: 'bg-amber-400/20'
      };
      case 'retail': return {
        accent: 'bg-sky-500',
        soft: 'bg-sky-50',
        border: 'border-sky-100',
        text: 'text-sky-700',
        glow: 'bg-sky-400/20'
      };
      case 'jasa': return {
        accent: 'bg-violet-500',
        soft: 'bg-violet-50',
        border: 'border-violet-100',
        text: 'text-violet-700',
        glow: 'bg-violet-400/20'
      };
      case 'laundry': return {
        accent: 'bg-cyan-500',
        soft: 'bg-cyan-50',
        border: 'border-cyan-100',
        text: 'text-cyan-700',
        glow: 'bg-cyan-400/20'
      };
      case 'distributor': return {
        accent: 'bg-emerald-500',
        soft: 'bg-emerald-50',
        border: 'border-emerald-100',
        text: 'text-emerald-700',
        glow: 'bg-emerald-400/20'
      };
      case 'perusahaan': return {
        accent: 'bg-blue-600',
        soft: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-700',
        glow: 'bg-blue-500/20'
      };
      default: return {
        accent: 'bg-gray-800',
        soft: 'bg-gray-50',
        border: 'border-gray-100',
        text: 'text-gray-700',
        glow: 'bg-gray-400/20'
      };
    }
  };

  const slide = (direction) => {
    const current = x.get();
    const step = 420;
    const target = direction === 'left' ? current + step : current - step;
    const clamped = Math.max(-width, Math.min(0, target));
    animate(x, clamped, { type: 'spring', damping: 25, stiffness: 200 });
  };

  return (
    <div className="w-full relative mt-8 overflow-hidden" ref={containerRef}>
      {/* Side gradient blur overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-32 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-32 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

      {/* Floating navigation controls */}
      <div className="flex justify-end gap-2 px-6 lg:px-12 mb-4">
        <button
          onClick={() => slide('left')}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Geser ke kiri"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => slide('right')}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Geser ke kanan"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Drag & Carousel container */}
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.15}
        style={{ x }}
        className="flex items-stretch gap-4 lg:gap-6 px-6 lg:px-12 py-2 w-max cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
      >
        {SOLUTIONS_TABS.map((tab) => {
          const Icon = icons[tab.icon];
          const theme = getTheme(tab.id);
          return (
            <div
              key={tab.id}
              className={`shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] bg-white border ${theme.border} rounded-[24px] p-5 sm:p-7 flex flex-col shadow-card hover:shadow-strong transition-all pointer-events-auto min-h-[460px] relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${theme.glow} blur-2xl md:blur-3xl -mr-10 -mt-10 pointer-events-none transition-transform group-hover:scale-125 transform-gpu`}></div>
              
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${theme.soft} ${theme.text} flex items-center justify-center mb-4 sm:mb-5 relative z-10 shrink-0`}>
                {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-navy-900 mb-2 relative z-10">{tab.label}</h3>
              <p className="text-[12px] sm:text-[13px] text-gray-600 mb-5 leading-relaxed flex-1 relative z-10">{tab.desc}</p>
              
              {/* Alur Kerja Terstruktur & Konsisten (Vertical Timeline Step) */}
              <div className={`${theme.soft} rounded-xl p-3.5 sm:p-4 mb-5 border ${theme.border} relative z-10`}>
                <span className={`text-[11px] font-bold ${theme.text} block mb-3 uppercase tracking-wider`}>
                  Tahapan Alur Kerja:
                </span>
                <div className="flex flex-col gap-2 relative">
                  {/* Subtle vertical connector line */}
                  <div className={`absolute left-[11px] top-2.5 bottom-2.5 w-px ${theme.border} bg-gray-300/60 z-0`}></div>
                  
                  {tab.steps.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2.5 relative z-10">
                      <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border ${theme.border} flex items-center justify-center text-[10px] font-bold ${theme.text} shadow-sm shrink-0`}>
                        {idx + 1}
                      </span>
                      <span className="text-[12px] sm:text-[13px] font-medium text-navy-900 leading-tight">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto relative z-10 pt-2 border-t border-gray-100">
                <span className="text-[11px] sm:text-[12px] font-bold text-navy-900">{tab.stats}</span>
                <Link href={`/solusi`} className={`text-[11px] sm:text-[12px] font-semibold px-3.5 sm:px-4 py-2 rounded-full ${theme.accent} text-white hover:opacity-90 transition-opacity shadow-sm`}>
                  Detail Solusi
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
      
      <p className="text-center text-[12px] text-gray-400 mt-6 flex items-center justify-center gap-1.5">
        <span>←</span> Geser / Drag untuk melihat industri lainnya <span>→</span>
      </p>
    </div>
  );
}