import PageShell from '@/components/PageShell';
import { StaggerContainer, StaggerItem } from '@/components/Motion';
import { INTEGRATIONS } from '@/lib/content';
import { MessageCircle, Send, Mail, Table, Hash, FileText } from 'lucide-react';
import Link from 'next/link';

const ICON_MAP = {
  MessageCircle,
  Send,
  Mail,
  Table,
  Hash,
  FileText,
};

export default function IntegrasiPage() {
  return (
    <PageShell
      badgeText="INTEGRASI"
      heroTitle="Terhubung dengan Tools Favorit Anda"
      heroSubtitle="Otomatisasi pengiriman pesan dan data dengan layanan yang sudah Anda pakai."
    >
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTEGRATIONS.map((integration) => {
          const Icon = ICON_MAP[integration.icon];
          return (
            <StaggerItem key={integration.name} className="glass-card rounded-card p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                  integration.status === 'Available' ? 'bg-green-bg text-green border-green/20' : 
                  integration.status === 'Add-on' ? 'bg-amber-bg text-amber border-amber/20' : 
                  'bg-gray-100 text-gray-600 border-gray-200'
                }`}>
                  {integration.status}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-navy-900">{integration.name}</h3>
                <p className="text-[13px] text-gray-600 mt-1">
                  Hubungkan alur kerja Anda dengan {integration.name} untuk operasional yang lebih otomatis.
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <Link href="/coba-demo" className="text-blue-600 text-[13px] font-medium hover:underline">
                  Pelajari Integrasi
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </PageShell>
  );
}
