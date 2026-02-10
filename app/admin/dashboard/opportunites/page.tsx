'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function OpportunitesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('tous')

  const opportunities = [
    {
      id: 'SK-2023-089',
      title: 'Développeur Fullstack React/Node',
      type: 'emploi',
      deadline: '31 déc. 2023',
      source: 'Suxali Hub',
      status: 'published',
    },
    {
      id: 'SK-2023-112',
      title: 'Formation en Agro-écologie Moderne',
      type: 'formation',
      deadline: '15 nov. 2023',
      source: 'ONG Partenaire',
      status: 'expired',
    },
    {
      id: 'SK-2024-005',
      title: 'Programme de Mentorat Jeunesse',
      type: 'benevolat',
      deadline: '20 jan. 2024',
      source: 'Direction Régionale',
      status: 'published',
    },
    {
      id: 'SK-2023-221',
      title: 'Comptable Senior',
      type: 'emploi',
      deadline: '05 déc. 2023',
      source: 'Cabinet X-Expert',
      status: 'published',
    },
  ]

  const typeConfig = {
    emploi: {
      label: 'Emploi',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      iconColor: 'text-blue-500',
    },
    formation: {
      label: 'Formation',
      color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      iconColor: 'text-green-500',
    },
    benevolat: {
      label: 'Bénévolat',
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      iconColor: 'text-purple-500',
    },
  }

  const statusConfig = {
    published: {
      label: 'Publié',
      color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      dotColor: 'bg-green-500',
    },
    expired: {
      label: 'Expiré',
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      dotColor: 'bg-gray-500',
    },
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
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            <span className="text-sm font-semibold">Opportunités</span>
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
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-[#f90606] text-slate-900 dark:text-white placeholder-slate-500 outline-none" 
                placeholder="Rechercher une offre..." 
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
            <span className="text-slate-900 dark:text-white font-medium">Gestion des Opportunités</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestion des Opportunités</h1>
              <p className="text-slate-500">Gérez les offres d'emploi, de formation et de bénévolat pour la communauté de Kaolack.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#f90606] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md shadow-red-600/20">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Ajouter une opportunité</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-[#230f0f] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500 text-lg">filter_alt</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Filtrer par type :</span>
            </div>
            <button
              onClick={() => setActiveFilter('tous')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'tous'
                  ? 'bg-[#f90606] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter('emploi')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'emploi'
                  ? 'bg-[#f90606] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Emploi
            </button>
            <button
              onClick={() => setActiveFilter('formation')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'formation'
                  ? 'bg-[#f90606] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Formation
            </button>
            <button
              onClick={() => setActiveFilter('benevolat')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'benevolat'
                  ? 'bg-[#f90606] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Bénévolat
            </button>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-[#230f0f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Titre de l'offre</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Type</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date limite</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Source</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Statut</th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {opportunities.map((opportunity) => (
                    <tr key={opportunity.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-900 dark:text-white">{opportunity.title}</span>
                          <span className="text-xs text-slate-400">Réf: {opportunity.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                          typeConfig[opportunity.type as keyof typeof typeConfig].color
                        }`}>
                          {typeConfig[opportunity.type as keyof typeof typeConfig].label}
                        </span>
                      </td>
                      <td className={`px-6 py-4 text-sm font-medium ${
                        opportunity.status === 'expired' ? 'text-red-500' : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {opportunity.deadline}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{opportunity.source}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ${
                          statusConfig[opportunity.status as keyof typeof statusConfig].color
                        }`}>
                          <span className={`size-1.5 rounded-full ${
                            statusConfig[opportunity.status as keyof typeof statusConfig].dotColor
                          }`}></span>
                          {statusConfig[opportunity.status as keyof typeof statusConfig].label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-slate-400 hover:text-[#f90606] transition-colors">
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-[#f90606] transition-colors">
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-6 py-4">
              <p className="text-sm text-slate-500">
                Affichage de <span className="font-medium">1</span> à <span className="font-medium">4</span> sur <span className="font-medium">24</span> opportunités
              </p>
              <div className="flex items-center gap-2">
                <button className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-slate-400 cursor-not-allowed">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="rounded bg-[#f90606] px-3 py-1.5 font-medium text-white">1</button>
                <button className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">2</button>
                <button className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">3</button>
                <button className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
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
