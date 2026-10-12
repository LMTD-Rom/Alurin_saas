'use client';
import { useState, useEffect } from 'react';
import { getStore, setStore, SEED_TASKS } from '@/lib/saasStore';
import { CheckSquare, Clock, User, Flag } from 'lucide-react';
export default function SaasTasks(){
  const [tasks,setTasks]=useState([]);
  useEffect(()=>{ let s=getStore('saas_tasks',null); if(!s){s=SEED_TASKS; setStore('saas_tasks',s);} setTasks(s);},[]);
  const toggle=id=>{ const n=tasks.map(t=>t.id===id?{...t,status:t.status==='Selesai'?'Todo':'Selesai'}:t); setTasks(n); setStore('saas_tasks',n);};
  const addTask = () => {
    const newTask = {
      id: `TSK-0${tasks.length + 1}`,
      title: 'Tugas Operasional Baru',
      assignee: 'Saya',
      due: 'Hari ini',
      priority: 'Sedang',
      status: 'Todo'
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    setStore('saas_tasks', updated);
  };
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div><h2 className="text-xl font-bold text-navy-900">Tugas (Tasks)</h2><p className="text-xs text-gray-500 mt-1">Dibuat otomatis dari workflow — assign ke user/tim, deadline, prioritas.</p></div>
        <button onClick={addTask} className="bg-blue-600 text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors">
          + Tambah Tugas
        </button>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm divide-y divide-gray-100">
        {tasks.map(t=>(
          <div key={t.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={()=>toggle(t.id)} className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${t.status==='Selesai'?'bg-green-600 border-green-600 text-white':'border-gray-300'}`}>{t.status==='Selesai'&&<CheckSquare className="w-3 h-3"/>}</button>
              <div><p className={`text-sm font-medium ${t.status==='Selesai'?'line-through text-gray-400':'text-navy-900'}`}>{t.title}</p><div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5"><span className="flex items-center gap-1"><User className="w-3 h-3"/>{t.assignee}</span><span>•</span><span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{t.due}</span><span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${t.priority==='Tinggi'?'bg-red-50 text-red-700':'bg-amber-50 text-amber-700'}`}><Flag className="w-3 h-3 inline mr-1"/>{t.priority}</span></div></div>
            </div>
            <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${t.status==='Selesai'?'bg-green-100 text-green-700':'bg-gray-100 text-gray-600'}`}>{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
