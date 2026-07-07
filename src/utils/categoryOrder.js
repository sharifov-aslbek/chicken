// Fixed display order for category tabs (by id, stable across locales):
// Muzlatilgan & Qadoqlangan, Sovutilgan & Qadoqlangan, Yarim tayyor,
// Marinadlangan, Dudlangan, Yangi so'yilgan. Unknown ids sort last, API order.
const CATEGORY_ORDER = [4, 3, 1, 5, 6, 2]

export function sortCategories(list) {
  const rank = (c) => {
    const i = CATEGORY_ORDER.indexOf(c.id)
    return i === -1 ? CATEGORY_ORDER.length : i
  }
  return [...(list || [])].sort((a, b) => rank(a) - rank(b))
}
