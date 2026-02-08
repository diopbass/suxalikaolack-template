"use client"

import { PublicHeader } from '@/components/public-header'
import { PublicFooter } from '@/components/public-footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function PartnerRegisterPage() {
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
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-5 bg-white dark:bg-[#1a0b0b] rounded-3xl overflow-hidden shadow-2xl min-h-[750px]">
          {/* Left Side - Features with network background */}
          <div className="lg:col-span-2 relative p-8 lg:p-12 flex flex-col justify-center text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{
                backgroundImage: 'url("/images/auth-background.jpg")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/90" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary">
                  <span className="material-symbols-outlined filled text-2xl">domain</span>
                </div>
                <span className="text-xl font-bold">SUXALI KAOLACK</span>
              </div>
              
              <h1 className="text-3xl font-black mb-4 leading-tight">
                Rejoignez le réseau des partenaires SUXALI
              </h1>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">storefront</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Visibilité locale</h3>
                    <p className="text-sm text-white/80">Augmentez votre notoriété auprès de la communauté Kaolackoise et boostez votre activité.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">volunteer_activism</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Engagement citoyen</h3>
                    <p className="text-sm text-white/80">Participez activement au développement socio-économique de votre région.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-primary/30 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled text-2xl">analytics</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Statistiques de vente</h3>
                    <p className="text-sm text-white/80">Accédez à des rapports détaillés sur vos performances et l'impact de vos offres.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined filled text-primary text-2xl">verified_user</span>
                  <div>
                    <h4 className="font-bold mb-1">Transparence & Traçabilité</h4>
                    <p className="text-sm text-white/80">
                      SUXALI KAOLACK garantit la traçabilité complète de chaque offre publiée. Notre système assure l'équité et la transparence pour tous nos partenaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Registration Form */}
          <div className="lg:col-span-3 flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-[#fcf8f8] dark:bg-[#1a0a0a]">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-[#6b7280] hover:text-[#ff0000] text-sm font-medium mb-6 group">
                  <span className="material-symbols-outlined mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Retour au site
                </Link>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-black text-[#111827] dark:text-white mb-2">Création de compte</h2>
                    <p className="text-[#6b7280] dark:text-gray-400">Complétez le formulaire pour rejoindre le réseau.</p>
                  </div>
                  <span className="text-xs font-bold text-[#a14545] bg-red-50 dark:bg-red-950/20 px-3 py-1 rounded-full">Inscription Partenaire</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Nom de la structure / commerce
                  </label>
                  <input 
                    className="w-full px-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                    placeholder="Ex: Boutique de la Place"
                    type="text"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Catégorie
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 pr-10 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] outline-none text-[#111827] dark:text-white appearance-none">
                      <option>Sélectionnez votre secteur</option>
                      <option>Commerce</option>
                      <option>Restauration</option>
                      <option>Services</option>
                      <option>Artisanat</option>
                      <option>Éducation & Formation</option>
                      <option>Santé & Bien-être</option>
                      <option>Association</option>
                      <option>Autre</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none">expand_more</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                      Nom du responsable
                    </label>
                    <input 
                      className="w-full px-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="Prénom et Nom"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                      Numéro de téléphone
                    </label>
                    <input 
                      className="w-full px-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                      placeholder="77 XXX XX XX"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Adresse e-mail
                  </label>
                  <input 
                    className="w-full px-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
                    placeholder="contact@votre-structure.com"
                    type="email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#111827] dark:text-gray-300 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input 
                      className="w-full pr-12 px-4 py-3 bg-white dark:bg-[#230f0f] border border-[#e7dada] dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000] transition-all outline-none text-[#111827] dark:text-white"
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
                
                <div className="flex items-start gap-3">
                  <input className="mt-1 rounded border-[#e7dada] text-[#ff0000] focus:ring-[#ff0000] h-4 w-4 flex-shrink-0" id="terms" type="checkbox" required />
                  <label className="text-sm text-[#6b7280] dark:text-gray-400" htmlFor="terms">
                    J'accepte les <Link href="/conditions-partenariat" className="text-[#ff0000] font-bold hover:underline">conditions de partenariat</Link> et la politique de confidentialité.
                  </label>
                </div>
                
                <button 
                  className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-red-500/20 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined">person_add</span>
                  S'inscrire et rejoindre le réseau
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-[#6b7280] dark:text-gray-400 text-sm">
                  Déjà inscrit ?{' '}
                  <Link className="text-[#ff0000] font-bold hover:underline" href="/partners/login">
                    Se connecter
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 text-center text-xs text-[#6b7280] dark:text-gray-500">
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
