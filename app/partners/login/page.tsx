"use client"

import { PublicHeader } from '@/components/public-header'
import { PublicFooter } from '@/components/public-footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function PartnerLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo bypass - redirect directly to partner dashboard
    router.push('/partners/dashboard')
  }
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <PublicHeader />
      
      <main className="flex-1 flex items-center justify-center py-6 px-4">
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-5 bg-white dark:bg-[#1a0b0b] rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
          {/* Left Side - Features with network background */}
          <div className="lg:col-span-2 relative p-6 lg:p-8 flex flex-col justify-center text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{
                backgroundImage: 'url("/images/auth-background.jpg")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/90" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://suxalikaolack.nasserdigital.com/wp-content/uploads/2026/01/LOGO-SK-1.png" 
                  alt="SUXALI KAOLACK" 
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xl font-bold">SUXALI KAOLACK</span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-black mb-3 leading-tight">
                Connectez-vous à votre tableau de bord partenaire
              </h1>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">sell</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Gérez vos Offres</h3>
                    <p className="text-sm text-white/80">Publiez et modifiez vos annonces en temps réel.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">verified</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Transparence Totale</h3>
                    <p className="text-sm text-white/80">Accédez à l'historique complet de vos offres et interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">chat</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Messagerie</h3>
                    <p className="text-sm text-white/80">Communiquez facilement avec l'administration et le support technique.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">trending_up</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Suivi des Statistiques</h3>
                    <p className="text-sm text-white/80">Analysez vos performances et mesurez votre impact local.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined filled text-primary text-xl">verified_user</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">Transparence & Traçabilité</h4>
                    <p className="text-xs text-white/80">
                      SUXALI KAOLACK garantit la traçabilité complète de chaque offre publiée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Login Form */}
          <div className="lg:col-span-3 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#fcf8f8] dark:bg-[#1a0a0a]">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-[#6b7280] hover:text-[#ff0000] text-sm font-medium mb-6 group">
                  <span className="material-symbols-outlined mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Retour au site
                </Link>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-black text-[#111827] dark:text-white mb-2">Connexion</h2>
                    <p className="text-[#6b7280] dark:text-gray-400">Entrez vos identifiants pour accéder à votre espace.</p>
                  </div>
                  <span className="text-xs font-bold text-[#ff0000] bg-red-50 dark:bg-red-950/20 px-3 py-1 rounded-full whitespace-nowrap">Espace Partenaire</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Adresse E-mail
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">mail</span>
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="exemple@partenaire.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold text-[#111827] dark:text-gray-300">
                      Mot de passe
                    </label>
                    <Link className="text-xs font-bold text-[#ff0000] hover:underline" href="/partners/forgot-password">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">lock</span>
                    <input 
                      className="w-full pl-11 pr-12 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#ff0000] transition-colors" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                
                <button 
                  className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-red-500/20 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
                  type="submit"
                >
                  Se connecter
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-[#6b7280] dark:text-gray-400 text-sm">
                  Vous n'avez pas encore de compte ?{' '}
                  <Link className="text-[#ff0000] font-bold hover:underline" href="/partners/register">
                    S'inscrire
                  </Link>
                </p>
              </div>
              
              <div className="mt-6 text-center text-xs text-[#6b7280] dark:text-gray-500">
                <p>© 2024 SUXALI KAOLACK. Tous droits réservés.</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <Link href="/mentions-legales" className="hover:text-[#ff0000]">Mentions légales</Link>
                  <span>•</span>
                  <Link href="/confidentialite" className="hover:text-[#ff0000]">Confidentialité</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <PublicFooter />
    </div>
  )
}
