'use client';
import { useState, useEffect } from 'react';
import { getStore, SEED_RECORDS, setStore } from '@/lib/saasStore';
import { Database, Plus, Search, Filter, MoreHorizontal, ArrowUpDown } from 'lucide-react';

export default function SaasData() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let saved = getStore('saas_data', null);
    if (!saved) {
      saved = SEED_RECORDS;
      setStore('saas_data', saved);
    }
    setRecords(saved);
  }, []);

  const handleAdd = () => {
    const newRecord = {
      id: `ORD-00${records.length + 1}`,
      title: 'Pesanan Demo Baru',
      customer: 'Customer Demo',
      amount: 'Rp 1.000.000',
      status: 'Menunggu'
    };
    const updated = [newRecord, ...records];
    setRecords(updated);
    setStore('saas_data', updated);
  };

  const filteredRecords = records.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) || 
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Manajemen Data & Entity</h2>
          <p className="text-xs text-gray-500 mt-1">Kelola rekaman data transaksi, pesanan, dan entitas kustom bisnis Anda.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow hover:bg-blue-700 transition-colors w-fit"
        >
          <Plus className="w-4 h-4" /> Tambah Rekaman Data
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari entitas, no. order..." 
              className="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button onClick={() => alert('Filter akan aktif saat database SQL terhubung.')} className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-xl text-xs text-gray-600 hover:bg-gray-50">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            <button onClick={() => alert('Sorting table berfungsi di versi Enterprise/Scale.')} className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-xl text-xs text-gray-600 hover:bg-gray-50">
              <ArrowUpDown className="w-3.5 h-3.5" /> Urutkan
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-y border-gray-100">
              <tr>
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Nama / Perihal</th>
                <th className="py-3 px-4 font-semibold">Entitas Pelanggan</th>
                <th className="py-3 px-4 font-semibold">Nilai</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-navy-900">
              {filteredRecords.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-blue-600">{r.id}</td>
                  <td className="py-3.5 px-4 font-medium">{r.title}</td>
                  <td className="py-3.5 px-4 text-gray-500">{r.customer}</td>
                  <td className="py-3.5 px-4 font-semibold">{r.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      r.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                      r.status === 'Proses' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button onClick={() => alert(`Aksi untuk ID: ${r.id} belum tersedia di mode demo.`)} className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {records.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">Tidak ada data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
