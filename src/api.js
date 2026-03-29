const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

function unwrapArray(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.result)) return payload.result
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.banners)) return payload.banners
  if (Array.isArray(payload.services)) return payload.services
  if (Array.isArray(payload.blogs)) return payload.blogs
  return []
}

async function apiFetch(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`)
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`)
  return res.json()
}

function normalizeImage(url) {
  const value = url?.trim()
  return value ? value : undefined
}

export const loadBanners = async () => {
  const payload = await apiFetch('/load_banners')
  return unwrapArray(payload).map((item) => ({
    id: item.id,
    image: normalizeImage(item.image ?? item.BANNER_IMG) ?? '',
    title: item.title ?? item.TITLE,
    description: item.description ?? item.DESCRIPTION,
  }))
}

export const loadServices = async () => {
  const payload = await apiFetch('/load_services_blogs?service_choice=services')
  return unwrapArray(payload).map((item) => ({
    id: item.id,
    title: item.title ?? item.TITLE ?? '',
    description: item.description ?? item.DESCRIPTION ?? '',
    image: normalizeImage(item.image ?? item.SERVICE_IMG),
    service_choice: 'services',
  }))
}

export const loadBlogs = async () => {
  const payload = await apiFetch('/load_services_blogs?service_choice=blogs')
  return unwrapArray(payload).map((item) => ({
    id: item.id,
    title: item.title ?? item.TITLE ?? '',
    description: item.description ?? item.DESCRIPTION ?? '',
    image: normalizeImage(item.image ?? item.SERVICE_IMG),
    service_choice: 'blogs',
  }))
}
