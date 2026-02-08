import { UserSidebar } from '@/components/users/user-sidebar'
import MobileHeader from '@/components/MobileHeader' // Assuming MobileHeader is located at this path
import { USER_DATA } from '@/lib/users/constants'
import { SidebarProvider } from '@/components/users/sidebar-context'

export default function QRCodePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-row overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
        <UserSidebar />
        
        <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative">
          <MobileHeader />
        
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12 flex flex-col gap-10">
          {/* Page Heading */}
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Mon QR Code</h1>
              <p className="text-[#ff0000] mt-2 text-base font-normal">Gérez et accédez à votre identifiant numérique unique.</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: The Pass Card */}
            <div className="w-full lg:w-5/12 flex flex-col items-center">
              <div className="relative group w-full max-w-[380px]">
                <div className="relative w-full bg-white dark:bg-[#2d1616] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="bg-[#ff0000] h-2 w-full" />
                  <div className="px-8 pt-8 pb-10 flex flex-col items-center text-center gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-900 dark:text-white font-bold tracking-widest text-sm uppercase">Pass Citoyen</span>
                      <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase">Suxali Kaolack</span>
                    </div>
                    
                    {/* QR Code */}
                    <div className="p-3 bg-white rounded-xl border-2 border-dashed border-gray-200 shadow-sm">
                      <svg 
                        className="w-48 h-48" 
                        viewBox="0 0 232 232" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ imageRendering: 'pixelated' }}
                      >
                        <rect x="0" y="0" width="232" height="232" fill="#ffffff"/>
                        <defs>
                          <rect id="p" width="8" height="8"/>
                        </defs>
                        <g fill="#000000">
                          <use xlinkHref="#p" x="32" y="32"/>
                          <use xlinkHref="#p" x="32" y="40"/>
                          <use xlinkHref="#p" x="32" y="48"/>
                          <use xlinkHref="#p" x="32" y="56"/>
                          <use xlinkHref="#p" x="32" y="64"/>
                          <use xlinkHref="#p" x="32" y="72"/>
                          <use xlinkHref="#p" x="32" y="80"/>
                          <use xlinkHref="#p" x="32" y="96"/>
                          <use xlinkHref="#p" x="32" y="104"/>
                          <use xlinkHref="#p" x="32" y="128"/>
                          <use xlinkHref="#p" x="32" y="144"/>
                          <use xlinkHref="#p" x="32" y="152"/>
                          <use xlinkHref="#p" x="32" y="160"/>
                          <use xlinkHref="#p" x="32" y="168"/>
                          <use xlinkHref="#p" x="32" y="176"/>
                          <use xlinkHref="#p" x="32" y="184"/>
                          <use xlinkHref="#p" x="32" y="192"/>
                          <use xlinkHref="#p" x="40" y="32"/>
                          <use xlinkHref="#p" x="40" y="80"/>
                          <use xlinkHref="#p" x="40" y="96"/>
                          <use xlinkHref="#p" x="40" y="128"/>
                          <use xlinkHref="#p" x="40" y="144"/>
                          <use xlinkHref="#p" x="40" y="192"/>
                          <use xlinkHref="#p" x="48" y="32"/>
                          <use xlinkHref="#p" x="48" y="48"/>
                          <use xlinkHref="#p" x="48" y="56"/>
                          <use xlinkHref="#p" x="48" y="64"/>
                          <use xlinkHref="#p" x="48" y="80"/>
                          <use xlinkHref="#p" x="48" y="96"/>
                          <use xlinkHref="#p" x="48" y="112"/>
                          <use xlinkHref="#p" x="48" y="128"/>
                          <use xlinkHref="#p" x="48" y="144"/>
                          <use xlinkHref="#p" x="48" y="160"/>
                          <use xlinkHref="#p" x="48" y="168"/>
                          <use xlinkHref="#p" x="48" y="176"/>
                          <use xlinkHref="#p" x="48" y="192"/>
                          <use xlinkHref="#p" x="56" y="32"/>
                          <use xlinkHref="#p" x="56" y="48"/>
                          <use xlinkHref="#p" x="56" y="56"/>
                          <use xlinkHref="#p" x="56" y="64"/>
                          <use xlinkHref="#p" x="56" y="80"/>
                          <use xlinkHref="#p" x="56" y="96"/>
                          <use xlinkHref="#p" x="56" y="104"/>
                          <use xlinkHref="#p" x="56" y="120"/>
                          <use xlinkHref="#p" x="56" y="128"/>
                          <use xlinkHref="#p" x="56" y="144"/>
                          <use xlinkHref="#p" x="56" y="160"/>
                          <use xlinkHref="#p" x="56" y="168"/>
                          <use xlinkHref="#p" x="56" y="176"/>
                          <use xlinkHref="#p" x="56" y="192"/>
                          <use xlinkHref="#p" x="64" y="32"/>
                          <use xlinkHref="#p" x="64" y="48"/>
                          <use xlinkHref="#p" x="64" y="56"/>
                          <use xlinkHref="#p" x="64" y="64"/>
                          <use xlinkHref="#p" x="64" y="80"/>
                          <use xlinkHref="#p" x="64" y="96"/>
                          <use xlinkHref="#p" x="64" y="104"/>
                          <use xlinkHref="#p" x="64" y="128"/>
                          <use xlinkHref="#p" x="64" y="144"/>
                          <use xlinkHref="#p" x="64" y="160"/>
                          <use xlinkHref="#p" x="64" y="168"/>
                          <use xlinkHref="#p" x="64" y="176"/>
                          <use xlinkHref="#p" x="64" y="192"/>
                          <use xlinkHref="#p" x="72" y="32"/>
                          <use xlinkHref="#p" x="72" y="80"/>
                          <use xlinkHref="#p" x="72" y="104"/>
                          <use xlinkHref="#p" x="72" y="128"/>
                          <use xlinkHref="#p" x="72" y="144"/>
                          <use xlinkHref="#p" x="72" y="192"/>
                          <use xlinkHref="#p" x="80" y="32"/>
                          <use xlinkHref="#p" x="80" y="40"/>
                          <use xlinkHref="#p" x="80" y="48"/>
                          <use xlinkHref="#p" x="80" y="56"/>
                          <use xlinkHref="#p" x="80" y="64"/>
                          <use xlinkHref="#p" x="80" y="72"/>
                          <use xlinkHref="#p" x="80" y="80"/>
                          <use xlinkHref="#p" x="80" y="96"/>
                          <use xlinkHref="#p" x="80" y="112"/>
                          <use xlinkHref="#p" x="80" y="128"/>
                          <use xlinkHref="#p" x="80" y="144"/>
                          <use xlinkHref="#p" x="80" y="152"/>
                          <use xlinkHref="#p" x="80" y="160"/>
                          <use xlinkHref="#p" x="80" y="168"/>
                          <use xlinkHref="#p" x="80" y="176"/>
                          <use xlinkHref="#p" x="80" y="184"/>
                          <use xlinkHref="#p" x="80" y="192"/>
                          <use xlinkHref="#p" x="88" y="96"/>
                          <use xlinkHref="#p" x="88" y="104"/>
                          <use xlinkHref="#p" x="88" y="128"/>
                          <use xlinkHref="#p" x="96" y="40"/>
                          <use xlinkHref="#p" x="96" y="56"/>
                          <use xlinkHref="#p" x="96" y="72"/>
                          <use xlinkHref="#p" x="96" y="80"/>
                          <use xlinkHref="#p" x="96" y="96"/>
                          <use xlinkHref="#p" x="96" y="128"/>
                          <use xlinkHref="#p" x="96" y="136"/>
                          <use xlinkHref="#p" x="96" y="144"/>
                          <use xlinkHref="#p" x="96" y="160"/>
                          <use xlinkHref="#p" x="96" y="168"/>
                          <use xlinkHref="#p" x="96" y="176"/>
                          <use xlinkHref="#p" x="96" y="184"/>
                          <use xlinkHref="#p" x="96" y="192"/>
                          <use xlinkHref="#p" x="104" y="32"/>
                          <use xlinkHref="#p" x="104" y="48"/>
                          <use xlinkHref="#p" x="104" y="72"/>
                          <use xlinkHref="#p" x="104" y="96"/>
                          <use xlinkHref="#p" x="104" y="112"/>
                          <use xlinkHref="#p" x="104" y="120"/>
                          <use xlinkHref="#p" x="104" y="136"/>
                          <use xlinkHref="#p" x="104" y="184"/>
                          <use xlinkHref="#p" x="112" y="64"/>
                          <use xlinkHref="#p" x="112" y="72"/>
                          <use xlinkHref="#p" x="112" y="80"/>
                          <use xlinkHref="#p" x="112" y="88"/>
                          <use xlinkHref="#p" x="112" y="112"/>
                          <use xlinkHref="#p" x="112" y="128"/>
                          <use xlinkHref="#p" x="112" y="136"/>
                          <use xlinkHref="#p" x="112" y="160"/>
                          <use xlinkHref="#p" x="112" y="168"/>
                          <use xlinkHref="#p" x="112" y="176"/>
                          <use xlinkHref="#p" x="120" y="40"/>
                          <use xlinkHref="#p" x="120" y="56"/>
                          <use xlinkHref="#p" x="120" y="64"/>
                          <use xlinkHref="#p" x="120" y="88"/>
                          <use xlinkHref="#p" x="120" y="112"/>
                          <use xlinkHref="#p" x="120" y="128"/>
                          <use xlinkHref="#p" x="120" y="160"/>
                          <use xlinkHref="#p" x="120" y="168"/>
                          <use xlinkHref="#p" x="128" y="32"/>
                          <use xlinkHref="#p" x="128" y="64"/>
                          <use xlinkHref="#p" x="128" y="72"/>
                          <use xlinkHref="#p" x="128" y="80"/>
                          <use xlinkHref="#p" x="128" y="88"/>
                          <use xlinkHref="#p" x="128" y="96"/>
                          <use xlinkHref="#p" x="128" y="104"/>
                          <use xlinkHref="#p" x="128" y="136"/>
                          <use xlinkHref="#p" x="128" y="144"/>
                          <use xlinkHref="#p" x="128" y="160"/>
                          <use xlinkHref="#p" x="128" y="176"/>
                          <use xlinkHref="#p" x="128" y="192"/>
                          <use xlinkHref="#p" x="136" y="96"/>
                          <use xlinkHref="#p" x="136" y="104"/>
                          <use xlinkHref="#p" x="136" y="112"/>
                          <use xlinkHref="#p" x="136" y="128"/>
                          <use xlinkHref="#p" x="136" y="160"/>
                          <use xlinkHref="#p" x="136" y="192"/>
                          <use xlinkHref="#p" x="144" y="32"/>
                          <use xlinkHref="#p" x="144" y="40"/>
                          <use xlinkHref="#p" x="144" y="48"/>
                          <use xlinkHref="#p" x="144" y="56"/>
                          <use xlinkHref="#p" x="144" y="64"/>
                          <use xlinkHref="#p" x="144" y="72"/>
                          <use xlinkHref="#p" x="144" y="80"/>
                          <use xlinkHref="#p" x="144" y="104"/>
                          <use xlinkHref="#p" x="144" y="128"/>
                          <use xlinkHref="#p" x="144" y="144"/>
                          <use xlinkHref="#p" x="144" y="160"/>
                          <use xlinkHref="#p" x="144" y="192"/>
                          <use xlinkHref="#p" x="152" y="32"/>
                          <use xlinkHref="#p" x="152" y="80"/>
                          <use xlinkHref="#p" x="152" y="96"/>
                          <use xlinkHref="#p" x="152" y="104"/>
                          <use xlinkHref="#p" x="152" y="112"/>
                          <use xlinkHref="#p" x="152" y="128"/>
                          <use xlinkHref="#p" x="152" y="144"/>
                          <use xlinkHref="#p" x="152" y="152"/>
                          <use xlinkHref="#p" x="152" y="176"/>
                          <use xlinkHref="#p" x="152" y="184"/>
                          <use xlinkHref="#p" x="152" y="192"/>
                          <use xlinkHref="#p" x="160" y="32"/>
                          <use xlinkHref="#p" x="160" y="48"/>
                          <use xlinkHref="#p" x="160" y="56"/>
                          <use xlinkHref="#p" x="160" y="64"/>
                          <use xlinkHref="#p" x="160" y="80"/>
                          <use xlinkHref="#p" x="160" y="104"/>
                          <use xlinkHref="#p" x="160" y="128"/>
                          <use xlinkHref="#p" x="160" y="136"/>
                          <use xlinkHref="#p" x="160" y="168"/>
                          <use xlinkHref="#p" x="160" y="192"/>
                          <use xlinkHref="#p" x="168" y="32"/>
                          <use xlinkHref="#p" x="168" y="48"/>
                          <use xlinkHref="#p" x="168" y="56"/>
                          <use xlinkHref="#p" x="168" y="64"/>
                          <use xlinkHref="#p" x="168" y="80"/>
                          <use xlinkHref="#p" x="168" y="96"/>
                          <use xlinkHref="#p" x="168" y="112"/>
                          <use xlinkHref="#p" x="168" y="136"/>
                          <use xlinkHref="#p" x="168" y="144"/>
                          <use xlinkHref="#p" x="168" y="160"/>
                          <use xlinkHref="#p" x="168" y="192"/>
                          <use xlinkHref="#p" x="176" y="32"/>
                          <use xlinkHref="#p" x="176" y="48"/>
                          <use xlinkHref="#p" x="176" y="56"/>
                          <use xlinkHref="#p" x="176" y="64"/>
                          <use xlinkHref="#p" x="176" y="80"/>
                          <use xlinkHref="#p" x="176" y="120"/>
                          <use xlinkHref="#p" x="176" y="144"/>
                          <use xlinkHref="#p" x="176" y="152"/>
                          <use xlinkHref="#p" x="176" y="176"/>
                          <use xlinkHref="#p" x="176" y="184"/>
                          <use xlinkHref="#p" x="184" y="32"/>
                          <use xlinkHref="#p" x="184" y="80"/>
                          <use xlinkHref="#p" x="184" y="96"/>
                          <use xlinkHref="#p" x="184" y="112"/>
                          <use xlinkHref="#p" x="184" y="120"/>
                          <use xlinkHref="#p" x="184" y="136"/>
                          <use xlinkHref="#p" x="184" y="144"/>
                          <use xlinkHref="#p" x="184" y="160"/>
                          <use xlinkHref="#p" x="184" y="192"/>
                          <use xlinkHref="#p" x="192" y="32"/>
                          <use xlinkHref="#p" x="192" y="40"/>
                          <use xlinkHref="#p" x="192" y="48"/>
                          <use xlinkHref="#p" x="192" y="56"/>
                          <use xlinkHref="#p" x="192" y="64"/>
                          <use xlinkHref="#p" x="192" y="72"/>
                          <use xlinkHref="#p" x="192" y="80"/>
                          <use xlinkHref="#p" x="192" y="120"/>
                          <use xlinkHref="#p" x="192" y="160"/>
                        </g>
                      </svg>
                    </div>
                    
                    {/* ID and Status */}
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Identifiant Unique</span>
                        <span className="text-2xl font-mono font-bold text-gray-900 dark:text-white tracking-wider">{USER_DATA.CITIZEN_ID}</span>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />
                      <div className="flex justify-center items-center w-full px-2">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase font-bold">Statut</span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">{USER_DATA.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Right Column: Instructions */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center py-4">
              <div className="bg-white dark:bg-[#2d1616] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">Comment utiliser votre Pass ?</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Suivez ces 3 étapes simples pour profiter de vos services citoyens.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined">smartphone</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">1. Présenter</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Présentez votre QR code depuis votre mobile au service ou partenaire.</p>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex flex-col gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined">qr_code_scanner</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">2. Scanner</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Le service ou partenaire autorisé scanne votre code unique instantanément.</p>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex flex-col gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined filled">verified</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">3. Profiter</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Votre identité est vérifiée ! Accédez immédiatement à vos avantages.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Info Box */}
              <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">info</span>
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <p className="font-medium mb-1">Besoin d'aide ?</p>
                  <p className="opacity-90">En cas de perte ou de problème technique avec votre pass, contactez le support citoyen au <span className="font-bold">33 800 00 00</span> ou rendez-vous à la mairie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </SidebarProvider>
  )
}
