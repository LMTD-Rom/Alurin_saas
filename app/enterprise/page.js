import PageShell from '@/components/PageShell';
import { FadeIn } from '@/components/Motion';
import { ShieldCheck, Server, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EnterprisePage() {
  return (
    <PageShell
      badgeText="ENTERPRISE"
      heroTitle="Skalabilitas & Keamanan Tingkat Korporasi"
      heroSubtitle="Solusi workflow operasional dengan kepatuhan audit tinggi, dukungan on-premise atau private cloud, dan SLA khusus."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: 'Single Sign-On (SSO / SAML)', desc: 'Integrasi dengan Okta, Google Workspace, atau Azure Active Directory untuk autentikasi terpusat.', icon: ShieldCheck },
          { title: 'Dedicated Infrastructure', desc: 'Isolasi database penuh dan resource cloud khusus untuk menjamin kepatuhan data privasi.', icon: Server },
          { title: 'Struktur Multi-Divisi Kompleks', desc: 'Kelola ratusan departemen dengan hak akses berbasis peran (RBAC) yang fleksibel.', icon: Users },
          { title: 'SLA 99.99% & Account Manager', desc: 'Layanan dukungan prioritas 24/7 didampingi Dedicated Solutions Architect untuk tim Anda.', icon: Award },
        ].map((item) => (
          <FadeIn key={item.title} className="glass-card rounded-card p-6 lg:p-8 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="glass-card rounded-card p-8 lg:p-12 text-center max-w-[800px] mx-auto border-blue-100 shadow-card">
        <h3 className="text-[24px] font-semibold text-navy-900 mb-3">Diskusikan Kebutuhan Enterprise Anda</h3>
        <p className="text-[14px] text-gray-600 max-w-[500px] mx-auto mb-8">
          Tim arsitek solusi kami siap membantu mendesain alur migrasi data dan proof-of-concept untuk organisasi Anda.
        </p>
        <Link href="/kontak" className="btn-navy text-[13px] inline-flex items-center gap-2">
          Jadwalkan Konsultasi Solusi <ArrowRight className="w-4 h-4" />
        </Link>
      </FadeIn>
    </PageShell>
  );
}
