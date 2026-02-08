'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdminNewsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const newsData = [
    {
      id: 1,
      title: "Inauguration du nouveau centre de formation à Kaolack",
      category: "Institutionnel",
      categoryColor: "blue",
      author: "Aminata Touré",
      date: "12 Oct 2023",
      status: "Publié",
      statusColor: "green",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDFL62nlvab_-EiA1B46rtpbp2Tz-yGNH7Dg5TWcRw1rQRXahhmNIMSnNag_YuY3cw_LlGOLNuA1qFwlfGHcWGcBsSapyG5aBBF9TL7mhAxGZ241cTTrroDQNUm0X7BAgwaBBGw-cids74r409CCbZNUuNJYq2fKDg47yoPnkAl6wzykaqpkW8EYlaEO5b7dRo5cbyczOUdhpiQZ-9i2_Ur1SVYzooHomZzos_z4mW4pqGL8bRGus8OunSMr8IrXKkw5mEMcEMJXJ"
    },
    {
      id: 2,
      title: "ALERTE : Risques d'inondations prévus ce weekend",
      category: "Alerte",
      categoryColor: "red",
      author: "Service Météo",
      date: "10 Oct 2023",
      status: "Publié",
      statusColor: "green",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmCOsXykzT_hgvZEwqyTyYnbBc6kh29ZQSIepU3_o_kB7-LUJacfDwgVAXQgNSyOA55EfSbd5CfATH7oFcHTFejQTB5SogtgEGVSv8zKexvQZ7SXWei_O7qe1R9_oFyZemzujAYitVm4zlbNaK7MsbA-GTiiFY1dqfmgimFVdoFJFi3rhDWSj3XvUu3_3zQlQN3kPHPkOZPdfKV8MNxuBzq_W1kDZe_c2H5PCBUvQcuVbEKFOUOND95IQIiXIPV7tiKiTontidQr31"
    },
    {
      id: 3,
      title: "Rapport annuel 2023 sur le développement local",
      category: "Institutionnel",
      categoryColor: "blue",
      author: "Mamadou Diop",
      date: "08 Oct 2023",
      status: "Brouillon",
      statusColor: "gray",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCZE2Q3CwqalbLFlk1qP5_x_DyJPrfNyUfpzlBYdPvDCLUNVGWt9dTc3_s0tKeeJ2RDjPUofuFH40OMmNiiI1EKjcF36gBUN1bVQEqz1c3YFn0Pp9FY0dMQkfhC-exoymrj-TI3tMs6-HHR8c4kffQLLHRpjkttQz2k9WSsBay70qVCzddK7pz-ddjU-mfgVuPXAjQFGqqa5_tHi5d7fMInxGV9lHi5pjifrFzz_iBpxjalRCs099SzNyhp4loEABq949v2Y_JxCvs"
    }
  ]

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-72 bg-white dark:bg-[#2d1616] border-r border-[#f4e6e6] dark:border-[#3d2424] flex flex-col shrink-0 transition-transform duration-300 h-screen`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary rounded-full p-2 text-white">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">SUXALI KAOLACK</h1>
            <p className="text-[#a14545] text-xs font-medium">Back-office Admin</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Tableau de bord</span>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-sm font-semibold">Actualités</span>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">event</span>
            <span className="text-sm font-medium">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Programmes</span>
          </Link>
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
            <span className="text-sm font-medium">Opportunités</span>
          </Link>
          <Link href="/admin/dashboard/partners" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">Partenaires</span>
          </Link>
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-medium">Dons</span>
          </Link>
          <Link href="/admin/dashboard/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Utilisateurs</span>
          </Link>
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
            <span className="material-symbols-outlined">chat</span>
            <span className="text-sm font-medium">Suggestions</span>
          </Link>
          <div className="pt-4 mt-4 border-t border-[#f4e6e6] dark:border-[#3d2424]">
            <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-background-light dark:hover:bg-[#3d2424] transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Paramètres</span>
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-[#f4e6e6] dark:border-[#3d2424]">
          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-[#1d0c0c] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyPG2NSI2l1aFAgl9lKqcKjOaj2hiPcAqGqVkJwXmrlNWaubQT4PDfNFum0YRYW5MngBuY_ycvvzWWVNvFpoOPAtxZsE_vOY3_jbhcJ-fkh5YJvwNBTqku2kNaYdJW_dUxR53WD2EIFBoUuj_xKWoUq7hlVVjMePz0h3KGCB48FjYnuRlyCemKy80MeVND1VCtMTeoQSBEXyh_fAF00tymY1Hggw4u6H2cbzZJdQio4qV4tjI3_DCeMeq_kYr4Xq5cQfCt37pfDCrB')" }} />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Mamadou Diop</p>
              <p className="text-[10px] text-gray-500 truncate">Super Admin</p>
            </div>
            <button className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-[#f8f5f5] dark:bg-[#230f0f]">
        {/* TOP NAVIGATION */}
        <header className="h-16 bg-white dark:bg-[#230f0f] border-b border-[#f4e6e6] dark:border-[#3d2424] px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">news</span>
            <h2 className="text-lg font-bold tracking-tight">Gestion des Actualités</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-[#3d2424] rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-[#230f0f]"></span>
            </button>
            <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm shadow-primary/20">
              <span className="material-symbols-outlined text-sm">add</span>
              Nouvel Article
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-8 space-y-6 max-w-[1200px] mx-auto w-full">
          {/* WELCOME/SUMMARY SECTION */}
          <section className="flex flex-wrap justify-between items-end gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black tracking-tight">Actualités</h1>
              <p className="text-[#a14545] dark:text-gray-400">Gérez les articles, communiqués et alertes de la plateforme.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white dark:bg-[#2d1616] p-4 rounded-xl border border-[#f4e6e6] dark:border-[#3d2424] flex items-center gap-4 min-w-[180px]">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <span className="material-symbols-outlined">article</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Total Articles</p>
                  <p className="text-xl font-bold">124</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#2d1616] p-4 rounded-xl border border-[#f4e6e6] dark:border-[#3d2424] flex items-center gap-4 min-w-[180px]">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Alertes Actives</p>
                  <p className="text-xl font-bold">3</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEARCH & FILTERS */}
          <div className="bg-white dark:bg-[#2d1616] rounded-xl border border-[#f4e6e6] dark:border-[#3d2424] p-2 flex flex-wrap items-center gap-4 shadow-sm">
            <div className="flex-1 min-w-[300px] relative px-2">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 bg-[#f8f5f5] dark:bg-[#1d0c0c] border-none rounded-lg focus:ring-1 focus:ring-primary/50 text-sm outline-none"
                placeholder="Rechercher par titre ou auteur..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 p-2 overflow-x-auto whitespace-nowrap">
              <button className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-lg flex items-center gap-2">
                <span>Toutes catégories</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="px-4 py-1.5 bg-gray-100 dark:bg-[#1d0c0c] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <span>Alerte</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="px-4 py-1.5 bg-gray-100 dark:bg-[#1d0c0c] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <span>Institutionnel</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="px-4 py-1.5 bg-gray-100 dark:bg-[#1d0c0c] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <span>Statut</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          </div>

          {/* NEWS TABLE */}
          <div className="bg-white dark:bg-[#2d1616] rounded-xl border border-[#f4e6e6] dark:border-[#3d2424] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f8f5f5]/50 dark:bg-[#1d0c0c]/50 border-b border-[#f4e6e6] dark:border-[#3d2424]">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Titre de l'article</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Catégorie</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Auteur</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#a14545] dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f4e6e6] dark:divide-[#3d2424]">
                  {newsData.map((item) => (
                    <tr key={item.id} className="hover:bg-[#f8f5f5]/30 dark:hover:bg-[#3d2424]/20 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${item.image})` }} />
                          <span className="font-bold text-sm line-clamp-2">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 ${
                          item.categoryColor === 'blue' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'bg-primary text-white'
                        } text-[11px] font-bold rounded-full`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm">{item.author}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            item.statusColor === 'green' ? 'bg-green-500' : 'bg-gray-300'
                          }`}></span>
                          <span className={`text-sm font-medium ${
                            item.statusColor === 'green' 
                              ? 'text-green-700 dark:text-green-400'
                              : 'text-gray-500'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-1">
                          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="px-6 py-4 bg-[#f8f5f5]/30 dark:bg-[#1d0c0c]/30 flex items-center justify-between">
              <p className="text-xs text-gray-500 font-medium">Affichage de 1 à 10 sur 124 articles</p>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f4e6e6] dark:border-[#3d2424] hover:bg-white dark:hover:bg-[#3d2424] text-gray-400">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f4e6e6] dark:border-[#3d2424] hover:bg-white dark:hover:bg-[#3d2424] text-xs font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f4e6e6] dark:border-[#3d2424] hover:bg-white dark:hover:bg-[#3d2424] text-xs font-medium">3</button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f4e6e6] dark:border-[#3d2424] hover:bg-white dark:hover:bg-[#3d2424] text-xs font-medium">13</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-[#f4e6e6] dark:border-[#3d2424] hover:bg-white dark:hover:bg-[#3d2424] text-gray-400">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* FOOTER SECTION WITH QUICK TIPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 flex gap-4">
              <span className="material-symbols-outlined text-primary">tips_and_updates</span>
              <div>
                <h4 className="font-bold text-sm mb-1">Conseil de Publication</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Pensez à ajouter des images de haute qualité pour augmenter le taux d'engagement de vos articles d'au moins 40%.
                </p>
              </div>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20 flex gap-4">
              <span className="material-symbols-outlined text-blue-600">visibility_lock</span>
              <div>
                <h4 className="font-bold text-sm mb-1">Articles Privés</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Seuls les administrateurs peuvent voir les articles marqués comme "Brouillon" ou "Privé".
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
