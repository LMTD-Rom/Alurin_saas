import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function PageShell({ children, heroTitle, heroSubtitle, badgeText }) {
  return (
    <main className="min-h-screen bg-page">
      {/* Top Banner / Hero Bar */}
      <div className="p-4">
        <div className="bg-hero rounded-hero relative overflow-hidden min-h-[260px] lg:min-h-[300px] flex flex-col justify-between">
          <div 
            className="absolute inset-0 pointer-events-none opacity-60" 
            style={{ 
              background: 'radial-gradient(60% 45% at 0% 100%, rgba(255,255,255,.55), transparent 70%), radial-gradient(60% 45% at 100% 100%, rgba(255,255,255,.55), transparent 70%)' 
            }}
          />
          <Navbar />

          <div className="relative z-10 px-6 lg:px-12 pb-12 pt-28 max-w-[900px] mx-auto text-center flex flex-col items-center">
            {badgeText && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border shadow-sm bg-white/20 text-white border-white/30 backdrop-blur-md mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                {badgeText}
              </span>
            )}
            <h1 className="text-white text-[32px] lg:text-[44px] font-medium tracking-tight leading-tight">
              {heroTitle}
            </h1>
            {heroSubtitle && (
              <p className="text-white/80 text-[14px] lg:text-[15px] mt-3 max-w-[600px] leading-relaxed">
                {heroSubtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {children}
      </div>

      {/* Simple Footer */}
      <div className="p-4 mt-12">
        <div className="bg-hero rounded-hero relative overflow-hidden p-6 lg:p-12 text-center text-white">
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
            <h2 className="text-[24px] lg:text-[32px] font-medium mb-3">
              Mulai Sederhanakan Operasional Bisnis Anda
            </h2>
            <p className="text-white/80 text-[14px] mb-6">
              Tingkatkan efisiensi kerja tim dengan sistem workflow dan persetujuan otomatis.
            </p>
            <div className="flex gap-3">
              <Link href="/coba-demo" className="btn-white text-xs lg:text-sm">
                Coba Demo
              </Link>
              <Link href="/harga" className="btn-navy text-xs lg:text-sm">
                Lihat Paket Harga
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/20 text-[12px] text-white/60 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>© 2026 Alurin. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privasi" className="hover:text-white">Privasi</Link>
              <Link href="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link>
              <Link href="/kontak" className="hover:text-white">Kontak</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
