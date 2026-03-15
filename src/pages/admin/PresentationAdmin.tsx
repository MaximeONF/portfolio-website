import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import ImageUpload from '../../components/admin/ImageUpload';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';

interface PresentationData {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  is_visible: boolean;
}

export default function PresentationAdmin() {
  const [data, setData] = useState<PresentationData>({
    title: '',
    description: '',
    image_url: '',
    is_visible: true,
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: presentationData, error } = await supabase
        .from('presentation_content')
        .select('*')
        .maybeSingle();

      if (error) throw error;

      if (presentationData) {
        setData(presentationData);
      }
    } catch (error) {
      console.error('Error loading presentation data:', error);
      setToast({ message: 'Erreur lors du chargement des données', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (data.id) {
        const { error } = await supabase
          .from('presentation_content')
          .update({
            title: data.title,
            description: data.description,
            image_url: data.image_url,
            is_visible: data.is_visible,
            updated_at: new Date().toISOString(),
          })
          .eq('id', data.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('presentation_content').insert([data]);
        if (error) throw error;
      }

      setToast({ message: 'Modifications enregistrées avec succès', type: 'success' });
      loadData();
    } catch (error) {
      console.error('Error saving presentation data:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Section Présentation</h1>
        <p className="text-gray-400">Gérez le contenu de la section de présentation</p>
      </div>

      <form onSubmit={handleSubmit}>
        <AdminCard title="Contenu de la Présentation">
          <div className="space-y-6">
            <FormInput
              label="Titre"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="À propos de moi"
              required
            />

            <FormTextarea
              label="Description"
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              placeholder="Je crée des expériences web uniques..."
              rows={6}
              required
            />

            <ImageUpload
              label="Image (optionnel)"
              currentImage={data.image_url}
              onUpload={(url) => setData({ ...data, image_url: url })}
              folder="presentation"
            />

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="is_visible"
                checked={data.is_visible}
                onChange={(e) => setData({ ...data, is_visible: e.target.checked })}
                className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
              />
              <label htmlFor="is_visible" className="text-gray-300">
                Afficher cette section sur le site
              </label>
            </div>

            <div className="flex justify-end">
              <SaveButton loading={loading} />
            </div>
          </div>
        </AdminCard>
      </form>

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
