import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, TrendingUp, Users, Clock } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Atelier Bois & Tradition',
      category: 'Artisan ébéniste',
      description:
        'Site vitrine pour un artisan ébéniste spécialisé dans la restauration de meubles anciens et la création sur mesure. Design chaleureux mettant en valeur le savoir-faire et les réalisations.',
      tags: ['Site vitrine', 'Design sur mesure', 'Responsive'],
      gradient: 'from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D]',
      bgGradient: 'from-amber-900/20 to-orange-900/20',
      accentColor: 'bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A]',
    },
    {
      title: 'La Petite Épicerie',
      category: 'Commerce local',
      description:
        'Landing page pour une épicerie fine de quartier proposant des produits locaux et bio. Interface claire et accueillante avec présentation des produits et horaires d\'ouverture.',
      tags: ['Landing page', 'Commerce', 'Optimisé mobile'],
      gradient: 'from-[#51CF66] via-[#37B24D] to-[#2B8A3E]',
      bgGradient: 'from-green-900/20 to-emerald-900/20',
      accentColor: 'bg-gradient-to-r from-[#51CF66] to-[#37B24D]',
    },
    {
      title: 'Marie Dubois Photographie',
      category: 'Créatrice indépendante',
      description:
        'Portfolio en ligne pour une photographe indépendante spécialisée dans les portraits et mariages. Design épuré et élégant mettant en avant les photographies avec une galerie visuelle.',
      tags: ['Portfolio', 'Galerie photos', 'Design minimaliste'],
      gradient: 'from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]',
      bgGradient: 'from-purple-900/20 to-violet-900/20',
      accentColor: 'bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6]',
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: '50+',
      label: 'Projets réalisés',
      gradient: 'from-[#FF6B6B] to-[#FFA07A]',
    },
    {
      icon: Users,
      value: '100%',
      label: 'Clients satisfaits',
      gradient: 'from-[#4ECDC4] to-[#44A8A0]',
    },
    {
      icon: Clock,
      value: '7j',
      label: 'Délai moyen',
      gradient: 'from-[#A78BFA] to-[#8B5CF6]',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#16213E] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#FF6B6B] rounded-full blur-[120px] opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#4ECDC4] rounded-full blur-[140px] opacity-15 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                <Sparkles size={16} className="text-[#FF6B6B]" />
                <span className="text-white/90">Portfolio</span>
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Nos créations
              <br />
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] bg-clip-text text-transparent">
                qui inspirent
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Découvrez quelques-unes de nos réalisations. Chaque projet est unique et conçu pour
              répondre aux besoins spécifiques de nos clients, avec une attention particulière portée
              au design et à l'expérience utilisateur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} animate-slide-in-left`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-5xl font-bold mb-6 text-white">{project.title}</h2>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium rounded-full text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center space-x-2 text-sm font-medium text-white/50 hover:text-white/70 transition-colors">
                    <span>Projet de démonstration</span>
                    <ExternalLink size={16} />
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div
                      className={`relative aspect-[4/3] bg-gradient-to-br ${project.bgGradient} rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm`}
                    >
                      <div className="absolute inset-0 flex flex-col p-8">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse-slow"></div>
                            <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 rounded-full bg-white/30 animate-pulse-slow" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${project.accentColor} animate-pulse`}></div>
                        </div>

                        <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-white/20">
                          <div>
                            <div className="h-5 bg-white/20 rounded-lg w-3/4 mb-4 animate-pulse-slow"></div>
                            <div className="h-3 bg-white/10 rounded-lg w-1/2 mb-8 animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="h-28 bg-white/10 rounded-xl animate-pulse-slow" style={{ animationDelay: '0.3s' }}></div>
                              <div className="h-28 bg-white/10 rounded-xl animate-pulse-slow" style={{ animationDelay: '0.4s' }}></div>
                            </div>

                            <div className="space-y-2">
                              <div className="h-2 bg-white/10 rounded-full w-full animate-pulse-slow"></div>
                              <div className="h-2 bg-white/10 rounded-full w-5/6 animate-pulse-slow" style={{ animationDelay: '0.1s' }}></div>
                              <div className="h-2 bg-white/10 rounded-full w-4/6 animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>

                          <div className={`h-10 ${project.accentColor} rounded-xl mt-6 shadow-lg`}></div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[150px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative text-center bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className={`text-6xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                    <div className="text-white/60 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Chaque projet est une collaboration unique. Nous prenons le temps de comprendre votre
              activité pour créer un site qui vous ressemble vraiment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#FF6B6B] rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#4ECDC4] rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Votre projet sera le prochain ?
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Discutons de vos besoins et créons ensemble votre présence en ligne
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,107,107,0.4)] hover:shadow-[0_0_60px_rgba(255,107,107,0.6)]"
          >
            <span>Lancer mon projet</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
