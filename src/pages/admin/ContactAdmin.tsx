import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';

interface ContactSettings {
  id?: string;
  email: string;
  phone: string;
  address: string;
  social_links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
  business_hours: string;
}

export default function ContactAdmin() {
  const [data, setData] = useState<ContactSettings>({
    email: '',
    phone: '',
    address: '',
    social_links: {},
    business_hours: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: contactData, error } = await supabase
        .from('contact_settings')
        .select('*')
        .maybeSingle();

      if (error) throw error;

      if (contactData) {
        setData(contactData);
      }
    } catch (error) {
      console.error('Error loading contact settings:', error);
      setToast({ message: 'Erreur lors du chargement des données', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (data.id) {
        const { error } = await supabase
          .from('contact_settings')
          .update({
            email: data.email,
            phone: data.phone,
            address: data.address,
            social_links: data.social_links,
            business_hours: data.business_hours,
            updated_at: new Date().toISOString(),
          })
          .eq('id', data.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('contact_settings').insert([data]);
        if (error) throw error;
      }

      setToast({ message: 'Paramètres de contact enregistrés avec succès', type: 'success' });
      loadData();
    } catch (error) {
      console.error('Error saving contact settings:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Informations de Contact</h1>
        <p className="text-gray-400">Gérez vos informations de contact et réseaux sociaux</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <AdminCard title="Informations principales">
            <div className="space-y-6">
              <FormInput
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="contact@example.com"
                required
              />

              <FormInput
                label="Téléphone"
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="+33 6 00 00 00 00"
                required
              />

              <FormTextarea
                label="Adresse (optionnel)"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                placeholder="123 Rue Example, 75001 Paris"
                rows={3}
              />

              <FormTextarea
                label="Horaires d'ouverture (optionnel)"
                value={data.business_hours}
                onChange={(e) => setData({ ...data, business_hours: e.target.value })}
                placeholder="Lundi - Vendredi: 9h - 18h"
                rows={3}
              />
            </div>
          </AdminCard>

          <AdminCard title="Réseaux sociaux">
            <div className="space-y-6">
              <FormInput
                label="LinkedIn (optionnel)"
                type="url"
                value={data.social_links.linkedin || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    social_links: { ...data.social_links, linkedin: e.target.value },
                  })
                }
                placeholder="https://linkedin.com/in/username"
              />

              <FormInput
                label="GitHub (optionnel)"
                type="url"
                value={data.social_links.github || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    social_links: { ...data.social_links, github: e.target.value },
                  })
                }
                placeholder="https://github.com/username"
              />

              <FormInput
                label="Twitter (optionnel)"
                type="url"
                value={data.social_links.twitter || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    social_links: { ...data.social_links, twitter: e.target.value },
                  })
                }
                placeholder="https://twitter.com/username"
              />

              <FormInput
                label="Instagram (optionnel)"
                type="url"
                value={data.social_links.instagram || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    social_links: { ...data.social_links, instagram: e.target.value },
                  })
                }
                placeholder="https://instagram.com/username"
              />
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
