"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function PartnerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <div className="flex h-screen w-full bg-[#f8f5f5] dark:bg-[#230f0f]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-64 h-full bg-white dark:bg-[#1a0a0a] border-r border-[#eacdcd] dark:border-[#5e2a2a] transition-transform duration-300`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
            <div className="flex items-center gap-3">
              <img 
                src="https://suxalikaolack.nasserdigital.com/wp-content/uploads/2026/01/LOGO-SK-1.png" 
                alt="SUXALI KAOLACK" 
                className="h-10 w-auto object-contain"
              />
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold transition-colors"
            >
              <span className="material-symbols-outlined filled">dashboard</span>
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-gray-900 text-[#1d0c0c] dark:text-white font-medium transition-colors"
            >
              <span className="material-symbols-outlined">history</span>
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
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 hover:bg-[#f4e6e6] dark:hover:bg-gray-800 rounded-lg text-[#1d0c0c] dark:text-white"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div>
                <h1 className="text-2xl font-black text-[#1d0c0c] dark:text-white">Vue d'ensemble</h1>
                <p className="text-sm text-[#a14545] dark:text-gray-400">Bienvenue sur votre espace partenaire.</p>
              </div>
            </div>
            <Link
              href="/partners/dashboard/offers/new"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-md"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="hidden sm:inline">Nouvelle Offre</span>
            </Link>
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-red-500 text-xl">visibility</span>
                      <p className="text-xs text-[#a14545] dark:text-gray-400 font-bold uppercase">Impressions</p>
                    </div>
                    <p className="text-3xl font-black text-[#1d0c0c] dark:text-white">12,450</p>
                    <p className="text-xs text-green-600 font-medium mt-1">↗ +12%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-red-500 text-xl">ads_click</span>
                      <p className="text-xs text-[#a14545] dark:text-gray-400 font-bold uppercase">Clics</p>
                    </div>
                    <p className="text-3xl font-black text-[#1d0c0c] dark:text-white">3,200</p>
                    <p className="text-xs text-green-600 font-medium mt-1">↗ +5%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-red-500 text-xl">qr_code_scanner</span>
                      <p className="text-xs text-[#a14545] dark:text-gray-400 font-bold uppercase">Scans QR validés</p>
                    </div>
                    <p className="text-3xl font-black text-[#1d0c0c] dark:text-white">850</p>
                    <p className="text-xs text-green-600 font-medium mt-1">↗ +18%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chart Section */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1d0c0c] dark:text-white">Évolution des scans</h2>
                  <p className="text-sm text-[#a14545] dark:text-gray-400">Derniers 30 jours</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-primary">850</p>
                  <p className="text-xs text-[#a14545] dark:text-gray-400 font-bold uppercase">Total scans</p>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                {[40, 65, 45, 80, 60, 70, 55, 85, 75, 65, 90, 70, 85, 95, 80, 75, 100, 85, 75, 80, 70, 85, 75, 80].map((height, index) => (
                  <div key={index} className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-colors cursor-pointer relative group" style={{height: `${height}%`}}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1d0c0c] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Semaine {Math.floor(index / 7) + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-[#a14545] dark:text-gray-400 font-medium">
                <span>Semaine 1</span>
                <span>Semaine 2</span>
                <span>Semaine 3</span>
                <span>Semaine 4</span>
              </div>
            </div>
            
            {/* Recent Validations Table */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden">
              <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a] flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#1d0c0c] dark:text-white">Dernières validations</h2>
                <Link href="/partners/dashboard/history" className="text-sm font-bold text-primary hover:underline">
                  Voir tout
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f8f5f5] dark:bg-[#2d1414]">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Client</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Offre utilisée</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Date & Heure</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Montant</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eacdcd] dark:divide-[#5e2a2a]">
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600">AM</span>
                          </div>
                          <span className="font-medium text-[#1d0c0c] dark:text-white">Awa Mendy</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white">Pack Découverte -50%</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400">Aujourd'hui, 14:30</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">5 000 FCFA</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f5f5] dark:hover:bg-[#2d1414]/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-purple-600">MD</span>
                          </div>
                          <span className="font-medium text-[#1d0c0c] dark:text-white">Moussa Diop</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white">Menu Duo Burger</td>
                      <td className="px-6 py-4 text-[#a14545] dark:text-gray-400">Aujourd'hui, 13:15</td>
                      <td className="px-6 py-4 text-[#1d0c0c] dark:text-white font-medium">8 500 FCFA</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="size-1.5 rounded-full bg-green-600"></span>
                          Validé
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
