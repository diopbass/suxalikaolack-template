"use client"

import Link from 'next/link'
import { useState } from 'react'

export function PublicHeader() {
  const [isSpaceMenuOpen, setIsSpaceMenuOpen] = useState(false)
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false)
  const [isAgendaMenuOpen, setIsAgendaMenuOpen] = useState(false)
  const [isSpaceButtonMenuOpen, setIsSpaceButtonMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7dada] dark:border-gray-800 bg-white dark:bg-[#230f0f] px-4 sm:px-10 py-3 shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-[#1d0c0c] dark:text-white">
          <img 
            src="https://suxalikaolack.nasserdigital.com/wp-content/uploads/2026/01/LOGO-SK-1.png" 
            alt="SUXALI KAOLACK" 
            className="h-10 w-auto object-contain"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          <Link className="text-sm font-medium text-primary hover:text-red-700 transition-colors" href="/">Accueil</Link>
          <Link className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors" href="/a-propos">À propos</Link>
          <Link className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors" href="/programmes">Programmes & Avantages</Link>
          <Link className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors" href="/opportunites">Opportunités</Link>
          <Link className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors" href="/actualites">Actualités</Link>
          
          {/* Agenda Citoyen with submenu */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsAgendaMenuOpen(true)}
              onMouseLeave={() => setIsAgendaMenuOpen(false)}
              className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors flex items-center gap-1"
            >
              Agenda Citoyen
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            {isAgendaMenuOpen && (
              <div
                onMouseEnter={() => setIsAgendaMenuOpen(true)}
                onMouseLeave={() => setIsAgendaMenuOpen(false)}
                className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#230f0f] rounded-lg shadow-xl border border-[#e7dada] dark:border-gray-800 overflow-hidden"
              >
                <Link href="/agenda" className="block px-4 py-2 text-sm text-[#1d0c0c] dark:text-white hover:bg-[#f4e6e6] dark:hover:bg-gray-900 transition-colors">Événements</Link>
              </div>
            )}
          </div>
          
          {/* Contactez nous with submenu */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsContactMenuOpen(true)}
              onMouseLeave={() => setIsContactMenuOpen(false)}
              className="text-sm font-medium text-[#1d0c0c] dark:text-gray-300 hover:text-primary transition-colors flex items-center gap-1"
            >
              Contactez nous
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            {isContactMenuOpen && (
              <div
                onMouseEnter={() => setIsContactMenuOpen(true)}
                onMouseLeave={() => setIsContactMenuOpen(false)}
                className="absolute top-full right-0 mt-1 w-48 bg-white dark:bg-[#230f0f] rounded-lg shadow-xl border border-[#e7dada] dark:border-gray-800 overflow-hidden"
              >
                <Link href="/aide" className="block px-4 py-2 text-sm text-[#1d0c0c] dark:text-white hover:bg-[#f4e6e6] dark:hover:bg-gray-900 transition-colors">Aide & FAQ</Link>
                <Link href="/suggestions" className="block px-4 py-2 text-sm text-[#1d0c0c] dark:text-white hover:bg-[#f4e6e6] dark:hover:bg-gray-900 transition-colors">Suggestions</Link>
              </div>
            )}
          </div>
        </nav>
        
        <div className="flex gap-3 items-center">
          <Link
            href="/faire-un-don"
            className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md"
          >
            <span className="material-symbols-outlined mr-2 text-[18px]">volunteer_activism</span>
            <span className="truncate">Faire un don</span>
          </Link>
          
          {/* Mon espace dropdown button */}
          <div className="relative">
            <button
              onClick={() => setIsSpaceButtonMenuOpen(!isSpaceButtonMenuOpen)}
              className="flex h-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 px-4 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[#1d0c0c] dark:text-white gap-1"
            >
              Mon espace
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            
            {isSpaceButtonMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSpaceButtonMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#230f0f] rounded-lg shadow-xl border border-[#e7dada] dark:border-gray-800 overflow-hidden z-20">
                  <Link
                    href="/users/login"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f4e6e6] dark:hover:bg-gray-900 transition-colors border-b border-[#e7dada] dark:border-gray-800"
                    onClick={() => setIsSpaceButtonMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined filled text-primary text-lg">person</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#1d0c0c] dark:text-white">Espace Utilisateur</span>
                      <span className="text-xs text-[#a14545]">Citoyens</span>
                    </div>
                  </Link>
                  <Link
                    href="/partners/login"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f4e6e6] dark:hover:bg-gray-900 transition-colors"
                    onClick={() => setIsSpaceButtonMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined filled text-primary text-lg">store</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#1d0c0c] dark:text-white">Espace Partenaire</span>
                      <span className="text-xs text-[#a14545]">Commerces</span>
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
