import { useState } from 'react'
import { questions } from '../data/questions'
import MediaPreview from '../components/MediaPreview'

export default function QuestionDetail({ questionId, onBack }) {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const question = questions.find(q => q.id === questionId)

  if (!question) {
    return <div>Question not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Questions
          </button>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{question.icon}</span>
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-1">
                Question {question.number} of {questions.length}
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                {question.title}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {question.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Parse markdown-like content */}
          <MarkdownContent content={question.content} onMediaClick={setSelectedMedia} />
        </div>

        {/* Navigation */}
        <div className="mt-16 flex gap-4">
          {questionId > 1 && (
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              ← Previous Question
            </button>
          )}
          {questionId < questions.length && (
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Next Question →
            </button>
          )}
        </div>
      </main>

      <MediaPreview
        isOpen={!!selectedMedia}
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  )
}

function MarkdownContent({ content, onMediaClick }) {
  // Simple markdown parser for headers, bold, italics, lists, tables, images, and videos
  const lines = content.split('\n')
  const elements = []
  let tableRows = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) {
      if (tableRows.length > 0) {
        elements.push(
          <table key={`table-${elements.length}`} className="w-full border-collapse border border-gray-300 my-4">
            <tbody>
              {tableRows.map((row, idx) => (
                <tr key={idx} className={idx === 0 ? 'bg-blue-100' : 'hover:bg-gray-50'}>
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="border border-gray-300 px-4 py-2 text-sm"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
        tableRows = []
      }
      continue
    }

    // Image and video detection: ![alt](src)
    const mediaRegex = /!\[(.+?)\]\((.+?)\)/
    const mediaMatch = line.match(mediaRegex)
    if (mediaMatch) {
      const [, alt, src] = mediaMatch
      const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src)
      const isImageVideo = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(src) === false && isVideo

      elements.push(
        <div key={`media-${elements.length}`} className="my-6 flex justify-center">
          <button
            onClick={() => onMediaClick({ src, alt, type: isVideo ? 'video' : 'image' })}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {isVideo ? (
              <div className="bg-gray-900 w-full aspect-video flex items-center justify-center text-white text-4xl">
                ▶
              </div>
            ) : (
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-96 object-cover group-hover:opacity-90 transition-opacity cursor-pointer"
              />
            )}
            {isImageVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                <span className="text-white text-4xl">▶</span>
              </div>
            )}
          </button>
        </div>
      )
      continue
    }

    // Table detection
    if (line.includes('|')) {
      const cells = line.split('|').map(cell => cell.trim()).filter(Boolean)
      tableRows.push(cells)
      continue
    }

    // Headers
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {line.slice(3)}
        </h2>
      )
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
      continue
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={`quote-${elements.length}`} className="border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 italic text-gray-700">
          {line.slice(2)}
        </blockquote>
      )
      continue
    }

    // Lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={`li-${elements.length}`} className="ml-6 text-gray-700 my-1">
          {line.slice(2)}
        </li>
      )
      continue
    }

    // Numbered lists
    if (/^\d+\./.test(line)) {
      elements.push(
        <li key={`oli-${elements.length}`} className="ml-6 text-gray-700 my-1 list-decimal">
          {line.replace(/^\d+\.\s*/, '')}
        </li>
      )
      continue
    }

    // Paragraphs with formatting
    elements.push(
      <p key={`p-${elements.length}`} className="text-gray-700 my-4 leading-relaxed">
        {parseInlineFormatting(line, onMediaClick)}
      </p>
    )
  }

  if (tableRows.length > 0) {
    elements.push(
      <table key={`table-${elements.length}`} className="w-full border-collapse border border-gray-300 my-4">
        <tbody>
          {tableRows.map((row, idx) => (
            <tr key={idx} className={idx === 0 ? 'bg-blue-100' : 'hover:bg-gray-50'}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="border border-gray-300 px-4 py-2 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return <div className="space-y-2">{elements}</div>
}

function parseInlineFormatting(text) {
  // Handle **bold**, *italic*, and `code`
  const parts = []
  let current = 0

  // This is a simplified version; a full markdown parser would be more robust
  const boldRegex = /\*\*(.+?)\*\*/g
  const italicRegex = /\*(.+?)\*/g
  const codeRegex = /`(.+?)`/g

  let lastIndex = 0
  let match

  // Handle bold
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    parts.push(
      <strong key={`bold-${parts.length}`} className="font-bold">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}
