import { useState } from 'react';
import { Mail, Instagram, MessageSquare, MapPin, Send, ChevronDown, Sparkles, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.\n\nPour le moment, ce formulaire est une démonstration. En production, il serait connecté à un système d\'envoi d\'emails.'
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: 'Combien de temps prend la création d\'un site ?',
      answer:
        'Le délai moyen de création est de 7 à 14 jours selon la complexité du projet. Ce délai inclut les échanges créatifs, la validation, le développement et la mise en ligne. Nous nous adaptons à vos contraintes de planning.',
    },
    {
      question: 'Est-ce que mon site sera modifiable plus tard ?',
      answer:
        'Oui, absolument. Nous proposons des services de modification de contenu à la demande. Vous pouvez également opter pour une formation rapide pour effectuer vous-même des modifications simples, selon la solution technique choisie.',
    },
    {
      question: 'Mon site peut-il évoluer avec le temps ?',
      answer:
        'Tout à fait. Nous concevons des sites pensés pour être simples au départ, mais qui peuvent évoluer naturellement. Vous pouvez ajouter des pages, des sections ou des fonctionnalités au fil de vos besoins, sans tout recommencer.',
    },
    {
      question: 'Comment se passe l\'accompagnement ?',
      answer:
        'Nous privilégions un accompagnement humain et personnalisé. Vous avez un interlocuteur dédié tout au long du projet. Nous échangeons par email, visioconférence ou Discord selon votre préférence. Vous êtes impliqué à chaque étape.',
    },
    {
      question: 'À qui s\'adresse cette offre ?',
      answer:
        'Notre offre s\'adresse aux indépendants, artisans, créateurs, TPE, PME et commerces locaux qui souhaitent créer ou refondre leur présence en ligne. Nous accompagnons aussi bien ceux qui démarrent que ceux qui veulent moderniser leur site existant.',
    },
    {
      question: 'Comment se déroule la mise en ligne ?',
      answer:
        'Nous nous occupons de la mise en ligne de A à Z. Cela inclut la configuration de l\'hébergement, l\'installation du site et les tests de fonctionnement. Nous pouvons également vous accompagner dans l\'achat et la configuration de votre nom de domaine.',
    },
    {
      question: 'Proposez-vous un abonnement ou des frais récurrents ?',
      answer:
        'Non, nous fonctionnons sans abonnement. Vous payez une fois pour la création de votre site, puis uniquement pour les modifications ou interventions que vous souhaitez. Vous restez libre et propriétaire de votre site.',
    },
    {
      question: 'Qu\'est-ce qui est inclus dans le tarif de base ?',
      answer:
        'Le tarif de 1 200 € comprend le design sur mesure, le développement complet, l\'intégration de vos contenus (textes et images), l\'optimisation responsive, les ajustements et la mise en ligne. Vous avez un site clé en main.',
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
                <span className="text-white/90">Contact</span>
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Parlons de
              <br />
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD93D] bg-clip-text text-transparent">
                votre projet
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Vous avez un projet en tête ? Une question ? N'hésitez pas à nous contacter. Nous
              sommes là pour échanger avec vous et trouver la solution qui correspond à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-white">Présentez-nous votre besoin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all backdrop-blur-xl"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all backdrop-blur-xl"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all backdrop-blur-xl"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-white/80">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all backdrop-blur-xl"
                  >
                    <option value="" className="bg-[#1A1A2E]">Sélectionnez un type</option>
                    <option value="vitrine" className="bg-[#1A1A2E]">Site vitrine</option>
                    <option value="landing" className="bg-[#1A1A2E]">Landing page</option>
                    <option value="custom" className="bg-[#1A1A2E]">Design sur mesure</option>
                    <option value="other" className="bg-[#1A1A2E]">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white/80">
                    Budget envisagé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all backdrop-blur-xl"
                  >
                    <option value="" className="bg-[#1A1A2E]">Sélectionnez une fourchette</option>
                    <option value="1000-1500" className="bg-[#1A1A2E]">1 000 € - 1 500 €</option>
                    <option value="1500-2000" className="bg-[#1A1A2E]">1 500 € - 2 000 €</option>
                    <option value="2000+" className="bg-[#1A1A2E]">Plus de 2 000 €</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Parlez-nous de votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all resize-none backdrop-blur-xl"
                    placeholder="Décrivez votre activité, vos besoins, vos objectifs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,107,107,0.4)] hover:shadow-[0_0_60px_rgba(255,107,107,0.6)]"
                >
                  <span>Envoyer ma demande</span>
                  <Send size={20} />
                </button>

                <p className="text-sm text-white/40">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                </p>
              </form>
            </div>

            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Nos coordonnées</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(255,107,107,0.4)]">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium mb-1 text-white">Email</div>
                        <a
                          href="mailto:contact@studio.workora.fr"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          contact@studio.workora.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(78,205,196,0.4)]">
                        <Instagram size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium mb-1 text-white">Instagram</div>
                        <a
                          href="https://instagram.com/studioworkora"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          @studioworkora
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(167,139,250,0.4)]">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium mb-1 text-white">Discord</div>
                        <a
                          href="https://discord.gg/workora"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          Rejoindre notre serveur
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#51CF66] to-[#37B24D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(81,207,102,0.4)]">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium mb-1 text-white">Localisation</div>
                        <p className="text-white/60">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#44A8A0] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD93D] to-[#FFA07A] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,217,61,0.4)]">
                      <Clock size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Temps de réponse</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    Nous nous engageons à vous répondre sous 24 heures ouvrées. Votre demande sera
                    étudiée avec attention et nous reviendrons vers vous rapidement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[150px] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 glassmorphism-hero rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl">
                <Sparkles size={16} className="text-[#FFD93D]" />
                <span className="text-white/90">FAQ</span>
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Questions fréquentes</h2>
            <p className="text-xl text-white/60">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 via-[#4ECDC4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-lg pr-4 text-white">{faq.question}</span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 transition-transform text-white/60 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
