import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';
import { Plus, Trash2, CreditCard as Edit2, Eye, EyeOff } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order_index: number;
  is_visible: boolean;
}

export default function ServicesAdmin() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Partial<Service> | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('order_index');

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error loading services:', error);
      setToast({ message: 'Erreur lors du chargement des services', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    setLoading(true);

    try {
      if (editingService.id) {
        const { error } = await supabase
          .from('services')
          .update({
            title: editingService.title,
            description: editingService.description,
            icon: editingService.icon,
            color: editingService.color,
            order_index: editingService.order_index,
            is_visible: editingService.is_visible,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingService.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('services').insert([
          {
            ...editingService,
            order_index: services.length,
          },
        ]);
        if (error) throw error;
      }

      setToast({ message: 'Service enregistré avec succès', type: 'success' });
      setEditingService(null);
      loadServices();
    } catch (error) {
      console.error('Error saving service:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) return;

    try {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;

      setToast({ message: 'Service supprimé avec succès', type: 'success' });
      loadServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      setToast({ message: 'Erreur lors de la suppression', type: 'error' });
    }
  };

  const toggleVisibility = async (service: Service) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ is_visible: !service.is_visible })
        .eq('id', service.id);

      if (error) throw error;
      loadServices();
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Services</h1>
          <p className="text-gray-400">Gérez les services proposés</p>
        </div>
        <button
          onClick={() =>
            setEditingService({
              title: '',
              description: '',
              icon: 'Code',
              color: 'from-blue-500 to-cyan-500',
              order_index: services.length,
              is_visible: true,
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter un service
        </button>
      </div>

      {editingService && (
        <form onSubmit={handleSubmit}>
          <AdminCard title={editingService.id ? 'Modifier le service' : 'Nouveau service'}>
            <div className="space-y-6">
              <FormInput
                label="Titre du service"
                value={editingService.title || ''}
                onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                placeholder="Développement Web"
                required
              />

              <FormTextarea
                label="Description"
                value={editingService.description || ''}
                onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                placeholder="Description du service..."
                required
              />

              <FormInput
                label="Icône Lucide (nom)"
                value={editingService.icon || ''}
                onChange={(e) => setEditingService({ ...editingService, icon: e.target.value })}
                placeholder="Code"
                required
              />

              <FormInput
                label="Couleur (gradient Tailwind)"
                value={editingService.color || ''}
                onChange={(e) => setEditingService({ ...editingService, color: e.target.value })}
                placeholder="from-blue-500 to-cyan-500"
                required
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_visible"
                  checked={editingService.is_visible ?? true}
                  onChange={(e) => setEditingService({ ...editingService, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
                />
                <label htmlFor="is_visible" className="text-gray-300">
                  Visible sur le site
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
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

      <AdminCard title="Liste des services">
        <div className="space-y-4">
          {services.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Aucun service pour le moment</p>
          ) : (
            services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{service.title}</h3>
                    {!service.is_visible && (
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                        Masqué
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleVisibility(service)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title={service.is_visible ? 'Masquer' : 'Afficher'}
                  >
                    {service.is_visible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setEditingService(service)}
                    className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
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
