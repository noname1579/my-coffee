export async function fetchWithFallback<T>(apiUrl: string, fallbackUrl: string): Promise<T> {
  try {
    const res = await fetch(apiUrl, { cache: 'no-store' })
    if (!res.ok) throw new Error('API error')
    return await res.json()
  } catch (e) {
    console.warn('API недоступен, берём локальные данные', e)
    const res = await fetch(fallbackUrl)
    return await res.json()
  }
}