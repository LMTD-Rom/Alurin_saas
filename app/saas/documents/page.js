'use client';
import { useState, useEffect } from 'react';
import { getStore, setStore, SEED_DOCS } from '@/lib/saasStore';
import { File, Download, Share2, Plus } from 'lucide-react';

export default function SaasDocuments() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let saved = getStore('saas_docs', null);
    if (!saved) {
      saved = SEED_DOCS;
      setStore('saas_docs', saved);
    }
    setDocs(saved);
  }, []);

  const handleUpload = () => {
    const newDoc = {
      id: `DOC-00${docs.length + 1}`,
      name: 'Dokumen_Upload_Demo.pdf',
      type: 'General',
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Tersimpan'
    };
    const updated = [newDoc, ...docs];
    setDocs(updated);
    setStore('saas_docs', updated);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Manajemen Dokumen</h2>
          <p className="text-xs text-gray-500 mt-1">Invoice, Quotation, dan kontrak legal yang dihasilkan otomatis oleh sistem.</p>
        </div>
        <button 
          onClick={handleUpload}
          className="flex items-center gap-2 bg-blue-600 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow hover:bg-blue-700 transition-colors w-fit"
        >
          <Plus className="w-4 h-4" /> Upload Dokumen
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="divide-y divide-gray-100">
          {docs.map(doc => (
            <div key={doc.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <File className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-navy-900">{doc.name}</h4>
                  <div className="text-[10px] text-gray-500 mt-0.5">{doc.type} • {doc.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => alert(`Mengunduh ${doc.name}...`)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => alert(`Tautan dokumen disalin ke clipboard!`)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
