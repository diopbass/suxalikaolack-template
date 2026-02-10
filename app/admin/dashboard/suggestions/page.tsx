'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SuggestionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const suggestions = [
    {
      id: 1,
      type: 'Idée',
      title: 'Éclairage solaire Avenue Malick Sy',
      description: 'Installation de lampadaires solaires pour réduire l\'insécurité nocturne...',
      user: 'Mamadou Sy',
      initials: 'MS',
      district: 'Médina Baye',
      priority: 'Moyenne',
      status: 'Nouveau',
    },
    {
      id: 2,
      type: 'Besoin',
      title: 'Fuite d\'eau importante devant l\'école',
      description: 'Canalisation principale rompue depuis 24h, gaspillage énorme...',
      user: 'Awa Diop',
      initials: 'AD',
      district: 'Ndangane',
      priority: 'Haute',
      status: 'En cours',
    },
    {
      id: 3,
      type: 'Idée',
      title: 'Aménagement terrain de sport quartier Sud',
      description: 'Demande de clôture et nouveaux filets de but...',
      user: 'Ousmane Kane',
      initials: 'OK',
      district: 'Quartier Escale',
      priority: 'Basse',
      status: 'Traité',
    },
    {
      id: 4,
      type: 'Besoin',
      title: 'Ramassage ordures place du marché',
      description: 'Accumulation inhabituelle depuis mercredi dernier...',
      user: 'Seynabou Ndiaye',
      initials: 'SN',
      district: 'Mbossé',
      priority: 'Moyenne',
      status: 'Nouveau',
    },
  ]

  const priorityConfig = {
    'Haute': 'bg-red-100 text-red-800',
    'Moyenne': 'bg-amber-100 text-amber-800',
    'Basse': 'bg-blue-100 text-blue-800',
  }

  const priorityDot = {
    'Haute': 'bg-red-600',
    'Moyenne': 'bg-amber-600',
    'Basse': 'bg-blue-600',
  }

  const statusConfig = {
    'Nouveau': 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100',
    'En cours': 'bg-blue-100 text-blue-700',
    'Traité': 'bg-green-100 text-green-700',
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-72 bg-white dark:bg-[#230f0f] border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 transition-transform duration-300`}>
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-[#f90606] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">star</span>
          </div>
          <div>
            <h1 className="text-[#f90606] font-bold text-lg leading-tight uppercase">Suxali Kaolack</h1>
            <p className="text-xs text-slate-500 font-medium">Administration</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Tableau de bord</span>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-sm font-medium">Actualités</span>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-medium">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Programmes</span>
          </Link>
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
            <span className="text-sm font-medium">Opportunités</span>
          </Link>
          <Link href="/admin/dashboard/partners" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">Partenaires</span>
          </Link>
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-medium">Dons</span>
          </Link>
          <Link href="/admin/dashboard/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Utilisateurs</span>
          </Link>
          <Link href="/admin/dashboard/citizens" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">contacts</span>
            <span className="text-sm font-medium">Répertoire</span>
          </Link>
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="text-sm font-semibold">Suggestions</span>
          </Link>
          <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Paramètres</span>
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#f90606] text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">logout</span>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f8f5f5] dark:bg-[#230f0f] overflow-y-auto">
        {/* HEADER */}
        <header className="h-16 shrink-0 bg-white dark:bg-[#230f0f] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f90606] text-2xl">chat</span>
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Modération des Suggestions</h2>
            </div>
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-72 focus:ring-2 focus:ring-[#f90606]/20 text-slate-900 dark:text-white placeholder-slate-500 outline-none" 
                placeholder="Rechercher une suggestion..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">warning</span>
              Alertes Majeures
            </button>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f90606] rounded-full border-2 border-white dark:border-[#230f0f]"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-8 space-y-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <p className="text-slate-500 text-sm font-medium">Total Suggestions</p>
              <div className="flex items-end justify-between">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">1,284</p>
                <span className="text-green-700 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +12%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <p className="text-slate-500 text-sm font-medium">En attente (Nouveaux)</p>
              <div className="flex items-end justify-between">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">42</p>
                <span className="text-green-700 text-sm font-bold bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +5%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <p className="text-slate-500 text-sm font-medium">Traitées ce mois</p>
              <div className="flex items-end justify-between">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">856</p>
                <span className="text-red-600 text-sm font-bold bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span> -2%
                </span>
              </div>
            </div>
          </div>

          {/* Filters & Table Container */}
          <div className="bg-white dark:bg-[#230f0f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            {/* Tabs Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-white dark:bg-[#230f0f]">
              <div className="flex gap-8">
                <a className="border-b-2 border-[#f90606] text-[#f90606] py-4 text-sm font-bold" href="#">Toutes</a>
                <a className="border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white py-4 text-sm font-medium" href="#">Idées</a>
                <a className="border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white py-4 text-sm font-medium" href="#">Besoins</a>
              </div>
              {/* Mini Filters */}
              <div className="flex gap-2 py-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Quartier: Tous <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Priorité <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Statut <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Titre / Suggestion</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Utilisateur</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Quartier</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Priorité</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {suggestions.map((suggestion) => (
                    <tr key={suggestion.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded text-[11px] font-bold uppercase tracking-tight ${
                          suggestion.type === 'Idée' 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'bg-purple-50 text-purple-700'
                        }`}>
                          {suggestion.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{suggestion.title}</p>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{suggestion.description}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#f90606]">
                            {suggestion.initials}
                          </div>
                          <p className="text-sm text-slate-900 dark:text-white font-medium">{suggestion.user}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm text-slate-500">{suggestion.district}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`${priorityConfig[suggestion.priority as keyof typeof priorityConfig]} px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center w-fit gap-1`}>
                          <span className={`size-1.5 rounded-full ${priorityDot[suggestion.priority as keyof typeof priorityDot]}`}></span>
                          {suggestion.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`${statusConfig[suggestion.status as keyof typeof statusConfig]} px-2.5 py-0.5 rounded-full text-xs font-bold`}>
                          {suggestion.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="bg-[#f90606] hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              {suggestion.status === 'Traité' ? 'visibility' : 'reply'}
                            </span>
                            {suggestion.status === 'Traité' ? 'Détails' : 'Répondre'}
                          </button>
                          {suggestion.status !== 'Traité' && (
                            <button className="border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                              <span className="material-symbols-outlined text-sm">sync_alt</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs text-slate-500 font-medium italic">Affichage de 4 sur 1,284 suggestions</p>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#f90606] bg-[#f90606] text-white text-xs font-bold">1</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700">2</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700">3</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
