'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getStore, SEED_RECORDS, SEED_TASKS, SEED_APPROVALS, SEED_DOCS } from '@/lib/saasStore';
import { 
  LayoutDashboard, Database, FileText, GitPullRequest, 
  CheckSquare, File, BarChart3, Settings, LogOut,
  Bell, Search, Menu, X, User, ListTodo
} from 'lucide-react';

export default function SaasLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Purchase Request menunggu', time: '5m lalu', read: false },
    { id: 2, title: 'Laporan mingguan siap', time: '1j lalu', read: false },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = [];

    const records = getStore('saas_data', SEED_RECORDS) || [];
    records.forEach(r => {
      if (r.title.toLowerCase().includes(q) || r.id.toLowerCase().includes(q) || r.customer.toLowerCase().includes(q)) {
        results.push({ type: 'Data', title: r.title, desc: `${r.id} - ${r.customer}`, link: '/saas/data' });
      }
    });

    const tasks = getStore('saas_tasks', SEED_TASKS) || [];
    tasks.forEach(t => {
      if (t.title.toLowerCase().includes(q) || t.assignee.toLowerCase().includes(q)) {
        results.push({ type: 'Task', title: t.title, desc: `Assigned to: ${t.assignee}`, link: '/saas/tasks' });
      }
    });

    const approvals = getStore('saas_approvals', SEED_APPROVALS) || [];
    approvals.forEach(a => {
      if (a.title.toLowerCase().includes(q) || a.requester.toLowerCase().includes(q)) {
        results.push({ type: 'Approval', title: a.title, desc: `By: ${a.requester}`, link: '/saas/approvals' });
      }
    });

    const docs = getStore('saas_docs', SEED_DOCS) || [];
    docs.forEach(d => {
      if (d.name.toLowerCase().includes(q) || d.type.toLowerCase().includes(q)) {
        results.push({ type: 'Document', title: d.name, desc: d.type, link: '/saas/documents' });
      }
    });

    setSearchResults(results.slice(0, 5));
  }, [searchQuery]);

  useEffect(() => {
    const data = localStorage.getItem('alurin_user');
    if (!data) {
      router.push('/coba-demo');
    } else {
      setUser(JSON.parse(data));
    }
  }, [router]);

  if (!user) return null; // loading state handled quickly

  const MENU_ITEMS = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/saas/dashboard' },
    { label: 'Data & Entity', icon: Database, href: '/saas/data' },
    { label: 'Forms', icon: FileText, href: '/saas/forms' },
    { label: 'Workflows', icon: GitPullRequest, href: '/saas/workflows' },
    { label: 'Tasks', icon: ListTodo, href: '/saas/tasks' },
    { label: 'Approvals', icon: CheckSquare, href: '/saas/approvals' },
    { label: 'Documents', icon: File, href: '/saas/documents' },
    { label: 'Reports', icon: BarChart3, href: '/saas/reports' },
    { label: 'Settings', icon: Settings, href: '/saas/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('alurin_user');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Mobile Header (visible only on mobile) */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 z-30 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center drop-shadow-md">
            <Image src="/logo.png" alt="Alurin" width={32} height={32} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-navy-900 text-lg">Alurin</span>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center drop-shadow-md">
              <Image src="/logo.png" alt="Alurin" width={32} height={32} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-navy-900 text-lg tracking-tight">Alurin</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Workspace Selector Mock */}
        <div className="px-4 py-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Workspace</span>
              <span className="text-xs font-semibold text-navy-900 truncate">{user.workspace}</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Menu Utama</div>
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Bottom */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-navy-900 truncate">{user.name}</span>
              <span className="text-[11px] text-gray-500 truncate">{user.role}</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Keluar Demo
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        {/* Topbar Desktop */}
        <header className="hidden md:flex bg-white h-16 border-b border-gray-200 items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-navy-900 capitalize">
              {pathname.split('/').pop().replace('-', ' ') || 'Dashboard'}
            </h1>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-700 rounded-md">
              Mode Percobaan
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearch(true)}
                onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                placeholder="Cari data, form, task..." 
                className="pl-9 pr-4 py-1.5 bg-gray-100 border-transparent rounded-full text-xs focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all w-64"
              />
              {showSearch && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 overflow-hidden">
                  {searchResults.length > 0 ? (
                    searchResults.map((res, i) => (
                      <Link 
                        key={i} 
                        href={res.link} 
                        className="flex flex-col px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xs font-semibold text-navy-900">{res.title}</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{res.type}</span>
                          <span className="text-[10px] text-gray-500 truncate">{res.desc}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-center text-xs text-gray-500">Tidak ada hasil ditemukan.</div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowNotif(!showNotif)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                )}
              </button>

              {showNotif && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                    <span className="text-xs font-bold text-navy-900">Notifikasi</span>
                    <button 
                      onClick={() => setNotifications(notifications.map(n => ({...n, read: true})))}
                      className="text-[10px] text-blue-600 hover:underline"
                    >
                      Tandai dibaca
                    </button>
                  </div>
                  <div className="space-y-2">
                    {notifications.map(n => (
                      <div key={n.id} className={`p-2 rounded-lg text-xs ${n.read ? 'bg-gray-50 text-gray-500' : 'bg-blue-50/50 text-navy-900 font-medium'}`}>
                        <div>{n.title}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{n.time}</div>
                      </div>
                    ))}
                    {notifications.length === 0 && (
                      <div className="text-center text-xs text-gray-400 py-2">Tidak ada notifikasi</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 relative">
          {children}
        </div>
      </main>

    </div>
  );
}
