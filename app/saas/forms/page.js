'use client';
import { useState } from 'react';
import { FileText, Plus, Search, MoreHorizontal, Settings, Copy, ExternalLink } from 'lucide-react';

export default function SaasForms() {
  const [forms, setForms] = useState([
    { id: 'FRM-1', title: 'Form Pemesanan Pelanggan', fields: 8, resp: 124, status: 'Aktif' },
    { id: 'FRM-2', title: 'Purchase Request (Internal)', fields: 5, resp: 45, status: 'Aktif' },
    { id: 'FRM-3', title: 'Kuesioner Kepuasan', fields: 4, resp: 12, status: 'Draft' },
  ]);
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    setForms([...forms, {
      id: `FRM-${forms.length + 1}`,
      title: 'Formulir Demo Baru',
      fields: 0,
      resp: 0,
      status: 'Draft'
    }]);
  };

  const filteredForms = forms.filter(f => f.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Manajemen Formulir</h2>
          <p className="text-xs text-gray-500 mt-1">Buat form dinamis untuk pengumpulan data internal maupun eksternal.</p>
        </div>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-blue-600 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow hover:bg-blue-700 transition-colors w-fit">
          <Plus className="w-4 h-4" /> Buat Form Baru
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="relative w-full sm:w-72 mb-2">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari form..." 
            className="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredForms.map(f => (
            <div key={f.id} className="border border-gray-200 rounded-xl p-4 flex flex-col hover:border-blue-300 transition-colors group">
              <div className="flex justify-between items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <FileText className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${f.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                  {f.status}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-navy-900 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{f.fields} Field data • {f.resp} Respon</p>
              
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                <button onClick={() => alert('Fitur form builder membutuhkan backend database.')} className="flex-1 flex justify-center items-center gap-1.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-[11px] font-medium rounded-lg transition-colors">
                  <Settings className="w-3.5 h-3.5" /> Edit
                </button>
                <button onClick={() => alert(`Membuka preview form: ${f.title}`)} className="flex-1 flex justify-center items-center gap-1.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-[11px] font-medium rounded-lg transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> Buka Form
                </button>
                <button onClick={() => alert('Link form disalin!')} className="p-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg">
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
