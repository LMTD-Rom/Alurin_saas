'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { FadeIn } from '@/components/Motion';
import { Play, ArrowRight, AlertTriangle, KeyRound, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function CobaDemoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'Budi Santoso',
    email: 'budi@demo-perusahaan.com',
    industry: 'Retail / Toko',
    role: 'Owner'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to local storage for temporary browser session
    const mockUser = {
      name: formData.name,
      email: formData.email,
      workspace: `${formData.name.split(' ')[0]}'s Workspace`,
      industry: formData.industry,
      role: formData.role,
      plan: 'Business Plan (Demo Trial)',
      token: 'demo-token-' + Date.now()
    };
    localStorage.setItem('alurin_user', JSON.stringify(mockUser));
    router.push('/saas/dashboard');
  };

  const handleQuickDemo = (role = 'Owner') => {
    const mockUser = {
      name: role === 'Owner' ? 'Budi Santoso (Owner)' : 'Siti Manager (Staff)',
      email: role === 'Owner' ? 'owner@alurin-demo.com' : 'staff@alurin-demo.com',
      workspace: 'Alurin Retail Jaya',
      industry: 'Retail / Toko',
      role: role,
      plan: 'Scale Plan (Demo Trial)',
      token: 'demo-token-' + Date.now()
    };
    localStorage.setItem('alurin_user', JSON.stringify(mockUser));
    router.push('/saas/dashboard');
  };

  return (
    <PageShell
      badgeText="COBA DEMO SAAS"
      heroTitle="Coba Langsung Platform SaaS Alurin"
      heroSubtitle="Jelajahi alur operasional, workflow approval, hingga otomatisasi tugas dalam mode uji coba interaktif langsung di browser Anda."
    >
      <div className="max-w-[700px] mx-auto">
        <FadeIn className="space-y-6">
          
          {/* Awareness Notice */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold block text-amber-800 mb-0.5">Mode Percobaan / Demo Sementara</span>
              Data formulir di bawah ini <strong>hanya untuk simulasi profil sementara</strong> di browser Anda (tidak disimpan ke server database publik). Anda bebas mengisi atau langsung melewati langkah ini.
            </div>
          </div>

          <div className="glass-card rounded-card p-6 sm:p-8 relative">
            <h3 className="text-lg font-bold text-navy-900 mb-1">Konfigurasi Profil Demo Anda</h3>
            <p className="text-xs text-gray-500 mb-6">Sesuaikan nama workspace atau role yang ingin Anda uji coba di dalam aplikasi.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-semibold text-navy-800">Nama Pengguna</label>
                  <input 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Budi Santoso" 
                    className="mt-1 w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white/70 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-navy-800">Email Kerja (Simulasi)</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="budi@perusahaan.com" 
                    className="mt-1 w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white/70 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-semibold text-navy-800">Sektor Industri</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="mt-1 w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white/70 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Retail / Toko</option>
                    <option>UMKM</option>
                    <option>Jasa / Agency</option>
                    <option>Laundry</option>
                    <option>Distributor</option>
                    <option>Perusahaan</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-navy-800">Peran Akun (Role)</label>
                  <select 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="mt-1 w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white/70 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Owner (Akses Penuh + Billing)</option>
                    <option>Admin (Operasional & Pengaturan)</option>
                    <option>Manager (Approval & Tim)</option>
                    <option>Staff (Input Data & Tugas)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button 
                  type="submit" 
                  className="flex-1 h-11 bg-blue-600 text-white rounded-full text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md active:scale-[0.99]"
                >
                  <span>Masuk ke Dashboard SaaS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('Owner')}
                  className="h-11 px-5 border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap"
                >
                  Lewati Form →
                </button>
              </div>
            </form>

            <div className="relative my-6 flex items-center justify-center">
              <div className="border-t border-gray-200 w-full absolute"></div>
              <span className="bg-white px-3 text-[11px] font-medium text-gray-400 relative uppercase tracking-wider">Atau Langsung Coba Tanpa Isi Form</span>
            </div>

            {/* Quick Demo Credentials / Direct bypass */}
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleQuickDemo('Owner')}
                className="p-3 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-100/60 transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="text-[12px] font-bold text-navy-900 group-hover:text-blue-600 flex items-center gap-1.5">
                    <span>👑 Demo Akun Owner</span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Kredensial instan, hak akses penuh</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemo('Staff')}
                className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100/70 transition-colors flex items-center justify-between text-left group"
              >
                <div>
                  <div className="text-[12px] font-bold text-navy-900 group-hover:text-blue-600 flex items-center gap-1.5">
                    <span>👤 Demo Akun Staff</span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Simulasi pembatasan hak akses tim</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </FadeIn>
      </div>
    </PageShell>
  );
}
