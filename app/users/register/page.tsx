"use client"

import { PublicHeader } from '@/components/public-header'
import { PublicFooter } from '@/components/public-footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function UserRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo bypass - redirect directly to user dashboard  
    router.push('/users/dashboard/profil')
  }
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <PublicHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#1a0b0b] rounded-3xl overflow-hidden shadow-2xl min-h-[700px]">
          {/* Left Side - Hero with network background */}
          <div className="relative hidden lg:flex flex-col justify-center p-12 text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{
                backgroundImage: 'url("/images/auth-background.jpg")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80" />
            <div className="relative z-10">
              <h1 className="text-4xl font-black leading-tight mb-8">
                Rejoignez la dynamique citoyenne
              </h1>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-white">qr_code_2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Votre Pass QR personnel</h3>
                    <p className="text-sm text-white/80">Une identité numérique unique pour accéder aux services de la ville.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-white">work</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Accès aux programmes</h3>
                    <p className="text-sm text-white/80">Participez prioritairement aux initiatives de développement local.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-white">volunteer_activism</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Historique de solidarité</h3>
                    <p className="text-sm text-white/80">Suivez vos contributions et l'impact de vos actions citoyennes.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Side - Registration Form */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-white dark:bg-[#1a0a0a]">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-[#ff0000] hover:text-red-700 text-sm font-medium mb-6 group">
                  <span className="material-symbols-outlined mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Retour au site
                </Link>
                <h2 className="text-3xl font-black text-[#111827] dark:text-white mb-2">Inscription Citoyenne</h2>
                <p className="text-[#6b7280] dark:text-gray-400">Prêt à faire bouger Kaolack ? Commencez ici.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Prénom et Nom
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">person</span>
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="Ex: Moussa Diop"
                      type="text"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Numéro de téléphone
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent outline-none text-[#111827] dark:text-white">
                      <option>+221</option>
                    </select>
                    <input 
                      className="flex-1 px-4 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="77 000 00 00"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Catégorie socio-professionnelle
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">work</span>
                    <select className="w-full pl-11 pr-10 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent outline-none text-[#111827] dark:text-white appearance-none">
                      <option>Sélectionnez votre activité</option>
                      <option>Étudiant</option>
                      <option>Salarié</option>
                      <option>Commerçant</option>
                      <option>Artisan</option>
                      <option>Agriculteur</option>
                      <option>Sans emploi</option>
                      <option>Retraité</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none">expand_more</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Quartier de résidence
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">location_on</span>
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="Ex: Médina Baye"
                      type="text"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">lock</span>
                    <input 
                      className="w-full pl-11 pr-12 py-3 bg-gray-50 dark:bg-[#2a1515] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#111827] transition-colors" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input className="mt-1 rounded border-gray-300 text-[#ff0000] focus:ring-[#ff0000] h-4 w-4 flex-shrink-0" id="terms" type="checkbox" required />
                  <label className="text-sm text-[#6b7280] dark:text-gray-400" htmlFor="terms">
                    J'accepte les <Link href="/conditions" className="text-[#ff0000] font-bold hover:underline">conditions d'utilisation</Link> et la politique de protection des données de SUXALI KAOLACK.
                  </label>
                </div>
                
                <button 
                  className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  type="submit"
                >
                  S'inscrire et générer mon Pass QR
                </button>
              </form>
              
              <div className="mt-10 text-center">
                <p className="text-[#6b7280] dark:text-gray-400 text-sm">
                  Déjà inscrit ?{' '}
                  <Link className="text-[#ff0000] font-bold hover:underline" href="/users/login">
                    Se connecter
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-6 text-[#6b7280] opacity-60">
                <span className="material-symbols-outlined text-2xl" title="Sécurité garantie">verified_user</span>
                <span className="material-symbols-outlined text-2xl" title="Données protégées">smartphone</span>
                <span className="material-symbols-outlined text-2xl" title="Support disponible">support_agent</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <PublicFooter />
    </div>
  )
}
