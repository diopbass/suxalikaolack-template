"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from './sidebar-context'

export function UserSidebar() {
  const pathname = usePathname()
  const { isSidebarOpen, closeSidebar } = useSidebar()
  
  const navItems = [
    { href: '/users/dashboard/profil', icon: 'person', label: 'Mon Profil' },
    { href: '/users/dashboard/qr-code', icon: 'qr_code_2', label: 'Mon QR Code' },
    { href: '/users/dashboard/opportunites', icon: 'work', label: 'Mes Opportunités' },
    { href: '/users/dashboard/dons', icon: 'volunteer_activism', label: 'Mes Dons' },
    { href: '/users/dashboard/suggestions', icon: 'lightbulb', label: 'Mes Suggestions' },
    { href: '/users/dashboard/parametres', icon: 'settings', label: 'Paramètres' },
  ]
  
  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 flex-col justify-between border-r border-[#eacdcd] bg-[#fcf8f8] p-6
        dark:bg-[#1a0a0a] dark:border-[#3a1a1a]
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:flex
      `}>
        <div className="flex flex-col gap-8">
          {/* User Profile */}
          <div className="flex gap-4 items-center">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 shadow-sm"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLzOcWEa8KD7kdwA_pg1_ZoE6dh0JvXK2OY67dokHlvU3RytIpRDKnjs2EWjwNv9JhI7JsihFRDnYuQVcpXRJWFFpVs3-Ij15TH8v1P8D8aVaa0FBH3hPH84ad4EYPtE7sZMlMvto6Qu6zp56ELJxHDMlAv3zTekbUGzaOqxfCOn7NnFuoAmAUVRKf2O6kMj6D-wXn7TJRUAyrRKKz2pKEVbIfQasxnJ6PZuvRV-Uk-xFgtAHLxWf7DyD6NHhg3quIZBBX9xNUm4Hz')"
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-[#1d0c0c] dark:text-white text-base font-bold leading-tight">Moussa Diop</h1>
              <p className="text-[#a14545] text-sm font-medium">Espace Citoyen</p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return isActive ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 border-l-4 border-primary"
                >
                  <span className="material-symbols-outlined text-primary filled">{item.icon}</span>
                  <p className="text-primary text-sm font-bold">{item.label}</p>
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-[#2a1111] transition-colors group"
                >
                  <span className="material-symbols-outlined text-black dark:text-[#ccaaaa] group-hover:text-primary">{item.icon}</span>
                  <p className="text-black dark:text-[#e0e0e0] text-sm font-medium">{item.label}</p>
                </Link>
              )
            })}
          </nav>
        </div>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f4e6e6] dark:hover:bg-[#2a1111] transition-colors group mt-4"
        >
          <span className="material-symbols-outlined text-black dark:text-[#ccaaaa] group-hover:text-primary">logout</span>
          <p className="text-black dark:text-[#e0e0e0] text-sm font-medium">Déconnexion</p>
        </Link>
      </aside>
    </>
  )
}
