"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function PartnerSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [structureName, setStructureName] = useState("Pharmacie Ndao & Fils")
  const [category, setCategory] = useState("Pharmacie")
  const [address, setAddress] = useState("Quartier Ndangane, Route Nationale 1")
  const [contactName, setContactName] = useState("Amadou Ndao")
  const [phone, setPhone] = useState("+221 77 123 45 67")
  const [email, setEmail] = useState("contact@pharmacie-ndao.sn")
  
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-gray-900 text-[#1d0c0c] dark:text-white font-medium transition-colors"
            >
              <span className="material-symbols-outlined">history</span>
              <span>Historique</span>
            </Link>
            <Link 
              href="/partners/dashboard/settings" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold transition-colors"
            >
              <span className="material-symbols-outlined filled">settings</span>
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
                <h1 className="text-2xl font-black text-[#1d0c0c] dark:text-white">Paramètres de la structure</h1>
                <p className="text-sm text-[#a14545] dark:text-gray-400">Gérez les informations de votre profil et vos préférences de sécurité.</p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profil de la structure */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden">
              <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">store</span>
                  <h2 className="text-xl font-bold text-[#1d0c0c] dark:text-white">Profil de la structure</h2>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative group">
                    <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-[#eacdcd] dark:border-[#5e2a2a]">
                      <span className="material-symbols-outlined text-primary text-4xl">store</span>
                    </div>
                    <button className="absolute bottom-0 right-0 size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-red-700 transition-colors">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold text-[#1d0c0c] dark:text-white">Logo de la structure</h3>
                    <p className="text-sm text-[#a14545] dark:text-gray-400">Ce logo sera affiché publiquement sur la plateforme partenaire.</p>
                    <p className="text-xs text-[#a14545] dark:text-gray-400">JPG, PNG ou GIF. Max 2Mo.</p>
                    <button className="mt-2 text-sm font-bold text-primary hover:underline">
                      Changer le logo
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                      Nom de la structure
                    </label>
                    <input 
                      type="text"
                      value={structureName}
                      onChange={(e) => setStructureName(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                      Catégorie
                    </label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none text-[#1d0c0c] dark:text-white"
                    >
                      <option>Pharmacie</option>
                      <option>Restauration</option>
                      <option>Commerce</option>
                      <option>Services</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                    Adresse à Kaolack
                  </label>
                  <input 
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Contact Référent */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden">
              <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h2 className="text-xl font-bold text-[#1d0c0c] dark:text-white">Contact Référent</h2>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                      Nom du responsable
                    </label>
                    <input 
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                      Numéro de téléphone
                    </label>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#1d0c0c] dark:text-gray-300 mb-2">
                    Adresse Email
                  </label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#1d0c0c] dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] overflow-hidden">
              <div className="p-6 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lock</span>
                  <h2 className="text-xl font-bold text-[#1d0c0c] dark:text-white">Sécurité</h2>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#f8f5f5] dark:bg-[#230f0f] hover:bg-[#f4e6e6] dark:hover:bg-[#2d1414] border border-[#eacdcd] dark:border-[#5e2a2a] rounded-lg text-[#1d0c0c] dark:text-white font-medium transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">key</span>
                  Changer le mot de passe
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex items-center justify-end gap-4 pb-6">
              <button className="px-6 py-3 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a] hover:bg-[#f4e6e6] dark:hover:bg-gray-800 text-[#1d0c0c] dark:text-white font-medium transition-colors">
                Annuler
              </button>
              <button className="px-6 py-3 rounded-lg bg-primary hover:bg-red-700 text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">save</span>
                Enregistrer les modifications
              </button>
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
