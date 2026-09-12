import { useState } from 'react'
import { questions } from '../data/questions'

export default function Home({ onQuestionClick, onComparisonClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Healthcare Explained
          </h1>
          <p className="text-lg text-gray-600">
            Understand how healthcare systems work before you need it
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Medicine tells us how to treat disease. Healthcare tells us how society delivers that treatment.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The 10 Major Questions
          </h2>
          <p className="text-gray-600 mb-6">
            To understand how healthcare really works, we need to ask 10 fundamental questions.
            Click on any question to dive deeper.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => onQuestionClick(q.id)}
                className="text-left p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{q.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      Question {q.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {q.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {q.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Country Comparison CTA */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compare Healthcare Systems
          </h2>
          <p className="text-gray-600 mb-6">
            How do the USA, UK, India, Germany, and Canada approach healthcare?
            View standardized country profiles and see the differences.
          </p>
          <button
            onClick={onComparisonClick}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Explore Country Profiles →
          </button>
        </section>

        {/* Patient Journey Example */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Example: Chest Pain Patient Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Meet John. He develops chest pain. Here's what happens in each country:
          </p>

          <div className="space-y-6">
            {/* USA */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2">🇺🇸 United States</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Goes to urgent care clinic or ER (or calls 911 if severe)</li>
                <li>Insurance verification (~15 min)</li>
                <li>Seen by doctor within 30 min - 1 hour</li>
                <li>ECG performed (~$500-1,000)</li>
                <li>If positive: Emergency cardiac catheterization ($20,000-40,000)</li>
                <li>John's insurance covers 80% → He pays $4,000-8,000 + ER copay</li>
                <li>Recovery and cardiac rehab (varies by insurance)</li>
              </ol>
            </div>

            {/* UK */}
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2">🇬🇧 United Kingdom</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Calls 999 for ambulance (free)</li>
                <li>Ambulance arrives within 10-15 min</li>
                <li>Taken to NHS hospital A&E (Accident & Emergency)</li>
                <li>Seen by doctor within 30-60 min</li>
                <li>ECG + troponin blood test (free)</li>
                <li>If positive: Urgent cardiology assessment and treatment</li>
                <li>John pays: £0</li>
                <li>Follow-up cardiac rehab (free through NHS)</li>
              </ol>
            </div>

            {/* India */}
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2">🇮🇳 India</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Goes to nearest private hospital (fastest) or public hospital</li>
                <li>Private hospital: Seen immediately, requires payment upfront</li>
                <li>ECG (~$50) + troponin (~$20)</li>
                <li>If positive: Cardiac catheterization (~$3,000-8,000)</li>
                <li>Stent placement if needed (~$5,000-12,000)</li>
                <li>John pays: Full amount (unless covered by employer insurance)</li>
                <li>For most families: Catastrophic expense, may require loans</li>
                <li>Public hospital: Free but massive wait times</li>
              </ol>
            </div>

            {/* Germany */}
            <div className="border-l-4 border-yellow-600 pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2">🇩🇪 Germany</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Calls 112 for ambulance (free)</li>
                <li>Taken to nearest hospital (public or contracted private)</li>
                <li>Seen by doctor within 30-45 min</li>
                <li>ECG + tests (covered by insurance)</li>
                <li>If positive: Urgent cardiology with possible catheterization</li>
                <li>John pays: Co-pay capped at 2% of annual income (~€100-300)</li>
                <li>Hospital stay and follow-up: Covered by insurance</li>
              </ol>
            </div>

            {/* Canada */}
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2">🇨🇦 Canada</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Goes to ER or calls 911 for ambulance</li>
                <li>Triaged by nurse (urgent cases seen first)</li>
                <li>Seen by ER doctor within 1-2 hours</li>
                <li>ECG + troponin test (free)</li>
                <li>If positive: Urgent cardiology referral, catheterization if needed</li>
                <li>John pays: $0</li>
                <li>Hospital stay, medications, follow-up rehab: Free through provincial insurance</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <CostCalculator />

        {/* Footer Info */}
        <section className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-sm">
            This site is an educational tool to help people understand healthcare systems worldwide.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Data as of 2024. Healthcare systems change; verify current information through official sources.
          </p>
        </section>
      </main>
    </div>
  )
}

function CostCalculator() {
  const [billAmount, setBillAmount] = useState(10000)

  const costs = {
    usa: Math.round(billAmount * 0.35) + 500, // 35% coinsurance + premium contribution
    uk: 0,
    india: billAmount,
    germany: Math.min(Math.round(billAmount * 0.02), 300),
    canada: 0
  }

  return (
    <section className="bg-purple-50 rounded-lg shadow-md p-8 mb-16 border border-purple-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Interactive: Hospital Bill Calculator
      </h2>
      <p className="text-gray-600 mb-6">
        You have a hospital bill. What do you actually pay in each country?
      </p>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          Hospital Bill: ${billAmount.toLocaleString()}
        </label>
        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$1,000</span>
          <span>$100,000</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { country: '🇺🇸 USA', key: 'usa', note: '(with insurance)' },
          { country: '🇬🇧 UK', key: 'uk', note: '(NHS)' },
          { country: '🇮🇳 India', key: 'india', note: '(private)' },
          { country: '🇩🇪 Germany', key: 'germany', note: '(capped)' },
          { country: '🇨🇦 Canada', key: 'canada', note: '(provincial)' }
        ].map(({ country, key, note }) => (
          <div key={key} className="bg-white rounded-lg p-6 text-center border border-purple-200">
            <div className="text-lg font-bold text-gray-900">{country}</div>
            <div className="text-xs text-gray-500 mb-4">{note}</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              ${costs[key].toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">
              {Math.round((costs[key] / billAmount) * 100)}% of bill
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 mt-6 text-center italic">
        USA: Assumes 80% insurance coverage after deductible + premium contributions<br />
        Germany: Capped at 2% of annual income<br />
        UK & Canada: Covered through public system (though funded by taxes)
      </p>
    </section>
  )
}
