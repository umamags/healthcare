const BASE = import.meta.env.BASE_URL

// Matches /organ/<organ> and /organ/<organ>/<ailment>
const ROUTE = /^organ\/([^/]+)(?:\/([^/]+))?\/?$/

// Returns { organId, ailmentId } for an organ or ailment URL, or null for any other page
export function parseOrganRoute(pathname = window.location.pathname) {
  if (!pathname.startsWith(BASE)) return null
  const match = pathname.slice(BASE.length).match(ROUTE)
  if (!match) return null
  return {
    organId: decodeURIComponent(match[1]),
    ailmentId: match[2] ? decodeURIComponent(match[2]) : null
  }
}

export const homePath = BASE

export function organPath(organId) {
  return `${BASE}organ/${organId}`
}

export function ailmentPath(organId, ailmentId) {
  return `${BASE}organ/${organId}/${ailmentId}`
}

// Changes the URL and tells the App to re-read it, the same as the browser's back button does
export function navigateTo(path) {
  window.history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
