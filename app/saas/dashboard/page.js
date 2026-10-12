'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ShoppingCart, FileText, CheckCircle2, 
  ArrowUpRight, Clock, FileSignature
} from 'lucide-react';

const CHART_SETS = {
  minggu: [
    { label: 'Sen', h: 42, v: 168 },
    { label: 'Sel', h: 68, v: 272 },
    { label: 'Rab', h: 51, v: 204 },
    { label: 'Kam', h: 89, v: 356 },
    { label: 'Jum', h: 64, v: 256 },
    { label: 'Sab', h: 77, v: 308 },
    { label: 'Min', h: 55, v: 220 },
  ],
  bulan: [
    { label: 'Mg 1', h: 55, v: 880 },
    { label: 'Mg 2', h: 80, v: 1280 },
    { label: 'Mg 3', h: 66, v: 1056 },
    { label: 'Mg 4', h: 95, v: 1520 },
  ],
};

export default function SaasDashboard() {
  const [user, setUser] = useState(null);
  const [chartRange, setChartRange] = useState('minggu');

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Pesanan #ORD-0091 dibuat', user: 'Rina (Staff)', time: '10 menit lalu', status: 'new' },
    { id: 2, action: 'Invoice #INV-204 dibayar', user: 'System', time: '1 jam lalu', status: 'completed' },
    { id: 3, action: 'Purchase Request menunggu approval', user: 'Budi (Manager)', time: '2 jam lalu', status: 'pending' },
    { id: 4, action: 'Data pelanggan PT Maju diperbarui', user: 'Siti (Admin)', time: 'Kemarin', status: 'info' },
  ]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('alurin_user')));
  }, []);

  if (!user) return null;

  const stats = [
    { label: 'Total Pesanan', value: '1,284', trend: '+12%', icon: ShoppingCart, color: 'bg-blue-50 text-blue-600' },
    { label: 'Pelanggan Aktif', value: '842', trend: '+5%', icon: Users, color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Dokumen Menunggu', value: '24', trend: 'Penting', icon: FileSignature, color: 'bg-amber-50 text-amber-600' },
    { label: 'Tugas Selesai', value: '458', trend: '+18%', icon: CheckCircle2, color: 'bg-green-50 text-green-600' },
  ];

  const loadMore = () => {
    setRecentActivity(prev => [
      ...prev,
      { id: prev.length + 1, action: 'Dokumen kontrak disetujui', user: 'HRD', time: 'Kemarin', status: 'completed' },
      { id: prev.length + 2, action: 'Tagihan internet dibayar', user: 'Finance', time: '2 hari lalu', status: 'completed' }
    ]);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Selamat datang, {user.name.split(' ')[0]}! 👋</h2>
          <p className="text-sm text-gray-500 mt-1">
            Ini adalah tampilan simulasi dashboard untuk role <strong>{user.role}</strong> di sektor <strong>{user.industry}</strong>.
          </p>
        </div>
        <button 
          onClick={() => {
            const el = document.getElementById('dash-chart');
            if(el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow hover:bg-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Lihat Grafik
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-[11px] font-bold px-2 py-1 rounded-md ${
                stat.trend.includes('+') ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
              }`}>
                {stat.trend}
              </span>
            </div>
            <span className="text-gray-500 text-xs font-medium">{stat.label}</span>
            <span className="text-2xl font-bold text-navy-900 mt-1">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart / Workflow Area */}
        <div id="dash-chart" className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
            <div>
              <h3 className="font-bold text-navy-900 text-base">Alur Kerja (Workflow) Berjalan</h3>
              <p className="text-xs text-gray-500 mt-0.5">Ringkasan status operasional {chartRange === 'minggu' ? '7 hari terakhir' : 'bulan ini'}</p>
            </div>
            <div className="flex gap-1 bg-gray-100 p-1 rounded-full text-[11px] font-medium">
              <button
                onClick={() => setChartRange('minggu')}
                className={`px-3 py-1 rounded-full transition-all ${chartRange === 'minggu' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
              >
                7 Hari
              </button>
              <button
                onClick={() => setChartRange('bulan')}
                className={`px-3 py-1 rounded-full transition-all ${chartRange === 'bulan' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
              >
                Bulan Ini
              </button>
            </div>
          </div>
          
          <div className="flex items-end gap-2 sm:gap-4 h-56 pt-4">
            {CHART_SETS[chartRange].map((bar, i) => (
              <div key={bar.label} className="w-full flex flex-col items-center gap-2 group" style={{ height: '100%' }}>
                <div className="w-full flex-1 bg-gray-50 rounded-t-lg relative flex items-end min-h-0">
                  <motion.div 
                    key={`${chartRange}-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${bar.h}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 + i * 0.05 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg group-hover:from-blue-600 group-hover:to-blue-500 transition-colors relative"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-900 text-white text-[10px] px-2 py-1 rounded shadow pointer-events-none transition-opacity whitespace-nowrap z-10">
                      {bar.v} proses
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">{bar.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs">
            <span className="text-gray-500">Total proses berjalan</span>
            <span className="font-bold text-navy-900">
              {CHART_SETS[chartRange].reduce((sum, b) => sum + b.v, 0).toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-navy-900 text-base">Aktivitas Terkini</h3>
            <span onClick={loadMore} className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">Lihat Semua</span>
          </div>

          <div className="space-y-5">
            {recentActivity.map((act) => (
              <div key={act.id} className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  {act.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  {act.status === 'pending' && <Clock className="w-4 h-4 text-amber-500" />}
                  {act.status === 'new' && <ArrowUpRight className="w-4 h-4 text-blue-500" />}
                  {act.status === 'info' && <FileText className="w-4 h-4 text-gray-400" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy-900 leading-tight mb-1">{act.action}</p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500">
                    <span className="font-medium text-gray-700">{act.user}</span>
                    <span>•</span>
                    <span>{act.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={loadMore} className="w-full mt-6 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
}
