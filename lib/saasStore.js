// ponytail: localStorage only (demo trial), upgrade to IndexedDB/DB when auth + backend ready
export function getStore(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
export function setStore(key, val) { if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(val)); }

export const SEED_RECORDS = [
  { id:'ORD-001', title:'Pemesanan Bahan Kain', customer:'CV Tekstil Mandiri', amount:'Rp 4.500.000', status:'Selesai' },
  { id:'ORD-002', title:'Jasa Desain Website', customer:'PT Digital Solusi', amount:'Rp 12.000.000', status:'Proses' },
  { id:'ORD-003', title:'Pengadaan Perangkat Kasir', customer:'Toko Berkah', amount:'Rp 8.200.000', status:'Menunggu' },
];
export const SEED_TASKS = [
  { id:'TSK-01', title:'Cek pembayaran ORD-002', assignee:'Finance', due:'Hari ini', priority:'Tinggi', status:'Todo' },
  { id:'TSK-02', title:'Kirim invoice ke CV Tekstil', assignee:'Admin', due:'Besok', priority:'Sedang', status:'Selesai' },
];
export const SEED_APPROVALS = [
  { id:'PR-001', title:'Purchase Request #PR-001 — Rp 8.500.000', requester:'Andi', approver:'Finance Manager', status:'Menunggu' },
  { id:'PR-002', title:'Pengajuan Cuti — Siti (3 hari)', requester:'Siti', approver:'HR Manager', status:'Menunggu' },
];
export const SEED_DOCS = [
  { id:'INV-001', name:'Invoice INV-001 - CV Tekstil', type:'Invoice', date:'07 Okt 2026', status:'Terkirim' },
  { id:'QUO-012', name:'Quotation QUO-012 - PT Digital', type:'Quotation', date:'06 Okt 2026', status:'Draft' },
];
