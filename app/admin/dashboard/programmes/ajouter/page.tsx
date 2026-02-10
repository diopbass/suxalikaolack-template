'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AjouterProgrammePage() {
  const [formData, setFormData] = useState({
    name: '',
    thematique: '',
    publicCible: '',
    description: '',
    duree: '',
    lieu: '',
    resultats: '',
    dateLancement: '',
    status: 'brouillon'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      {/* SIDEBAR */}
      <aside className="w-72 bg-white dark:bg-[#230f0f] border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 hidden lg:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-[#f90606] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">star</span>
          </div>
          <div>
            <h1 className="text-[#f90606] font-bold text-lg leading-tight uppercase">Suxali Kaolack</h1>
            <p className="text-xs text-slate-500 font-medium">Administration</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Tableau de bord</span>
          </Link>
          <Link href="/admin/dashboard/news" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-sm font-medium">Actualités</span>
          </Link>
          <Link href="/admin/dashboard/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-medium">Agenda</span>
          </Link>
          <Link href="/admin/dashboard/programmes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f90606]/10 border-l-4 border-[#f90606] text-[#f90606]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
            <span className="text-sm font-semibold">Programmes</span>
          </Link>
          <Link href="/admin/dashboard/opportunites" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
            <span className="text-sm font-medium">Opportunités</span>
          </Link>
          <Link href="/admin/dashboard/partners" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">Partenaires</span>
          </Link>
          <Link href="/admin/dashboard/donations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-medium">Dons</span>
          </Link>
          <Link href="/admin/dashboard/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Utilisateurs</span>
          </Link>
          <Link href="/admin/dashboard/citizens" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">contacts</span>
            <span className="text-sm font-medium">Répertoire</span>
          </Link>
          <Link href="/admin/dashboard/suggestions" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                <span className="text-sm font-medium">Suggestions</span>
              </div>
              <span className="bg-[#f90606] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
            </div>
          </Link>
          <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Paramètres</span>
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#f90606] text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">logout</span>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f8f5f5] dark:bg-[#230f0f] overflow-y-auto">
        <div className="max-w-[1200px] mx-auto pb-20">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 p-6 pb-2">
            <Link href="/admin/dashboard" className="text-[#a14545] text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="material-symbols-outlined text-[#a14545] text-xs">chevron_right</span>
            <Link href="/admin/dashboard/programmes" className="text-[#a14545] text-sm font-medium hover:text-primary transition-colors">
              Programmes
            </Link>
            <span className="material-symbols-outlined text-[#a14545] text-xs">chevron_right</span>
            <span className="text-[#1d0c0c] dark:text-[#f8f5f5] text-sm font-medium">Créer un programme</span>
          </div>

          {/* Page Header */}
          <div className="px-6 py-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-[family-name:var(--font-berlin)] text-[#1d0c0c] dark:text-[#f8f5f5] text-4xl font-black tracking-tight">
                Créer un programme
              </h1>
              <p className="text-[#a14545] text-base font-normal">
                Enregistrez un nouveau programme citoyen pour la communauté de Kaolack.
              </p>
            </div>
          </div>

          {/* Form Layout */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-8 px-6 mt-4">
              {/* Left Column - Main Form */}
              <div className="flex-1 flex flex-col gap-8">
                {/* General Information Section */}
                <section className="bg-white dark:bg-[#1a0a0a] rounded-xl shadow-sm border border-[#f4e6e6] dark:border-[#3d2a2a] p-6">
                  <h3 className="text-[#1d0c0c] dark:text-[#f8f5f5] text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">info</span>
                    Informations générales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Nom du programme <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5"
                        placeholder="ex: Kaolack Ville Verte"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Thématique <span className="text-primary">*</span>
                      </label>
                      <select
                        value={formData.thematique}
                        onChange={(e) => setFormData({ ...formData, thematique: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5"
                      >
                        <option value="">Sélectionner une thématique</option>
                        <option value="environnement">Environnement</option>
                        <option value="education">Éducation</option>
                        <option value="sante">Santé</option>
                        <option value="entrepreneuriat">Entrepreneuriat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Public cible <span className="text-primary">*</span>
                      </label>
                      <select
                        value={formData.publicCible}
                        onChange={(e) => setFormData({ ...formData, publicCible: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5"
                      >
                        <option value="">Sélectionner un public</option>
                        <option value="jeunes">Jeunes</option>
                        <option value="femmes">Femmes</option>
                        <option value="artisans">Artisans</option>
                        <option value="tous">Tous</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Details & Objectives Section */}
                <section className="bg-white dark:bg-[#1a0a0a] rounded-xl shadow-sm border border-[#f4e6e6] dark:border-[#3d2a2a] p-6">
                  <h3 className="text-[#1d0c0c] dark:text-[#f8f5f5] text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    Détails & Objectifs
                  </h3>
                  <div>
                    <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                      Description complète & Objectifs
                    </label>
                    <div className="rounded-lg border border-[#f4e6e6] dark:border-[#3d2a2a] bg-white dark:bg-[#2d1a1a] overflow-hidden">
                      <div className="flex gap-2 p-2 border-b border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#230f0f]">
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">format_bold</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">format_italic</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">format_underlined</span>
                        </button>
                        <div className="w-px h-4 bg-[#f4e6e6] dark:bg-[#3d2a2a] mx-1 self-center"></div>
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">format_list_numbered</span>
                        </button>
                        <div className="w-px h-4 bg-[#f4e6e6] dark:bg-[#3d2a2a] mx-1 self-center"></div>
                        <button type="button" className="p-1 hover:bg-[#f4e6e6] dark:hover:bg-[#3d2a2a] rounded">
                          <span className="material-symbols-outlined text-sm">link</span>
                        </button>
                      </div>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full h-48 border-none bg-transparent focus:ring-0 p-4"
                        placeholder="Détaillez le contenu et les objectifs stratégiques du programme..."
                      />
                    </div>
                  </div>
                </section>

                {/* Modalities & Impact Section */}
                <section className="bg-white dark:bg-[#1a0a0a] rounded-xl shadow-sm border border-[#f4e6e6] dark:border-[#3d2a2a] p-6">
                  <h3 className="text-[#1d0c0c] dark:text-[#f8f5f5] text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">track_changes</span>
                    Modalités & Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Durée estimée
                      </label>
                      <input
                        type="text"
                        value={formData.duree}
                        onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5"
                        placeholder="ex: 6 mois, Permanent..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Lieu d'exécution
                      </label>
                      <input
                        type="text"
                        value={formData.lieu}
                        onChange={(e) => setFormData({ ...formData, lieu: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5"
                        placeholder="Quartier, Commune..."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#1d0c0c] dark:text-[#f8f5f5] mb-2">
                        Résultats attendus
                      </label>
                      <textarea
                        value={formData.resultats}
                        onChange={(e) => setFormData({ ...formData, resultats: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2.5 h-24"
                        placeholder="Listez les indicateurs de succès et impacts prévus..."
                      />
                    </div>
                  </div>
                </section>

                {/* Cover Image Section */}
                <section className="bg-white dark:bg-[#1a0a0a] rounded-xl shadow-sm border border-[#f4e6e6] dark:border-[#3d2a2a] p-6">
                  <h3 className="text-[#1d0c0c] dark:text-[#f8f5f5] text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">image</span>
                    Image de couverture
                  </h3>
                  <div className="border-2 border-dashed border-[#f4e6e6] dark:border-[#3d2a2a] rounded-xl p-10 flex flex-col items-center justify-center bg-background-light dark:bg-[#2d1a1a]/30 hover:bg-primary/5 transition-colors cursor-pointer group">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-4xl">add_a_photo</span>
                    </div>
                    <p className="text-[#1d0c0c] dark:text-[#f8f5f5] font-bold">
                      Déposez l'image de couverture du programme ici
                    </p>
                    <p className="text-[#a14545] text-sm mt-1">Format recommandé : 1200x630px (JPG, PNG)</p>
                    <button
                      type="button"
                      className="mt-6 px-6 py-2 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                    >
                      Parcourir les fichiers
                    </button>
                  </div>
                </section>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:w-80 flex flex-col gap-6">
                {/* Publication Section */}
                <section className="bg-white dark:bg-[#1a0a0a] rounded-xl shadow-sm border border-[#f4e6e6] dark:border-[#3d2a2a] overflow-hidden">
                  <div className="bg-background-light dark:bg-[#230f0f] px-6 py-3 border-b border-[#f4e6e6] dark:border-[#3d2a2a]">
                    <h4 className="font-bold text-sm uppercase tracking-wider">Publication</h4>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    <div>
                      <p className="text-sm font-bold mb-3">Statut</p>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="status"
                            value="brouillon"
                            checked={formData.status === 'brouillon'}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="form-radio text-primary focus:ring-primary border-[#f4e6e6]"
                          />
                          <span className="text-sm font-medium group-hover:text-primary">Brouillon</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="status"
                            value="actif"
                            checked={formData.status === 'actif'}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="form-radio text-primary focus:ring-primary border-[#f4e6e6]"
                          />
                          <span className="text-sm font-medium group-hover:text-primary">Actif</span>
                        </label>
                      </div>
                    </div>
                    <hr className="border-[#f4e6e6] dark:border-[#3d2a2a]" />
                    <div>
                      <p className="text-sm font-bold mb-3">Date de lancement prévue</p>
                      <input
                        type="date"
                        value={formData.dateLancement}
                        onChange={(e) => setFormData({ ...formData, dateLancement: e.target.value })}
                        className="w-full rounded-lg border-[#f4e6e6] dark:border-[#3d2a2a] bg-background-light dark:bg-[#2d1a1a] focus:ring-primary focus:border-primary px-4 py-2"
                      />
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-black py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-red-700 transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-widest"
                    >
                      <span className="material-symbols-outlined">save</span>
                      Enregistrer le programme
                    </button>
                    <button
                      type="button"
                      className="w-full text-[#a14545] hover:text-primary text-xs font-bold mt-4 uppercase transition-colors"
                    >
                      Aperçu du programme
                    </button>
                  </div>
                </section>

                {/* Tips Section */}
                <section className="bg-primary/5 rounded-xl border border-primary/10 p-6">
                  <div className="flex gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                    <h4 className="font-bold text-sm">Conseils Programme</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-[#a14545]">
                    Définissez des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels) pour faciliter
                    le suivi de l'impact auprès de la population kaolackoise.
                  </p>
                </section>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
