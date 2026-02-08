'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  Calendar,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  HelpCircle,
  Search,
  Bell,
  UserCircle,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react'

export default function OpportunitesPage() {
  const [activeFilter, setActiveFilter] = useState('tous')

  const opportunities = [
    {
      id: 'SK-2023-089',
      title: 'Développeur Fullstack React/Node',
      type: 'emploi',
      deadline: '31 déc. 2023',
      source: 'Suxali Hub',
      status: 'published',
    },
    {
      id: 'SK-2023-112',
      title: 'Formation en Agro-écologie Moderne',
      type: 'formation',
      deadline: '15 nov. 2023',
      source: 'ONG Partenaire',
      status: 'expired',
    },
    {
      id: 'SK-2024-005',
      title: 'Programme de Mentorat Jeunesse',
      type: 'benevolat',
      deadline: '20 jan. 2024',
      source: 'Direction Régionale',
      status: 'published',
    },
    {
      id: 'SK-2023-221',
      title: 'Comptable Senior',
      type: 'emploi',
      deadline: '05 déc. 2023',
      source: 'Cabinet X-Expert',
      status: 'published',
    },
  ]

  const typeConfig = {
    emploi: {
      label: 'Emploi',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      iconColor: 'text-blue-500',
    },
    formation: {
      label: 'Formation',
      color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      iconColor: 'text-green-500',
    },
    benevolat: {
      label: 'Bénévolat',
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      iconColor: 'text-purple-500',
    },
  }

  const statusConfig = {
    published: {
      label: 'Publié',
      color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      dotColor: 'bg-green-500',
    },
    expired: {
      label: 'Expiré',
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      dotColor: 'bg-gray-500',
    },
  }

  return (
    <div className="flex min-h-screen overflow-hidden bg-[#f8f5f5] dark:bg-[#230f0f]">
      {/* Sidebar */}
      <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-[#eacdcd] bg-white dark:border-[#3d2525] dark:bg-[#2d1515]">
        <div className="flex h-full flex-col gap-8 p-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="aspect-square size-12 rounded-full bg-cover bg-center bg-no-repeat shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLKkIBCXxJgSPmPHcpeK5G5ySxIGUDWqi_tlHa2ytdhEXxaSf7KA3vmYavjrR5NBdiPJ9-_fYVwpRjuSISddaSSlrOmivWZH3B7L3WmLiX81BQWFvNrztPSfUWZq3o6xNafUpIFKgZ7H33vvmmqbL9V2ppcAFEP6bHy3T7uKP4GDjC-f-g2P0WIAr6oP2SQJ5L0P20SI_tQKEgjvL0xsMqXZliqmyhxyb05OlVLvzoMIrGNNmzmscQAZ-3BreySqciPbLFzAce-sfi")',
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-tight text-[#1d0c0c] dark:text-white">
                SUXALI KAOLACK
              </h1>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#f90606]">
                Back-office Admin
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex grow flex-col gap-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <LayoutDashboard className="size-5" />
              <span className="text-sm font-medium">Tableau de bord</span>
            </Link>
            <Link
              href="/admin/dashboard/agenda"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <Calendar className="size-5" />
              <span className="text-sm font-medium">Agenda</span>
            </Link>
            <Link
              href="/admin/dashboard/programmes"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <Users className="size-5" />
              <span className="text-sm font-medium">Programmes</span>
            </Link>
            <Link
              href="/admin/dashboard/opportunites"
              className="flex items-center gap-3 rounded-lg bg-[#f90606] px-4 py-3 text-white shadow-md shadow-[#f90606]/20"
            >
              <Briefcase className="size-5 fill-current" />
              <span className="text-sm font-medium">Opportunités</span>
            </Link>
            <Link
              href="/admin/dashboard/users"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <Users className="size-5" />
              <span className="text-sm font-medium">Utilisateurs</span>
            </Link>
            <Link
              href="/admin/dashboard/reports"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <BarChart3 className="size-5" />
              <span className="text-sm font-medium">Rapports</span>
            </Link>

            <div className="my-4 border-t border-gray-100 dark:border-[#3d2525]"></div>

            <Link
              href="/admin/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <Settings className="size-5" />
              <span className="text-sm font-medium">Paramètres</span>
            </Link>
            <Link
              href="/admin/dashboard/help"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-[#f90606]/5 hover:text-[#f90606] dark:text-gray-400"
            >
              <HelpCircle className="size-5" />
              <span className="text-sm font-medium">Aide</span>
            </Link>
          </nav>

          {/* User Profile */}
          <div className="mt-auto border-t border-gray-100 pt-6 dark:border-[#3d2525]">
            <div className="flex items-center gap-3 px-2">
              <div
                className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9GSs7OaPNbIpVHcV0Mju84pvJZrbVFoK-crqr5lHDAjy966-RmGAlrg64GrJNu9u3Yko29WtMSRxf0OZWavDXqKoU1Pl7-VJCD4-KXaRzxSJmC1UREJo8uf2l37bBT5E5hOjkbTVcRLmZc9qmi5Wtr3QTflGxwFz8LWAB_56C-2YBcfVPEKoV0rUEAf4vk4M6OJHvsBfIKPqHnBqUlksjby1m6EkW2zvSFULmAYosceV1ML6DXacZFLqAvgLEFmftNaviCqwFUUb")',
                }}
              />
              <div className="flex flex-col overflow-hidden">
                <p className="truncate text-sm font-bold">Admin Kaolack</p>
                <p className="truncate text-xs text-gray-500">admin@suxali.sn</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex h-screen flex-1 flex-col overflow-y-auto">
        {/* Top Navigation */}
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#eacdcd] bg-white px-8 py-4 dark:border-[#3d2525] dark:bg-[#2d1515]">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1d0c0c] dark:text-white">
              Gestion des Opportunités
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <label className="relative flex w-80 items-center">
              <Search className="absolute left-3 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une offre..."
                className="w-full rounded-lg border-none bg-[#f8f5f5] py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#f90606]/20 dark:bg-[#230f0f]"
              />
            </label>
            <div className="flex items-center gap-2">
              <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10">
                <Bell className="size-5" />
                <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-[#f90606] dark:border-[#2d1515]"></span>
              </button>
              <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10">
                <UserCircle className="size-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="mx-auto w-full max-w-7xl p-8">
          {/* Page Heading */}
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="mb-2 text-3xl font-extrabold text-[#1d0c0c] dark:text-white">
                Opportunités
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Gérez les offres d'emploi, de formation et de bénévolat pour la communauté de
                Kaolack.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-[#f90606] px-6 py-3 font-bold text-white shadow-lg shadow-[#f90606]/25 transition-all hover:bg-red-700">
              <Plus className="size-5" />
              <span>Ajouter une opportunité</span>
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 rounded-xl border border-[#eacdcd] bg-white p-4 shadow-sm dark:border-[#3d2525] dark:bg-[#2d1515]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mr-2 text-sm font-semibold text-gray-500">Filtrer par type :</span>
              <button
                onClick={() => setActiveFilter('tous')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  activeFilter === 'tous'
                    ? 'bg-[#f90606] text-white'
                    : 'border border-gray-200 bg-[#f8f5f5] hover:border-[#f90606]/50 dark:border-gray-700 dark:bg-[#230f0f]'
                }`}
              >
                Tous
                {activeFilter === 'tous' && <Check className="size-4" />}
              </button>
              <button
                onClick={() => setActiveFilter('emploi')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  activeFilter === 'emploi'
                    ? 'bg-[#f90606] text-white'
                    : 'border border-gray-200 bg-[#f8f5f5] hover:border-[#f90606]/50 dark:border-gray-700 dark:bg-[#230f0f]'
                }`}
              >
                <Briefcase className="size-4 text-blue-500" />
                Emploi
              </button>
              <button
                onClick={() => setActiveFilter('formation')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  activeFilter === 'formation'
                    ? 'bg-[#f90606] text-white'
                    : 'border border-gray-200 bg-[#f8f5f5] hover:border-[#f90606]/50 dark:border-gray-700 dark:bg-[#230f0f]'
                }`}
              >
                <Users className="size-4 text-green-500" />
                Formation
              </button>
              <button
                onClick={() => setActiveFilter('benevolat')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  activeFilter === 'benevolat'
                    ? 'bg-[#f90606] text-white'
                    : 'border border-gray-200 bg-[#f8f5f5] hover:border-[#f90606]/50 dark:border-gray-700 dark:bg-[#230f0f]'
                }`}
              >
                <UserCircle className="size-4 text-purple-500" />
                Bénévolat
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-[#eacdcd] bg-white shadow-sm dark:border-[#3d2525] dark:bg-[#2d1515]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#eacdcd] bg-gray-50 dark:border-[#3d2525] dark:bg-[#351a1a]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Titre de l'offre
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Type
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Date limite
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Source
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Statut
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#3d2525]">
                  {opportunities.map((opportunity) => (
                    <tr
                      key={opportunity.id}
                      className="transition-colors hover:bg-gray-50/50 dark:hover:bg-white/5"
                    >
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-semibold text-[#1d0c0c] dark:text-white">
                            {opportunity.title}
                          </span>
                          <span className="text-xs text-gray-400">Réf: {opportunity.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                            typeConfig[opportunity.type as keyof typeof typeConfig].color
                          }`}
                        >
                          {typeConfig[opportunity.type as keyof typeof typeConfig].label}
                        </span>
                      </td>
                      <td
                        className={`px-6 py-5 text-sm font-medium ${
                          opportunity.status === 'expired'
                            ? 'text-red-500 dark:text-red-400'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {opportunity.deadline}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400">
                        {opportunity.source}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ${
                            statusConfig[opportunity.status as keyof typeof statusConfig].color
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              statusConfig[opportunity.status as keyof typeof statusConfig]
                                .dotColor
                            }`}
                          ></span>
                          {statusConfig[opportunity.status as keyof typeof statusConfig].label}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-gray-400 transition-colors hover:text-[#f90606]">
                            <Edit className="size-5" />
                          </button>
                          <button className="p-2 text-gray-400 transition-colors hover:text-[#f90606]">
                            <Trash2 className="size-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-[#eacdcd] bg-gray-50 px-6 py-4 dark:border-[#3d2525] dark:bg-[#351a1a]">
              <p className="text-sm text-gray-500">
                Affichage de <span className="font-medium">1</span> à{' '}
                <span className="font-medium">4</span> sur{' '}
                <span className="font-medium">24</span> opportunités
              </p>
              <div className="flex items-center gap-2">
                <button className="cursor-not-allowed rounded border border-gray-200 bg-white px-3 py-1 text-gray-400 dark:border-gray-700 dark:bg-[#2d1515]">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="rounded bg-[#f90606] px-3 py-1 font-medium text-white">
                  1
                </button>
                <button className="rounded border border-gray-200 bg-white px-3 py-1 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-[#2d1515] dark:hover:bg-white/5">
                  2
                </button>
                <button className="rounded border border-gray-200 bg-white px-3 py-1 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-[#2d1515] dark:hover:bg-white/5">
                  3
                </button>
                <button className="rounded border border-gray-200 bg-white px-3 py-1 text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-[#2d1515] dark:text-gray-400 dark:hover:bg-white/5">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
