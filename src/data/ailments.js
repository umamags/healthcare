const BASE = import.meta.env.BASE_URL

const ailmentFiles = import.meta.glob('../../references/ailments/*-ailments.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const sourceFiles = import.meta.glob('../../references/ailments/SOURCES-*.txt', {
  query: '?raw',
  import: 'default',
  eager: true
})

// Each entry is "<image file>.<ext> — <description>" followed by a "Source: <url> — <licence>" line.
// Later source files override earlier ones.
const imageCredits = {}
for (const text of Object.values(sourceFiles)) {
  const lines = text.split('\n')
  lines.forEach((line, i) => {
    const entry = line.match(/^(\S+\.\w+) — (.+)$/)
    const source = lines[i + 1]?.match(/^\s+Source: (\S+) — (.+)$/)
    if (entry && source) {
      imageCredits[entry[1]] = { description: entry[2], url: source[1], licence: source[2] }
    }
  })
}

// Reads the "## Ailment" sections of an ailments file. Each "**Label:** text" line starts a field.
function parseAilments(source, organId) {
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
      imageUrl: `${BASE}ailments/${image}`,
      credit: imageCredits[image],
      sections: fields.filter((field) => field.label !== 'Summary' && field.label !== 'Image')
    }
  })
}

export const ailmentsByOrgan = Object.fromEntries(
  Object.entries(ailmentFiles).map(([path, source]) => {
    const organId = path.match(/\/([^/]+)-ailments\.md$/)[1]
    return [organId, parseAilments(source, organId)]
  })
)

export function getAilment(organId, ailmentId) {
  return ailmentsByOrgan[organId]?.find((ailment) => ailment.id === ailmentId)
}
