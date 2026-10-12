'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Check, TrendingUp } from 'lucide-react';

export default function InteractiveChart() {
  const [activeTab, setActiveTab] = useState('mingguan');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const dataSets = {
    mingguan: [
      { label: 'Sen', val: 'Rp4.2M', height: 45 },
      { label: 'Sel', val: 'Rp6.8M', height: 65 },
      { label: 'Rab', val: 'Rp5.1M', height: 50 },
      { label: 'Kam', val: 'Rp8.9M', height: 85 },
      { label: 'Jum', val: 'Rp7.3M', height: 70 },
      { label: 'Sab', val: 'Rp9.5M', height: 95 },
      { label: 'Min', val: 'Rp6.0M', height: 60 },
    ],
    bulanan: [
      { label: 'M1', val: 'Rp22M', height: 55 },
      { label: 'M2', val: 'Rp35M', height: 80 },
      { label: 'M3', val: 'Rp28M', height: 65 },
      { label: 'M4', val: 'Rp42M', height: 95 },
    ]
  };

  const currentData = dataSets[activeTab];

  return (
    <div className="glass-card rounded-card p-6 shadow-card relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-navy-900">Performa Penjualan</p>
            <div className="flex items-center gap-1.5 text-[11px] text-green font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +14.8% dari target
            </div>
          </div>
        </div>

        {/* Timeframe selector */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-full text-[11px] font-medium">
          <button
            onClick={() => setActiveTab('mingguan')}
            className={`px-3 py-1 rounded-full transition-all ${activeTab === 'mingguan' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
          >
            7 Hari
          </button>
          <button
            onClick={() => setActiveTab('bulanan')}
            className={`px-3 py-1 rounded-full transition-all ${activeTab === 'bulanan' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
          >
            Bulan Ini
          </button>
        </div>
      </div>

      {/* Main Interactive Chart area */}
      <div className="bg-card-blue rounded-2xl p-5 mb-5 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />

        {/* Dynamic Tooltip */}
        <div className="h-6 mb-2 flex items-center justify-between text-[12px]">
          <span className="text-white/70">
            {hoveredIdx !== null ? `Data ${currentData[hoveredIdx].label}` : 'Arahkan kursor pada batang'}
          </span>
          <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded-md">
            {hoveredIdx !== null ? currentData[hoveredIdx].val : 'Pilih Hari'}
          </span>
        </div>

        {/* Bars Container */}
        <div className="flex items-end gap-2 lg:gap-3 h-[120px] pt-4">
          {currentData.map((d, i) => (
            <div
              key={d.label}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${d.height}%` }}
                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                className={`w-full rounded-t-lg transition-all duration-200 ${
                  hoveredIdx === i ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-y-105' : 'bg-white/80 group-hover:bg-white'
                }`}
              />
              <span className="text-[10px] text-white/70 mt-2 font-medium">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Export status */}
      <div className="flex items-center gap-2 bg-green-bg border border-green/20 rounded-full px-4 py-2.5">
        <span className="w-6 h-6 rounded-full bg-green flex items-center justify-center text-white shrink-0">
          <Check className="w-3.5 h-3.5" />
        </span>
        <span className="text-[12px] font-medium text-green">Sinkronisasi Realtime Aktif</span>
        <span className="ml-auto text-[11px] text-gray-500 font-medium">99.9% Uptime</span>
      </div>
    </div>
  );
}