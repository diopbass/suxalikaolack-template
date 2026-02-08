import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader'
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function ParametresPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-[#1d0c0c] dark:text-white overflow-hidden">
        <UserSidebar />
      
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-[#120505]">
          <MobileHeader />
          
          {/* Header Area */}
          <div className="px-8 py-6 border-b border-[#eacdcd] dark:border-[#3a1a1a] flex-shrink-0">
            <div className="max-w-[1000px] mx-auto w-full">
              {/* Page Heading */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[#1d0c0c] dark:text-white text-3xl font-black tracking-tight">Paramètres du compte</h1>
                <p className="text-[#a14545] text-base font-normal">Gérez vos préférences, la sécurité de votre compte et vos données personnelles.</p>
              </div>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#fcf8f8] dark:bg-[#1a0a0a]">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-6 pb-20">
              {/* Sécurité */}
              <section className="rounded-xl border border-[#eacdcd] dark:border-[#3a1a1a] bg-white dark:bg-[#230f0f] overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-[#f4e6e6] dark:border-[#3a1a1a] flex items-center gap-3">
                  <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#1d0c0c] dark:text-white">Sécurité du compte</h2>
                </div>
                <div className="p-6">
                  {/* Change Password */}
                  <div className="flex flex-col gap-4 max-w-md">
                    <h3 className="text-base font-bold text-[#1d0c0c] dark:text-white mb-1">Changer le mot de passe</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1d0c0c] dark:text-gray-300 mb-1">Mot de passe actuel</label>
                        <input
                          className="w-full rounded-lg border border-[#eacdcd] bg-[#fcf8f8] dark:bg-[#1a0a0a] dark:border-[#3a1a1a] dark:text-white p-2.5 text-sm focus:border-primary focus:ring-primary"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1d0c0c] dark:text-gray-300 mb-1">Nouveau mot de passe</label>
                        <input
                          className="w-full rounded-lg border border-[#eacdcd] bg-[#fcf8f8] dark:bg-[#1a0a0a] dark:border-[#3a1a1a] dark:text-white p-2.5 text-sm focus:border-primary focus:ring-primary"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1d0c0c] dark:text-gray-300 mb-1">Confirmer le nouveau mot de passe</label>
                        <input
                          className="w-full rounded-lg border border-[#eacdcd] bg-[#fcf8f8] dark:bg-[#1a0a0a] dark:border-[#3a1a1a] dark:text-white p-2.5 text-sm focus:border-primary focus:ring-primary"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 4. Support technique */}
                <section className="rounded-xl border border-[#eacdcd] dark:border-[#3a1a1a] bg-white dark:bg-[#230f0f] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="px-6 py-4 border-b border-[#f4e6e6] dark:border-[#3a1a1a] flex items-center gap-3">
                    <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-primary">
                      <span className="material-symbols-outlined">help</span>
                    </div>
                    <h2 className="text-lg font-bold text-[#1d0c0c] dark:text-white">Support technique</h2>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <p className="text-sm text-[#1d0c0c] dark:text-gray-300 mb-4">Besoin d'aide avec votre compte ou une démarche en ligne ?</p>
                      <a
                        className="flex items-center gap-3 p-3 rounded-lg border border-[#eacdcd] bg-[#fcf8f8] dark:bg-[#1a0a0a] dark:border-[#3a1a1a] hover:bg-white dark:hover:bg-[#230f0f] transition-all group mb-3"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-primary">quiz</span>
                        <span className="text-sm font-medium text-[#1d0c0c] dark:text-white group-hover:text-primary">Consulter la Foire Aux Questions (FAQ)</span>
                      </a>
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-sm font-bold text-[#1d0c0c] dark:text-white mb-2">Contact direct</h4>
                      <button className="w-full py-2.5 px-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">mail</span>
                        Contacter le support
                      </button>
                    </div>
                  </div>
                </section>
              </div>
              {/* Main Action */}
              <div className="sticky bottom-4 z-10 flex justify-end">
                <div className="bg-white dark:bg-[#230f0f] p-2 rounded-xl shadow-lg border border-[#eacdcd] dark:border-[#3a1a1a]">
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-red-700 text-white text-base font-bold h-12 px-8 shadow-lg shadow-red-200 dark:shadow-none transition-all">
                    <span className="material-symbols-outlined">save</span>
                    Enregistrer les préférences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
