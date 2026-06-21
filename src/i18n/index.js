// Lightweight reactive i18n — no external dependency.
// UZ is the default; RU is the second language.
import { ref } from 'vue'
import { messages } from './messages.js'

export const locales = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

const STORAGE_KEY = 'caravan-locale'

function initial() {
  const saved = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)
  return saved && messages[saved] ? saved : 'uz'
}

export const locale = ref(initial())

if (typeof document !== 'undefined') {
  document.documentElement.lang = locale.value
}

export function setLocale(code) {
  if (!messages[code]) return
  locale.value = code
  if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, code)
  if (typeof document !== 'undefined') document.documentElement.lang = code
}

// Resolve a dotted key (e.g. "hero.title") against the active locale.
// Returns the raw value (string, array or object) so it works for lists too.
// Reading `locale.value` here makes any render that calls t() reactive.
export function t(key) {
  const dict = messages[locale.value] || messages.uz
  const value = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict)
  if (value !== undefined) return value
  // Fallback to UZ, then the key itself.
  const fallback = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), messages.uz)
  return fallback !== undefined ? fallback : key
}

export function useI18n() {
  return { t, locale, locales, setLocale }
}
