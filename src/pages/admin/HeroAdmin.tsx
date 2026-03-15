import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import ImageUpload from '../../components/admin/ImageUpload';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';

interface HeroData {
  id?: string;
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  background_image: string;
  is_visible: boolean;
}

export default function HeroAdmin() {
  const [data, setData] = useState<HeroData>({
    title: '',
    subtitle: '',
    cta_text: '',
    cta_link: '',
    background_image: '',
    is_visible: true,
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: heroData, error } = await supabase
        .from('hero_content')
        .select('*')
        .maybeSingle();

      if (error) throw error;

      if (heroData) {
        setData(heroData);
      }
    } catch (error) {
      console.error('Error loading hero data:', error);
      setToast({ message: 'Erreur lors du chargement des données', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (data.id) {
        const { error } = await supabase
          .from('hero_content')
          .update({
            title: data.title,
            subtitle: data.subtitle,
            cta_text: data.cta_text,
            cta_link: data.cta_link,
            background_image: data.background_image,
            is_visible: data.is_visible,
            updated_at: new Date().toISOString(),
          })
          .eq('id', data.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('hero_content').insert([data]);
        if (error) throw error;
      }

      setToast({ message: 'Modifications enregistrées avec succès', type: 'success' });
      loadData();
    } catch (error) {
      console.error('Error saving hero data:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hero Section</h1>
        <p className="text-gray-400">Gérez le contenu de la section hero de la page d'accueil</p>
      </div>

      <form onSubmit={handleSubmit}>
        <AdminCard title="Contenu du Hero">
          <div className="space-y-6">
            <FormInput
              label="Titre principal"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Créateur de sites web modernes"
              required
            />

            <FormInput
              label="Sous-titre"
              value={data.subtitle}
              onChange={(e) => setData({ ...data, subtitle: e.target.value })}
              placeholder="Design • Développement • Performance"
              required
            />

            <FormInput
              label="Texte du bouton CTA"
              value={data.cta_text}
              onChange={(e) => setData({ ...data, cta_text: e.target.value })}
              placeholder="Voir mes réalisations"
              required
            />

            <FormInput
              label="Lien du bouton CTA"
              value={data.cta_link}
              onChange={(e) => setData({ ...data, cta_link: e.target.value })}
              placeholder="/portfolio"
              required
            />

            <ImageUpload
              label="Image de fond (optionnel)"
              currentImage={data.background_image}
              onUpload={(url) => setData({ ...data, background_image: url })}
              folder="hero"
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
