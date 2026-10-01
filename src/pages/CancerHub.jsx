import { useState } from 'react'
import { cancerSections, cancerTreatmentCosts } from '../data/cancer'

export default function CancerHub({ onSectionClick, onBack }) {
  const [billAmount, setBillAmount] = useState(50000)

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="mb-4 text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🎗️ Cancer Explained
          </h1>
          <p className="text-lg text-gray-600">
            A guide for people who suspect they might have cancer
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Understanding your journey: from symptoms to diagnosis to treatment and beyond.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Journey Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Choose Your Journey
          </h2>
          <p className="text-gray-600 mb-8">
            Where are you in your cancer journey? Click a card to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cancerSections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className="text-left p-6 bg-white border-2 border-red-100 rounded-lg hover:border-red-400 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{section.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {section.description}
                    </p>
                    <div className="text-xs text-red-600 font-semibold">
                      {section.shortDesc} →
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Diagnosis Journey Comparison */}
        <section className="bg-blue-50 rounded-lg shadow-md p-8 mb-16 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Diagnosis Journey: USA vs India
          </h2>
          <p className="text-gray-600 mb-8">
            Timeline from first symptoms to treatment plan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* USA */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🇺🇸 United States</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">1</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Symptom Recognition</p>
                    <p className="text-sm text-gray-600">0-2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">2</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Primary Care Visit</p>
                    <p className="text-sm text-gray-600">1-3 weeks • ~$200-300</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">3</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Imaging (CT/MRI)</p>
                    <p className="text-sm text-gray-600">1-2 weeks • $2,000-4,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">4</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Specialist Referral</p>
                    <p className="text-sm text-gray-600">1-2 weeks • $200</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">5</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Biopsy</p>
                    <p className="text-sm text-gray-600">2-3 weeks • $1,500-3,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">6</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Diagnosis & Treatment Plan</p>
                    <p className="text-sm text-gray-600">1-2 weeks</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900">Total: 1-3 months</p>
                <p className="text-sm text-gray-600 mt-1">Costs vary by insurance; patient typically pays $3,000-10,000</p>
              </div>
            </div>

            {/* India */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🇮🇳 India</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">1</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Symptom Recognition</p>
                    <p className="text-sm text-gray-600">0-4 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">2</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Private Hospital Visit</p>
                    <p className="text-sm text-gray-600">Immediate • $100-300</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">3</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Imaging (CT/MRI)</p>
                    <p className="text-sm text-gray-600">1-2 weeks • $300-800</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">4</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Oncologist Consultation</p>
                    <p className="text-sm text-gray-600">1-2 weeks • $100-400</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">5</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Biopsy</p>
                    <p className="text-sm text-gray-600">2-4 weeks • $200-500</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">6</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Diagnosis & Treatment Plan</p>
                    <p className="text-sm text-gray-600">2-4 weeks</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900">Total: 3-6 months</p>
                <p className="text-sm text-gray-600 mt-1">Private hospital: $1,000-3,000 upfront</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Cost Calculator */}
        <CancerCostCalculator billAmount={billAmount} setBillAmount={setBillAmount} />

        {/* Important Resources */}
        <section className="bg-green-50 rounded-lg shadow-md p-8 mb-16 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📚 Important Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Global</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🌐 National Cancer Institute (cancer.gov)</li>
                <li>🌐 WHO Cancer Fact Sheets</li>
                <li>🌐 American Cancer Society</li>
                <li>🌐 Cancer Research UK</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">India-Specific</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🇮🇳 Tata Memorial Cancer Hospital (Mumbai)</li>
                <li>🇮🇳 AIIMS Cancer Centers</li>
                <li>🇮🇳 Cancer Society of India</li>
                <li>🇮🇳 Indian Council of Medical Research</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 rounded-lg p-8 text-center border border-yellow-200">
          <p className="text-gray-700 font-semibold mb-2">
            ⚠️ Medical Disclaimer
          </p>
          <p className="text-gray-600 text-sm">
            This information is educational and not a substitute for professional medical advice.
            Always consult with qualified healthcare providers for diagnosis, treatment, and medical decisions.
          </p>
        </section>
      </main>
    </div>
  )
}

function CancerCostCalculator({ billAmount, setBillAmount }) {
  const costs = {
    usa_insured: Math.round(billAmount * 0.25) + 5000,
    usa_uninsured: billAmount,
    india_private: billAmount * 0.6,
    india_public: 0
  }

  return (
    <section className="bg-red-50 rounded-lg shadow-md p-8 mb-16 border border-red-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        💰 Interactive: Treatment Cost Calculator
      </h2>
      <p className="text-gray-600 mb-8">
        Select a treatment type and see estimated costs in different countries
      </p>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          Treatment Cost Estimate: ${billAmount.toLocaleString()}
        </label>
        <input
          type="range"
          min="10000"
          max="200000"
          step="5000"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
          className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$10,000</span>
          <span>$200,000</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-red-200">
          <div className="text-lg font-bold text-gray-900">🇺🇸 USA</div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">With Insurance (80% covered)</span>
              <span className="text-2xl font-bold text-blue-600">
                ${costs.usa_insured.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-sm text-gray-600">Without Insurance</span>
              <span className="text-2xl font-bold text-red-600">
                ${costs.usa_uninsured.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <div className="text-lg font-bold text-gray-900">🇮🇳 India</div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Private Hospital</span>
              <span className="text-2xl font-bold text-orange-600">
                ${costs.india_private.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-sm text-gray-600">Public Hospital (free)</span>
              <span className="text-2xl font-bold text-green-600">
                Free
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center italic">
        Note: These are sample estimates. Actual costs vary based on cancer type, stage, location, and specific treatments.
      </p>
    </section>
  )
}
