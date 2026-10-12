'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FileText, Clock, UserCheck, PackageCheck, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

function InteractiveCard({ data }) {
  const [btnState, setBtnState] = useState('idle');

  const handleAction = () => {
    setBtnState('submitting');
    setTimeout(() => setBtnState('done'), 1000);
  };

  return (
    <div className="shrink-0 w-[290px] sm:w-[350px] lg:w-[380px] glass-card rounded-card p-6 shadow-card flex flex-col justify-between h-[360px] bg-white/80 backdrop-blur-xl border-white hover:shadow-strong transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <data.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-navy-900">{data.label}</p>
              {btnState === 'done' ? (
                <p className="text-[11px] text-green font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse"></span> {data.statusDone}
                </p>
              ) : (
                <p className="text-[11px] text-gray-500">Isi formulir</p>
              )}
            </div>
          </div>
          <span className="text-[13px] font-bold text-navy-900 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
            {data.amount}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {data.fields.map((f, i) => (
            <div 
              key={i} 
              className={`bg-blue-50/50 border border-[#E6ECF8] rounded-xl px-3 py-2 ${f.span === 2 ? 'col-span-2' : ''}`}
            >
              <p className="text-[10px] text-gray-500 mb-0.5">{f.label}</p>
              {f.isBadge ? (
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full mt-0.5 inline-block ${
                  f.badgeType === 'amber' ? 'bg-amber-bg text-amber border border-amber/20' :
                  f.badgeType === 'red' ? 'bg-red-bg text-red border border-red/20' :
                  f.badgeType === 'green' ? 'bg-green-bg text-green border border-green/20' : 'bg-gray-200 text-gray-700'
                }`}>{f.val}</span>
              ) : (
                <p className="text-[12px] font-medium text-navy-900 truncate">{f.val}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={handleAction}
        disabled={btnState !== 'idle'}
        className={`w-full h-11 rounded-field text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 select-none ${
          btnState === 'idle' ? 'bg-navy-900 text-white shadow-md hover:bg-black active:scale-[0.98]' :
          btnState === 'submitting' ? 'bg-blue-100 text-blue-600' :
          'bg-green-bg text-green border border-green/20 pointer-events-none'
        }`}
      >
        {btnState === 'idle' && data.btnText}
        {btnState === 'submitting' && (
          <>
            <span className="w-4 h-4 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></span>
            Memproses...
          </>
        )}
        {btnState === 'done' && (
          <>
            <UserCheck className="w-4 h-4" /> {data.btnDone}
          </>
        )}
      </button>
    </div>
  );
}

export default function FeatureCardDeck() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  const deck = [
    {
      id: 'finance',
      label: 'Pengajuan Pembelian',
      icon: FileText,
      amount: 'Rp3.050.000',
      fields: [
        { label: 'Pemohon', val: 'Rina Pratama' },
        { label: 'Departemen', val: 'Marketing' },
        { label: 'Keperluan', val: 'Pembelian ATK & Event', span: 2 },
        { label: 'Prioritas', val: 'Tinggi', isBadge: true, badgeType: 'amber' },
      ],
      btnText: 'Ajukan Persetujuan',
      btnDone: 'Persetujuan Dikirim',
      statusDone: 'Menunggu Manager',
    },
    {
      id: 'hr',
      label: 'Pengajuan Cuti Tim',
      icon: Briefcase,
      amount: '3 Hari',
      fields: [
        { label: 'Karyawan', val: 'Andi Susanto' },
        { label: 'Sisa Cuti', val: '12 Hari' },
        { label: 'Tanggal', val: '15 - 18 Okt 2026', span: 2 },
        { label: 'Delegasi', val: 'Sari (Marketing)' },
      ],
      btnText: 'Kirim Pengajuan Cuti',
      btnDone: 'Cuti Diajukan',
      statusDone: 'Menunggu HRD',
    },
    {
      id: 'ops',
      label: 'Tiket Masalah IT',
      icon: Clock,
      amount: 'Urgensi',
      fields: [
        { label: 'Pelapor', val: 'Divisi Sales' },
        { label: 'Kendala', val: 'CRM Terblokir' },
        { label: 'Deskripsi', val: 'Tidak bisa login pagi ini', span: 2 },
        { label: 'SLA', val: '2 Jam', isBadge: true, badgeType: 'red' },
      ],
      btnText: 'Ambil Tiket',
      btnDone: 'Tiket Diambil',
      statusDone: 'In Progress',
    },
    {
      id: 'logistic',
      label: 'Penerimaan Barang',
      icon: PackageCheck,
      amount: '200 Box',
      fields: [
        { label: 'Vendor', val: 'PT Surya Supply' },
        { label: 'PO Number', val: '#PO-2026-901' },
        { label: 'Kondisi Fisik', val: 'Baik & Tersegel', span: 2 },
        { label: 'Verifikasi', val: 'Sesuai QC', isBadge: true, badgeType: 'green' },
      ],
      btnText: 'Verifikasi Barang',
      btnDone: 'Barang Diterima',
      statusDone: 'Masuk Gudang',
    }
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const slide = (direction) => {
    const current = x.get();
    const step = 320;
    const target = direction === 'left' ? current + step : current - step;
    const clamped = Math.max(-width, Math.min(0, target));
    animate(x, clamped, { type: 'spring', damping: 25, stiffness: 200 });
  };

  return (
    <div className="w-full relative mt-6 mb-8 overflow-hidden" ref={containerRef}>
      {/* Side gradient blur overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-20 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-20 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

      {/* Floating navigation controls */}
      <div className="flex justify-end gap-2 px-6 lg:px-12 mb-3">
        <button
          onClick={() => slide('left')}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Geser ke kiri"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => slide('right')}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Geser ke kanan"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Drag & Carousel container */}
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.15}
        style={{ x }}
        className="flex gap-4 lg:gap-6 px-6 lg:px-12 py-2 w-max cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
      >
        {deck.map((item) => (
          <InteractiveCard key={item.id} data={item} />
        ))}
      </motion.div>
      
      <p className="text-center text-[12px] text-gray-400 mt-4 flex items-center justify-center gap-1.5">
        <span>←</span> Geser / Drag untuk mencoba workflow lain <span>→</span>
      </p>
    </div>
  );
}