'use client';
import { useState } from 'react';
import { GitPullRequest, Plus, Settings, ArrowRight } from 'lucide-react';

export default function SaasWorkflows() {
  const [workflows, setWorkflows] = useState([
    { id: 'WF-1', name: 'Alur Pembelian Barang', trigger: 'Form Purchase Request', steps: 4, status: 'Aktif' },
    { id: 'WF-2', name: 'Onboarding Pelanggan', trigger: 'Data Pelanggan Baru', steps: 3, status: 'Aktif' },
    { id: 'WF-3', name: 'Otomatisasi Tagihan', trigger: 'Status Order = Selesai', steps: 2, status: 'Draft' },
  ]);

  const addWorkflow = () => {
    setWorkflows([...workflows, {
      id: `WF-${workflows.length + 1}`,
      name: 'Workflow Demo Baru',
      trigger: 'Manual Trigger',
      steps: 1,
      status: 'Draft'
    }]);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Workflow & Otomatisasi</h2>
          <p className="text-xs text-gray-500 mt-1">Atur alur logika, persetujuan, dan tindakan otomatis (rule-based automation).</p>
        </div>
        <button onClick={addWorkflow} className="flex items-center gap-2 bg-blue-600 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow hover:bg-blue-700 transition-colors w-fit">
          <Plus className="w-4 h-4" /> Buat Workflow
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="grid gap-4">
          {workflows.map(wf => (
            <div key={wf.id} className="border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-navy-900">{wf.name}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${wf.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {wf.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">{wf.trigger}</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>{wf.steps} Tahapan proses</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => alert('Fitur konfigurasi workflow membutuhkan akses Database (versi penuh).')}
                  className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 flex items-center gap-1.5"
                >
                  <Settings className="w-3.5 h-3.5" /> Konfigurasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
