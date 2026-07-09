// Uzbek phone numbers always use the +998 country code. Whatever the user types
// (spaces, dashes, a leading 998, or a bare 9-digit local number), normalize it
// to the canonical +998XXXXXXXXX form the API expects.
export function normalizePhone(raw) {
  const digits = (raw || '').replace(/\D/g, '').replace(/^998/, '')
  return '+998' + digits
}
