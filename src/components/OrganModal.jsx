import { useEffect, useState } from 'react'
import OrganMarkdown from './OrganMarkdown'

export default function OrganModal({ organ, onClose, onHubClick }) {
  const [view, setView] = useState('card')

  useEffect(() => {
    setView('card')
  }, [organ])

  useEffect(() => {
    if (!organ) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [organ, onClose])

  if (!organ) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="organ-modal-title"
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-sm font-semibold text-blue-600 mb-1">
              {view === 'card' ? 'Quick-reference card' : 'Full article'}
            </div>
            <h3 id="organ-modal-title" className="text-2xl font-bold text-gray-900">
              {organ.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-2xl leading-none text-gray-500 hover:text-gray-900 px-2"
          >
            ×
          </button>
        </div>

        <img
          src={organ.imageUrl}
          alt={`Diagram of the ${organ.name.toLowerCase()}`}
          loading="lazy"
          className="w-full max-h-72 object-contain bg-gray-50 rounded-lg mb-2"
        />
        <p className="text-xs text-gray-500 mb-6">
          Image: <a href={organ.credit.url} target="_blank" rel="noopener noreferrer" className="underline">{organ.credit.source}</a>
          {' '}via Wikimedia Commons · {organ.credit.licence} · resized
        </p>

        <OrganMarkdown source={view === 'card' ? organ.card : organ.article} />

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          {view === 'card' && organ.hub && onHubClick && (
            <button
              onClick={() => onHubClick(organ.hub)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all"
            >
              Open full guide →
            </button>
          )}
          {view === 'card' ? (
            <button
              onClick={() => setView('article')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              More →
            </button>
          ) : (
            <button
              onClick={() => setView('card')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all"
            >
              ← Back to card
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
