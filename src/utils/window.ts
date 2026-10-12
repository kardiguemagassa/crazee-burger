export const refreshPage = () => window.location.reload()

// version spontanée
// export const getLocalStorage = (key: string) => {
//   const item = localStorage.getItem(key)
//   if (item) return JSON.parse(item)
// }

// version avec GENERIC
// export const getLocalStorage = <T>(key: string) => {
//   const item = localStorage.getItem(key)
//   if (item) return JSON.parse(item) as T
// }

// version sans GENERIC (avec unknown)
export const getLocalStorage = (key: string): unknown | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const userAgent = navigator.userAgent.toLowerCase()
export const isMac = () => userAgent.includes("mac")
export const isWindows = () => userAgent.includes("win")
