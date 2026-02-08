"use client"

import { useSidebar } from '@/components/users/sidebar-context'

export function MobileHeader() {
  const { toggleSidebar } = useSidebar()

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
        <span className="font-bold text-lg">SUXALI KAOLACK</span>
      </div>
      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAl_sTzMPVMXsfJugF1OjnpUQfL47xU4HhVVgMDrNysS_s-o2-2drQd7lhXvYE6bt2NlRHJtGITnxKfZ99DruqYjnULNqxH52U2Ql_5RahSve-iIc-eUu9hIWAVGTjYSawtlimnsn6JGUDQEcnLN2ohEyzBrWzvuDOmYxFq6STKugNOSGr264tLTjwqaQtR0awMbMY8BlfwcvtKEtttUrAMJaawHcy7YyR9Wct5F-a5Lk88B8g10QhJeK9rRtpIXoWoGEDIXc2mqlb')"}} />
    </div>
  )
}

export default MobileHeader
