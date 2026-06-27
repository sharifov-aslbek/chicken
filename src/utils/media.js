// Build a full media URL from an API-relative image path.
// The API returns paths like "media/abc123.jpg"; the backend serves them
// under https://caravanchicken.uz/api/<path>.
const API_ORIGIN = 'https://caravanchicken.uz/api'

export function mediaUrl(path) {
  if (!path) return ''
  // Already an absolute URL — leave it untouched.
  if (/^https?:\/\//i.test(path)) return path
  return `${API_ORIGIN}/${String(path).replace(/^\/+/, '')}`
}
