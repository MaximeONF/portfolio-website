import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Code, Layers } from 'lucide-react';
import Hero3DScene from '../components/Hero3DScene';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#16213E]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6B6B]/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#4ECDC4]/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#FF6B6B] rounded-full blur-[120px] opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#4ECDC4] rounded-full blur-[140px] opacity-15 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#A78BFA] rounded-full blur-[100px] opacity-10 animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block animate-slide-in-left">
                <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                  <Sparkles size={16} className="text-[#FF6B6B]" />
                  <span className="text-white/90">Studio de création digitale premium</span>
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <span className="text-white">Donnez vie à</span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] bg-clip-text text-transparent animate-gradient">
                  votre vision
                </span>
                <br />
                <span className="text-white/80">digitale</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Studio Workora crée des expériences web immersives et élégantes.
                Nous transformons vos ambitions en sites vitrines modernes qui captivent et convertissent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,107,0.5)]"
                >
                  <span className="relative z-10">Démarrer votre projet</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFA07A] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 glassmorphism-hero text-white font-semibold rounded-xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <span>Explorer nos créations</span>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] border-2 border-[#1A1A2E] glow-avatar"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] border-2 border-[#1A1A2E] glow-avatar"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] border-2 border-[#1A1A2E] glow-avatar"></div>
                </div>
                <div>
                  <p className="text-white/90 font-medium text-sm">Créateurs passionnés</p>
                  <p className="text-white/50 text-xs">Designs primés et modernes</p>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] lg:h-[700px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Hero3DScene />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A78BFA] rounded-full blur-[140px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                  <Sparkles size={16} className="text-[#4ECDC4]" />
                  <span className="text-white/90">Notre approche</span>
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Un studio à
                <br />
                <span className="bg-gradient-to-r from-[#4ECDC4] via-[#44A8A0] to-[#51CF66] bg-clip-text text-transparent">
                  votre écoute
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-white/60 leading-relaxed">
                  Chez Studio Workora, nous croyons que chaque projet mérite une attention particulière.
                  Notre approche repose sur l'écoute, la créativité et l'accompagnement humain.
                </p>
                <p className="text-lg text-white/60 leading-relaxed">
                  Nous créons des sites vitrines pensés pour être simples et efficaces dès leur lancement,
                  tout en offrant la possibilité d'évoluer naturellement avec votre activité.
                </p>
                <p className="text-lg text-white/60 leading-relaxed">
                  Pas de complexité inutile, pas de jargon technique : juste un site qui vous ressemble
                  et qui répond à vos besoins actuels.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] bg-clip-text text-transparent mb-2">50+</div>
                    <div className="text-xs text-white/50">Projets livrés</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#44A8A0] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#4ECDC4] to-[#44A8A0] bg-clip-text text-transparent mb-2">100%</div>
                    <div className="text-xs text-white/50">Satisfaction</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent mb-2">7j</div>
                    <div className="text-xs text-white/50">Délai moyen</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/20 to-[#A78BFA]/20 rounded-3xl blur-2xl"></div>

                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="absolute top-[10%] left-[15%] w-48 h-64 glassmorphism-light rounded-2xl border border-white/20 shadow-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-xl mb-4 shadow-lg"></div>
                      <div className="space-y-2 mb-4">
                        <div className="h-3 bg-black/10 rounded-full w-3/4"></div>
                        <div className="h-2 bg-black/5 rounded-full w-full"></div>
                        <div className="h-2 bg-black/5 rounded-full w-5/6"></div>
                      </div>
                      <div className="h-32 bg-white/50 rounded-xl mb-3"></div>
                      <div className="h-8 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] rounded-lg"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute top-[25%] right-[10%] w-56 h-56 glassmorphism-purple rounded-2xl border border-white/20 shadow-2xl p-6 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] rounded-2xl mb-6 flex items-center justify-center shadow-lg glow-cyan">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-2 w-full">
                        <div className="h-3 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto"></div>
                      </div>
                      <div className="flex space-x-2 mt-6">
                        <div className="w-10 h-10 rounded-lg bg-white/20"></div>
                        <div className="w-10 h-10 rounded-lg bg-white/30"></div>
                        <div className="w-10 h-10 rounded-lg bg-white/20"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[15%] left-[20%] animate-float-slow">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#A78BFA]/50 to-[#8B5CF6]/50 glow-purple backdrop-blur-md"></div>
                  </div>

                  <div className="absolute top-[20%] right-[25%] animate-float-slow" style={{ animationDelay: '0.7s' }}>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD93D]/40 to-[#FFA07A]/40 glow-warm backdrop-blur-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#16213E] via-[#1A1A2E] to-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#FF6B6B] rounded-full blur-[120px] opacity-15 animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#4ECDC4] rounded-full blur-[140px] opacity-10 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                <Sparkles size={16} className="text-[#FFD93D]" />
                <span className="text-white/90">Services</span>
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Nos services
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Des solutions adaptées à vos besoins, conçues pour mettre en valeur votre activité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,107,107,0.4)] group-hover:scale-110 transition-transform">
                  <Palette size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Site vitrine</h3>
                <p className="text-white/60 mb-6 leading-relaxed flex-grow">
                  Un site complet pour présenter votre activité, vos services et votre expertise
                  avec élégance et professionnalisme.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors group"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(78,205,196,0.4)] group-hover:scale-110 transition-transform">
                  <Layers size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Landing page</h3>
                <p className="text-white/60 mb-6 leading-relaxed flex-grow">
                  Une page unique et percutante conçue pour convertir vos visiteurs et promouvoir
                  une offre, un produit ou un événement spécifique.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors group"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(167,139,250,0.4)] group-hover:scale-110 transition-transform">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Design sur mesure</h3>
                <p className="text-white/60 mb-6 leading-relaxed flex-grow">
                  Un accompagnement personnalisé pour créer une identité visuelle unique qui reflète
                  parfaitement votre univers et vos valeurs.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors group"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#16213E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#FF6B6B] rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#4ECDC4] rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
              <Sparkles size={16} className="text-[#FF6B6B]" />
              <span className="text-white/90">Lancez-vous</span>
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Parlons de votre besoin et construisons ensemble la solution qui vous correspond
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,107,107,0.4)] hover:shadow-[0_0_60px_rgba(255,107,107,0.6)]"
            >
              <span>Démarrer votre projet</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
