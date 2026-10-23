import { useEffect, useState } from 'react'
import { organs } from '../data/organs'
import { cardAilmentLinks } from '../data/cardAilmentLinks'
import { getOrganText } from '../data/organText'
import OrganMarkdown from '../components/OrganMarkdown'

export default function OrganPage({ organId, onBack, onHubClick }) {
  const organ = organs.find((item) => item.id === organId)
  const [view, setView] = useState('card')

  useEffect(() => {
    setView('card')
  }, [organId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [organId, view])

  useEffect(() => {
    if (!organ) return
    const previousTitle = document.title
    document.title = `${organ.name} | Health and Healthcare Explained`
    return () => {
      document.title = previousTitle
    }
  }, [organ])

  if (!organ) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Organ not found</h1>
        <button onClick={onBack} className="text-blue-600 font-semibold hover:underline">
          ← Back to home
        </button>
      </main>
    )
  }

  const text = getOrganText(organ.id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <button onClick={onBack} className="text-blue-600 font-semibold hover:underline">
            ← All organs
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="text-sm font-semibold text-blue-600 mb-1">
            {view === 'card' ? 'Quick-reference card' : 'Full article'}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{organ.name}</h1>

          <img
            src={organ.imageUrl}
            alt={`Diagram of the ${organ.name.toLowerCase()}`}
            className="w-full max-h-96 object-contain bg-gray-50 rounded-lg mb-2"
          />
          <p className="text-xs text-gray-500 mb-6">
            Image: <a href={organ.credit.url} target="_blank" rel="noopener noreferrer" className="underline">{organ.credit.source}</a>
            {' '}via Wikimedia Commons · {organ.credit.licence} · resized
          </p>

          <OrganMarkdown
            source={view === 'card' ? text.card : text.article}
            organId={organ.id}
            ailmentLinks={view === 'card' ? cardAilmentLinks[organ.id] : []}
          />

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            {view === 'card' && organ.hub && (
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
        </section>
      </main>
    </div>
  )
}
