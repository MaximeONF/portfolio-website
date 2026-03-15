import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';
import { Plus, Trash2, CreditCard as Edit2, Eye, EyeOff } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order_index: number;
  is_visible: boolean;
}

export default function FaqAdmin() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [editingItem, setEditingItem] = useState<Partial<FaqItem> | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const { data, error } = await supabase
        .from('faq_items')
        .select('*')
        .order('order_index');

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error loading FAQ items:', error);
      setToast({ message: 'Erreur lors du chargement des questions', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setLoading(true);

    try {
      if (editingItem.id) {
        const { error } = await supabase
          .from('faq_items')
          .update({
            ...editingItem,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('faq_items').insert([
          {
            ...editingItem,
            order_index: items.length,
          },
        ]);
        if (error) throw error;
      }

      setToast({ message: 'Question enregistrée avec succès', type: 'success' });
      setEditingItem(null);
      loadItems();
    } catch (error) {
      console.error('Error saving FAQ item:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) return;

    try {
      const { error } = await supabase.from('faq_items').delete().eq('id', id);
      if (error) throw error;

      setToast({ message: 'Question supprimée avec succès', type: 'success' });
      loadItems();
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
      setToast({ message: 'Erreur lors de la suppression', type: 'error' });
    }
  };

  const toggleVisibility = async (item: FaqItem) => {
    try {
      const { error } = await supabase
        .from('faq_items')
        .update({ is_visible: !item.is_visible })
        .eq('id', item.id);

      if (error) throw error;
      loadItems();
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">FAQ</h1>
          <p className="text-gray-400">Gérez les questions fréquemment posées</p>
        </div>
        <button
          onClick={() =>
            setEditingItem({
              question: '',
              answer: '',
              category: 'Général',
              order_index: items.length,
              is_visible: true,
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter une question
        </button>
      </div>

      {editingItem && (
        <form onSubmit={handleSubmit}>
          <AdminCard title={editingItem.id ? 'Modifier la question' : 'Nouvelle question'}>
            <div className="space-y-6">
              <FormInput
                label="Question"
                value={editingItem.question || ''}
                onChange={(e) => setEditingItem({ ...editingItem, question: e.target.value })}
                placeholder="Quel est le délai de livraison ?"
                required
              />

              <FormTextarea
                label="Réponse"
                value={editingItem.answer || ''}
                onChange={(e) => setEditingItem({ ...editingItem, answer: e.target.value })}
                placeholder="Le délai de livraison est de..."
                rows={6}
                required
              />

              <FormInput
                label="Catégorie"
                value={editingItem.category || ''}
                onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                placeholder="Général, Tarifs, Technique..."
                required
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_visible"
                  checked={editingItem.is_visible ?? true}
                  onChange={(e) => setEditingItem({ ...editingItem, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
                />
                <label htmlFor="is_visible" className="text-gray-300">
                  Visible sur le site
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
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

      <AdminCard title="Liste des questions">
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Aucune question pour le moment</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{item.question}</h3>
                      <span className="px-2 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] text-xs rounded">
                        {item.category}
                      </span>
                      {!item.is_visible && (
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                          Masqué
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{item.answer}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => toggleVisibility(item)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title={item.is_visible ? 'Masquer' : 'Afficher'}
                    >
                      {item.is_visible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
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
