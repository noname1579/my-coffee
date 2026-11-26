export async function fetchLocalData<T>(path: string): Promise<T> {
  try {
    const res = await fetch(path)
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`)
    return await res.json()
  } catch (e) {
    console.error('Ошибка загрузки локальных данных:', e)
    throw e
  }
}