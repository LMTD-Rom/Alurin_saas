'use client';
import { useState, useEffect } from 'react';
import { getStore, setStore, SEED_APPROVALS } from '@/lib/saasStore';
import { CheckSquare, Check, X, Clock } from 'lucide-react';

export default function SaasApprovals() {
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    let saved = getStore('saas_approvals', null);
    if (!saved) {
      saved = SEED_APPROVALS;
      setStore('saas_approvals', saved);
    }
    setApprovals(saved);
  }, []);

  const handleAction = (id, newStatus) => {
    const updated = approvals.map(a => a.id === id ? { ...a, status: newStatus } : a);
    setApprovals(updated);
    setStore('saas_approvals', updated);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Persetujuan & Approval</h2>
        <p className="text-xs text-gray-500 mt-1">Daftar permohonan yang membutuhkan tindakan atau otoritas Anda.</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="divide-y divide-gray-100">
          {approvals.map(app => (
            <div key={app.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-navy-900">{app.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span>Pemohon: <strong>{app.requester}</strong></span>
                    <span>•</span>
                    <span>Menunggu: <strong>{app.approver}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                {app.status === 'Menunggu' ? (
                  <>
                    <button 
                      onClick={() => handleAction(app.id, 'Disetujui')}
                      className="px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" /> Setujui
                    </button>
                    <button 
                      onClick={() => handleAction(app.id, 'Ditolak')}
                      className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" /> Tolak
                    </button>
                  </>
                ) : (
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    app.status === 'Disetujui' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {app.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
