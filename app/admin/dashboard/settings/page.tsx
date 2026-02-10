'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('configuration')
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

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
          <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#ff0000]/10 border-l-4 border-[#ff0000] text-[#ff0000]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span className="text-sm font-semibold">Paramètres</span>
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
        <div className="max-w-6xl mx-auto w-full px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-4">
            <a href="#" className="text-[#a14545] dark:text-[#ff7a7a] text-sm font-medium hover:underline">Accueil</a>
            <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
            <span className="text-[#1d0c0c] dark:text-white text-sm font-medium">Paramètres</span>
          </nav>

          {/* Page Heading */}
          <header className="flex flex-col gap-2 mb-8">
            <h1 className="text-[#1d0c0c] dark:text-white text-4xl font-black tracking-tight">Paramètres Système</h1>
            <p className="text-[#a14545] dark:text-[#ff7a7a] text-base font-normal">Gérez la configuration globale, la sécurité et les intégrations API de votre plateforme.</p>
          </header>

          {/* Tabs */}
          <div className="border-b border-[#eacdcd] dark:border-[#3d1a1a] mb-8">
            <div className="flex gap-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('configuration')}
                className={`flex flex-col items-center border-b-[3px] pb-4 pt-2 ${
                  activeTab === 'configuration'
                    ? 'border-[#ff0000] text-[#1d0c0c] dark:text-white'
                    : 'border-transparent text-[#a14545] dark:text-gray-400 hover:text-[#ff0000] transition-colors'
                }`}
              >
                <p className="text-sm font-bold tracking-wide whitespace-nowrap">Configuration Site</p>
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex flex-col items-center border-b-[3px] pb-4 pt-2 ${
                  activeTab === 'security'
                    ? 'border-[#ff0000] text-[#1d0c0c] dark:text-white'
                    : 'border-transparent text-[#a14545] dark:text-gray-400 hover:text-[#ff0000] transition-colors'
                }`}
              >
                <p className="text-sm font-bold tracking-wide whitespace-nowrap">Sécurité & Rôles</p>
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`flex flex-col items-center border-b-[3px] pb-4 pt-2 ${
                  activeTab === 'api'
                    ? 'border-[#ff0000] text-[#1d0c0c] dark:text-white'
                    : 'border-transparent text-[#a14545] dark:text-gray-400 hover:text-[#ff0000] transition-colors'
                }`}
              >
                <p className="text-sm font-bold tracking-wide whitespace-nowrap">API InTouch</p>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex flex-col items-center border-b-[3px] pb-4 pt-2 ${
                  activeTab === 'notifications'
                    ? 'border-[#ff0000] text-[#1d0c0c] dark:text-white'
                    : 'border-transparent text-[#a14545] dark:text-gray-400 hover:text-[#ff0000] transition-colors'
                }`}
              >
                <p className="text-sm font-bold tracking-wide whitespace-nowrap">Notifications</p>
              </button>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-8">
            {/* Configuration Site Tab */}
            {activeTab === 'configuration' && (
              <section className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#eacdcd] dark:border-[#3d1a1a] bg-gray-50/50 dark:bg-black/20">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff0000]">public</span>
                    Configuration du Site
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Titre du Site
                      <input 
                        className="w-full rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                        type="text" 
                        defaultValue="SUXALI KAOLACK"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Slogan / Tagline
                      <input 
                        className="w-full rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                        placeholder="Développement communautaire participatif" 
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-4 md:col-span-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Logo de l'Organisation
                      <div className="flex items-center gap-4">
                        <div className="size-20 bg-gray-100 dark:bg-[#2d1212] rounded-lg border-2 border-dashed border-[#eacdcd] dark:border-[#3d1a1a] flex items-center justify-center overflow-hidden">
                          <span className="material-symbols-outlined text-gray-400">image</span>
                        </div>
                        <button 
                          className="px-4 py-2 bg-white dark:bg-[#2d1212] border border-[#eacdcd] dark:border-[#3d1a1a] text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-[#3d1a1a] transition-colors flex items-center gap-2" 
                          type="button"
                        >
                          <span className="material-symbols-outlined text-sm">upload</span> Modifier le logo
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* API InTouch Tab */}
            {activeTab === 'api' && (
              <section className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#eacdcd] dark:border-[#3d1a1a] bg-gray-50/50 dark:bg-black/20">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff0000]">api</span>
                    API InTouch - Passerelle de Paiement
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Merchant ID
                      <input 
                        className="w-full font-mono text-sm rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                        placeholder="IK_000000_XXXXX" 
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Clé Secrète de Transaction
                      <div className="relative">
                        <input 
                          className="w-full font-mono text-sm rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                          type={showPassword ? "text" : "password"}
                          defaultValue="••••••••••••••••"
                        />
                        <span 
                          className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                      Mode Environnement
                      <select className="w-full rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]">
                        <option>Production (Live)</option>
                        <option>Développement (Sandbox)</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex items-end pb-1">
                    <div className="flex items-center gap-2 text-xs text-green-600 font-bold bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg border border-green-200 dark:border-green-900/50">
                      <span className="material-symbols-outlined text-sm">check_circle</span> Connexion API Active
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <section className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#eacdcd] dark:border-[#3d1a1a] bg-gray-50/50 dark:bg-black/20">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff0000]">sms</span>
                    Notifications & Réglages SMS
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#2d1212] rounded-lg">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Activer les alertes SMS critiques</p>
                      <p className="text-xs text-gray-500">Envoyer automatiquement un SMS pour les transactions échouées</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        checked={smsAlertsEnabled}
                        onChange={(e) => setSmsAlertsEnabled(e.target.checked)}
                        className="sr-only peer" 
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ff0000]"></div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                        Expéditeur (Sender ID)
                        <input 
                          className="w-full rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                          type="text" 
                          defaultValue="SUXALI-KL"
                        />
                      </label>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#1d0c0c] dark:text-gray-200">
                        Quota d'alerte mensuel
                        <input 
                          className="w-full rounded-lg border-[#eacdcd] dark:bg-[#2d1212] dark:border-[#3d1a1a] focus:ring-[#ff0000] focus:border-[#ff0000]" 
                          type="number" 
                          defaultValue="1000"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Security & Roles Tab - Placeholder */}
            {activeTab === 'security' && (
              <section className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#eacdcd] dark:border-[#3d1a1a] bg-gray-50/50 dark:bg-black/20">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff0000]">security</span>
                    Sécurité & Gestion des Rôles
                  </h2>
                </div>
                <div className="p-8 text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">construction</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Cette section sera disponible dans une prochaine version.</p>
                </div>
              </section>
            )}

            {/* Submit Footer */}
            <div className="flex items-center justify-end gap-4 py-8 border-t border-[#eacdcd] dark:border-[#3d1a1a]">
              <button 
                className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors" 
                type="button"
              >
                Réinitialiser les modifications
              </button>
              <button 
                className="px-8 py-3 bg-[#ff0000] text-white rounded-lg font-bold shadow-lg shadow-[#ff0000]/20 hover:bg-red-700 active:scale-95 transition-all flex items-center gap-2" 
                type="submit"
              >
                <span className="material-symbols-outlined">save</span>
                Enregistrer les paramètres
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
