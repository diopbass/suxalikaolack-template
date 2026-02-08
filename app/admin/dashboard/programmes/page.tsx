"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function ProgrammesPage() {
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
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-medium">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
            <span className="text-sm font-semibold">Programmes</span>
          </Link>
          <Link href="/admin/dashboard/opportunities" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
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
                placeholder="Rechercher un programme..." 
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
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestion des Programmes</h1>
              <p className="text-[#a14545] dark:text-[#cc7a7a]">Suivi et administration des initiatives de développement de Kaolack.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#f90606] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-[#f90606]/25">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Nouveau Programme</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#eacdcd] dark:border-[#4a2626] bg-white dark:bg-[#2d1414]">
              <div className="flex justify-between items-start">
                <p className="text-[#a14545] dark:text-[#cc7a7a] text-sm font-medium">Total Participants</p>
                <span className="material-symbols-outlined text-[#f90606]">person_add</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-black">1,250</p>
              <p className="text-green-600 text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% ce mois
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#eacdcd] dark:border-[#4a2626] bg-white dark:bg-[#2d1414]">
              <div className="flex justify-between items-start">
                <p className="text-[#a14545] dark:text-[#cc7a7a] text-sm font-medium">Programmes Actifs</p>
                <span className="material-symbols-outlined text-[#f90606]">rocket_launch</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-black">12</p>
              <p className="text-[#a14545] text-xs font-medium">Sur 15 au total</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#eacdcd] dark:border-[#4a2626] bg-white dark:bg-[#2d1414]">
              <div className="flex justify-between items-start">
                <p className="text-[#a14545] dark:text-[#cc7a7a] text-sm font-medium">Impact Reach</p>
                <span className="material-symbols-outlined text-[#f90606]">public</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-black">45k</p>
              <p className="text-[#a14545] text-xs font-medium">Habitants touchés</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#eacdcd] dark:border-[#4a2626] bg-white dark:bg-[#2d1414]">
              <div className="flex justify-between items-start">
                <p className="text-[#a14545] dark:text-[#cc7a7a] text-sm font-medium">Budget Engagé</p>
                <span className="material-symbols-outlined text-[#f90606]">account_balance_wallet</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-black">8.4M</p>
              <p className="text-[#a14545] text-xs font-medium">Francs CFA (XOF)</p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-[#2d1414] rounded-xl border border-[#eacdcd] dark:border-[#4a2626] p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[300px]">
              <label className="flex items-center bg-[#f4e6e6] dark:bg-[#3d1d1d] rounded-lg px-4 h-11 border border-transparent focus-within:border-[#f90606] transition-all">
                <span className="material-symbols-outlined text-[#a14545] dark:text-[#cc7a7a]">search</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white w-full text-sm font-medium px-3 placeholder:text-[#a14545]/60" 
                  placeholder="Rechercher un programme, une date ou un public..." 
                  type="text"
                />
              </label>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button className="flex h-9 items-center gap-2 rounded-lg bg-[#f90606] text-white px-4 text-sm font-bold">
                <span>Tous</span>
              </button>
              <button className="flex h-9 items-center gap-2 rounded-lg bg-[#f4e6e6] dark:bg-[#3d1d1d] px-4 text-slate-900 dark:text-white text-sm font-medium hover:bg-[#f90606]/10 transition-colors">
                <span>Actifs</span>
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
              <button className="flex h-9 items-center gap-2 rounded-lg bg-[#f4e6e6] dark:bg-[#3d1d1d] px-4 text-slate-900 dark:text-white text-sm font-medium hover:bg-[#f90606]/10 transition-colors">
                <span>Public Cible</span>
                <span className="material-symbols-outlined text-base">filter_list</span>
              </button>
              <button className="flex h-9 items-center gap-2 rounded-lg bg-[#f4e6e6] dark:bg-[#3d1d1d] px-4 text-slate-900 dark:text-white text-sm font-medium hover:bg-[#f90606]/10 transition-colors">
                <span>Plus de filtres</span>
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#4a2626] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcf8f8] dark:bg-[#351919] border-b border-[#eacdcd] dark:border-[#4a2626]">
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Titre du Programme</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Public Cible</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Participants</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Date de Lancement</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Statut</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eacdcd] dark:divide-[#4a2626]">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#fcf8f8]/50 dark:hover:bg-[#351919]/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-red-100 flex items-center justify-center text-[#f90606] font-bold">AF</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Autonomisation des Femmes</span>
                          <span className="text-xs text-[#a14545] dark:text-[#cc7a7a]">Micro-finance rurale</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 text-xs font-bold rounded-full">Femmes</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-white">450</td>
                    <td className="px-6 py-5 text-sm text-slate-900 dark:text-white">12 Mai 2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold rounded-lg">
                        <span className="size-1.5 rounded-full bg-green-600"></span>
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-[#fcf8f8]/50 dark:hover:bg-[#351919]/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">FT</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Formation Technique Jeunes</span>
                          <span className="text-xs text-[#a14545] dark:text-[#cc7a7a]">Métiers du numérique</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold rounded-full">Jeunes</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-white">320</td>
                    <td className="px-6 py-5 text-sm text-slate-900 dark:text-white">05 Jan 2024</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold rounded-lg">
                        <span className="size-1.5 rounded-full bg-green-600"></span>
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-[#fcf8f8]/50 dark:hover:bg-[#351919]/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold">AD</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Agriculture Durable</span>
                          <span className="text-xs text-[#a14545] dark:text-[#cc7a7a]">Zone Nord Kaolack</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-bold rounded-full">Mixte</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-white">180</td>
                    <td className="px-6 py-5 text-sm text-slate-900 dark:text-white">20 Sep 2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs font-bold rounded-lg">
                        <span className="size-1.5 rounded-full bg-gray-500"></span>
                        En pause
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-[#fcf8f8]/50 dark:hover:bg-[#351919]/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold">SM</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Santé Maternelle</span>
                          <span className="text-xs text-[#a14545] dark:text-[#cc7a7a]">Campagnes de prévention</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 text-xs font-bold rounded-full">Femmes</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-white">300</td>
                    <td className="px-6 py-5 text-sm text-slate-900 dark:text-white">15 Nov 2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold rounded-lg">
                        <span className="size-1.5 rounded-full bg-green-600"></span>
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="text-[#a14545] hover:text-[#f90606] transition-colors px-2">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#fcf8f8] dark:bg-[#351919] border-t border-[#eacdcd] dark:border-[#4a2626] flex items-center justify-between">
              <p className="text-xs font-medium text-[#a14545] dark:text-[#cc7a7a]">Affichage de 1-4 sur 12 programmes</p>
              <div className="flex gap-2">
                <button className="size-8 rounded border border-[#eacdcd] dark:border-[#4a2626] flex items-center justify-center text-[#a14545] hover:bg-white dark:hover:bg-[#2d1414] transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="size-8 rounded bg-[#f90606] text-white flex items-center justify-center text-xs font-bold">1</button>
                <button className="size-8 rounded border border-[#eacdcd] dark:border-[#4a2626] flex items-center justify-center text-[#a14545] hover:bg-white dark:hover:bg-[#2d1414] transition-colors text-xs font-bold">2</button>
                <button className="size-8 rounded border border-[#eacdcd] dark:border-[#4a2626] flex items-center justify-center text-[#a14545] hover:bg-white dark:hover:bg-[#2d1414] transition-colors text-xs font-bold">3</button>
                <button className="size-8 rounded border border-[#eacdcd] dark:border-[#4a2626] flex items-center justify-center text-[#a14545] hover:bg-white dark:hover:bg-[#2d1414] transition-colors">
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
