import { PublicHeader } from '@/components/public-header'
import { PublicFooter } from '@/components/public-footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-[#0a0505]">
      <PublicHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-[#0a0505]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <div className="relative h-[450px] md:h-[550px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/images/hero-hands.jpg")'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-4xl">
                    SUXALI KAOLACK : Ensemble pour le développement
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
                    La plateforme citoyenne au service de l'innovation, de la solidarité et de l'avenir de notre région.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Link
                      href="/users/register"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white font-bold text-base shadow-xl hover:bg-red-700 transition-all hover:shadow-2xl"
                    >
                      S'inscrire
                    </Link>
                    <Link
                      href="/programmes"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#1d0c0c] font-bold text-base shadow-xl hover:shadow-2xl transition-all"
                    >
                      Nos Programmes
                    </Link>
                    <Link
                      href="/faire-un-don"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#2a2a2a] text-white font-bold text-base shadow-xl hover:bg-[#1a1a1a] transition-all"
                    >
                      FAIRE UN DON
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alert Banner */}
            <div className="mt-6 flex items-start gap-3 px-6 py-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900">
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">campaign</span>
              <div>
                <p className="text-[#1d0c0c] dark:text-white text-base">
                  <span className="font-bold">Dernière minute :</span> Réunion citoyenne ce samedi à la mairie - Inscrivez-vous avant vendredi !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 md:px-10 bg-gray-50 dark:bg-[#120808]">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#1d0c0c] dark:text-white mb-3">
                Simplifiez votre vie à Kaolack
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl">
                Découvrez nos nouveaux modules conçus pour faciliter votre quotidien et renforcer l'engagement local.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'event',
                  iconColor: 'text-red-600',
                  bgColor: 'bg-red-50 dark:bg-red-950/20',
                  title: 'Agenda',
                  description: 'Restez connecté à la vie locale. Consultez les dates réunions de quartier et autres activités importantes pour la communauté de Kaolack.',
                  link: '/agenda',
                  linkText: 'Voir l\'agenda'
                },
                {
                  icon: 'contact_phone',
                  iconColor: 'text-blue-600',
                  bgColor: 'bg-blue-50 dark:bg-blue-950/20',
                  title: 'Annuaire utile',
                  description: 'Accédez rapidement aux coordonnées essentielles de la ville. Services d\'urgence, administrations, associations et projets municipaux en un seul endroit.',
                  link: '/annuaire',
                  linkText: 'Consulter l\'annuaire'
                },
                {
                  icon: 'help_center',
                  iconColor: 'text-purple-600',
                  bgColor: 'bg-purple-50 dark:bg-purple-950/20',
                  title: 'Aide / FAQ',
                  description: 'Besoin d\'assistance ? Trouvez des réponses claires aux questions fréquentes sur les démarches administratives, ou contactez directement notre support citoyen.',
                  link: '/aide',
                  linkText: 'Accéder à l\'aide'
                },
                {
                  icon: 'work',
                  iconColor: 'text-orange-600',
                  bgColor: 'bg-orange-50 dark:bg-orange-950/20',
                  title: 'Opportunités',
                  description: 'Découvrez les offres d\'emploi locales, les formations de développement et les programmes de stages dans la région. Trouvez les initiatives pour les entrepreneurs de la région.',
                  link: '/opportunites',
                  linkText: 'Voir les offres'
                },
                {
                  icon: 'lightbulb',
                  iconColor: 'text-pink-600',
                  bgColor: 'bg-pink-50 dark:bg-pink-950/20',
                  title: 'Suggestions',
                  description: 'Votre voix compte pour l\'avenir de Kaolack. Proposez vos idées d\'amélioration, signalez des besoins ou contribuez aux prises de décision locale.',
                  link: '/suggestions',
                  linkText: 'Faire une suggestion'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white dark:bg-[#1a0a0a] border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className={`flex items-center justify-center size-14 rounded-xl ${service.bgColor} ${service.iconColor} mb-5`}>
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d0c0c] dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-primary text-sm font-bold hover:underline">
                    {service.linkText}
                    <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 px-6 md:px-10 bg-white dark:bg-[#0a0505]">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Actualités', icon: 'newspaper', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop', description: 'Restez informé des actualités de Kaolack et la région.', link: '/actualites' },
                { title: 'Programmes', icon: 'layers', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', description: 'Tous nos programmes et initiatives en cours.', link: '/programmes' },
                { title: 'Avantages Citoyens', icon: 'stars', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop', description: 'Accédez à des avantages exclusifs et découvrez vos privilèges citoyens.', link: '/avantages' },
                { title: 'Solidarité', icon: 'favorite', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop', description: 'Faites un don aux campagnes de développement local.', link: '/faire-un-don' }
              ].map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                  className="group relative h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
                    <div className="mt-3 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Découvrir</span>
                      <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 px-6 md:px-10 bg-gray-50 dark:bg-[#120808]">
          <div className="mx-auto max-w-[1280px] text-center">
            <Link
              href="/partenaires"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:bg-red-700"
            >
              Nos Partenaires
            </Link>
            <div className="mt-8 flex items-center justify-center gap-12 flex-wrap opacity-40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-gray-400">sports_soccer</span>
                <span className="text-xl font-bold text-gray-500">Sport</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-gray-400">domain</span>
                <span className="text-xl font-bold text-gray-500">Mairie</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-gray-400">apartment</span>
                <span className="text-xl font-bold text-gray-500">Mairie</span>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 px-6 md:px-10 bg-white dark:bg-[#0a0505]">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-[#1d0c0c] dark:text-white">
                Actualités & Informations
              </h2>
              <Link href="/actualites" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-red-700 transition-colors">
                Voir plus
              </Link>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-10">
              Restez connecté avec la vie citoyenne de Kaolack. Retrouvez ici toutes les nouvelles, évolutions, événements majeurs et annonces officielles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  date: '12 Jan 2024',
                  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
                  title: 'Publication du rapport d\'activité annuel 2023',
                  description: 'Le bilan complet de l\'année écoulée et les projets à venir.',
                  link: '#'
                },
                {
                  date: '15 Sept 2023',
                  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
                  title: 'Conseil municipal : Compte rendu de la réunion du mardi',
                  description: 'Les décisions prises lors de la dernière session municipale.',
                  link: '#'
                },
                {
                  date: '5 Août 2023',
                  image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop',
                  title: 'Lancement de la campagne de vaccination gratuite',
                  description: 'Inscriptions ouvertes pour tous les citoyens. Rendez-vous au centre de santé.',
                  link: '#'
                },
                {
                  date: '4 Août 2023',
                  image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop',
                  title: 'Inauguration du nouveau centre culturel Yamadou',
                  description: 'Un nouvel espace dédié à la culture et aux événements citoyens.',
                  link: '#'
                }
              ].map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="group bg-white dark:bg-[#1a0a0a] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1d0c0c] dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="text-primary text-sm font-bold">
                      Lire la suite →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-10 bg-primary">
          <div className="mx-auto max-w-[900px]">
            <div className="text-center rounded-3xl p-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Rejoignez la plateforme aujourd'hui !
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Créez votre compte citoyen gratuitement pour accéder à tous les programmes et participer au développement de Kaolack.
              </p>
              <Link
                href="/users/register"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-primary font-bold text-base shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <span className="material-symbols-outlined mr-2 text-xl">person_add</span>
                Créer mon compte citoyen
              </Link>
              <p className="text-white/70 text-sm mt-4">
                Déjà plus de 5,000 membres inscrits
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <PublicFooter />
    </div>
  )
}
