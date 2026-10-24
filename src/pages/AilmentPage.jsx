import { useEffect, useState } from 'react'
import { loadOrganAilments } from '../data/ailments'
import { organs } from '../data/organs'
import OrganMarkdown from '../components/OrganMarkdown'
import { homePath, navigateTo, organPath } from '../lib/organRoute'

export default function AilmentPage({ organId, ailmentId }) {
  const organ = organs.find((item) => item.id === organId)
  const [ailment, setAilment] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    loadOrganAilments(organId).then(({ ailments }) => {
      if (!active) return
      setAilment(ailments.find((item) => item.id === ailmentId) ?? null)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [organId, ailmentId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [organId, ailmentId])

  useEffect(() => {
    if (!ailment) return
    const previousTitle = document.title
    document.title = `${ailment.title} | Health and Healthcare Explained`
    return () => {
      document.title = previousTitle
    }
  }, [ailment])

  if (loading) {
    return <main className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-600">Loading…</main>
  }

  if (!ailment || !organ) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Ailment not found</h1>
        <button onClick={() => navigateTo(organ ? organPath(organ.id) : homePath)} className="text-blue-600 font-semibold hover:underline">
          ← Back
        </button>
      </main>
    )
  }

  const goBackToOrgan = () => navigateTo(organPath(organ.id))

  // The summary comes first, then each section as a heading. OrganMarkdown renders all of it.
  const source = [
    ailment.summary,
    ...ailment.sections.map(({ label, text }) => `### ${label}\n\n${text}`)
  ].join('\n\n')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <button onClick={goBackToOrgan} className="text-blue-600 font-semibold hover:underline">
            ← {organ.name}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="text-sm font-semibold text-blue-600 mb-1">Ailment of the {organ.name.toLowerCase()}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{ailment.title}</h1>

          <img
            src={ailment.imageUrl}
            alt={ailment.title}
            className="w-full max-h-96 object-contain bg-gray-50 rounded-lg mb-2"
          />
          {ailment.credit && (
            <p className="text-xs text-gray-500 mb-6">
              Image: <a href={ailment.credit.url} target="_blank" rel="noopener noreferrer" className="underline">{ailment.credit.description}</a>
              {' '}via Wikimedia Commons · {ailment.credit.licence}
            </p>
          )}

          <OrganMarkdown source={source} />

          <div className="mt-8 flex justify-end">
            <button
              onClick={goBackToOrgan}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all"
            >
              ← Back to {organ.name.toLowerCase()}
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
