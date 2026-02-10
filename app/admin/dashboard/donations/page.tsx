'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DonationsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [period, setPeriod] = useState('7days')

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
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            <span className="text-sm font-semibold">Dons</span>
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
        <header className="h-16 shrink-0 bg-white/80 dark:bg-[#230f0f]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Suivi des Dons</h2>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Back-office</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span>Suivi Financier</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-[#f90606]/20 text-slate-900 dark:text-white placeholder-slate-500 outline-none" 
                placeholder="Rechercher une transaction..." 
                type="text"
              />
            </div>
            <div className="size-10 rounded-full bg-[#f90606]/20 flex items-center justify-center text-[#f90606] border border-[#f90606]/30">
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <div className="size-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDqBoVb5vlOY-nQLVULwV2gTIGR5umI_MSorW62XwY3PsziIIaN0o-pTN2VuPyr40QZJVjKeGlnJz7z5I9DK-tl1LPO5_twL8J69L699ZFaXQcz7eV6eL0OzuGxTeimoMS5v7_OZU69YPX1LcluYXMEpHuijC597qo0X6Ka2NRcNUx0BytAUqC8qHU6i9L019dZSQNlwBjuHzNvlVAYARnptvRno3Exa72uQRxUrMdouEmC-K2Fm0UYL9mD81Tj0nk6wLaYD4czEsf" alt="Administrator profile" />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-8 space-y-8">
          {/* Action Header */}
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Aperçu Financier</h3>
              <p className="text-sm text-slate-500">Données mises à jour en temps réel</p>
            </div>
            <button className="flex items-center gap-2 bg-[#f90606] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-[#f90606]/20 hover:scale-[1.02] active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Générer rapport financier
            </button>
          </div>

          {/* KPI Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg text-[#f90606]">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+12.5%</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Total Collecté</p>
              <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">15.450.000 FCFA</p>
            </div>

            <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg text-[#f90606]">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+3.2%</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Moyenne par Don</p>
              <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">25.000 FCFA</p>
            </div>

            <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg text-[#f90606]">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">Top 1</span>
              </div>
              <p className="text-sm font-medium text-slate-500">Campagne Top</p>
              <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">Urgence Hôpital</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Évolution des collectes (FCFA)</h4>
                <p className="text-sm text-slate-500">Analyse sur les 7 derniers jours</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setPeriod('7days')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    period === '7days' 
                      ? 'bg-[#f90606] text-white' 
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  7 Jours
                </button>
                <button 
                  onClick={() => setPeriod('30days')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    period === '30days' 
                      ? 'bg-[#f90606] text-white' 
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  30 Jours
                </button>
              </div>
            </div>
            <div className="w-full">
              <svg fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_donations)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#f90606" strokeLinecap="round" strokeWidth="3"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_donations" x1="236" x2="236" y1="1" y2="149">
                    <stop stopColor="#f90606" stopOpacity="0.2"></stop>
                    <stop offset="1" stopColor="#f90606" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between mt-4 px-2">
                <span className="text-[11px] font-bold text-slate-500">Lun</span>
                <span className="text-[11px] font-bold text-slate-500">Mar</span>
                <span className="text-[11px] font-bold text-slate-500">Mer</span>
                <span className="text-[11px] font-bold text-slate-500">Jeu</span>
                <span className="text-[11px] font-bold text-slate-500">Ven</span>
                <span className="text-[11px] font-bold text-slate-500">Sam</span>
                <span className="text-[11px] font-bold text-slate-500">Dim</span>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white dark:bg-[#2d1616] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center flex-wrap gap-4">
              <h4 className="font-bold text-base flex items-center gap-2 text-slate-900 dark:text-white">
                Transactions InTouch
                <span className="bg-[#f90606]/10 text-[#f90606] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">Live</span>
              </h4>
              <div className="flex gap-4 flex-wrap">
                <select className="text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-1 px-3 focus:ring-1 focus:ring-[#f90606] text-slate-900 dark:text-white">
                  <option>Toutes les campagnes</option>
                  <option>Urgence Hôpital</option>
                  <option>Soutien Scolaire</option>
                </select>
                <button className="text-sm font-bold text-[#f90606] flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Plus de filtres
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-900/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Date &amp; Heure</th>
                    <th className="px-6 py-4">Donateur</th>
                    <th className="px-6 py-4">Montant</th>
                    <th className="px-6 py-4">Campagne</th>
                    <th className="px-6 py-4">Réf TX (InTouch)</th>
                    <th className="px-6 py-4 text-center">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-[#f90606]/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">12 Oct, 14:25</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">MD</div>
                        <span className="text-sm text-slate-900 dark:text-white">Moussa Diop</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">50.000 FCFA</td>
                    <td className="px-6 py-4 text-sm text-slate-500">Urgence Hôpital</td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">IT-489230912</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200 dark:border-green-800 uppercase">Succès</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f90606]/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">12 Oct, 12:10</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">AS</div>
                        <span className="text-sm text-slate-900 dark:text-white">Aminata Sow</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">15.000 FCFA</td>
                    <td className="px-6 py-4 text-sm text-slate-500">Soutien Scolaire</td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">IT-489230855</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 dark:bg-red-900/30 text-[#f90606] text-[10px] font-bold px-2 py-1 rounded-full border border-red-200 dark:border-red-800 uppercase">Échoué</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f90606]/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">11 Oct, 18:45</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">BC</div>
                        <span className="text-sm text-slate-900 dark:text-white">Babacar Cissé</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">100.000 FCFA</td>
                    <td className="px-6 py-4 text-sm text-slate-500">Urgence Hôpital</td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">IT-489230712</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-200 dark:border-amber-800 uppercase">En attente</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f90606]/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">11 Oct, 09:30</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">FN</div>
                        <span className="text-sm text-slate-900 dark:text-white">Fatou Ndiaye</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">5.000 FCFA</td>
                    <td className="px-6 py-4 text-sm text-slate-500">Construction Mosquée</td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">IT-489230441</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200 dark:border-green-800 uppercase">Succès</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <p className="text-xs text-slate-500">Affichage de 4 sur 1,245 transactions</p>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#f90606] bg-[#f90606] text-white text-xs font-bold">1</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors text-xs font-bold text-slate-900 dark:text-white">2</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
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
