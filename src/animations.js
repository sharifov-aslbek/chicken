// Lightweight, dependency-free scroll animations (reveal · stagger · parallax)
// Inspired by clay.global / motion.dev — registered as Vue directives.

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ------------------------------------------------------------------ *
 * v-reveal — fade / slide / zoom in when the element enters the view
 *   v-reveal                -> default slide-up
 *   v-reveal="120"          -> 120ms stagger delay
 *   v-reveal.left           -> slide in from the left
 *   v-reveal.right="80"     -> slide from the right + 80ms delay
 *   v-reveal.zoom           -> scale in
 * ------------------------------------------------------------------ */
let revealObserver

function getRevealObserver() {
  if (revealObserver) return revealObserver
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          revealObserver.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  return revealObserver
}

export const reveal = {
  mounted(el, binding) {
    if (prefersReduced) return
    el.classList.add('reveal')

    if (binding.modifiers.left) el.classList.add('reveal--left')
    else if (binding.modifiers.right) el.classList.add('reveal--right')
    else if (binding.modifiers.zoom) el.classList.add('reveal--zoom')

    const delay = typeof binding.value === 'number' ? binding.value : binding.value?.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    getRevealObserver().observe(el)
  },
  unmounted(el) {
    if (revealObserver) revealObserver.unobserve(el)
  },
}

/* ------------------------------------------------------------------ *
 * v-parallax — subtle vertical drift on scroll.
 *   v-parallax                       -> defaults (distance 18px, scale 1.08)
 *   v-parallax="{ distance: 30 }"    -> stronger drift
 * A small scale gives overscan headroom so the shift never reveals edges.
 * ------------------------------------------------------------------ */
const parallaxItems = new Set()
let ticking = false

