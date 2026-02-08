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
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto space-y-8 pb-20">
            {/* Page Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Mon Profil</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">Gérez vos informations personnelles et préférences de compte.</p>
            </div>
            
            {/* Profile Header Card */}
            <div className="bg-white dark:bg-[#2d1616] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#2d1616] shadow-md bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLzOcWEa8KD7kdwA_pg1_ZoE6dh0JvXK2OY67dokHlvU3RytIpRDKnjs2EWjwNv9JhI7JsihFRDnYuQVcpXRJWFFpVs3-Ij15TH8v1P8D8aVaa0FBH3hPH84ad4EYPtE7sZMlMvto6Qu6zp56ELJxHDMlAv3zTekbUGzaOqxfCOn7NnFuoAmAUVRKf2O6kMj6D-wXn7TJRUAyrRKKz2pKEVbIfQasxnJ6PZuvRV-Uk-xFgtAHLxWf7DyD6NHhg3quIZBBX9xNUm4Hz')"}} />
                  <button className="absolute bottom-1 right-1 bg-white dark:bg-[#2d1616] p-2 rounded-full shadow-md text-slate-700 dark:text-slate-200 hover:text-[#ff0000] transition-colors border border-slate-100 dark:border-slate-700" title="Modifier la photo">
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  </button>
                </div>
                <div className="flex-1 text-center md:text-left space-y-2 mt-2">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Moussa DIOP</h2>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Citoyen de {USER_DATA.city} • Membre depuis {USER_DATA.memberSince}</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500">ID: {USER_DATA.CITIZEN_ID}</p>
                </div>
                <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Modifier la photo
                </button>
              </div>
            </div>
            
            {/* Form Section */}
            <form className="bg-white dark:bg-[#2d1616] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="material-symbols-outlined text-[#ff0000]">person</span>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Informations Personnelles</h3>
                    </div>
                    <div className="space-y-5">
                      <label className="block">
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Prénom</span>
                        <input className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-colors outline-none" placeholder="Votre prénom" type="text" defaultValue="Moussa" />
                      </label>
                      <label className="block">
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Nom</span>
                        <input className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-colors outline-none" placeholder="Votre nom" type="text" defaultValue="Diop" />
                      </label>
                      <label className="block">
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Genre</span>
                        <div className="relative">
                          <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 appearance-none outline-none cursor-pointer">
                            <option value="H">Homme</option>
                            <option value="F">Femme</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="material-symbols-outlined text-[#ff0000]">work</span>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Informations Professionnelles</h3>
                    </div>
                    <div className="space-y-5">
                      <label className="block">
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Catégorie Socio-professionnelle</span>
                        <div className="relative">
                          <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 appearance-none outline-none cursor-pointer">
                            <option value="commercant">Commerçant</option>
                            <option value="etudiant">Étudiant</option>
                            <option value="fonctionnaire">Fonctionnaire</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                      </label>
                      <label className="block">
                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Quartier de Résidence</span>
                        <div className="relative">
                          <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 appearance-none outline-none cursor-pointer">
                            <option value="kassaville">Kassaville</option>
                            <option value="medina_baye">Médina Baye</option>
                            <option value="leona">Léona</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Contact Section */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 pb-2 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-[#ff0000]">contact_mail</span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Coordonnées de Contact</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <label className="block">
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Numéro de Téléphone</span>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg">call</span>
                        <input className="w-full h-12 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-colors outline-none" type="tel" defaultValue="+221 77 123 45 67" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 block">Adresse Email</span>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg">mail</span>
                        <input className="w-full h-12 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-[#361b1b] border border-slate-200 dark:border-slate-700 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-colors outline-none" type="email" defaultValue="moussa.diop@email.com" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="bg-slate-50 dark:bg-[#2d1616]/50 px-6 py-4 md:px-8 md:py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">Dernière modification le 01 Février 2026</p>
                <button className="w-full sm:w-auto px-8 py-3 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-all flex items-center justify-center gap-2 active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  )
}
