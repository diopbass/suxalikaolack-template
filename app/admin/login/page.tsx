'use client'

import React from "react"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Bypass credentials for development
    if (email === 'admin@suxalikaolack.com' && password === 'passer') {
      router.push('/admin/dashboard')
    } else {
      setError('Identifiants incorrects. Utilisez admin@suxalikaolack.com / passer')
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 sm:p-10">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center justify-center size-16 rounded-full bg-primary mb-4">
                <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Espace Administration</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-center text-sm">Accès réservé aux administrateurs SUXALI KAOLACK</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 dark:text-red-400">error</span>
                    <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Identifiant administrateur
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                  <input 
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="admin@suxalikaolack.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Mot de passe sécurisé
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">lock</span>
                  <input 
                    className="w-full pl-11 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Se souvenir</span>
                </label>
                <button type="button" className="text-sm font-bold text-primary hover:underline">
                  Mot de passe oublié ?
                </button>
              </div>
              
              <button 
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined">login</span>
                Se connecter à l'administration
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className="material-symbols-outlined text-green-500">verified_user</span>
                <span>Connexion sécurisée SSL</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-gray-500 hover:text-primary flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Retour au site
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2024 SUXALI KAOLACK</p>
            <p className="mt-2">Plateforme d'administration • Version 2.0</p>
          </div>
        </div>
      </main>
    </div>
  )
}
