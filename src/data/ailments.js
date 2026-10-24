const BASE = import.meta.env.BASE_URL

// Loaders, not the text itself, so each organ's ailments are fetched only when its page opens
const ailmentLoaders = import.meta.glob('../../references/ailments/*-ailments.md', {
  query: '?raw',
  import: 'default'
})

const sourceLoaders = import.meta.glob('../../references/ailments/SOURCES-*.txt', {
  query: '?raw',
  import: 'default'
})

let creditsPromise = null
const organCache = new Map()

// Each entry is "<image file>.<ext> — <description>" followed by a "Source: <url> — <licence>" line.
// Later source files override earlier ones.
function loadCredits() {
  creditsPromise ??= Promise.all(Object.values(sourceLoaders).map((load) => load())).then((texts) => {
    const credits = {}
    for (const text of texts) {
      const lines = text.split('\n')
      lines.forEach((line, i) => {
        const entry = line.match(/^(\S+\.\w+) — (.+)$/)
        const source = lines[i + 1]?.match(/^\s+Source: (\S+) — (.+)$/)
        if (entry && source) {
          credits[entry[1]] = { description: entry[2], url: source[1], licence: source[2] }
        }
      })
    }
    return credits
  })
  return creditsPromise
}

// Reads the "## Ailment" sections of an ailments file. Each "**Label:** text" line starts a field.
function parseAilments(source, organId, credits) {
  return source.split(/^## /m).slice(1).map((section) => {
    const [heading, ...lines] = section.split('\n')
    const fields = []

    for (const raw of lines) {
      const line = raw.trim()
      if (line.startsWith('*Sources')) break
      const field = line.match(/^\*\*(.+?):\*\*\s*(.*)$/)
      if (field) {
        fields.push({ label: field[1], text: field[2] })
      } else if (line && fields.length) {
        fields[fields.length - 1].text += ` ${line}`
      }
    }

    const valueOf = (label) => fields.find((field) => field.label === label)?.text ?? ''
    const image = valueOf('Image').replace(/^images\//, '')

    return {
      id: image.replace(/\.\w+$/, ''),
      organId,
      title: heading.trim(),
      summary: valueOf('Summary'),
      image,
      // Rasters are served as smaller WebP copies with the same name (see tools/optimize-images.mjs)
      imageUrl: `${BASE}ailments/${image.replace(/\.(png|jpe?g)$/i, '.webp')}`,
      credit: credits[image],
      sections: fields.filter((field) => field.label !== 'Summary' && field.label !== 'Image')
    }
  })
}

// Loads one organ's ailments and its intro text (for example, a safety warning above the list).
// Results are cached, so opening the same organ again doesn't reload the file.
export function loadOrganAilments(organId) {
  if (!organCache.has(organId)) {
    const load = ailmentLoaders[`../../references/ailments/${organId}-ailments.md`]
    organCache.set(
      organId,
      load
        ? Promise.all([load(), loadCredits()]).then(([source, credits]) => ({
            intro: source.split(/^## /m)[0].split('\n').slice(1).join('\n').trim(),
            ailments: parseAilments(source, organId, credits)
          }))
        : Promise.resolve({ intro: '', ailments: [] })
    )
  }
  return organCache.get(organId)
}
