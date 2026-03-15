import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  Image,
  User,
  Briefcase,
  FolderOpen,
  CreditCard,
  HelpCircle,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Hero', href: '/admin/hero', icon: Image },
  { name: 'Présentation', href: '/admin/presentation', icon: User },
  { name: 'Services', href: '/admin/services', icon: Briefcase },
  { name: 'Portfolio', href: '/admin/portfolio', icon: FolderOpen },
  { name: 'Tarifs', href: '/admin/pricing', icon: CreditCard },
  { name: 'FAQ', href: '/admin/faq', icon: HelpCircle },
  { name: 'Contact', href: '/admin/contact', icon: Mail },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Admin</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0F0F0F] border-r border-white/10 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/10">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-gray-400 mt-1">{user?.email}</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-red-500/10 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:pl-72 pt-16 lg:pt-0">
        <main className="p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}