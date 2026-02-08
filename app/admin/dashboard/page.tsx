"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [chartTab, setChartTab] = useState<'inscriptions' | 'dons'>('inscriptions')
  
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
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-semibold">Tableau de bord</span>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-sm font-medium">Actualités</span>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-medium">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programs" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Programmes</span>
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
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: 'Public Sans, sans-serif' }}>Administration Globale</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-[#f90606]/50 transition-all outline-none" 
                placeholder="Rechercher..." 
                type="text"
              />
            </div>
            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
              <button className="relative p-1 text-slate-500 hover:text-[#f90606] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 size-2 bg-[#f90606] rounded-full ring-2 ring-white dark:ring-[#230f0f]"></span>
              </button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold leading-none">Moussa Diouf</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
                <div className="size-10 rounded-full bg-cover bg-center border-2 border-[#f90606]/20 group-hover:border-[#f90606] transition-all" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgILFec1_6LWpCwrAlk6OSBHi_VKz6LnVFxU7y4st88C_KGBMkvVEQ4wJ3l4X7UUCNu3knACydn-pTCbpeogSpMppPM8P5O5N_RjGaIcH5ZL0xdbPYbMChODqumR_tY8aEN1-dopFlK4KrUmAikdoWoeCnJnJjYuWgRuGjLuxotCF8Cb_2ExilnJJWDzAeKVbrBtWJrHV8YtoiqjtVaQhwpcTr8JLEP5cP13FEhQ5jqhOWjmVZTkVzau1RYooV6uZUreKtmZZurtes')" }}>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          {/* KPI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#f90606]">person</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+5.2%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Citoyens</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12,450</h3>
            </div>

            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#f90606]">verified_user</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+2.1%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">Nombre de partenaires</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">85</h3>
            </div>

            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#f90606]">savings</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+12.4%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">Dons cumulés (FCFA)</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4,500,000</h3>
            </div>

            <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#f90606]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#f90606]">pending_actions</span>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded">-8%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">Suggestions en attente</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12</h3>
            </div>
          </div>

          {/* MAIN CHART WITH TABS */}
          <div className="bg-white dark:bg-[#230f0f] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Évolution des {chartTab === 'inscriptions' ? 'Inscriptions' : 'Dons'}
                </h3>
                <p className="text-sm text-slate-500">Statistiques sur les 6 derniers mois (Jan - Juin)</p>
              </div>
              <div className="flex items-center gap-2">
                <select className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:ring-[#f90606] focus:border-[#f90606]">
                  <option>Année 2024</option>
                  <option>Année 2023</option>
                </select>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-[#f90606]/10 hover:text-[#f90606] transition-colors">
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setChartTab('inscriptions')}
                className={`px-4 py-2 text-sm font-bold transition-colors relative ${
                  chartTab === 'inscriptions'
                    ? 'text-[#f90606] border-b-2 border-[#f90606]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Inscriptions
              </button>
              <button
                onClick={() => setChartTab('dons')}
                className={`px-4 py-2 text-sm font-bold transition-colors relative ${
                  chartTab === 'dons'
                    ? 'text-[#f90606] border-b-2 border-[#f90606]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Dons
              </button>
            </div>

            {/* Chart */}
            <div className="h-64 relative w-full overflow-hidden">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 250" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f90606" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#f90606" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line className="dark:stroke-slate-800" stroke="#e2e8f0" strokeDasharray="4 4" x1="0" x2="1000" y1="50" y2="50" />
                <line className="dark:stroke-slate-800" stroke="#e2e8f0" strokeDasharray="4 4" x1="0" x2="1000" y1="100" y2="100" />
                <line className="dark:stroke-slate-800" stroke="#e2e8f0" strokeDasharray="4 4" x1="0" x2="1000" y1="150" y2="150" />
                <line className="dark:stroke-slate-800" stroke="#e2e8f0" strokeDasharray="4 4" x1="0" x2="1000" y1="200" y2="200" />
                
                {chartTab === 'inscriptions' ? (
                  <>
                    {/* Inscriptions data */}
                    <path d="M0,200 L166,120 L332,150 L498,80 L664,100 L830,40 L1000,60 L1000,250 L0,250 Z" fill="url(#chartGradient)" />
                    <path d="M0,200 L166,120 L332,150 L498,80 L664,100 L830,40 L1000,60" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <circle cx="166" cy="120" fill="#f90606" r="4" />
                    <circle cx="332" cy="150" fill="#f90606" r="4" />
                    <circle cx="498" cy="80" fill="#f90606" r="4" />
                    <circle cx="664" cy="100" fill="#f90606" r="4" />
                    <circle cx="830" cy="40" fill="#f90606" r="4" />
                  </>
                ) : (
                  <>
                    {/* Dons data - different pattern */}
                    <path d="M0,180 L166,140 L332,110 L498,130 L664,70 L830,90 L1000,50 L1000,250 L0,250 Z" fill="url(#chartGradient)" />
                    <path d="M0,180 L166,140 L332,110 L498,130 L664,70 L830,90 L1000,50" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <circle cx="166" cy="140" fill="#f90606" r="4" />
                    <circle cx="332" cy="110" fill="#f90606" r="4" />
                    <circle cx="498" cy="130" fill="#f90606" r="4" />
                    <circle cx="664" cy="70" fill="#f90606" r="4" />
                    <circle cx="830" cy="90" fill="#f90606" r="4" />
                  </>
                )}
              </svg>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">Jan</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">Fév</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">Mar</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">Avr</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">Mai</span>
              <span className="text-xs font-semibold text-slate-500 uppercase text-[#f90606]">Juin</span>
            </div>
          </div>

          {/* BOTTOM SECTIONS: ACTIVITY & MODERATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RECENT ACTIVITIES */}
            <div className="bg-white dark:bg-[#230f0f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f90606]">history</span>
                  Activités Récentes
                </h3>
                <a className="text-[#f90606] text-xs font-bold uppercase hover:underline" href="#">Voir tout</a>
              </div>
              <div className="p-0 overflow-hidden">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWneyGXgWJkQtq6ipwnamrRLhFDwZpVqklH87YNZpG3tMSpiTn0YY9ywG1jVmjFOvVUREjK_YjnDGbsc1Eino6SbP56LJ9UMW-0422P2wYc33cG0JUww1EbAqQTK-OYPWhkEzMI0smgQOhSaLggRhbYM20Hdetdhmr8tlS64JvnT9UGKvjOoBsTQvYEf80ID6VNUQRUVdh5Wz47Mmiv3bW1BqtvYh98Hhu4HY3pIK3uPchAgLhAMABF4r7xCBSg5_WceA-M_1ecTfw')" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">Amadou Fall</span> a rejoint l'écosystème Citoyen.</p>
                      <p className="text-xs text-slate-500">Il y a 10 minutes</p>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold h-fit uppercase">Nouveau</span>
                  </div>
                  <div className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBagn-D34RzszOabA4C-2JsiZdoTXPOrYOKtAk06f6k8ZNWb3lDRx7XmgXwRJAlBGCD6m77s9BjpxEuZaN1iw6QKE9Ple0KuxxMgk4Y1D_EYqL4q3we16aG5RjVoJceZKBsg_oVOr8-PGzCSwqgWJXwJkOaBfkxah37kQCElCdG74jAthbU9D07YgKMhPEsZVNqVcCxkzWOzuyS4nEkZzbvml9M9jAInTPRE_4Kz48I2B8SG1ISEIahZ5_RRedMK0NzEBBzEIgfvMUs')" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">Fatou Sy</span> a effectué un don de 25,000 FCFA.</p>
                      <p className="text-xs text-slate-500">Il y a 1 heure</p>
                    </div>
                    <span className="px-2 py-0.5 bg-[#f90606]/10 text-[#f90606] rounded text-[10px] font-bold h-fit uppercase">Don</span>
                  </div>
                  <div className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="size-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center bg-blue-50 text-blue-600">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">Nouveau programme <span className="font-bold text-slate-900 dark:text-white">"Éducation pour tous"</span> publié.</p>
                      <p className="text-xs text-slate-500">Hier à 18:45</p>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold h-fit uppercase">Système</span>
                  </div>
                  <div className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfKiSRvugjaZLTBnCN6p1fyIDnJcOZJZN_7sG4ALjMvi42eK2zZ32MdKhMPQB3zOkz3jI0AHv3EBKPT4yBLVQhPmMnVABq7YMWXfO7IV1u2Iyh4z4KXVnyirzd4yOH2CveQ8wQfvKnIeNf9N5B5qQwtTmwFvLZC9FXQpT2o41be4e1msPVJZqDnPN00Q6qMkDblMI2Ehniy1HwCRCnN7AFkasZ-FhzH6iKNjjzZ4wr8oQBuH05MddgO_0ytLA4iPJebVJcNwGixYZA')" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">Jean-Pierre</span> a mis à jour son profil partenaire.</p>
                      <p className="text-xs text-slate-500">Hier à 14:20</p>
                    </div>
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-[10px] font-bold h-fit uppercase">Update</span>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK MODERATION */}
            <div className="bg-white dark:bg-[#230f0f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f90606]">rule</span>
                  Modération Rapide
                </h3>
                <div className="bg-[#f90606]/10 text-[#f90606] px-2 py-1 rounded-full text-xs font-bold">12 en attente</div>
              </div>
              <div className="p-6 space-y-6">
                {/* Suggestion Item 1 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-[#f90606]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 rounded-full bg-[#f90606]/20 flex items-center justify-center text-[#f90606] text-xs font-bold">IB</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Ibrahima Bakhoum</p>
                      <p className="text-[11px] text-slate-500">Citoyen • Il y a 2h</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2 italic">
                    "Je propose d'ajouter une section pour la collecte de déchets plastiques dans le quartier de Médina Baye pour la prochaine journée de nettoiement..."
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="flex-1 bg-[#f90606] text-white py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 transition-colors">Approuver</button>
                    <button className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Rejeter</button>
                  </div>
                </div>

                {/* Suggestion Item 2 */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-[#f90606]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 rounded-full bg-[#f90606]/20 flex items-center justify-center text-[#f90606] text-xs font-bold">MK</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Marie Kane</p>
                      <p className="text-[11px] text-slate-500">Partenaire • Il y a 5h</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2 italic">
                    "Proposition de partenariat pour offrir des réductions aux citoyens engagés..."
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="flex-1 bg-[#f90606] text-white py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 transition-colors">Approuver</button>
                    <button className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Rejeter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
