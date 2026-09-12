import { countries, countryList } from '../data/countries'

export default function CountryDetail({ countryId, onBack }) {
  const country = countries[countryId]
  const currentIndex = countryList.findIndex(c => c.id === countryId)

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="text-blue-100 hover:text-white font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Comparisons
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{countryList[currentIndex].flag}</span>
            <h1 className="text-4xl font-bold">{country.name}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Scorecard */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <ScorecardItem label="Healthcare Model" value={country.model} />
            <ScorecardItem label="Population Coverage" value={country.coverage} />
            <ScorecardItem label="Financing" value={country.financing} />
            <ScorecardItem label="Primary Care Entry" value={country.primaryCare} />
            <ScorecardItem label="Specialist Access" value={country.specialists} />
            <ScorecardItem label="Diagnostics" value={country.diagnostics} />
            <ScorecardItem label="Treatment" value={country.treatment} />
            <ScorecardItem label="Prescription Drugs" value={country.drugs} />
            <ScorecardItem label="Waiting Times" value={country.waitTime} />
            <ScorecardItem label="Emergency Care" value={country.emergency} />
            <ScorecardItem label="Rural Healthcare" value={country.rural} />
            <ScorecardItem label="Financial Catastrophe Risk" value={country.financial} />
            <ScorecardItem label="Quality of Care" value={country.quality} />
            <ScorecardItem label="Technology Adoption" value={country.technology} />
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-gray-900 mb-4">✓ Strengths</h2>
            <p className="text-gray-700">{country.strengths}</p>
          </div>
          <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <h2 className="text-xl font-bold text-gray-900 mb-4">✗ Weaknesses</h2>
            <p className="text-gray-700">{country.weaknesses}</p>
          </div>
        </div>

        {/* Best Suited For */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">👥 Best Suited For</h2>
          <p className="text-gray-700">{country.bestFor}</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          {currentIndex > 0 && (
            <button
              onClick={onBack}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              ← Previous Country
            </button>
          )}
          {currentIndex < countryList.length - 1 && (
            <button
              onClick={onBack}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Next Country →
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

function ScorecardItem({ label, value }) {
  return (
    <div className="p-6 border-b border-r border-gray-200">
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
        {label}
      </h3>
      <p className="text-gray-900 text-base leading-relaxed">
        {value}
      </p>
    </div>
  )
}
