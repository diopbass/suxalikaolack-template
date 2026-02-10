import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader' // Import MobileHeader component
import { USER_DATA } from '@/lib/users/constants'
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function ProfilPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-row overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
        <UserSidebar />
        
        <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative">
          <MobileHeader />
          
          {/* Desktop Header */}
          <div className="hidden lg:block bg-white dark:bg-[#2d1616] border-b border-slate-200 dark:border-slate-800 px-8 py-4 sticky top-0 z-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Utilisateur</h2>
          </div>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto space-y-8 pb-20">
            {/* Page Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Mon Profil</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">Consultez et modifiez vos informations personnelles.</p>
            </div>
            
            {/* Profile Header Card */}
            <div className="bg-white dark:bg-[#2d1616] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div 
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-700 shadow-md bg-slate-200 bg-cover bg-center" 
                    style={{backgroundImage: `url('${USER_DATA.avatarUrl}')`}} 
                  />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2 mt-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{USER_DATA.fullName}</h2>
                  <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-300 font-medium">Citoyen de {USER_DATA.city}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Membre depuis {USER_DATA.memberSince}</p>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <p className="text-sm font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                        ID: {USER_DATA.CITIZEN_ID}
                      </p>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                        <span className="size-1.5 bg-green-600 rounded-full"></span>
                        {USER_DATA.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Informations Section */}
            <div className="bg-white dark:bg-[#2d1616] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                {/* Informations Principales */}
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[#ff0000]">badge</span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Informations Principales</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Nom complet</label>
                      <p className="text-slate-900 dark:text-white text-base font-semibold">{USER_DATA.fullName}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Identifiant Unique</label>
                      <p className="text-slate-900 dark:text-white text-base font-mono font-semibold">{USER_DATA.CITIZEN_ID}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Adresse Email</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.email}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Rôle / Type de Compte</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.role}</p>
                    </div>
                  </div>
                </div>

                {/* Informations de Contact */}
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[#ff0000]">contact_phone</span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Contact</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Téléphone</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.phone}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Ville</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.city}</p>
                    </div>
                  </div>
                </div>

                {/* Informations Complémentaires */}
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[#ff0000]">info</span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Informations Complémentaires</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Quartier de Résidence</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.neighborhood}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Catégorie Socio-professionnelle</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.profession}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Membre depuis</label>
                      <p className="text-slate-900 dark:text-white text-base">{USER_DATA.memberSince}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 block">Statut du compte</label>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md text-sm font-semibold">
                        <span className="size-1.5 bg-green-600 rounded-full"></span>
                        {USER_DATA.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer - Edit Action */}
              <div className="bg-slate-50 dark:bg-[#2d1616]/50 px-6 py-4 md:px-8 md:py-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
                <button className="px-6 py-2.5 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold rounded-lg transition-colors flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Modifier le profil
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
