const formatKey = key => key.replace(/\W/g, '_')

export function setLocalStorage (key: string, value) {
  localStorage.setItem(formatKey(key), value)
}

export function getLocalStorage (key: string) {
  return localStorage.getItem(formatKey(key))
}

export function removeLocalStorage (key: string) {
  localStorage.removeItem(formatKey(key))
}

export default { setLocalStorage, getLocalStorage, removeLocalStorage }
