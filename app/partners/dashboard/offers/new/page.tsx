"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewOfferPage() {
  const router = useRouter()
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage")
  const [discountValue, setDiscountValue] = useState("20")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [conditions, setConditions] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: redirect to offers page
    router.push("/partners/dashboard/offers")
  }

  return (
    <div className="min-h-screen bg-[#fcf8f8] dark:bg-[#1a0a0a]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1a0a0a]/90 backdrop-blur-md border-b border-[#eacdcd] dark:border-[#5e2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/partners/dashboard" className="flex items-center gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">local_offer</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-none tracking-tight text-[#111827] dark:text-white">SUXALI KAOLACK</h1>
                <span className="text-xs text-[#6b7280] dark:text-gray-400 font-medium">Espace Partenaire</span>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 text-[#6b7280] dark:text-gray-400 hover:text-[#ff0000] transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-[20px]">help</span>
                <span>Aide</span>
              </button>
              <div className="h-6 w-px bg-[#eacdcd] dark:bg-[#5e2a2a] hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold leading-none text-[#111827] dark:text-white">Entreprise XYZ</p>
                  <p className="text-xs text-[#6b7280] dark:text-gray-400">Partenaire vérifié</p>
                </div>
                <div className="bg-[#ff0000] rounded-full size-9 border-2 border-[#eacdcd] dark:border-[#5e2a2a]" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Form */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm font-medium">
            <Link href="/partners/dashboard" className="text-[#6b7280] dark:text-gray-400 hover:text-[#ff0000] transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-[#eacdcd] dark:text-[#5e2a2a]">/</span>
            <Link href="/partners/dashboard/offers" className="text-[#6b7280] dark:text-gray-400 hover:text-[#ff0000] transition-colors">
              Mes Offres
            </Link>
            <span className="mx-2 text-[#eacdcd] dark:text-[#5e2a2a]">/</span>
            <span className="text-[#111827] dark:text-white font-semibold">Créer</span>
          </nav>

          {/* Page Heading */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#111827] dark:text-white mb-2">Créer une nouvelle offre</h2>
            <p className="text-[#6b7280] dark:text-gray-400 text-lg">Configurez votre promotion et prévisualisez le résultat en temps réel.</p>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1a0a0a] rounded-xl border border-[#eacdcd] dark:border-[#5e2a2a] shadow-sm overflow-hidden">
            {/* Section 1: Informations générales */}
            <div className="p-6 md:p-8 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ff0000]/10 p-2 rounded-lg text-[#ff0000]">
                  <span className="material-symbols-outlined">edit_document</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">Informations générales</h3>
              </div>
              <div className="space-y-6">
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">
                    Titre de l'offre <span className="text-[#ff0000]">*</span>
                  </span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all placeholder:text-[#6b7280]/50 dark:placeholder:text-gray-500 text-[#111827] dark:text-white"
                    placeholder="Ex: Spécial Tabaski -20% sur tout le magasin"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">Description courte</span>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 140))}
                    className="w-full p-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all resize-none h-24 placeholder:text-[#6b7280]/50 dark:placeholder:text-gray-500 text-[#111827] dark:text-white"
                    placeholder="Décrivez brièvement les avantages de votre offre pour attirer les clients..."
                  />
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-[#6b7280] dark:text-gray-400">{description.length}/140 caractères</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 2: Détails de la remise */}
            <div className="p-6 md:p-8 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ff0000]/10 p-2 rounded-lg text-[#ff0000]">
                  <span className="material-symbols-outlined">percent</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">Détails de la remise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <span className="text-sm font-bold mb-3 block text-[#111827] dark:text-white">Type de remise</span>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="discount_type"
                        checked={discountType === "percentage"}
                        onChange={() => setDiscountType("percentage")}
                        className="peer sr-only"
                      />
                      <div className="h-full p-4 rounded-lg border-2 border-[#eacdcd] dark:border-[#5e2a2a] peer-checked:border-[#ff0000] peer-checked:bg-[#ff0000]/5 hover:border-[#ff0000]/50 transition-all flex flex-col items-center justify-center gap-2 text-center">
                        <span className="material-symbols-outlined text-[#6b7280] dark:text-gray-400">percent</span>
                        <span className="font-medium text-sm text-[#111827] dark:text-white">Pourcentage</span>
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="discount_type"
                        checked={discountType === "fixed"}
                        onChange={() => setDiscountType("fixed")}
                        className="peer sr-only"
                      />
                      <div className="h-full p-4 rounded-lg border-2 border-[#eacdcd] dark:border-[#5e2a2a] peer-checked:border-[#ff0000] peer-checked:bg-[#ff0000]/5 hover:border-[#ff0000]/50 transition-all flex flex-col items-center justify-center gap-2 text-center">
                        <span className="material-symbols-outlined text-[#6b7280] dark:text-gray-400">attach_money</span>
                        <span className="font-medium text-sm text-[#111827] dark:text-white">Montant Fixe</span>
                      </div>
                    </label>
                  </div>
                </div>
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">
                    Valeur de la remise <span className="text-[#ff0000]">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="number"
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                      className="w-full h-12 pl-4 pr-12 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all font-mono font-medium text-lg text-[#111827] dark:text-white"
                      placeholder="20"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#6b7280] dark:text-gray-400 font-bold">
                      {discountType === "percentage" ? "%" : "FCFA"}
                    </div>
                  </div>
                </label>
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">Quantité disponible (Optionnel)</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all text-[#111827] dark:text-white"
                    placeholder="Illimité"
                  />
                </label>
              </div>
            </div>

            {/* Section 3: Validité */}
            <div className="p-6 md:p-8 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ff0000]/10 p-2 rounded-lg text-[#ff0000]">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">Période de validité</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">Date de début</span>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full h-12 pl-10 pr-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all text-sm uppercase tracking-wide text-[#111827] dark:text-white"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] dark:text-gray-400">event</span>
                  </div>
                </label>
                <label className="block">
                  <span className="text-sm font-bold mb-2 block text-[#111827] dark:text-white">Date de fin</span>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full h-12 pl-10 pr-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all text-sm uppercase tracking-wide text-[#111827] dark:text-white"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] dark:text-gray-400">event_busy</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 4: Visuel */}
            <div className="p-6 md:p-8 border-b border-[#eacdcd] dark:border-[#5e2a2a]">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ff0000]/10 p-2 rounded-lg text-[#ff0000]">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">Visuel de l'offre</h3>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#eacdcd] dark:border-[#5e2a2a] rounded-xl cursor-pointer bg-[#f8f5f5] dark:bg-[#230f0f] hover:bg-white dark:hover:bg-[#1a0a0a]/50 hover:border-[#ff0000] transition-all group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="bg-white dark:bg-[#1a0a0a] p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#ff0000] text-3xl">cloud_upload</span>
                    </div>
                    <p className="mb-2 text-sm text-[#111827] dark:text-white font-medium">Cliquez pour télécharger ou glissez-déposez</p>
                    <p className="text-xs text-[#6b7280] dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p>
                  </div>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Section 5: Conditions */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ff0000]/10 p-2 rounded-lg text-[#ff0000]">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white">Conditions d'utilisation</h3>
              </div>
              <label className="block">
                <textarea
                  value={conditions}
                  onChange={(e) => setConditions(e.target.value)}
                  className="w-full p-4 rounded-lg bg-[#f8f5f5] dark:bg-[#230f0f] border border-[#eacdcd] dark:border-[#5e2a2a] focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] outline-none transition-all resize-none h-32 placeholder:text-[#6b7280]/50 dark:placeholder:text-gray-500 text-sm text-[#111827] dark:text-white"
                  placeholder="- Offre non cumulable avec d'autres promotions&#10;- Valable uniquement en magasin&#10;- Minimum d'achat de 5000 FCFA"
                />
              </label>
            </div>
          </form>

          {/* Action Bar */}
          <div className="flex items-center justify-end gap-4 pb-12">
            <button
              type="button"
              onClick={() => router.push("/partners/dashboard/offers")}
              className="px-6 h-12 rounded-lg font-bold text-[#6b7280] dark:text-gray-400 hover:bg-[#eacdcd]/30 dark:hover:bg-[#5e2a2a]/30 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-8 h-12 rounded-lg bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold shadow-lg shadow-[#ff0000]/25 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">send</span>
              Publier l'offre
            </button>
          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div className="lg:w-[380px] shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#6b7280] dark:text-gray-400">Aperçu en direct</h3>
              <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 dark:border-green-900">
                MOBILE VIEW
              </span>
            </div>

            {/* Preview Card */}
            <div className="bg-white dark:bg-[#1a0a0a] rounded-[1.5rem] border border-[#eacdcd] dark:border-[#5e2a2a] shadow-xl overflow-hidden relative">
              {/* Status Bar Simulator */}
              <div className="h-6 w-full bg-white dark:bg-[#1a0a0a] flex items-center justify-between px-4 text-[10px] font-bold text-[#111827]/30 dark:text-white/30 border-b border-[#eacdcd]/50 dark:border-[#5e2a2a]/50">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-[10px]">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[10px]">wifi</span>
                  <span className="material-symbols-outlined text-[10px]">battery_full</span>
                </div>
              </div>

              {/* Image Area */}
              <div className="relative h-48 w-full bg-[#f8f5f5] dark:bg-[#230f0f] overflow-hidden">
                {imagePreview ? (
                  <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Discount Badge */}
                {discountValue && (
                  <div className="absolute top-4 left-4 bg-[#ff0000] text-white px-3 py-1.5 rounded-lg font-black text-sm shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined filled text-[16px]">local_fire_department</span>
                    -{discountValue}{discountType === "percentage" ? "%" : " FCFA"}
                  </div>
                )}
                
                {/* Favorite Button */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg leading-tight text-[#111827] dark:text-white mb-1">
                      {title || "Spécial Tabaski"}
                    </h4>
                    <p className="text-xs text-[#6b7280] dark:text-gray-400 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">storefront</span>
                      Suxali Kaolack
                    </p>
                  </div>
                  <div className="bg-[#ff0000]/10 text-[#ff0000] px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                    Promo
                  </div>
                </div>
                <p className="text-sm text-[#6b7280] dark:text-white/80 line-clamp-2 mb-4 leading-relaxed">
                  {description || "Profitez de 20% de réduction sur tout le rayon habillement et accessoires pour la fête."}
                </p>

                {/* Validity Tag */}
                <div className="flex items-center gap-2 mb-5 bg-[#f8f5f5] dark:bg-[#230f0f] p-2 rounded-lg border border-[#eacdcd] dark:border-[#5e2a2a]">
                  <span className="material-symbols-outlined text-[#6b7280] dark:text-gray-400 text-lg">schedule</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#6b7280] dark:text-gray-400 uppercase font-bold">Valable jusqu'au</span>
                    <span className="text-xs font-bold text-[#111827] dark:text-white">
                      {endDate ? new Date(endDate).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" }) : "15 Juin 2024"}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                  <span>Voir l'offre</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              {/* Conditions Peek */}
              <div className="px-5 pb-5 pt-0">
                <div className="border-t border-dashed border-[#eacdcd] dark:border-[#5e2a2a] pt-3">
                  <p className="text-[10px] text-[#6b7280] dark:text-gray-400 text-center">
                    Conditions appliquées • Min. 5000 FCFA
                  </p>
                </div>
              </div>
            </div>

            {/* Helper Tip */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50 flex gap-3">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 shrink-0">info</span>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Cet aperçu montre comment votre offre apparaîtra dans le fil d'actualité de l'application mobile.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
