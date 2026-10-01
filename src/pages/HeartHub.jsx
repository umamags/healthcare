import { useState } from 'react'
import {
  heartSections,
  heartRiskFactors,
  heartMedicationCosts,
  heartScreeningTests
} from '../data/heart'

export default function HeartHub({ onSectionClick, onBack }) {
  const [selectedRiskFactors, setSelectedRiskFactors] = useState([
    'age',
    'highBloodPressure'
  ])
  const [medicationCount, setMedicationCount] = useState(3)
  const [selectedMedication, setSelectedMedication] = useState('statin')

  const riskScore = calculateRiskScore(selectedRiskFactors)

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
            ❤️ Heart Health Guide
          </h1>
          <p className="text-lg text-gray-600">
            Understanding heart disease: prevention, diagnosis, treatment, and living well
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Comprehensive guide for understanding cardiovascular health in USA and India contexts.
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
            Where are you in your heart health journey? Click a card to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heartSections.map((section) => (
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

        {/* Heart Risk Calculator */}
        <HeartRiskCalculator
          selectedRiskFactors={selectedRiskFactors}
          setSelectedRiskFactors={setSelectedRiskFactors}
          riskScore={riskScore}
        />

        {/* Medication Cost Comparison */}
        <MedicationCostCalculator
          medicationCount={medicationCount}
          setMedicationCount={setMedicationCount}
          selectedMedication={selectedMedication}
          setSelectedMedication={setSelectedMedication}
        />

        {/* Screening Tests */}
        <ScreeningTestsSection />

        {/* Important Resources */}
        <section className="bg-green-50 rounded-lg shadow-md p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📚 Important Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Global</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🌐 American Heart Association (heart.org)</li>
                <li>🌐 World Heart Federation</li>
                <li>🌐 Mayo Clinic Cardiovascular</li>
                <li>🌐 Cleveland Clinic Heart Center</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">India-Specific</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🇮🇳 All India Institute of Medical Sciences (AIIMS)</li>
                <li>🇮🇳 Max Healthcare Cardiac Centers</li>
                <li>🇮🇳 Apollo Hospitals Cardiology</li>
                <li>🇮🇳 Indian Heart Association</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 rounded-lg p-8 text-center border border-yellow-200 mt-16">
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

function HeartRiskCalculator({ selectedRiskFactors, setSelectedRiskFactors, riskScore }) {
  const riskLevel = getRiskLevel(riskScore)

  return (
    <section className="bg-blue-50 rounded-lg shadow-md p-8 mb-16 border border-blue-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        🧮 Heart Disease Risk Calculator
      </h2>
      <p className="text-gray-600 mb-8">
        Select your risk factors to get a personalized risk assessment. This is educational only.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Risk Factors You Can't Change</h3>
          <div className="space-y-3">
            {heartRiskFactors.unchangeable.map((item, idx) => (
              <label key={idx} className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRiskFactors.includes(item.factor.toLowerCase().replace(' ', ''))}
                  onChange={(e) => {
                    const key = item.factor.toLowerCase().replace(' ', '')
                    if (e.target.checked) {
                      setSelectedRiskFactors([...selectedRiskFactors, key])
                    } else {
                      setSelectedRiskFactors(selectedRiskFactors.filter(f => f !== key))
                    }
                  }}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.factor}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Risk Factors You Can Change</h3>
          <div className="space-y-3">
            {heartRiskFactors.changeable.map((item, idx) => (
              <label key={idx} className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRiskFactors.includes(item.factor.toLowerCase().replace(/\s+/g, ''))}
                  onChange={(e) => {
                    const key = item.factor.toLowerCase().replace(/\s+/g, '')
                    if (e.target.checked) {
                      setSelectedRiskFactors([...selectedRiskFactors, key])
                    } else {
                      setSelectedRiskFactors(selectedRiskFactors.filter(f => f !== key))
                    }
                  }}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.factor}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 border-2 border-blue-500">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your Heart Disease Risk Score</p>
          <div className="mb-6">
            <div className="text-5xl font-bold mb-2" style={{ color: getRiskColor(riskLevel) }}>
              {riskScore}/100
            </div>
            <div className={`text-2xl font-bold mb-4 ${getRiskColor(riskLevel)}`}>
              {riskLevel} RISK
            </div>
          </div>

          <div className={`p-4 rounded-lg text-sm ${
            riskLevel === 'LOW' ? 'bg-green-100 text-green-800' :
            riskLevel === 'MODERATE' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {getRiskDescription(riskLevel)}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 italic">
              This is a simplified educational assessment. Consult your doctor for a comprehensive risk evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MedicationCostCalculator({ medicationCount, setMedicationCount, selectedMedication, setSelectedMedication }) {
  const usaCost = parseFloat(heartMedicationCosts.usa.average_3_drugs.split('-')[0]) * (medicationCount / 3)
  const indiaCost = parseFloat(heartMedicationCosts.india.average_3_drugs.split('-')[0]) * (medicationCount / 3)

  return (
    <section className="bg-purple-50 rounded-lg shadow-md p-8 mb-16 border border-purple-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        💊 Medication Cost Comparison
      </h2>
      <p className="text-gray-600 mb-8">
        Common cardiac medications and their costs in different countries
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Individual Medication Costs */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Common Medications (Monthly Cost)</h3>
          <div className="space-y-3">
            {[
              { name: 'Statin (cholesterol)', key: 'statin' },
              { name: 'Beta Blocker (heart rate/pressure)', key: 'betaBlocker' },
              { name: 'ACE Inhibitor (blood pressure)', key: 'aceInhibitor' },
              { name: 'Aspirin (antiplatelet)', key: 'aspirin' },
              { name: 'Anticoagulant (blood thinner)', key: 'anticoagulant' }
            ].map((med) => (
              <div key={med.key} className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">{med.name}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">USA</p>
                    <p className="font-bold text-gray-900">{heartMedicationCosts.usa[med.key]}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">India</p>
                    <p className="font-bold text-gray-900">{heartMedicationCosts.india[med.key]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Monthly Cost Calculator */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Total Monthly Medication Cost</h3>
          <div className="bg-white rounded-lg p-6 border border-purple-200 mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Number of daily medications: {medicationCount}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={medicationCount}
              onChange={(e) => setMedicationCount(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1 medication</span>
              <span>8 medications</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
              <p className="text-gray-600 mb-2">USA (with insurance)</p>
              <p className="text-3xl font-bold text-blue-600">
                ${(usaCost * 0.25).toFixed(0)}/month
              </p>
              <p className="text-xs text-gray-500 mt-2">After generic discounts & insurance</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-300">
              <p className="text-gray-600 mb-2">India (typical)</p>
              <p className="text-3xl font-bold text-orange-600">
                ${indiaCost.toFixed(0)}/month
              </p>
              <p className="text-xs text-gray-500 mt-2">Generic medications widely available</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center italic">
        Note: Costs vary based on specific medications, insurance plans, and pharmacy. Many medications have generic versions that cost significantly less.
      </p>
    </section>
  )
}

function ScreeningTestsSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-8 mb-16 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        🏥 Screening Tests & Costs
      </h2>
      <p className="text-gray-600 mb-8">
        Common cardiovascular screening tests and what they cost
      </p>

      <div className="space-y-4">
        {heartScreeningTests.map((test, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-gray-900 text-lg">{test.test}</h3>
              <div className="text-right text-sm">
                <p className="text-gray-600">USA: <span className="font-semibold">{test.cost_usa}</span></p>
                <p className="text-gray-600">India: <span className="font-semibold">{test.cost_india}</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-1">When</p>
                <p className="text-gray-600">{test.when}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">What It Measures</p>
                <p className="text-gray-600">{test.what}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Normal Result</p>
                <p className="text-gray-600">{test.normal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Helper functions
function calculateRiskScore(selectedFactors) {
  let score = 20 // Base score
  const unchangeableFactors = ['age', 'familyhistory', 'sex']
  const changeableFactors = [
    'highbloodpressure', 'highcholesterol', 'smoking', 'diabetes',
    'obesity', 'inactivity', 'poordiet', 'stress', 'poorsleep'
  ]

  selectedFactors.forEach(factor => {
    const normalized = factor.toLowerCase().replace(/\s+/g, '')
    if (unchangeableFactors.includes(normalized)) {
      score += 15
    } else if (changeableFactors.includes(normalized)) {
      score += 10
    }
  })

  return Math.min(score, 100)
}

function getRiskLevel(score) {
  if (score < 35) return 'LOW'
  if (score < 60) return 'MODERATE'
  return 'HIGH'
}

function getRiskColor(level) {
  return level === 'LOW' ? 'text-green-600' :
         level === 'MODERATE' ? 'text-yellow-600' :
         'text-red-600'
}

function getRiskDescription(level) {
  const descriptions = {
    LOW: 'Your risk appears relatively low. Continue healthy habits and get regular check-ups.',
    MODERATE: 'You have some risk factors. Talk to your doctor about lifestyle changes and screening.',
    HIGH: 'You have significant risk factors. Schedule a doctor visit soon for comprehensive evaluation and risk management.'
  }
  return descriptions[level]
}
