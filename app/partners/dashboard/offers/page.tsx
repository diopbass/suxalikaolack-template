"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function PartnerOffersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold transition-colors"
            >
              <span className="material-symbols-outlined filled">sell</span>
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
                <h1 className="text-2xl font-black text-[#1d0c0c] dark:text-white">Mes Offres</h1>
                <p className="text-sm text-[#a14545] dark:text-gray-400">Gérez vos promotions et coupons actifs.</p>
              </div>
            </div>
            <Link
              href="/partners/dashboard/offers/new"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-md"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="hidden sm:inline">Créer une offre</span>
            </Link>
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#a14545]">search</span>
                <input 
                  type="text" 
                  placeholder="Rechercher une offre..."
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-white dark:bg-[#1a0a0a] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                />
              </div>
              <select className="h-12 px-4 rounded-lg bg-white dark:bg-[#1a0a0a] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none text-[#1d0c0c] dark:text-white font-medium">
                <option>Tous les statuts</option>
                <option>Active</option>
                <option>En pause</option>
                <option>Expirée</option>
              </select>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Offer Card 1 - Active */}
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop')"}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-green-500 text-white">
                      <span className="size-1.5 rounded-full bg-white"></span>
                      Active
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-tight">-10% sur l'alimentation</h3>
                    <p className="text-sm text-white/90">Supermarché Kaolack</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Catégorie</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium">🍴 Alimentation</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Utilisations</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium flex items-center gap-1 justify-end">
                        <span className="material-symbols-outlined text-sm">person</span>
                        142
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase text-xs mb-1">Validité</p>
                    <p className="text-[#1d0c0c] dark:text-white text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                      01 Jan 2024 - 31 Déc 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-[#1d0c0c] dark:text-white">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-[#1d0c0c] dark:text-white">
                      <span className="material-symbols-outlined text-sm">pause</span>
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-primary transition-colors flex items-center justify-center gap-1 text-[#a14545] hover:text-primary">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Offer Card 2 - Paused */}
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop')"}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-orange-500 text-white">
                      <span className="size-1.5 rounded-full bg-white"></span>
                      En pause
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-tight">-20% Menu Déjeuner</h3>
                    <p className="text-sm text-white/90">Chez Ami</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Catégorie</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium">🍔 Restauration</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Utilisations</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium flex items-center gap-1 justify-end">
                        <span className="material-symbols-outlined text-sm">person</span>
                        89
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase text-xs mb-1">Validité</p>
                    <p className="text-[#1d0c0c] dark:text-white text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                      15 Fév 2024 - 15 Mar 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-[#1d0c0c] dark:text-white">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 dark:border-green-900/50 dark:bg-green-900/20 dark:hover:bg-green-900/30 transition-colors flex items-center justify-center gap-1 text-green-700 dark:text-green-400">
                      <span className="material-symbols-outlined text-sm filled">play_arrow</span>
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-primary transition-colors flex items-center justify-center gap-1 text-[#a14545] hover:text-primary">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Offer Card 3 - Expired */}
              <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden group hover:shadow-lg transition-shadow opacity-60">
                <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop')"}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-gray-500 text-white">
                      <span className="size-1.5 rounded-full bg-white"></span>
                      Expirée
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-tight">Pizza Familiale -30%</h3>
                    <p className="text-sm text-white/90">Bella Italia</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Catégorie</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium">🍕 Restauration</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase mb-1">Utilisations</p>
                      <p className="text-[#1d0c0c] dark:text-white font-medium flex items-center gap-1 justify-end">
                        <span className="material-symbols-outlined text-sm">person</span>
                        67
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#a14545] dark:text-gray-400 font-bold uppercase text-xs mb-1">Validité</p>
                    <p className="text-[#a14545] dark:text-gray-400 text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      Terminé le 31 Jan 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-[#1d0c0c] dark:text-white">
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-primary transition-colors flex items-center justify-center gap-1 text-[#a14545] hover:text-primary">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
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
