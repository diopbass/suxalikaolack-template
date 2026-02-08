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
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 flex-col border-r border-[#f4e6e6] dark:border-[#3d2a2a] bg-white dark:bg-[#1a0a0a] hidden lg:flex">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-col mb-4">
            <h1 className="text-[#1d0c0c] dark:text-[#f8f5f5] text-base font-bold">Administration</h1>
            <p className="text-[#a14545] text-xs font-normal">SUXALI KAOLACK</p>
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-[#a14545] hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Tableau de bord</p>
            </Link>
            <Link
              href="/admin/dashboard/opportunites"
              className="flex items-center gap-3 px-3 py-2 text-[#a14545] hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">business_center</span>
              <p className="text-sm font-medium">Opportunités</p>
            </Link>
            <Link
              href="/admin/dashboard/membres"
              className="flex items-center gap-3 px-3 py-2 text-[#a14545] hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Membres</p>
            </Link>
            <Link
              href="/admin/dashboard/programmes"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
              <p className="text-sm font-bold">Programmes</p>
            </Link>
            <Link
              href="/admin/dashboard/agenda"
              className="flex items-center gap-3 px-3 py-2 text-[#a14545] hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">event</span>
              <p className="text-sm font-medium">Événements</p>
            </Link>
            <div className="my-4 border-t border-[#f4e6e6] dark:border-[#3d2a2a]"></div>
            <Link
              href="/admin/dashboard/parametres"
              className="flex items-center gap-3 px-3 py-2 text-[#a14545] hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Paramètres</p>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
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
