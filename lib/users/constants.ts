/**
 * User Constants
 * Global constants for the user dashboard
 * These values should remain consistent across all pages
 */

export const USER_DATA = {
  // Unique citizen identifier - DO NOT CHANGE
  CITIZEN_ID: 'SK-8849-2026',
  
  // User information
  firstName: 'Moussa',
  lastName: 'Diop',
  fullName: 'Moussa DIOP',
  
  // Role / Account Type
  role: 'Citoyen',
  email: 'moussa.diop@email.com',
  phone: '+221 77 123 45 67',
  
  // Membership information
  memberSince: '2026',
  city: 'Kaolack',
  neighborhood: 'Kassaville',
  profession: 'Commerçant',
  
  // Avatar
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLzOcWEa8KD7kdwA_pg1_ZoE6dh0JvXK2OY67dokHlvU3RytIpRDKnjs2EWjwNv9JhI7JsihFRDnYuQVcpXRJWFFpVs3-Ij15TH8v1P8D8aVaa0FBH3hPH84ad4EYPtE7sZMlMvto6Qu6zp56ELJxHDMlAv3zTekbUGzaOqxfCOn7NnFuoAmAUVRKf2O6kMj6D-wXn7TJRUAyrRKKz2pKEVbIfQasxnJ6PZuvRV-Uk-xFgtAHLxWf7DyD6NHhg3quIZBBX9xNUm4Hz',
  
  // Status
  status: 'Actif' as const,
  statusColor: 'green' as const,
} as const

export type UserStatus = typeof USER_DATA.status
