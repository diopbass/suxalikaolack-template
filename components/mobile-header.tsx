"use client"

import { useSidebar } from '@/components/users/sidebar-context'
import { usePathname } from 'next/navigation'
import { USER_DATA } from '@/lib/users/constants'

const PAGE_TITLES: Record<string, string> = {
  '/users/dashboard/profil': 'Utilisateur',
  '/users/dashboard/qr-code': 'Mon QR Code',
  '/users/dashboard/opportunites': 'Mes Opportunités',
  '/users/dashboard/dons': 'Mes Dons',
  '/users/dashboard/suggestions': 'Mes Suggestions',
  '/users/dashboard/parametres': 'Paramètres',
}

export function MobileHeader() {
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()
  const pageTitle = PAGE_TITLES[pathname] || 'SUXALI KAOLACK'

  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-[#2d1616] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          type="button"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-bold text-lg text-slate-900 dark:text-white">{pageTitle}</span>
      </div>
      <div 
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-slate-200 dark:border-slate-700" 
        style={{backgroundImage: `url('${USER_DATA.avatarUrl}')`}} 
      />
    </div>
  )
}

export default MobileHeader
