import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader' // Declare the MobileHeader variable
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function OpportunitesPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-row overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
        <UserSidebar />
        
        <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative">
          <MobileHeader />
        
          <div className="flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-8 lg:p-12 gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#ff0000] text-sm font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Espace Citoyen
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Mes Opportunités</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                Suivez l'état de vos candidatures aux formations, emplois et opportunités de bénévolat.
              </p>
            </div>
            
            {/* Filters & Search Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between bg-white dark:bg-[#2d1414] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
              <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
                {/* Search Input */}
                <div className="relative flex-1 min-w-[200px]">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
                  <input className="w-full pl-10 pr-4 h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-black/20 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Rechercher une opportunité..." type="text" />
                </div>
                
                {/* Status Filter */}
                <div className="relative min-w-[180px]">
                  <select className="w-full pl-4 pr-10 h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-black/20 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary text-sm appearance-none cursor-pointer">
                    <option>Tous les statuts</option>
                    <option>En cours</option>
                    <option>Terminé</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
            
            {/* Category Chips */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-md transition-transform active:scale-95">
                Tout
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-[#2d1414] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium transition-colors">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">school</span> Formation
                </span>
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-[#2d1414] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium transition-colors">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">work</span> Emploi
                </span>
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-[#2d1414] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium transition-colors">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">volunteer_activism</span> Bénévolat
                </span>
              </button>
            </div>
            
            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {/* Card 1 */}
              <div className="group flex flex-col bg-white dark:bg-[#2d1414] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
                      <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                      En cours
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      Agent de Recensement Local
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Mairie de Kaolack</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      <span>Candidature envoyée le 12 Jan 2026</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-white/5 flex justify-end">
                  <button className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors">
                    Voir les détails
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group flex flex-col bg-white dark:bg-[#2d1414] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Terminé
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      Atelier Numérique : Excel Avancé
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Centre Culturel Régional</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className="material-symbols-outlined text-[16px]">event_available</span>
                      <span>Rejoint le 05 Fév 2026</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-white/5 flex justify-end">
                  <button className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors">
                    Voir les détails
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group flex flex-col bg-white dark:bg-[#2d1414] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined">volunteer_activism</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
                      <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                      En cours
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      Campagne "Kaolack Propre"
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Association SUXALI</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Démarre le 20 Jan 2026</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-white/5 flex justify-end">
                  <button className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors">
                    Voir les détails
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
