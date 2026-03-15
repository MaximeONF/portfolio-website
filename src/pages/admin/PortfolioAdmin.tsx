import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import AdminCard from '../../components/admin/AdminCard';
import FormInput from '../../components/admin/FormInput';
import FormTextarea from '../../components/admin/FormTextarea';
import ImageUpload from '../../components/admin/ImageUpload';
import SaveButton from '../../components/admin/SaveButton';
import Toast from '../../components/admin/Toast';
import { Plus, Trash2, CreditCard as Edit2, Eye, EyeOff } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  link: string;
  technologies: string[];
  order_index: number;
  is_visible: boolean;
}

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('order_index');

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error loading projects:', error);
      setToast({ message: 'Erreur lors du chargement des projets', type: 'error' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setLoading(true);

    try {
      const projectData = {
        ...editingProject,
        technologies: editingProject.technologies || [],
      };

      if (editingProject.id) {
        const { error } = await supabase
          .from('portfolio_projects')
          .update({
            ...projectData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingProject.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('portfolio_projects').insert([
          {
            ...projectData,
            order_index: projects.length,
          },
        ]);
        if (error) throw error;
      }

      setToast({ message: 'Projet enregistré avec succès', type: 'success' });
      setEditingProject(null);
      loadProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      setToast({ message: 'Erreur lors de l\'enregistrement', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return;

    try {
      const { error } = await supabase.from('portfolio_projects').delete().eq('id', id);
      if (error) throw error;

      setToast({ message: 'Projet supprimé avec succès', type: 'success' });
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      setToast({ message: 'Erreur lors de la suppression', type: 'error' });
    }
  };

  const toggleVisibility = async (project: Project) => {
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({ is_visible: !project.is_visible })
        .eq('id', project.id);

      if (error) throw error;
      loadProjects();
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-gray-400">Gérez vos projets portfolio</p>
        </div>
        <button
          onClick={() =>
            setEditingProject({
              title: '',
              description: '',
              image_url: '',
              category: 'Web',
              link: '',
              technologies: [],
              order_index: projects.length,
              is_visible: true,
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter un projet
        </button>
      </div>

      {editingProject && (
        <form onSubmit={handleSubmit}>
          <AdminCard title={editingProject.id ? 'Modifier le projet' : 'Nouveau projet'}>
            <div className="space-y-6">
              <FormInput
                label="Titre du projet"
                value={editingProject.title || ''}
                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                placeholder="Mon Super Projet"
                required
              />

              <FormTextarea
                label="Description"
                value={editingProject.description || ''}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                placeholder="Description du projet..."
                required
              />

              <ImageUpload
                label="Image du projet"
                currentImage={editingProject.image_url}
                onUpload={(url) => setEditingProject({ ...editingProject, image_url: url })}
                folder="portfolio"
              />

              <FormInput
                label="Catégorie"
                value={editingProject.category || ''}
                onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                placeholder="Web, Mobile, Design..."
                required
              />

              <FormInput
                label="Lien externe (optionnel)"
                value={editingProject.link || ''}
                onChange={(e) => setEditingProject({ ...editingProject, link: e.target.value })}
                placeholder="https://example.com"
                type="url"
              />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technologies (séparées par des virgules)
                </label>
                <input
                  type="text"
                  value={editingProject.technologies?.join(', ') || ''}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      technologies: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  placeholder="React, TypeScript, Tailwind"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_visible"
                  checked={editingProject.is_visible ?? true}
                  onChange={(e) => setEditingProject({ ...editingProject, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#4ECDC4] focus:ring-[#4ECDC4] focus:ring-offset-0"
                />
                <label htmlFor="is_visible" className="text-gray-300">
                  Visible sur le site
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
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

      <AdminCard title="Liste des projets">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.length === 0 ? (
            <p className="text-gray-400 text-center py-8 col-span-full">Aucun projet pour le moment</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                      {!project.is_visible && (
                        <span className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                          Masqué
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleVisibility(project)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title={project.is_visible ? 'Masquer' : 'Afficher'}
                    >
                      {project.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
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
