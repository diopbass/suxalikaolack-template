import Link from 'next/link'
import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader' // Import MobileHeader component
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function SuggestionsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-row overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
        <UserSidebar />
        
        <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative">
          <MobileHeader />
        
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-40 py-8">
          <div className="max-w-[1024px] mx-auto flex flex-col">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 px-4 py-2 text-sm">
              <Link className="text-gray-500 dark:text-gray-400 hover:text-[#ff0000] transition-colors font-medium" href="/profil">Accueil</Link>
              <span className="text-gray-400 font-medium">/</span>
              <Link className="text-gray-500 dark:text-gray-400 hover:text-[#ff0000] transition-colors font-medium" href="/profil">Espace Citoyen</Link>
              <span className="text-gray-400 font-medium">/</span>
              <span className="text-gray-900 dark:text-white font-medium">Mes Suggestions</span>
            </nav>
            
            {/* Page Heading & Main Action */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 py-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em]">Mes Suggestions et Signalements</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal">
                  Suivez l'état de vos idées et signalez des besoins pour l'amélioration de la Région de Kaolack.
                </p>
              </div>
              <Link href="/suggestions/nouvelle" className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[#ff0000] text-white text-base font-bold shadow-md hover:bg-[#cc0000] transition-all hover:shadow-lg transform active:scale-95">
                <span className="material-symbols-outlined">add</span>
                <span>Nouvelle suggestion</span>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-4 mb-6">
              <div className="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-[#2d1616] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-4 top-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-full text-yellow-600 dark:text-yellow-400">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Idées proposées</p>
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight">12</p>
                <div className="mt-2 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden" title="Progression: 9 idées sur 12 traitées (75%)">
                  <div className="h-full bg-yellow-500 w-3/4 rounded-full" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-[#2d1616] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-4 top-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Besoins signalés</p>
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight">5</p>
                <div className="mt-2 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden" title="Progression: 3 besoins sur 5 traités (60%)">
                  <div className="h-full bg-blue-500 w-3/5 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 pb-4">
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#ff0000] text-white px-5 shadow-sm transition-colors text-sm font-semibold">
                  Tout voir
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d1616] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-5 text-sm font-medium transition-colors">
                  En attente
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d1616] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-5 text-sm font-medium transition-colors">
                  En cours
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d1616] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-5 text-sm font-medium transition-colors">
                  Traité
                </button>
              </div>
              <div className="relative w-full md:w-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </span>
                <input className="h-10 w-full md:w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2d1616] pl-10 pr-4 text-sm focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] dark:text-white" placeholder="Rechercher..." type="text" />
              </div>
            </div>
            
            {/* List Content */}
            <div className="flex flex-col gap-4 px-4 pb-10">
              {/* Card 1 */}
              <div className="flex flex-col md:flex-row gap-5 p-5 bg-white dark:bg-[#2d1616] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500" />
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400">
                    <span className="material-symbols-outlined">lightbulb</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">Idée</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">12 Jan 2026</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#ff0000] transition-colors">Installation de poubelles rue Faidherbe</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-xs font-bold text-yellow-700 dark:text-yellow-300 whitespace-nowrap">
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-500" />
                      En attente de validation
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    La rue manque de points de collecte, ce qui entraîne des dépôts sauvages récurrents. Je propose l'installation de 3 bacs tous les 200 mètres pour améliorer la propreté du quartier.
                  </p>
                </div>
                <div className="flex items-center justify-end md:justify-center">
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col md:flex-row gap-5 p-5 bg-white dark:bg-[#2d1616] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">campaign</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Besoin</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">05 Jan 2026</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#ff0000] transition-colors">Réparation de l'éclairage public - Zone Nord</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      En cours de traitement
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    Trois lampadaires sont hors service depuis l'orage de la semaine dernière, rendant le carrefour dangereux la nuit pour les piétons.
                  </p>
                </div>
                <div className="flex items-center justify-end md:justify-center">
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="flex flex-col md:flex-row gap-5 p-5 bg-white dark:bg-[#2d1616] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group cursor-pointer relative overflow-hidden opacity-90 hover:opacity-100">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Idée</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">15 Jan 2026</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#ff0000] transition-colors">Création d'un espace vert quartier Médina</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300 whitespace-nowrap">
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500" />
                      Traité
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    L'aménagement a été approuvé et les travaux sont terminés. Le jardin est ouvert au public depuis lundi.
                  </p>
                </div>
                <div className="flex items-center justify-end md:justify-center">
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  )
}
