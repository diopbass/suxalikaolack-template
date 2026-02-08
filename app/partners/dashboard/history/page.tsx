"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function PartnerHistoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const toggleSidebar = () => {
    console.log('[v0] Toggle sidebar clicked, current state:', isSidebarOpen)
    setIsSidebarOpen(!isSidebarOpen)
    console.log('[v0] New state should be:', !isSidebarOpen)
  }
  
  console.log('[v0] Component rendered, isSidebarOpen:', isSidebarOpen)
  
  return (
    <div className="flex h-screen w-full bg-[#f8f5f5] dark:bg-[#230f0f]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-64 h-full bg-white dark:bg-[#1a0a0a] border-r border-[#eacdcd] dark:border-[#5e2a2a] transition-transform duration-300`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                <span className="material-symbols-outlined filled text-2xl">store</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#1d0c0c] dark:text-white">SUXALI KAOLACK</h2>
                <p className="text-xs text-primary font-medium">Espace Partenaire</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            <Link 
              href="/partners/dashboard" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-gray-900 text-[#1d0c0c] dark:text-white font-medium transition-colors"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span>Tableau de bord</span>
            </Link>
            <Link 
              href="/partners/dashboard/offers" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-gray-900 text-[#1d0c0c] dark:text-white font-medium transition-colors"
            >
              <span className="material-symbols-outlined">sell</span>
              <span>Mes offres</span>
            </Link>
            <Link 
              href="/partners/dashboard/history" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold transition-colors"
            >
              <span className="material-symbols-outlined filled">history</span>
              <span>Historique</span>
            </Link>
            <Link 
              href="/partners/dashboard/settings" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-gray-900 text-[#1d0c0c] dark:text-white font-medium transition-colors"
            >
              <span className="material-symbols-outlined">settings</span>
              <span>Paramètres</span>
            </Link>
          </nav>
          
          {/* Logout */}
          <div className="p-4 border-t border-[#eacdcd] dark:border-[#5e2a2a]">
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-[#a14545] dark:text-gray-300 hover:text-primary font-medium transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Déconnexion</span>
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-[#1a0a0a] border-b border-[#eacdcd] dark:border-[#5e2a2a] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white"
                type="button"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div>
                <h1 className="text-2xl font-black text-[#1d0c0c] dark:text-white">Historique des Validations</h1>
                <p className="text-sm text-[#a14545] dark:text-gray-400">Espace Partenaire - Suivi des avantages consommés</p>
              </div>
            </div>
            {/* <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md">
              <span className="material-symbols-outlined">download</span>
              <span className="hidden sm:inline">Exporter (PDF/Excel)</span>
            </button> */}
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#a14545]">search</span>
                <input 
                  type="text" 
                  placeholder="ID Citoyen (ex: SK-12345) ou Réf"
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-white dark:bg-[#1a0a0a] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                />
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#a14545]">calendar_today</span>
                <input 
                  type="text" 
                  placeholder="Sélectionner une plage de dates"
                  className="w-full sm:w-64 h-12 pl-11 pr-4 rounded-lg bg-white dark:bg-[#1a0a0a] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                />
              </div>
              <button className="h-12 px-6 rounded-lg bg-white dark:bg-[#1a0a0a] border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white font-medium transition-colors">
                Filtrer
              </button>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f8f5f5] dark:bg-[#2d1414]">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Date & Heure</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Nom de l'offre</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">ID Citoyen</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Référence</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Statut</th>
                      <th className="text-center px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eacdcd] dark:divide-[#5e2a2a]">
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white whitespace-nowrap">24 Oct 2023, 14:30</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">Réduction 20% - Pharmacie</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-mono text-sm">SK-49210</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400 font-mono text-sm">TX-882910</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white whitespace-nowrap">24 Oct 2023, 11:15</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">Consultation Gratuite</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-mono text-sm">SK-33012</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400 font-mono text-sm">TX-882909</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white whitespace-nowrap">23 Oct 2023, 09:45</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">Bon d'achat 5000 FCFA</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-mono text-sm">SK-10293</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400 font-mono text-sm">TX-882855</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white whitespace-nowrap">22 Oct 2023, 16:20</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">Réduction 10% - Librairie</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-mono text-sm">SK-55921</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400 font-mono text-sm">TX-882741</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white whitespace-nowrap">21 Oct 2023, 13:00</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">Pack Scolaire</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-mono text-sm">SK-22100</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400 font-mono text-sm">TX-882602</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="border-t border-[#eacdcd] dark:border-[#5e2a2a] px-6 py-4 flex items-center justify-between">
                <p className="text-sm text-[#a14545] dark:text-gray-400">
                  Affichage de 1 à 10 sur 97 résultats
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-white font-bold">1</button>
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">2</button>
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">3</button>
                  <span className="px-2 text-[#a14545]">...</span>
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">8</button>
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">9</button>
                  <button className="px-3 py-1.5 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
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
          onClick={() => {
            console.log('[v0] Overlay clicked, closing sidebar')
            setIsSidebarOpen(false)
          }}
        />
      )}
    </div>
  )
}
