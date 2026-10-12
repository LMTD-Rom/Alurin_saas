import PageShell from '@/components/PageShell';
import { StaggerContainer, StaggerItem } from '@/components/Motion';
import { SOLUTIONS_TABS } from '@/lib/content';
import { Store, ShoppingBag, Briefcase, Shirt, Package, Building2 } from 'lucide-react';
import Link from 'next/link';

const ICON_MAP = {
  Store,
  ShoppingBag,
  Briefcase,
  Shirt,
  Package,
  Building2,
};

export default function SolusiPage() {
  return (
    <PageShell
      badgeText="SOLUSI ALURIN"
      heroTitle="Platform Satu Atap untuk Semua Industri"
      heroSubtitle="Dari Retail hingga Distribusi, Alurin menyesuaikan alur kerja Anda."
    >
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS_TABS.map((tab) => {
          const Icon = ICON_MAP[tab.icon];
          return (
            <StaggerItem key={tab.id} className="glass-card rounded-card p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-navy-900">{tab.label}</h3>
                <p className="text-[14px] text-gray-600 mt-2">{tab.desc}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[13px] text-gray-500">
                <span>{tab.stats}</span>
                <Link href="/coba-demo" className="text-blue-600 font-medium hover:underline">
                  Pelajari <span>→</span>
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </PageShell>
  );
}
