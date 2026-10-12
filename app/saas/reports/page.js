'use client';
import { useState } from 'react';
import { BarChart3, Download, Filter, TrendingUp, TrendingDown, LayoutDashboard } from 'lucide-react';

export default function SaasReports() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Berhasil mengekspor Laporan_Analitik.xlsx');
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Laporan & Analitik</h2>
          <p className="text-xs text-gray-500 mt-1">Pantau performa, KPI, dan produktivitas tim dalam satu tempat.</p>
        </div>
        <button 
          onClick={handleExport}
          disabled={isExporting}
          className="flex items-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-colors w-fit disabled:opacity-50"
        >
          <Download className="w-4 h-4" /> {isExporting ? 'Memproses...' : 'Export (.XLSX)'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-navy-900">Waktu Proses Rata-rata</h3>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-navy-900">1.2 Jam</div>
          <p className="text-[11px] text-green-600 font-medium mt-1">20% lebih cepat dari minggu lalu</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-navy-900">Tingkat Penyelesaian</h3>
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <LayoutDashboard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-navy-900">94.5%</div>
          <p className="text-[11px] text-gray-500 font-medium mt-1">Dari 420 transaksi bulan ini</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-navy-900">Bottleneck (Tertunda)</h3>
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-navy-900">12 Berkas</div>
          <p className="text-[11px] text-red-600 font-medium mt-1">Menunggu di tahap Finance Approval</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm min-h-[300px] flex flex-col items-center justify-center">
        <BarChart3 className="w-12 h-12 text-gray-300 mb-3" />
        <h4 className="font-semibold text-gray-500 text-sm">Grafik sedang dimuat...</h4>
        <p className="text-xs text-gray-400 mt-1">Memproses data agregat bulanan.</p>
      </div>
    </div>
  );
}
