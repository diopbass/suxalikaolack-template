'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CitizensDirectoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const citizens = [
    { id: 1, name: 'Moussa Diop', initials: 'MD', phone: '+221 77 123 45 67', district: 'Médina Baye', profession: 'Enseignant', date: '12/05/2023', status: 'active' },
    { id: 2, name: 'Fatou Sow', initials: 'FS', phone: '+221 78 987 65 43', district: 'Leona', profession: 'Commerçante', date: '15/05/2023', status: 'active' },
    { id: 3, name: 'Abdou Karim', initials: 'AK', phone: '+221 70 456 12 89', district: 'Niodior', profession: 'Étudiant', date: '02/06/2023', status: 'pending' },
    { id: 4, name: 'Aminata Gueye', initials: 'AG', phone: '+221 76 333 22 11', district: 'Ndangane', profession: 'Infirmière', date: '10/06/2023', status: 'inactive' },
    { id: 5, name: 'Ibrahima Ndiaye', initials: 'IN', phone: '+221 77 555 44 33', district: 'Médina Baye', profession: 'Chauffeur', date: '20/06/2023', status: 'active' },
  ]

  const statusConfig = {
    active: { label: 'Actif', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', dotColor: 'bg-green-500' },
    pending: { label: 'En attente', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', dotColor: 'bg-amber-500' },
    inactive: { label: 'Désactivé', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', dotColor: 'bg-red-500' },
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-72 bg-white dark:bg-[#230f0f] border-r border-[#eacdcd] dark:border-[#4d2626] flex flex-col shrink-0 transition-transform duration-300`}>
        <div className="p-6 flex items-center gap-3">
          <div className="size-12 bg-[#ff0000] rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-3xl">hub</span>
          </div>
          <div>
            <h1 className="text-[#1d0c0c] dark:text-white text-lg font-black leading-tight">SUXALI KAOLACK</h1>
            <p className="text-[#ff0000] text-xs font-bold uppercase tracking-wider">Back-office Admin</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-semibold">Tableau de bord</span>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-sm font-semibold">Actualités</span>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-semibold">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-semibold">Programmes</span>
          </Link>
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
            <span className="text-sm font-semibold">Opportunités</span>
          </Link>
          <Link href="/admin/dashboard/partners" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-semibold">Partenaires</span>
          </Link>
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-semibold">Dons</span>
          </Link>
          <Link href="/admin/dashboard/citizens" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#ff0000]/10 text-[#ff0000]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            <span className="text-sm font-semibold">Répertoire des Citoyens</span>
          </Link>
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                <span className="text-sm font-semibold">Suggestions</span>
              </div>
              <span className="bg-[#ff0000] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
            </div>
          </Link>
          
          <div className="my-4 border-t border-[#eacdcd] dark:border-[#4d2626]"></div>
          
          <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d0c0c] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-semibold">Paramètres</span>
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-[#eacdcd] dark:border-[#4d2626]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-200 dark:bg-[#4d2626]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#1d0c0c] dark:text-white">Abdou Ndiaye</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f8f5f5] dark:bg-[#230f0f] overflow-y-auto">
        {/* PAGE HEADING */}
        <header className="p-8 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1d0c0c] dark:text-white text-3xl font-black tracking-tight">Répertoire des Citoyens</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base">Gérez la base de données centralisée des résidents et acteurs de Kaolack.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#ff0000] hover:bg-[#ff0000]/90 text-white rounded-lg transition-colors shadow-lg shadow-[#ff0000]/20">
              <span className="material-symbols-outlined text-xl">download</span>
              <span className="text-sm font-bold truncate">Exporter la base (CSV)</span>
            </button>
          </div>
        </header>

        {/* SEARCH & FILTERS */}
        <section className="px-8 py-4 flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* SEARCH BAR */}
            <div className="flex-1 min-w-[300px]">
              <div className="relative h-12 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="block w-full h-full pl-12 pr-4 bg-white dark:bg-[#2d1414] border-none focus:ring-2 focus:ring-[#ff0000]/50 rounded-lg text-sm placeholder:text-gray-400 dark:text-white shadow-sm transition-all" 
                  placeholder="Rechercher par nom, téléphone ou profession..." 
                  type="text"
                />
              </div>
            </div>
            
            {/* FILTER CHIPS */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-xs font-bold text-gray-400 uppercase mr-2">Filtrer par Quartier :</span>
              <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#4d2626] hover:border-[#ff0000] transition-colors">
                <span className="text-sm font-medium">Tous les quartiers</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-[#ff0000]/10 border border-[#ff0000] text-[#ff0000]">
                <span className="text-sm font-bold">Médina Baye</span>
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#4d2626] hover:border-[#ff0000] transition-colors">
                <span className="text-sm font-medium">Leona</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#4d2626] hover:border-[#ff0000] transition-colors">
                <span className="text-sm font-medium">Niodior</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </div>
        </section>

        {/* TABLE CONTAINER */}
        <section className="px-8 py-4">
          <div className="bg-white dark:bg-[#2d1414] rounded-xl border border-[#eacdcd] dark:border-[#4d2626] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#361a1a] border-b border-[#eacdcd] dark:border-[#4d2626]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Nom & Prénom</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Téléphone</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Quartier</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Profession</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Date d'inscription</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Statut</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eacdcd] dark:divide-[#4d2626]">
                  {citizens.map((citizen) => (
                    <tr key={citizen.id} className="hover:bg-gray-50 dark:hover:bg-[#3d1a1a] transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-gray-100 dark:bg-[#4d2626] flex items-center justify-center font-bold text-[#ff0000] text-xs uppercase">
                            {citizen.initials}
                          </div>
                          <span className="text-sm font-bold text-[#1d0c0c] dark:text-white">{citizen.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-gray-600 dark:text-gray-300">{citizen.phone}</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-gray-100 dark:bg-[#4d2626] text-gray-800 dark:text-gray-200">
                          {citizen.district}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">{citizen.profession}</td>
                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">{citizen.date}</td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${statusConfig[citizen.status as keyof typeof statusConfig].color}`}>
                          <span className={`size-1.5 rounded-full mr-1.5 ${statusConfig[citizen.status as keyof typeof statusConfig].dotColor}`}></span>
                          {statusConfig[citizen.status as keyof typeof statusConfig].label}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-[#ff0000] hover:text-[#ff0000]/70 font-bold text-sm transition-colors">Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TABLE FOOTER / PAGINATION */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-[#361a1a] border-t border-[#eacdcd] dark:border-[#4d2626] flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Affichage de 1-5 sur 1,248 citoyens</span>
              <div className="flex gap-2">
                <button className="size-9 rounded-lg border border-[#eacdcd] dark:border-[#4d2626] flex items-center justify-center bg-white dark:bg-[#2d1414] text-gray-400 disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="size-9 rounded-lg border border-[#ff0000] flex items-center justify-center bg-[#ff0000] text-white font-bold text-sm">1</button>
                <button className="size-9 rounded-lg border border-[#eacdcd] dark:border-[#4d2626] flex items-center justify-center bg-white dark:bg-[#2d1414] text-gray-600 dark:text-gray-300 font-bold text-sm hover:border-[#ff0000] transition-colors">2</button>
                <button className="size-9 rounded-lg border border-[#eacdcd] dark:border-[#4d2626] flex items-center justify-center bg-white dark:bg-[#2d1414] text-gray-600 dark:text-gray-300 font-bold text-sm hover:border-[#ff0000] transition-colors">3</button>
                <button className="size-9 rounded-lg border border-[#eacdcd] dark:border-[#4d2626] flex items-center justify-center bg-white dark:bg-[#2d1414] text-gray-400 hover:text-[#ff0000] hover:border-[#ff0000] transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
