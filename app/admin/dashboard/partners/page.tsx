'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PartenairesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const partners = [
    {
      id: 'PART-4521',
      name: 'Boulangerie Saloum',
      category: 'Alimentation',
      manager: 'Modou Diop',
      offers: 3,
      status: 'validated',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgOeA2gfgviDuefUQrVK_Z7MPKAhEVIXxnmlRM-EnY4mVuACc98mfndlhVYMfb7PwK_NR99iDy6LrWHNHi3Tw9a-7grfhbOzigo7cvmyXVbAOWj2hwHM_Z-eEniEGMaCOcImK5CIp-HFlEAkDOMQXVsh3fW1FK06jsL0X019miuqjf2NKoJEqW6D3YctQAnZtesmUytXXOOH3b0aCL7tmPLJpNBhV4rFy4e2S5kAXnsNJlS9fD3UlTQFG0BKnDZzM3F93mbut-JuLj'
    },
    {
      id: 'PART-8890',
      name: 'Quincaillerie Moderne',
      category: 'BTP / Services',
      manager: 'Fatou Ndiaye',
      offers: 0,
      status: 'pending',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASQCfkQ5dawL9qswQASOZ7CJRZZTLGNzy2sdwGmQ8m43lEkPrjgaJkQ80bXB64SiQCwgzFP6bwsynUDdCFw9bVegl3YMeaE5LOMjqkIOyOiYW6_zbqmXP5A8I-EUljRUFMxEmTEhjYwCX76gB4bOP_C78KNyZYMEn5JXiRIRPY_F1RQTlfAJ5u9F4Owut5ZwwEQtwaHFqBu1JhZZ7pjSZJyDqkC__ZMskvYF9_iefkOqg7VzWI0FMlHLl8j8VT7Ld_HdcW-YXm6TGf'
    },
    {
      id: 'PART-2231',
      name: 'Espace Mode Kaolack',
      category: 'Textile',
      manager: 'Ousmane Sarr',
      offers: 1,
      status: 'suspended',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zGRzPoR4lGONosRgawUxUxqXz2iB0W_Vm4DZQQyt2IEDJgXv6PiK5x06eZ_2xRlROFZevL_dWnzzDwch2wqRqcBuhCuSillONTz6elH4BaSJz8E_r1WA8TyGCtFWHfYk8EfUGITu8aPehJBZMQWwJW7Jwc21ut3bVHnobVqMBhLiej5mPJyjRIUjlPwQwjL8J7N6SdQ1ZqE5qrlB2ayvkw-GI-kbCFvz733gtLfylUXq0Hd66ZDbSyR6KceOStUgYP2Q2HC9Zk8o'
    },
    {
      id: 'PART-1102',
      name: 'Le Relais de Kaolack',
      category: 'Restauration',
      manager: 'Awa Diallo',
      offers: 5,
      status: 'validated',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLqCHaRlIkLUiYYuubfGf54wWusUl0ssBNPgnA3xG-x1a0ywKDdq6kh5Vz5SGDMi16aofksbP6hUYnucQ3WTS0C072Errjvl4B1ZP8dyKb9Ij4K7FSklDxi5zdFaSfXbqFomHnYQJAITWRuX2jb-YEECBZOkUTfNYgHbRQwYj04BwbLjLI1VqUVxB8zzk8bxYuom1129RnFDlC-4vFBv3CrOi1mrDve2Coxte2qOzhSVIsuf0lbYZ_I_zX7kcH-v1vmJU4cFGAuQ-'
    }
  ]

  const statusConfig = {
    validated: {
      label: 'Validé',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      dotColor: 'bg-green-600'
    },
    pending: {
      label: 'En attente',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
      dotColor: 'bg-yellow-600 animate-pulse'
    },
    suspended: {
      label: 'Suspendu',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
      dotColor: 'bg-red-600'
    }
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-72 bg-white dark:bg-[#1a0b0b] border-r border-[#eacdcd] dark:border-[#3d1a1a] flex flex-col shrink-0 transition-transform duration-300`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4LVURYqy3RR-uP2xDJNi5Vh_ESSoe6Xb0NfnadscCgCPYaQX39IXpQ18sMZVwxVTvrRIoNKhfZJ6dtlDX7Ax7fsAJwXBeXP1n-dAEpdrHlBiEWuZa5gF5ft2DpNTcfim1hljf9XulWM6z3coS-xbC7mvZ5eB7pAqrexoOh_YoB9yUJLW1jvV32jUhSVfHyinFQtJYhF1FiRvun_pkKj3k_mksbwlxstX5Btsb-QCkj-VRhSpYm87b0dEeX3dl6AWwEHkRZzdbB6h")' }}></div>
          <div className="flex flex-col">
            <h1 className="text-[#1d0c0c] dark:text-white text-base font-bold leading-tight">SUXALI KAOLACK</h1>
            <p className="text-[#a14545] text-xs font-normal leading-normal uppercase tracking-wider">Back-office Admin</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium">Tableau de bord</p>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <p className="text-sm font-medium">Actualités</p>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <p className="text-sm font-medium">Agenda</p>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">assignment</span>
            <p className="text-sm font-medium">Programmes</p>
          </Link>
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
            <p className="text-sm font-medium">Opportunités</p>
          </Link>
          <Link href="/admin/dashboard/partners" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#f4e6e6] dark:bg-[#3d1a1a] border-r-4 border-[#ff0000] text-[#1d0c0c] dark:text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
            <p className="text-sm font-bold">Partenaires</p>
          </Link>
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
            <p className="text-sm font-medium">Dons</p>
          </Link>
          <Link href="/admin/dashboard/users" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">group</span>
            <p className="text-sm font-medium">Utilisateurs</p>
          </Link>
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                <span className="text-sm font-medium">Suggestions</span>
              </div>
              <span className="bg-[#ff0000] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#a14545] hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Paramètres</p>
          </Link>
        </nav>
        
        <div className="flex flex-col gap-4 mt-auto p-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg h-12 bg-[#ff0000] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="truncate">Valider un partenaire</span>
          </button>
          <div className="border-t border-[#eacdcd] dark:border-[#3d1a1a] pt-4">
            <a className="flex items-center gap-3 px-4 py-2 text-[#a14545] hover:text-[#ff0000] transition-colors" href="#">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium">Déconnexion</p>
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#fcf8f8] dark:bg-[#230f0f] overflow-y-auto">
        {/* PAGE HEADER */}
        <header className="px-8 py-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1d0c0c] dark:text-white text-4xl font-black leading-tight tracking-tight">Gestion des Partenaires</h2>
              <p className="text-[#a14545] text-base font-normal">Administrez et validez les commerces locaux de la ville de Kaolack.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center p-2 rounded-lg border border-[#eacdcd] dark:border-[#3d1a1a] text-[#1d0c0c] dark:text-white hover:bg-white dark:hover:bg-[#1a0b0b] transition-colors">
                <span className="material-symbols-outlined">file_download</span>
              </button>
            </div>
          </div>
        </header>

        {/* STATS SECTION */}
        <section className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#a14545] text-sm font-medium uppercase tracking-wider">Total Partenaires</p>
              <span className="material-symbols-outlined text-[#a14545]">groups</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#1d0c0c] dark:text-white text-3xl font-black leading-tight">124</p>
              <span className="text-green-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">arrow_upward</span>5%
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#a14545] text-sm font-medium uppercase tracking-wider">En attente</p>
              <span className="material-symbols-outlined text-[#ff0000]">pending_actions</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#1d0c0c] dark:text-white text-3xl font-black leading-tight">12</p>
              <span className="text-red-500 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">priority_high</span>Action requise
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#a14545] text-sm font-medium uppercase tracking-wider">Offres Actives</p>
              <span className="material-symbols-outlined text-[#a14545]">campaign</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#1d0c0c] dark:text-white text-3xl font-black leading-tight">48</p>
              <span className="text-green-600 text-sm font-bold">+12%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#2d1414] border border-[#eacdcd] dark:border-[#3d1a1a] shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#a14545] text-sm font-medium uppercase tracking-wider">Validés</p>
              <span className="material-symbols-outlined text-green-500">verified</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#1d0c0c] dark:text-white text-3xl font-black leading-tight">112</p>
              <span className="text-[#a14545] text-sm font-bold">90.3%</span>
            </div>
          </div>
        </section>

        {/* TABLE CONTROLS */}
        <section className="px-8 mb-4">
          <div className="bg-white dark:bg-[#2d1414] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] p-4 flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <label className="flex flex-col w-full h-11">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-[#eacdcd] dark:border-[#3d1a1a]">
                  <div className="text-[#a14545] flex bg-[#f4e6e6] dark:bg-[#3d1a1a] items-center justify-center px-4">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 border-none bg-white dark:bg-[#1a0b0b] text-[#1d0c0c] dark:text-white placeholder:text-[#a14545] px-4 text-base font-normal leading-normal focus:ring-2 focus:ring-[#ff0000]/20 outline-none" 
                    placeholder="Rechercher un commerce ou un responsable..."
                    type="text"
                  />
                </div>
              </label>
            </div>
            
            {/* Filters */}
            <div className="flex gap-2 flex-wrap items-center">
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-[#f4e6e6] dark:bg-[#3d1a1a] px-4 hover:bg-[#ff0000]/10 transition-colors">
                <p className="text-[#1d0c0c] dark:text-white text-sm font-medium">Toutes catégories</p>
                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1a0b0b] border border-[#eacdcd] dark:border-[#3d1a1a] px-4 hover:bg-[#f4e6e6] dark:hover:bg-[#3d1a1a] transition-colors">
                <p className="text-[#1d0c0c] dark:text-white text-sm font-medium">Statut</p>
                <span className="material-symbols-outlined text-sm">filter_list</span>
              </button>
            </div>
          </div>
        </section>

        {/* PARTNERS TABLE */}
        <section className="px-8 pb-10">
          <div className="bg-white dark:bg-[#2d1414] rounded-xl border border-[#eacdcd] dark:border-[#3d1a1a] overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#fcf8f8] dark:bg-[#1a0b0b] border-b border-[#eacdcd] dark:border-[#3d1a1a]">
                <tr>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider">Commerce</th>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider">Catégorie</th>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider">Responsable</th>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider">Offres</th>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-xs font-black text-[#a14545] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eacdcd] dark:divide-[#3d1a1a]">
                {partners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50 dark:hover:bg-[#321717] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10 border border-[#eacdcd] dark:border-[#3d1a1a]"
                          style={{ backgroundImage: `url("${partner.image}")` }}
                        ></div>
                        <div className="flex flex-col">
                          <span className="text-[#1d0c0c] dark:text-white font-bold">{partner.name}</span>
                          <span className="text-[#a14545] text-xs">ID: {partner.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-[#f4e6e6] dark:bg-[#3d1a1a] text-[#1d0c0c] dark:text-white text-xs font-medium">
                        {partner.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#1d0c0c] dark:text-gray-300">{partner.manager}</td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1 text-sm font-bold ${partner.offers > 0 ? 'text-[#ff0000]' : 'text-[#a14545]'}`}>
                        <span className="material-symbols-outlined text-sm">local_offer</span> {partner.offers}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-fit ${statusConfig[partner.status as keyof typeof statusConfig].color} text-xs font-bold`}>
                        <div className={`size-1.5 rounded-full ${statusConfig[partner.status as keyof typeof statusConfig].dotColor}`}></div>
                        {statusConfig[partner.status as keyof typeof statusConfig].label}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {partner.status === 'pending' ? (
                        <button className="text-sm font-bold text-[#ff0000] underline hover:no-underline">Valider</button>
                      ) : (
                        <button className="text-[#a14545] hover:text-[#ff0000] transition-colors">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="px-6 py-4 bg-white dark:bg-[#2d1414] border-t border-[#eacdcd] dark:border-[#3d1a1a] flex items-center justify-between">
              <p className="text-xs text-[#a14545]">Affichage de 1 à 4 sur 124 partenaires</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs border border-[#eacdcd] dark:border-[#3d1a1a] rounded hover:bg-gray-50 dark:hover:bg-[#1a0b0b] disabled:opacity-50 text-[#1d0c0c] dark:text-white" disabled>
                  Précédent
                </button>
                <button className="px-3 py-1 text-xs border border-[#eacdcd] dark:border-[#3d1a1a] rounded bg-[#f4e6e6] dark:bg-[#3d1a1a] font-bold text-[#1d0c0c] dark:text-white">
                  1
                </button>
                <button className="px-3 py-1 text-xs border border-[#eacdcd] dark:border-[#3d1a1a] rounded hover:bg-gray-50 dark:hover:bg-[#1a0b0b] text-[#1d0c0c] dark:text-white">
                  2
                </button>
                <button className="px-3 py-1 text-xs border border-[#eacdcd] dark:border-[#3d1a1a] rounded hover:bg-gray-50 dark:hover:bg-[#1a0b0b] text-[#1d0c0c] dark:text-white">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
