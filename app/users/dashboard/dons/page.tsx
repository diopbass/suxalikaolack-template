import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader' // Added import for MobileHeader
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function DonsPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
        <UserSidebar />
        
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-[#f8f5f5] dark:bg-[#230f0f] relative">
          <MobileHeader />
        
          <div className="layout-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-8 lg:px-12 gap-8">
            {/* Page Heading & CTA */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Historique des contributions</h2>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                  Consultez et gérez vos dons pour le développement de Kaolack.
                </p>
              </div>
              <button className="flex items-center gap-2 justify-center bg-[#ff0000] hover:bg-[#cc0000] text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-red-500/20 transition-all active:scale-95 whitespace-nowrap">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                <span>Faire un nouveau don</span>
              </button>
            </header>
            
            {/* Stats KPI Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-start justify-between group hover:border-[#ff0000]/30 transition-colors">
                <div className="flex flex-col gap-3">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Total versé</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">1 250 000 <span className="text-lg text-gray-400 font-bold ml-1">FCFA</span></p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-black dark:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-[#2d1616] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-start justify-between group hover:border-[#ff0000]/30 transition-colors">
                <div className="flex flex-col gap-3">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Campagnes soutenues</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">8 <span className="text-lg text-gray-400 font-medium ml-1">Projets</span></p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-black dark:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">campaign</span>
                </div>
              </div>
            </section>
            
            {/* Donations Table */}
            <section className="bg-white dark:bg-[#2d1616] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Transactions récentes</h3>
                <div className="relative w-full md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                  <input className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#ff0000]/20 focus:border-[#ff0000]" placeholder="Rechercher une transaction..." type="text" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Campagne</th>
                      <th className="px-6 py-4">Montant</th>
                      <th className="px-6 py-4">Référence</th>
                      <th className="px-6 py-4 text-center">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                    <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300 font-medium">24 Oct 2026</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-gray-300">
                            <span className="material-symbols-outlined text-sm">storefront</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">Rénovation Marché Central</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold">50 000 FCFA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">TX-99281</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Validé
                        </span>
                      </td>
                    </tr>
                    
                    <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300 font-medium">10 Sept 2026</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-gray-300">
                            <span className="material-symbols-outlined text-sm">school</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">Équipement Scolaire</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold">25 000 FCFA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">TX-88102</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Validé
                        </span>
                      </td>
                    </tr>
                    
                    <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300 font-medium">05 Aout 2026</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-gray-300">
                            <span className="material-symbols-outlined text-sm">medical_services</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">Campagne Santé</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold">100 000 FCFA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">TX-77291</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Validé
                        </span>
                      </td>
                    </tr>
                    
                    <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300 font-medium">12 Juil 2026</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-gray-300">
                            <span className="material-symbols-outlined text-sm">traffic</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">Voirie Urbaine</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold">10 000 FCFA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">TX-66102</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Validé
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <p className="text-xs text-gray-500">Affichage de <span className="font-bold">1</span> à <span className="font-bold">4</span> sur <span className="font-bold">12</span> transactions</p>
                <div className="flex gap-2">
                  <button className="p-1 rounded-md text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="p-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </section>
            
            {/* Footer */}
            <div className="flex justify-center mt-4 mb-8">
              <p className="text-xs text-gray-400 text-center">
                Vous avez une question sur vos dons ? <a className="text-[#ff0000] hover:underline" href="#">Contactez le support citoyen</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
