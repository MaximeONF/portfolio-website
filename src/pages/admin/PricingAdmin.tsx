import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';
import { Plus, Trash2, CreditCard as Edit2, Eye, EyeOff, Star } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  is_featured: boolean;
  order_index: number;
  is_visible: boolean;
}

export default function PricingAdmin() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [editingPlan, setEditingPlan] = useState<Partial<PricingPlan> | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('pricing_plans')
        .select('*')
        .order('order_index');

      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      console.error('Error loading plans:', error);
      setToast({ message: 'Erreur lors du chargement des plans', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;

    setLoading(true);

    try {
      const planData = {
        ...editingPlan,
        features: editingPlan.features || [],
      };

      if (editingPlan.id) {
        const { error } = await supabase
          .from('pricing_plans')
          .update({
            ...planData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingPlan.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('pricing_plans').insert([
          {
            ...planData,
            order_index: plans.length,
          },
        ]);
        if (error) throw error;
      }

      setToast({ message: 'Plan enregistré avec succès', type: 'success' });
      setEditingPlan(null);
      loadPlans();
    } catch (error) {
      console.error('Error saving plan:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce plan ?')) return;

    try {
      const { error } = await supabase.from('pricing_plans').delete().eq('id', id);
      if (error) throw error;

      setToast({ message: 'Plan supprimé avec succès', type: 'success' });
      loadPlans();
    } catch (error) {
      console.error('Error deleting plan:', error);
      setToast({ message: 'Erreur lors de la suppression', type: 'error' });
    }
  };

  const toggleVisibility = async (plan: PricingPlan) => {
    try {
      const { error } = await supabase
        .from('pricing_plans')
        .update({ is_visible: !plan.is_visible })
        .eq('id', plan.id);

      if (error) throw error;
      loadPlans();
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tarification</h1>
          <p className="text-gray-400">Gérez vos plans tarifaires</p>
        </div>
        <button
          onClick={() =>
            setEditingPlan({
              name: '',
              price: 0,
              currency: '€',
              description: '',
              features: [],
              is_featured: false,
              order_index: plans.length,
              is_visible: true,
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter un plan
        </button>
      </div>

      {editingPlan && (
        <form onSubmit={handleSubmit}>
          <AdminCard title={editingPlan.id ? 'Modifier le plan' : 'Nouveau plan'}>
            <div className="space-y-6">
              <FormInput
                label="Nom du plan"
                value={editingPlan.name || ''}
                onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                placeholder="Site Vitrine"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Prix"
                  type="number"
                  value={editingPlan.price || ''}
                  onChange={(e) => setEditingPlan({ ...editingPlan, price: parseFloat(e.target.value) })}
                  placeholder="1200"
                  required
                />

                <FormInput
                  label="Devise"
                  value={editingPlan.currency || ''}
                  onChange={(e) => setEditingPlan({ ...editingPlan, currency: e.target.value })}
                  placeholder="€"
                  required
                />
              </div>

              <FormTextarea
                label="Description"
                value={editingPlan.description || ''}
                onChange={(e) => setEditingPlan({ ...editingPlan, description: e.target.value })}
                placeholder="Description du plan..."
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fonctionnalités (une par ligne)
                </label>
                <textarea
                  value={editingPlan.features?.join('\n') || ''}
                  onChange={(e) =>
                    setEditingPlan({
                      ...editingPlan,
                      features: e.target.value.split('\n').filter(Boolean),
                    })
                  }
                  placeholder="Design sur mesure&#10;Pages responsive&#10;Formulaire de contact"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_featured"
                  checked={editingPlan.is_featured ?? false}
                  onChange={(e) => setEditingPlan({ ...editingPlan, is_featured: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
                />
                <label htmlFor="is_featured" className="text-gray-300">
                  Plan mis en avant
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_visible"
                  checked={editingPlan.is_visible ?? true}
                  onChange={(e) => setEditingPlan({ ...editingPlan, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
                />
                <label htmlFor="is_visible" className="text-gray-300">
                  Visible sur le site
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingPlan(null)}
                  className="px-6 py-3 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Annuler
                </button>
                <SaveButton loading={loading} />
              </div>
            </div>
          </AdminCard>
        </form>
      )}

      <AdminCard title="Liste des plans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.length === 0 ? (
            <p className="text-gray-400 text-center py-8 col-span-full">Aucun plan pour le moment</p>
          ) : (
            plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold text-xl">{plan.name}</h3>
                      {plan.is_featured && (
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      )}
                    </div>
                    <p className="text-3xl font-bold text-[#4ECDC4]">
                      {plan.price} {plan.currency}
                    </p>
                    {!plan.is_visible && (
                      <span className="inline-block mt-2 px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                        Masqué
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleVisibility(plan)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title={plan.is_visible ? 'Masquer' : 'Afficher'}
                  >
                    {plan.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setEditingPlan(plan)}
                    className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </AdminCard>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
