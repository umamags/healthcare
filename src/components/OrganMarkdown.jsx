import { Fragment } from 'react'
import { ailmentPath, navigateTo } from '../lib/organRoute'

const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]*)\)/g

// The "Read the full article" link is replaced by the More button, so it is dropped here
function renderInline(text) {
  const parts = []
  let last = 0

  for (const match of text.matchAll(INLINE)) {
    if (match.index > last) parts.push(text.slice(last, match.index))

    const [whole, bold, italic, linkText] = match
    if (bold) parts.push(<strong key={match.index}>{bold}</strong>)
    else if (italic) parts.push(<em key={match.index}>{italic}</em>)
    else if (!linkText.includes('Read the full article')) parts.push(linkText)

    last = match.index + whole.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts
}

function parseBlocks(source) {
  const blocks = []
  let paragraph = null
  let list = null

  const flush = () => {
    if (paragraph) blocks.push({ type: 'p', lines: paragraph })
    if (list) blocks.push(list)
    paragraph = null
    list = null
  }

  for (const raw of source.split('\n')) {
    const line = raw.trim()

    if (!line) {
      flush()
      continue
    }

    const heading = line.match(/^#{1,6}\s+(.*)$/)
    if (heading) {
      flush()
      blocks.push({ type: 'h', text: heading[1] })
      continue
    }

    if (/^-{3,}$/.test(line)) {
      flush()
      blocks.push({ type: 'hr' })
      continue
    }

    const bullet = line.match(/^-\s+(.*)$/)
    const numbered = line.match(/^\d+\.\s+(.*)$/)
    if (bullet || numbered) {
      const type = bullet ? 'ul' : 'ol'
      const text = (bullet || numbered)[1]
      if (!list || list.type !== type) {
        flush()
        list = { type, items: [] }
      }
      list.items.push(text)
      continue
    }

    if (list) flush()
    if (!paragraph) paragraph = []
    paragraph.push(line)
  }

  flush()
  return blocks
}

// Renders a paragraph line. A "What can go wrong" line turns each item into a link when the item has an ailment page.
function renderLine(line, organId, ailmentLinks) {
  const whatCanGoWrong = line.match(/^\*\*What can go wrong:\*\*\s*(.*)$/)
  if (!whatCanGoWrong || !ailmentLinks.length) return renderInline(line)

  const items = whatCanGoWrong[1].split(' · ')
  return (
    <>
      <strong>What can go wrong:</strong>{' '}
      {items.map((item, i) => {
        const link = ailmentLinks.find(({ prefix }) => item.toLowerCase().startsWith(prefix.toLowerCase()))
        return (
          <Fragment key={i}>
            {i > 0 && ' · '}
            {link ? (
              <a
                href={ailmentPath(organId, link.id)}
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo(ailmentPath(organId, link.id))
                }}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {renderInline(item)}
              </a>
            ) : (
              renderInline(item)
            )}
          </Fragment>
        )
      })}
    </>
  )
}

export default function OrganMarkdown({ source, organId, ailmentLinks = [] }) {
  const blocks = parseBlocks(source)

  // The first heading in each file repeats the organ name, which the page already shows
  if (blocks[0]?.type === 'h') blocks.shift()

  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === 'h') {
          return <h4 key={i} className="font-bold text-gray-900 pt-2">{renderInline(block.text)}</h4>
        }
        if (block.type === 'hr') {
          return <hr key={i} className="border-gray-200" />
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="list-disc pl-6 space-y-1">
              {block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
            </ul>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} className="list-decimal pl-6 space-y-1">
              {block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
            </ol>
          )
        }
        return (
          <p key={i}>
            {block.lines.map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {renderLine(line, organId, ailmentLinks)}
              </Fragment>
            ))}
          </p>
        )
      })}
    </div>
  )
}
