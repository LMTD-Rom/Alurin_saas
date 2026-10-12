import PageShell from '@/components/PageShell';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion';
import { Globe, Palette, Server, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PrivatePlatformPage() {
  const features = [
    {
      title: 'Custom Domain',
      desc: 'Akses sistem menggunakan domain perusahaan Anda sendiri (contoh: app.perusahaananda.com).',
      icon: Globe,
    },
    {
      title: 'White-label Branding',
      desc: 'Logo, warna antarmuka, dan email notifikasi sepenuhnya disesuaikan dengan identitas brand Anda.',
      icon: Palette,
    },
    {
      title: 'Dedicated Infrastructure',
      desc: 'Database dan resource komputasi terpisah untuk menjamin privasi maksimal.',
      icon: Server,
    },
    {
      title: 'Custom Workflow',
      desc: 'Penyesuaian modul dan alur kerja spesifik yang tidak tersedia di paket standar.',
      icon: Settings,
    }
  ];

  return (
    <PageShell
      badgeText="PRIVATE PLATFORM"
      heroTitle="Platform Operasional dengan Brand Anda"
      heroSubtitle="Dapatkan software manajemen bisnis (SaaS) sepenuhnya menggunakan logo, warna, dan domain Anda sendiri."
    >
      <FadeIn className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-[24px] lg:text-[28px] font-semibold text-navy-900 mb-4">
          Software Kelas Dunia, Identitas Anda
        </h2>
        <p className="text-[14px] text-gray-600">
          Tingkatkan kredibilitas di mata klien dan karyawan. Hadirkan pengalaman aplikasi yang menyatu 
          dengan identitas visual perusahaan tanpa harus membangunnya dari nol.
        </p>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((item, i) => (
          <StaggerItem key={i} className="glass-card rounded-card p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="text-[15px] font-semibold text-navy-900 mb-2">{item.title}</h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="glass-card border-blue-200 bg-blue-50/30 rounded-card p-8 lg:p-12 text-center flex flex-col items-center">
        <h3 className="text-[20px] lg:text-[24px] font-semibold text-navy-900 mb-3">
          Wujudkan Platform Internal Anda
        </h3>
        <p className="text-[14px] text-gray-600 mb-8 max-w-[500px]">
          Proses setup cepat. Tim ahli kami akan memandu proses white-labeling hingga sistem siap diluncurkan untuk tim Anda.
        </p>
        <Link href="/kontak" className="btn-blue text-[14px] px-8 h-12 flex items-center gap-2">
          Konsultasi Gratis <ArrowRight className="w-4 h-4" />
        </Link>
      </FadeIn>
    </PageShell>
  );
}
