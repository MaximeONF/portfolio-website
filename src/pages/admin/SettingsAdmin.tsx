import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import ImageUpload from '../../components/admin/ImageUpload';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';

interface SiteSettings {
  id?: string;
  site_name: string;
  site_tagline: string;
  logo_url: string;
  favicon_url: string;
  primary_color: string;
  secondary_color: string;
}

export default function SettingsAdmin() {
  const [data, setData] = useState<SiteSettings>({
    site_name: '',
    site_tagline: '',
    logo_url: '',
    favicon_url: '',
    primary_color: '#FF6B6B',
    secondary_color: '#4ECDC4',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: settingsData, error } = await supabase
        .from('site_settings')
        .select('*')
        .maybeSingle();

      if (error) throw error;

      if (settingsData) {
        setData(settingsData);
      }
    } catch (error) {
      console.error('Error loading site settings:', error);
      setToast({ message: 'Erreur lors du chargement des paramètres', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (data.id) {
        const { error } = await supabase
          .from('site_settings')
          .update({
            site_name: data.site_name,
            site_tagline: data.site_tagline,
            logo_url: data.logo_url,
            favicon_url: data.favicon_url,
            primary_color: data.primary_color,
            secondary_color: data.secondary_color,
            updated_at: new Date().toISOString(),
          })
          .eq('id', data.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('site_settings').insert([data]);
        if (error) throw error;
      }

      setToast({ message: 'Paramètres du site enregistrés avec succès', type: 'success' });
      loadData();
    } catch (error) {
      console.error('Error saving site settings:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Paramètres du Site</h1>
        <p className="text-gray-400">Configurez les paramètres généraux de votre site</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <AdminCard title="Identité du site">
            <div className="space-y-6">
              <FormInput
                label="Nom du site"
                value={data.site_name}
                onChange={(e) => setData({ ...data, site_name: e.target.value })}
                placeholder="Mon Portfolio"
                required
              />

              <FormInput
                label="Slogan du site"
                value={data.site_tagline}
                onChange={(e) => setData({ ...data, site_tagline: e.target.value })}
                placeholder="Créateur de sites web modernes"
                required
              />

              <ImageUpload
                label="Logo (optionnel)"
                currentImage={data.logo_url}
                onUpload={(url) => setData({ ...data, logo_url: url })}
                folder="branding"
              />

              <ImageUpload
                label="Favicon (optionnel)"
                currentImage={data.favicon_url}
                onUpload={(url) => setData({ ...data, favicon_url: url })}
                folder="branding"
              />
            </div>
          </AdminCard>

          <AdminCard title="Couleurs du thème">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Couleur primaire
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    value={data.primary_color}
                    onChange={(e) => setData({ ...data, primary_color: e.target.value })}
                    className="w-20 h-12 rounded-lg border border-white/10 bg-white/5 cursor-pointer"
                  />
                  <FormInput
                    label=""
                    value={data.primary_color}
                    onChange={(e) => setData({ ...data, primary_color: e.target.value })}
                    placeholder="#FF6B6B"
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Couleur secondaire
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    value={data.secondary_color}
                    onChange={(e) => setData({ ...data, secondary_color: e.target.value })}
                    className="w-20 h-12 rounded-lg border border-white/10 bg-white/5 cursor-pointer"
                  />
                  <FormInput
                    label=""
                    value={data.secondary_color}
                    onChange={(e) => setData({ ...data, secondary_color: e.target.value })}
                    placeholder="#4ECDC4"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </AdminCard>

          <div className="flex justify-end">
            <SaveButton loading={loading} />
          </div>
        </div>
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
