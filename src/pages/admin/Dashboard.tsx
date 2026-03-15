import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import {
  Image,
  User,
  Briefcase,
  FolderOpen,
  CreditCard,
  HelpCircle,
  Mail,
  Settings,
  TrendingUp,
} from 'lucide-react';
import AdminCard from '../../components/admin/AdminCard';

interface Stats {
  services: number;
  projects: number;
  faq: number;
  pricing: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    services: 0,
    projects: 0,
    faq: 0,
    pricing: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [servicesRes, projectsRes, faqRes, pricingRes] = await Promise.all([
        supabase.from('services').select('id', { count: 'exact', head: true }),
        supabase.from('portfolio_projects').select('id', { count: 'exact', head: true }),
        supabase.from('faq_items').select('id', { count: 'exact', head: true }),
        supabase.from('pricing_plans').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        services: servicesRes.count || 0,
        projects: projectsRes.count || 0,
        faq: faqRes.count || 0,
        pricing: pricingRes.count || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const quickLinks = [
    { name: 'Hero', href: '/admin/hero', icon: Image, color: 'from-purple-500 to-pink-500' },
    { name: 'Présentation', href: '/admin/presentation', icon: User, color: 'from-blue-500 to-cyan-500' },
    { name: 'Services', href: '/admin/services', icon: Briefcase, color: 'from-green-500 to-emerald-500', count: stats.services },
    { name: 'Portfolio', href: '/admin/portfolio', icon: FolderOpen, color: 'from-orange-500 to-red-500', count: stats.projects },
    { name: 'Tarifs', href: '/admin/pricing', icon: CreditCard, color: 'from-yellow-500 to-orange-500', count: stats.pricing },
    { name: 'FAQ', href: '/admin/faq', icon: HelpCircle, color: 'from-indigo-500 to-purple-500', count: stats.faq },
    { name: 'Contact', href: '/admin/contact', icon: Mail, color: 'from-pink-500 to-rose-500' },
    { name: 'Paramètres', href: '/admin/settings', icon: Settings, color: 'from-gray-500 to-slate-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Gérez le contenu de votre site web</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Briefcase className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-6 h-6 opacity-60" />
          </div>
          <p className="text-3xl font-bold mb-1">{stats.services}</p>
          <p className="text-sm opacity-90">Services</p>
        </div>

        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <FolderOpen className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-6 h-6 opacity-60" />
          </div>
          <p className="text-3xl font-bold mb-1">{stats.projects}</p>
          <p className="text-sm opacity-90">Projets Portfolio</p>
        </div>

        <div className="bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <HelpCircle className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-6 h-6 opacity-60" />
          </div>
          <p className="text-3xl font-bold mb-1">{stats.faq}</p>
          <p className="text-sm opacity-90">Questions FAQ</p>
        </div>

        <div className="bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <CreditCard className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-6 h-6 opacity-60" />
          </div>
          <p className="text-3xl font-bold mb-1">{stats.pricing}</p>
          <p className="text-sm opacity-90">Plans Tarifaires</p>
        </div>
      </div>

      <AdminCard title="Accès rapide" description="Gérez les différentes sections de votre site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg mb-4`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{link.name}</h3>
                {link.count !== undefined && (
                  <p className="text-sm text-gray-400">{link.count} élément{link.count !== 1 ? 's' : ''}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}