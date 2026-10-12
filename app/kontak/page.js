'use client';
import { useState } from 'react';
import PageShell from '@/components/PageShell';
import { FadeIn } from '@/components/Motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell
      badgeText="HUBUNGI KAMI"
      heroTitle="Kami Siap Membantu Bisnis Anda"
      heroSubtitle="Konsultasikan kebutuhan workflow, tanya paket harga, atau minta jadwal demo langsung dengan tim Alurin."
    >
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <FadeIn className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card rounded-card p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
            <div>
              <p className="text-[13px] font-semibold text-navy-900">Email Tim Sales</p>
              <p className="text-[13px] text-gray-600">hello@alurin.id</p>
              <p className="text-[12px] text-gray-400 mt-1">Balasan dalam 1 jam kerja</p>
            </div>
          </div>
          <div className="glass-card rounded-card p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-green text-white flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
            <div>
              <p className="text-[13px] font-semibold text-navy-900">WhatsApp / Telepon</p>
              <p className="text-[13px] text-gray-600">+62 812-3456-7890</p>
              <p className="text-[12px] text-gray-400 mt-1">Senin–Jumat, 09.00–18.00 WIB</p>
            </div>
          </div>
          <div className="glass-card rounded-card p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
            <div>
              <p className="text-[13px] font-semibold text-navy-900">Kantor Alurin</p>
              <p className="text-[13px] text-gray-600">Jl. Sudirman No. 45, Jakarta Selatan</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3 glass-card rounded-card p-6 lg:p-8">
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-navy-700">Nama Lengkap</label>
                  <input required placeholder="Budi Santoso" className="mt-1 w-full h-10 px-3 rounded-xl border border-gray-200 bg-blue-50/50 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-navy-700">Email Bisnis</label>
                  <input required type="email" placeholder="budi@perusahaan.com" className="mt-1 w-full h-10 px-3 rounded-xl border border-gray-200 bg-blue-50/50 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-navy-700">Perusahaan</label>
                <input placeholder="PT Maju Jaya" className="mt-1 w-full h-10 px-3 rounded-xl border border-gray-200 bg-blue-50/50 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[12px] font-medium text-navy-700">Pesan</label>
                <textarea required rows={4} placeholder="Ceritakan kebutuhan bisnis Anda..." className="mt-1 w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-blue-50/50 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="mt-2 w-full h-11 bg-blue-600 text-white rounded-full text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                Kirim Pesan <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-green-bg text-green flex items-center justify-center mx-auto mb-4"><Send className="w-6 h-6" /></div>
              <h3 className="text-[18px] font-semibold text-navy-900">Pesan Terkirim!</h3>
              <p className="text-[13px] text-gray-600 mt-2">Tim Alurin akan menghubungi Anda dalam 1 jam kerja. Terima kasih sudah menghubungi kami.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-[13px] font-medium text-blue-600 hover:underline">Kirim pesan lain</button>
            </div>
          )}
        </FadeIn>
      </div>
    </PageShell>
  );
}
