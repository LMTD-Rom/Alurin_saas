import PageShell from '@/components/PageShell';
import Link from 'next/link';
import { FadeIn } from '@/components/Motion';
import { CheckCircle, Workflow, Database, FileText, Layers, BarChart3, Shield } from 'lucide-react';

export default function FiturPage() {
  return (
    <PageShell
      badgeText="FITUR UTAMA"
      heroTitle="Fitur Operasional Terlengkap"
      heroSubtitle="Atur operasional harian tanpa chat bertele-tele. Mulai dari data custom hingga dashboard eksekutif dalam satu dasbor."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Database Fleksibel', desc: 'Simpan semua jenis data, mulai dari pelanggan, vendor, hingga produk.', icon: Database },
          { title: 'Form Dinamis', desc: 'Rancang formulir pengajuan, cuti, atau survei dengan drag-and-drop.', icon: FileText },
          { title: 'Workflow & State', desc: 'Arahkan otomatis urutan pekerjaan sesuai departemen tujuan.', icon: Workflow },
          { title: 'Persetujuan Berlapis', desc: 'Hilangkan approval manual di chat. Setiap request diteruskan ke penentu.', icon: Layers },
          { title: 'Laporan Otomatis', desc: 'Generate laporan dan dokumen resmi sesuai template (PDF).', icon: BarChart3 },
          { title: 'Hak Akses Aman', desc: 'Tentukan detail siapa saja yang boleh mengakses data sensitif.', icon: Shield },
        ].map((f) => (
          <FadeIn key={f.title} className="glass-card rounded-card p-6 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <f.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-navy-900">{f.title}</h3>
              <p className="text-[13px] text-gray-600 mt-1">{f.desc}</p>
            </div>
            <Link href="/coba-demo" className="mt-auto text-[13px] font-medium text-blue-600 flex items-center gap-1 hover:underline">
              Coba Fitur Ini <span>→</span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
