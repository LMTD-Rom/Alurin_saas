'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Workflow, Bell, FileSignature, Database, Zap, BarChart3, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';

const features = [
  {
    id: 'workflow',
    icon: Workflow,
    title: 'Approval Otomatis',
    badge: '+120 proses',
    badgeColor: 'bg-blue-100 text-blue-700',
    mainVal: '24',
    mainLabel: 'Tugas hari ini',
    mainSub: 'Hari ini',
    chips: [
      { label: 'Assigned 8', color: 'bg-blue-100 text-blue-700' },
      { label: 'Selesai 12', color: 'bg-green-bg text-green' }
    ]
  },
  {
    id: 'notif',
    icon: Bell,
    title: 'Notifikasi Realtime',
    badge: 'Push, WA & Email',
    badgeColor: 'bg-purple-100 text-purple-700',
    mainVal: '0 delay',
    mainLabel: 'Update instan ke tim',
    mainSub: 'Global channel',
    chips: [
      { label: 'WhatsApp ✓✓', color: 'bg-green-bg text-green' },
      { label: 'Telegram •', color: 'bg-blue-100 text-blue-600' }
    ]
  },
  {
    id: 'esigned',
    icon: FileSignature,
    title: 'Tanda Tangan Digital',
    badge: 'Legal & Sah',
    badgeColor: 'bg-amber-bg text-amber',
    mainVal: '100%',
    mainLabel: 'Kontrak terverifikasi e-sign',
    mainSub: 'E-meterai ready',
    chips: [
      { label: 'PDF •', color: 'bg-gray-100 text-gray-600' },
      { label: 'Docx ✓', color: 'bg-blue-100 text-blue-600' }
    ]
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Terpusat',
    badge: 'Single source',
    badgeColor: 'bg-blue-100 text-blue-700',
    mainVal: '12K+',
    mainLabel: 'Record tersimpan aman',
    mainSub: 'SQL & NoSQL',
    chips: [
      { label: 'Encrypted', color: 'bg-green-bg text-green' },
      { label: 'Auto Backup', color: 'bg-blue-100 text-blue-600' }
    ]
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation Rules',
    badge: 'Tanpa coding',
    badgeColor: 'bg-orange-100 text-orange-700',
    mainVal: '45+',
    mainLabel: 'Integrasi berjalan otomatis',
    mainSub: 'Trigger builder',
    chips: [
      { label: 'Webhook API', color: 'bg-gray-100 text-gray-600' },
      { label: 'Scheduler ✓', color: 'bg-green-bg text-green' }
    ]
  },
  {
    id: 'insight',
    icon: BarChart3,
    title: 'Laporan & Insight',
    badge: 'Realtime dash',
    badgeColor: 'bg-green-bg text-green',
    mainVal: '98%',
    mainLabel: 'Akurasi pelaporan data',
    mainSub: 'Export instan',
    chips: [
      { label: 'PDF Export', color: 'bg-blue-100 text-blue-600' },
      { label: 'Excel Sync', color: 'bg-green-bg text-green' }
    ]
  }
];

function FeatureCard({ item, isCenter }) {
  return (
    <div
      className={`w-full glass-card rounded-card p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3 shadow-card border border-white pointer-events-auto select-none transition-all duration-300 ${
        isCenter ? 'shadow-[0_16px_36px_rgba(0,0,0,0.18)] ring-2 ring-white/60 bg-white/90' : 'bg-white/70 opacity-70'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white shadow ${isCenter ? 'bg-blue-600' : 'bg-navy-900'}`}>
          <item.icon className="w-4 h-4" />
        </div>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}>
          {item.badge}
        </span>
      </div>
      
      <div>
        <p className="text-[10px] sm:text-[11px] text-gray-500">{item.mainSub}</p>
        <p className="text-[26px] sm:text-[30px] font-bold leading-none text-navy-900 tracking-tight mt-1">{item.mainVal}</p>
        <p className="text-[12px] sm:text-[13px] font-semibold text-navy-900 mt-1">{item.title}</p>
        <p className="text-[11px] text-gray-600 leading-tight mt-0.5 line-clamp-1">{item.mainLabel}</p>
      </div>

      <div className="flex gap-1.5 flex-wrap mt-auto pt-2 border-t border-gray-100">
        {item.chips.map((chip, i) => (
          <span key={i} className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium ${chip.color}`}>
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setIndex((prev) => (prev + 1) % features.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <div 
      className="relative z-10 flex flex-col items-center w-full pb-4 sm:pb-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Carousel Stage */}
      <div 
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center overflow-hidden" 
        style={{ perspective: '1000px' }}
      >
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-blue-600/30 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-blue-600/30 to-transparent z-20 pointer-events-none" />

        {features.map((item, idx) => {
          let offset = idx - index;
          if (offset > features.length / 2) offset -= features.length;
          if (offset < -features.length / 2) offset += features.length;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Compute horizontal shift: centered card is strictly at 0.
          // Side cards shift outward and scale down with slight 3D rotation.
          const xShift = offset * 140; // in px
          const rotateY = offset * -25;
          const scale = isCenter ? 1 : 0.82;
          const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.2;
          const zIndex = 20 - Math.abs(offset);

          return (
            <motion.div
              key={item.id}
              onClick={() => setIndex(idx)}
              className="absolute w-[240px] sm:w-[260px] cursor-pointer will-change-[transform,opacity] transform-gpu"
              initial={false}
              animate={{
                x: xShift,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 160,
                damping: 22,
                mass: 0.8
              }}
            >
              <FeatureCard item={item} isCenter={isCenter} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-3 sm:gap-4 mt-2 z-30">
        <button
          onClick={handlePrev}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-95 border border-white/30"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <div className="flex gap-1.5">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 sm:w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ke fitur ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-95 border border-white/30"
          aria-label="Berikutnya"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}