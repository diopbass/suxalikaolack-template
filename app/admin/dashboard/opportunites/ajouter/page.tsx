'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AjouterOpportunitePage() {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    eligibility: '',
    deadline: '',
    location: '',
    organizer: '',
    status: 'draft',
    priority: 'normal',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-col mb-4">
            <h1 className="text-base font-bold">Administration</h1>
            <p className="text-xs text-muted-foreground">SUXALI KAOLACK</p>
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Tableau de bord</p>
            </Link>
            <Link
              href="/admin/dashboard/opportunites"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                business_center
              </span>
              <p className="text-sm font-bold">Opportunités</p>
            </Link>
            <Link
              href="/admin/dashboard/membres"
              className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Membres</p>
            </Link>
            <Link
              href="/admin/dashboard/programmes"
              className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">account_tree</span>
              <p className="text-sm font-medium">Programmes</p>
            </Link>
            <Link
              href="/admin/dashboard/agenda"
              className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-primary/5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">event</span>
              <p className="text-sm font-medium">Agenda</p>
            </Link>
            <div className="my-4 border-t border-border"></div>
            <Link
              href="/admin/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-primary/5 rounded-lg transition-colors"
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
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 p-6 pb-2">
            <Link href="/admin/dashboard" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="material-symbols-outlined text-muted-foreground text-xs">chevron_right</span>
            <Link href="/admin/dashboard/opportunites" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
              Opportunités
            </Link>
            <span className="material-symbols-outlined text-muted-foreground text-xs">chevron_right</span>
            <span className="text-foreground text-sm font-medium">Créer une opportunité</span>
          </div>

          {/* Page Heading */}
          <div className="px-6 py-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-display text-4xl font-black tracking-tight">Créer une opportunité</h1>
              <p className="text-muted-foreground text-base font-normal">
                Remplissez les détails ci-dessous pour publier une nouvelle opportunité sur la plateforme.
              </p>
            </div>
          </div>

          {/* Form Layout */}
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 px-6 mt-4">
            {/* Left Column: Main Form Fields */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Informations générales */}
              <section className="bg-card rounded-xl shadow-sm border border-border p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Informations générales
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">
                      Titre de l'opportunité <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5"
                      placeholder="ex: Formation Horticulture"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">
                      Type d'opportunité <span className="text-primary">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5"
                      required
                    >
                      <option value="">Sélectionner un type</option>
                      <option value="emploi">Emploi</option>
                      <option value="formation">Formation</option>
                      <option value="benevolat">Bénévolat</option>
                      <option value="appel">Appel à projets</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Description détaillée</label>
                    <div className="rounded-lg border border-input bg-card overflow-hidden">
                      <div className="flex gap-2 p-2 border-b border-border bg-muted">
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">format_bold</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">format_italic</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">format_underlined</span>
                        </button>
                        <div className="w-px h-4 bg-border mx-1 self-center"></div>
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                        </button>
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">format_list_numbered</span>
                        </button>
                        <div className="w-px h-4 bg-border mx-1 self-center"></div>
                        <button type="button" className="p-1 hover:bg-accent rounded">
                          <span className="material-symbols-outlined text-sm">link</span>
                        </button>
                      </div>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full h-40 border-none bg-transparent focus:ring-0 p-4 resize-none"
                        placeholder="Décrivez l'opportunité en détail..."
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Critères d'éligibilité</label>
                    <textarea
                      value={formData.eligibility}
                      onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5 h-32 resize-none"
                      placeholder="Listez les conditions pour postuler..."
                    />
                  </div>
                </div>
              </section>

              {/* Infos pratiques */}
              <section className="bg-card rounded-xl shadow-sm border border-border p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">pin_drop</span>
                  Infos pratiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Date limite</label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Lieu</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5"
                      placeholder="Kaolack, Centre..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Source / Organisateur</label>
                    <input
                      type="text"
                      value={formData.organizer}
                      onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                      className="w-full rounded-lg border-input bg-background focus:ring-primary focus:border-primary px-4 py-2.5"
                      placeholder="Nom de l'entité"
                    />
                  </div>
                </div>
              </section>

              {/* Médias */}
              <section className="bg-card rounded-xl shadow-sm border border-border p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">upload_file</span>
                  Documents &amp; Médias
                </h3>
                <div className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center bg-muted/30 hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl">add_photo_alternate</span>
                  </div>
                  <p className="font-bold">Déposez l'affiche ou le document lié ici</p>
                  <p className="text-muted-foreground text-sm mt-1">PNG, JPG, PDF jusqu'à 10MB</p>
                  <button
                    type="button"
                    className="mt-6 px-6 py-2 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    Choisir un fichier
                  </button>
                </div>
              </section>
            </div>

            {/* Right Column: Publication Sidebar */}
            <div className="lg:w-80 flex flex-col gap-6">
              {/* Statut de publication */}
              <section className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                <div className="bg-muted px-6 py-3 border-b border-border">
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
                          value="draft"
                          checked={formData.status === 'draft'}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="form-radio text-primary focus:ring-primary border-input"
                        />
                        <span className="text-sm font-medium group-hover:text-primary">Brouillon</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={formData.status === 'published'}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="form-radio text-primary focus:ring-primary border-input"
                        />
                        <span className="text-sm font-medium group-hover:text-primary">Publié</span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-border" />
                  <div>
                    <p className="text-sm font-bold mb-3">Priorité</p>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="priority"
                          value="normal"
                          checked={formData.priority === 'normal'}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="form-radio text-primary focus:ring-primary border-input"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Normale</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="priority"
                          value="urgent"
                          checked={formData.priority === 'urgent'}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="form-radio text-primary focus:ring-primary border-input"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Urgente</span>
                          <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-black uppercase">
                            🔥
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-black py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-widest"
                  >
                    <span className="material-symbols-outlined">send</span>
                    Enregistrer et publier
                  </button>
                  <button
                    type="button"
                    className="w-full text-muted-foreground hover:text-primary text-xs font-bold mt-4 uppercase transition-colors"
                  >
                    Aperçu de l'opportunité
                  </button>
                </div>
              </section>

              {/* Aide / Conseils */}
              <section className="bg-primary/5 rounded-xl border border-primary/10 p-6">
                <div className="flex gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  <h4 className="font-bold text-sm">Conseils</h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Assurez-vous de renseigner une description claire et concise pour attirer plus de candidats. Les images
                  d'affiche doivent être lisibles sur mobile.
                </p>
              </section>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
