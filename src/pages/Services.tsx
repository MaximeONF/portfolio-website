import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Palette,
  Layers,
  Code,
  MessageCircle,
  Search,
  Lightbulb,
  CheckCircle,
  Laptop,
  Rocket,
  Euro,
  Clock,
  Wrench,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Site vitrine',
      description:
        'Un site complet pour présenter votre activité, vos services et votre expertise. Idéal pour les artisans, commerçants, créateurs et indépendants qui souhaitent établir une présence professionnelle en ligne.',
      features: [
        'Design moderne et personnalisé',
        'Structure claire et intuitive',
        'Optimisé pour tous les appareils',
        'Formulaire de contact intégré',
        'Sections modulables selon vos besoins',
      ],
      gradient: 'from-[#FF6B6B] to-[#FFA07A]',
    },
    {
      icon: Layers,
      title: 'Landing page',
      description:
        'Une page unique et percutante conçue pour convertir vos visiteurs. Parfaite pour promouvoir une offre spéciale, lancer un produit, annoncer un événement ou capter des prospects qualifiés.',
      features: [
        'Message clair et ciblé',
        'Design orienté conversion',
        'Appel à l\'action optimisé',
        'Temps de chargement rapide',
        'Parfait pour les campagnes marketing',
      ],
      gradient: 'from-[#4ECDC4] to-[#44A8A0]',
    },
    {
      icon: Code,
      title: 'Design sur mesure',
      description:
        'Un accompagnement personnalisé pour créer une identité visuelle unique qui reflète parfaitement votre univers. Nous travaillons main dans la main avec vous pour définir le style, les couleurs, la typographie et l\'ambiance de votre site.',
      features: [
        'Échanges créatifs et collaboratifs',
        'Moodboard et propositions visuelles',
        'Adaptation à votre charte graphique',
        'Révisions incluses',
        'Résultat qui vous ressemble',
      ],
      gradient: 'from-[#A78BFA] to-[#8B5CF6]',
    },
  ];

  const methodSteps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Prise de contact',
      description:
        'Nous échangeons sur votre projet, vos attentes et vos objectifs. C\'est le moment de faire connaissance et de poser les bases de notre collaboration.',
      gradient: 'from-[#FF6B6B] to-[#FFA07A]',
    },
    {
      number: '02',
      icon: Search,
      title: 'Analyse du besoin',
      description:
        'Nous identifions précisément vos besoins, votre audience et le message que vous souhaitez transmettre. Cette étape nous permet de construire une solution parfaitement adaptée.',
      gradient: 'from-[#4ECDC4] to-[#44A8A0]',
    },
    {
      number: '03',
      icon: Lightbulb,
      title: 'Proposition de direction visuelle',
      description:
        'Nous vous présentons des pistes créatives : ambiances visuelles, palette de couleurs, typographies. Vous choisissez la direction qui vous correspond.',
      gradient: 'from-[#A78BFA] to-[#8B5CF6]',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Validation',
      description:
        'Une fois la direction visuelle approuvée, nous validons ensemble la structure du site, les contenus et les fonctionnalités. Tout est clair avant de passer à la réalisation.',
      gradient: 'from-[#FFD93D] to-[#FFA07A]',
    },
    {
      number: '05',
      icon: Laptop,
      title: 'Création du site',
      description:
        'Nous développons votre site avec soin, en respectant le design validé. Vous pouvez suivre l\'avancement et nous faire des retours tout au long du processus.',
      gradient: 'from-[#51CF66] to-[#37B24D]',
    },
    {
      number: '06',
      icon: Rocket,
      title: 'Mise en ligne et ajustements',
      description:
        'Votre site est mis en ligne et testé dans les moindres détails. Nous procédons aux derniers ajustements pour vous livrer un site parfaitement fonctionnel.',
      gradient: 'from-[#FF6B6B] to-[#A78BFA]',
    },
  ];

  const options = [
    {
      icon: Layers,
      title: 'Page supplémentaire',
      price: '200 €',
      description: 'Ajout d\'une nouvelle page à votre site existant',
      gradient: 'from-[#FF6B6B] to-[#FFA07A]',
    },
    {
      icon: Wrench,
      title: 'Modification de contenu',
      price: '50 €',
      description: 'Mise à jour de textes, images ou informations',
      gradient: 'from-[#4ECDC4] to-[#44A8A0]',
    },
    {
      icon: Code,
      title: 'Ajout de section',
      price: '150 €',
      description: 'Nouvelle section avec fonctionnalités spécifiques',
      gradient: 'from-[#A78BFA] to-[#8B5CF6]',
    },
    {
      icon: Search,
      title: 'Aide au nom de domaine',
      price: '50 €',
      description: 'Accompagnement pour l\'achat et la configuration',
      gradient: 'from-[#FFD93D] to-[#FFA07A]',
    },
    {
      icon: Clock,
      title: 'Maintenance ponctuelle',
      price: '80 € / heure',
      description: 'Intervention technique ou mise à jour',
      gradient: 'from-[#51CF66] to-[#37B24D]',
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
                <span className="text-white/90">Services premium</span>
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Des solutions pensées
              <br />
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] bg-clip-text text-transparent">
                pour vous
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Chez Studio Workora, nous proposons des services adaptés à chaque étape de votre projet.
              Du simple site vitrine au design entièrement sur mesure, nous trouvons la solution qui
              correspond à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} animate-slide-in-left`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,107,107,0.3)]`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-5xl font-bold mb-6 text-white">{service.title}</h2>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 group">
                          <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                            <CheckCircle size={16} className="text-[#51CF66]" />
                          </div>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                      <div className="relative aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                        <Icon size={180} className="text-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[150px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                <Zap size={16} className="text-[#FFD93D]" />
                <span className="text-white/90">Notre processus</span>
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Notre méthode de travail</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Un processus clair et structuré en 6 étapes pour vous accompagner du premier échange
              jusqu'à la mise en ligne de votre site
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>{step.number}</span>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-lg`}>
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                <Euro size={16} className="text-[#51CF66]" />
                <span className="text-white/90">Tarification transparente</span>
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Tarification</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Des tarifs transparents et adaptés à votre projet
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative group animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-3xl text-center">
                <div className="inline-flex items-center space-x-3 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#51CF66] to-[#37B24D] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(81,207,102,0.4)]">
                    <Euro size={32} className="text-white" />
                  </div>
                  <span className="text-7xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] bg-clip-text text-transparent">1 200 €</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Création de site vitrine</h3>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                  Comprend le design sur mesure, le développement complet, l'intégration de vos contenus,
                  l'optimisation responsive et la mise en ligne. Un site prêt à l'emploi qui vous ressemble.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,107,107,0.4)] hover:shadow-[0_0_60px_rgba(255,107,107,0.6)]"
                >
                  <span>Commencer mon projet</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">Options supplémentaires</h3>
            <p className="text-lg text-white/60">
              Faites évoluer votre site selon vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${option.gradient} shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-3 text-white">{option.price}</div>
                    <h4 className="text-xl font-bold mb-3 text-white">{option.title}</h4>
                    <p className="text-white/60">{option.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#FF6B6B] rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#4ECDC4] rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Une question sur nos services ?</h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,107,107,0.4)] hover:shadow-[0_0_60px_rgba(255,107,107,0.6)]"
          >
            <span>Nous contacter</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
