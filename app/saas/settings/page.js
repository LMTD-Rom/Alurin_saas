'use client';
import { useState, useEffect } from 'react';
import { User, Shield, CreditCard, Building, Bell } from 'lucide-react';

export default function SaasSettings() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('perusahaan');
  const [formData, setFormData] = useState({ workspace: '', industry: '' });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('alurin_user'));
    setUser(data);
    if(data) setFormData({ workspace: data.workspace, industry: data.industry });
  }, []);

  const handleSave = () => {
    const updated = { ...user, workspace: formData.workspace, industry: formData.industry };
    localStorage.setItem('alurin_user', JSON.stringify(updated));
    setUser(updated);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
    // Reload to update sidebar (or emit event, but reload is fine for demo)
    window.location.reload();
  };

  if (!user) return null;

  return (
    <div className="space-y-6 max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Pengaturan Workspace</h2>
        <p className="text-xs text-gray-500 mt-1">Konfigurasi profil perusahaan, tim, batas fitur, dan integrasi Anda.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 flex flex-col gap-1 shrink-0">
          {[
            { label: 'Profil Perusahaan', icon: Building, key: 'perusahaan' },
            { label: 'Profil Saya', icon: User, key: 'profil' },
            { label: 'Tim & Akses (Role)', icon: Shield, key: 'tim' },
            { label: 'Langganan & Tagihan', icon: CreditCard, key: 'billing' },
            { label: 'Notifikasi & Integrasi', icon: Bell, key: 'notif' },
          ].map(item => (
            <button 
              key={item.label} 
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                activeTab === item.key ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Form Content */}
        <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-sm">
          <div className="border-b border-gray-100 pb-4 mb-5">
            <h3 className="font-bold text-navy-900 text-base">
              {activeTab === 'perusahaan' ? 'Profil Perusahaan' : 'Konfigurasi Mode Demo'}
            </h3>
            <p className="text-xs text-gray-500 mt-1">Ubah nama workspace dan identitas operasional Anda.</p>
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-[12px] font-semibold text-navy-800 mb-1.5">Nama Workspace / Tenant</label>
              <input 
                type="text" 
                value={formData.workspace} 
                onChange={e => setFormData({...formData, workspace: e.target.value})}
                className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-[13px] text-navy-900 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-navy-800 mb-1.5">Sektor Bisnis</label>
              <select 
                value={formData.industry}
                onChange={e => setFormData({...formData, industry: e.target.value})}
                className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-[13px] text-navy-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Retail / Toko</option>
                <option>UMKM</option>
                <option>Jasa / Agency</option>
                <option>Laundry</option>
                <option>Distributor</option>
                <option>Perusahaan</option>
              </select>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <label className="block text-[12px] font-semibold text-navy-800 mb-1.5">Paket Aktif (Entitlement)</label>
              <div className="p-3 border border-blue-200 bg-blue-50/50 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">{user.plan}</h4>
                  <p className="text-[11px] text-blue-600 mt-0.5">Batas Penggunaan: Mode Percobaan (Demo)</p>
                </div>
                <button 
                  onClick={() => alert('Fitur Upgrade Billing hanya tersedia di aplikasi penuh.')}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[11px] font-semibold hover:bg-blue-700"
                >
                  Upgrade
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <button 
                type="button" 
                onClick={() => setFormData({ workspace: user.workspace, industry: user.industry })}
                className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-xs font-semibold hover:bg-gray-50"
              >
                Batal
              </button>
              <button 
                type="button" 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 flex items-center gap-2"
              >
                {isSaved ? 'Berhasil Disimpan ✓' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