function updateParallax() {
  ticking = false
  const vh = window.innerHeight
  parallaxItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > vh) return
    const progress = (vh - rect.top) / (vh + rect.height) // ~0 (entering) .. 1 (leaving)
    const shift = (progress - 0.5) * 2 * item.distance
    item.el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(${item.scale})`
  })
}

function requestParallax() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateParallax)
}

export const parallax = {
  mounted(el, binding) {
    if (prefersReduced) return
    const opts = binding.value || {}
    const item = {
      el,
      distance: opts.distance ?? 18,
      scale: opts.scale ?? 1.08,
    }
    el.__parallax = item
    el.style.willChange = 'transform'
    parallaxItems.add(item)
    if (parallaxItems.size === 1) {
      window.addEventListener('scroll', requestParallax, { passive: true })
      window.addEventListener('resize', requestParallax)
    }
    requestParallax()
  },
  unmounted(el) {
    if (el.__parallax) parallaxItems.delete(el.__parallax)
    if (parallaxItems.size === 0) {
      window.removeEventListener('scroll', requestParallax)
      window.removeEventListener('resize', requestParallax)
    }
  },
}

/* ------------------------------------------------------------------ *
 * v-reveal3d — perspective-based 3D entrance for card text.
 *   v-reveal3d                 -> flip up from below (rotateX)
 *   v-reveal3d.left            -> swing in from the left  (rotateY)
 *   v-reveal3d.right           -> swing in from the right (rotateY)
 *   v-reveal3d="140"           -> 140ms stagger delay
 *   v-reveal3d.cascade         -> stagger the element's children
 *                                 (chip -> title -> text -> link), each
 *                                 flipping in 70ms after the previous.
 * The 3D depth lives in the transform itself via perspective(), so no
 * parent wrapper is needed.
 * ------------------------------------------------------------------ */
let reveal3dObserver

function getReveal3dObserver() {
  if (reveal3dObserver) return reveal3dObserver
  reveal3dObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const targets = entry.target.__cascade || [entry.target]
        targets.forEach((t) => t.classList.add('is-revealed'))
        reveal3dObserver.unobserve(entry.target)
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
  )
  return reveal3dObserver
}

function applyReveal3dVariant(el, modifiers) {
  el.classList.add('reveal3d')
  if (modifiers.left) el.classList.add('reveal3d--left')
  else if (modifiers.right) el.classList.add('reveal3d--right')
  else if (modifiers.pop) el.classList.add('reveal3d--pop')
}

export const reveal3d = {
  mounted(el, binding) {
    if (prefersReduced) return
    const base = typeof binding.value === 'number' ? binding.value : binding.value?.delay || 0

    if (binding.modifiers.cascade) {
      const children = Array.from(el.children)
      children.forEach((child, i) => {
        applyReveal3dVariant(child, binding.modifiers)
        child.style.transitionDelay = `${base + i * 70}ms`
      })
      el.__cascade = children
    } else {
      applyReveal3dVariant(el, binding.modifiers)
      if (base) el.style.transitionDelay = `${base}ms`
    }

    getReveal3dObserver().observe(el)
  },
  unmounted(el) {
    if (reveal3dObserver) reveal3dObserver.unobserve(el)
  },
}

/* ------------------------------------------------------------------ *
 * v-swing3d — springy "deal-in" 3D entrance for a whole card.
 * Each card swings into place from one side in 3D space (rotateY +
 * rotateX + depth) and lands with a spring overshoot.
 *   v-swing3d                                  -> swing from the left
 *   v-swing3d="{ delay: 90, from: 'right' }"   -> 90ms delay, from right
 *   v-swing3d="200"                            -> 200ms delay, from left
 * Reuses the reveal3d IntersectionObserver.
 * ------------------------------------------------------------------ */
export const swing3d = {
  mounted(el, binding) {
    if (prefersReduced) return
    const opts = typeof binding.value === 'number' ? { delay: binding.value } : binding.value || {}
    el.classList.add('swing3d')
    el.style.setProperty('--swing-dir', opts.from === 'right' ? '1' : '-1')
    if (opts.delay) el.style.transitionDelay = `${opts.delay}ms`
    getReveal3dObserver().observe(el)
  },
  unmounted(el) {
    if (reveal3dObserver) reveal3dObserver.unobserve(el)
  },
}

/* ------------------------------------------------------------------ *
 * v-scroll3d — continuous, scroll-linked 3D tilt for cards.
 * The card rotates on the X axis based on where it sits in the
 * viewport: tilted back while entering from the bottom, settling
 * perfectly flat as it crosses the centre, easing forward as it
 * leaves the top. A faint translateZ lift adds depth on the way in.
 *   v-scroll3d                       -> defaults (tilt 7deg, lift 26px)
 *   v-scroll3d="{ tilt: 10 }"        -> stronger rotation
 * ------------------------------------------------------------------ */
const scroll3dItems = new Set()
let scroll3dTicking = false

function updateScroll3d() {
  scroll3dTicking = false
  const vh = window.innerHeight
  const center = vh / 2
  scroll3dItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    if (rect.bottom < -120 || rect.top > vh + 120) return
    const elCenter = rect.top + rect.height / 2
    // -1 (below viewport centre) .. 0 (centred) .. 1 (above)
    const p = Math.max(-1, Math.min(1, (center - elCenter) / center))
    const rotateX = (-p * item.tilt).toFixed(2)
    const lift = (-Math.abs(p) * item.lift).toFixed(2)
    item.el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) translateZ(${lift}px)`
  })
}

function requestScroll3d() {
  if (scroll3dTicking) return
  scroll3dTicking = true
  requestAnimationFrame(updateScroll3d)
}

export const scroll3d = {
  mounted(el, binding) {
    if (prefersReduced) return
    const opts = binding.value || {}
    const item = { el, tilt: opts.tilt ?? 7, lift: opts.lift ?? 26 }
    el.__scroll3d = item
    el.style.transformStyle = 'preserve-3d'
    el.style.willChange = 'transform'
    scroll3dItems.add(item)
    if (scroll3dItems.size === 1) {
      window.addEventListener('scroll', requestScroll3d, { passive: true })
      window.addEventListener('resize', requestScroll3d)
    }
    requestScroll3d()
  },
  unmounted(el) {
    if (el.__scroll3d) scroll3dItems.delete(el.__scroll3d)
    if (scroll3dItems.size === 0) {
      window.removeEventListener('scroll', requestScroll3d)
      window.removeEventListener('resize', requestScroll3d)
    }
  },
}

export function registerAnimations(app) {
  app.directive('reveal', reveal)
  app.directive('parallax', parallax)
  app.directive('reveal3d', reveal3d)
  app.directive('swing3d', swing3d)
  app.directive('scroll3d', scroll3d)
}
