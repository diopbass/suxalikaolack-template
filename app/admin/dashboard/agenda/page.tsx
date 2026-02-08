"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function AgendaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
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
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            <span className="text-sm font-semibold">Agenda</span>
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
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                <span className="text-sm font-medium">Suggestions</span>
              </div>
              <span className="bg-[#f90606] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
            </div>
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f90606]">admin_panel_settings</span>
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Back-office</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-slate-500 text-sm font-medium hover:text-[#f90606] transition-colors" href="#">Centre d'aide</a>
              <a className="text-slate-500 text-sm font-medium hover:text-[#f90606] transition-colors" href="#">Support technique</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-[#f90606] text-slate-900 dark:text-white placeholder-slate-500 outline-none" 
                placeholder="Rechercher un événement..." 
                type="text"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f90606] rounded-full border-2 border-white dark:border-[#230f0f]"></span>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm">
            <a className="text-slate-500 hover:text-[#f90606]" href="#">Back-office</a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Gestion de l'Agenda</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestion de l'Agenda</h1>
              <p className="text-slate-500">Gérez et suivez les événements municipaux de la commune de Kaolack.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#f90606] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md shadow-red-600/20">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Créer un événement</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-[#230f0f] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500 text-lg">filter_alt</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Filtrer par :</span>
            </div>
            <select className="bg-[#f8f5f5] dark:bg-[#230f0f] border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-2 focus:ring-[#f90606] focus:border-[#f90606] text-slate-900 dark:text-white">
              <option value="">Tous les quartiers</option>
              <option value="medina">Medina Baye</option>
              <option value="ndorong">Ndorong</option>
              <option value="leona">Léona</option>
              <option value="darou">Darou Salam</option>
            </select>
            <select className="bg-[#f8f5f5] dark:bg-[#230f0f] border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-2 focus:ring-[#f90606] focus:border-[#f90606] text-slate-900 dark:text-white">
              <option value="">Tous les mois</option>
              <option value="1">Janvier</option>
              <option value="2">Février</option>
              <option value="3">Mars</option>
              <option value="4">Avril</option>
            </select>
            <div className="flex-1 flex gap-2 overflow-x-auto pb-1">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f90606] text-white px-4 text-xs font-bold cursor-pointer">
                <span>Tout</span>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 text-xs font-medium cursor-pointer hover:bg-red-50 hover:text-[#f90606] transition-colors">
                <span className="material-symbols-outlined text-base">sports_soccer</span>
                <span>Sport</span>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 text-xs font-medium cursor-pointer hover:bg-red-50 hover:text-[#f90606] transition-colors">
                <span className="material-symbols-outlined text-base">theater_comedy</span>
                <span>Culture</span>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 text-xs font-medium cursor-pointer hover:bg-red-50 hover:text-[#f90606] transition-colors">
                <span className="material-symbols-outlined text-base">medical_services</span>
                <span>Santé</span>
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white dark:bg-[#230f0f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-[#1a0b0b] border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nom de l'événement</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Catégorie</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date &amp; Heure</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Lieu</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Inscrits</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-[#1a0b0b] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#f90606]">
                          <span className="material-symbols-outlined">sports_soccer</span>
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">Tournoi de Foot Inter-Quartier</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Sport</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-900 dark:text-white">12 Oct. 2024</p>
                        <p className="text-xs text-slate-500">16:00 - 19:00</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Stade Municipal de Kaolack</td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">150 / 200</div>
                      <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 mx-auto overflow-hidden">
                        <div className="h-full bg-[#f90606]" style={{ width: '75%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold">À venir</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-[#1a0b0b] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#f90606]">
                          <span className="material-symbols-outlined">medical_services</span>
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">Campagne de Vaccination</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">Santé</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-900 dark:text-white">25 Sep. 2024</p>
                        <p className="text-xs text-slate-500">08:00 - 17:00</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Centre de Santé Médina</td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">450 / 500</div>
                      <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 mx-auto overflow-hidden">
                        <div className="h-full bg-[#f90606]" style={{ width: '90%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="text-xs font-bold">Terminé</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-[#1a0b0b] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#f90606]">
                          <span className="material-symbols-outlined">theater_comedy</span>
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">Festival Culturel Kaolack</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Culture</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-900 dark:text-white">15 Nov. 2024</p>
                        <p className="text-xs text-slate-500">20:00 - 00:00</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Place de l'Indépendance</td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">1,200 / ∞</div>
                      <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 mx-auto overflow-hidden">
                        <div className="h-full bg-[#f90606]" style={{ width: '40%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold">À venir</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-[#1a0b0b] transition-colors group border-b-0">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#f90606]">
                          <span className="material-symbols-outlined">clean_hands</span>
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">Opération Set Setal</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Environnement</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-900 dark:text-white">05 Oct. 2024</p>
                        <p className="text-xs text-slate-500">07:30 - 11:00</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Quartier Ndorong</td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">35 / 100</div>
                      <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 mx-auto overflow-hidden">
                        <div className="h-full bg-[#f90606]" style={{ width: '35%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold">À venir</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-2 hover:text-[#f90606] transition-colors text-slate-500">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#230f0f]">
              <p className="text-xs text-slate-500">Affichage de 1 à 4 sur 24 événements</p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-[#1a0b0b]">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f90606] text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-[#1a0b0b] text-xs font-bold">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-[#1a0b0b] text-xs font-bold">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-[#1a0b0b]">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
