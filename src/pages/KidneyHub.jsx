import { useState } from 'react'
import {
  kidneySections,
  screeningTests,
  renalDietByStage,
  ckdStages,
  dialysisOptions,
  treatmentCosts
} from '../data/kidney'

export default function KidneyHub({ onSectionClick, onBack }) {
  const [eGFR, setEGFR] = useState(75)
  const [treatmentType, setTreatmentType] = useState('dialysis')

  const ckdStage = calculateCKDStage(eGFR)

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-cyan-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="mb-4 text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            💧 Kidney Health Guide
          </h1>
          <p className="text-lg text-gray-600">
            Understanding kidney disease: function, damage, treatment, and living well
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Comprehensive guide for chronic kidney disease, dialysis, transplant, and life with kidney disease.
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
            Where are you in your kidney health journey? Click a card to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidneySections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className="text-left p-6 bg-white border-2 border-cyan-100 rounded-lg hover:border-cyan-400 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{section.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {section.description}
                    </p>
                    <div className="text-xs text-cyan-600 font-semibold">
                      {section.shortDesc} →
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CKD Stage Calculator */}
        <CKDStageCalculator eGFR={eGFR} setEGFR={setEGFR} ckdStage={ckdStage} />

        {/* Renal Diet Guide */}
        <RenalDietGuide ckdStage={ckdStage} />

        {/* Treatment Cost Comparison */}
        <TreatmentCostCalculator treatmentType={treatmentType} setTreatmentType={setTreatmentType} />

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
                <li>🌐 National Kidney Foundation (kidney.org)</li>
                <li>🌐 American Kidney Fund</li>
                <li>🌐 NIDDK (National Institute of Diabetes and Digestive and Kidney Diseases)</li>
                <li>🌐 KDIGO (Kidney Disease: Improving Global Outcomes)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">India-Specific</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🇮🇳 Indian Kidney Foundation</li>
                <li>🇮🇳 AIIMS Nephrology Departments</li>
                <li>🇮🇳 Max Healthcare Dialysis Centers</li>
                <li>🇮🇳 Apollo Kidney Care Centers</li>
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
            Always consult with your nephrologist for diagnosis, treatment, and medical decisions.
          </p>
        </section>
      </main>
    </div>
  )
}

function CKDStageCalculator({ eGFR, setEGFR, ckdStage }) {
  const stage = ckdStages.find(s => s.stage === ckdStage)

  return (
    <section className="bg-blue-50 rounded-lg shadow-md p-8 mb-16 border border-blue-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        🧮 CKD Stage Calculator
      </h2>
      <p className="text-gray-600 mb-8">
        Enter your eGFR value to determine your CKD stage and management recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="bg-white rounded-lg p-6 border border-blue-300">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              eGFR (mL/min/1.73m²): {eGFR}
            </label>
            <input
              type="range"
              min="5"
              max="120"
              value={eGFR}
              onChange={(e) => setEGFR(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Severe (5)</span>
              <span>Normal (120)</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 italic">
            * eGFR is calculated from blood creatinine, age, sex, and race. Ask your doctor for your value.
          </p>
        </div>

        <div>
          {stage && (
            <div className="bg-white rounded-lg p-6 border-2 border-blue-500">
              <div className="text-center mb-4">
                <p className="text-gray-600 mb-2">Your CKD Stage</p>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stage.stage}
                </div>
                <p className={`text-sm font-semibold mb-2 ${
                  eGFR >= 60 ? 'text-green-600' :
                  eGFR >= 45 ? 'text-yellow-600' :
                  eGFR >= 30 ? 'text-orange-600' :
                  eGFR >= 15 ? 'text-red-600' :
                  'text-red-800'
                }`}>
                  {stage.description}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Typical Symptoms</p>
                  <p className="text-gray-600">{stage.symptoms}</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">Management Focus</p>
                  <p className="text-gray-600">{stage.management}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-blue-300">
        <p className="text-sm text-gray-700 mb-3">
          <strong>CKD Stage Breakdown:</strong>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-green-50 p-2 rounded border border-green-200">
            <p className="font-semibold text-green-900">Stage 1-2</p>
            <p className="text-green-700">eGFR ≥60</p>
          </div>
          <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
            <p className="font-semibold text-yellow-900">Stage 3a</p>
            <p className="text-yellow-700">eGFR 45-59</p>
          </div>
          <div className="bg-orange-50 p-2 rounded border border-orange-200">
            <p className="font-semibold text-orange-900">Stage 3b</p>
            <p className="text-orange-700">eGFR 30-44</p>
          </div>
          <div className="bg-red-50 p-2 rounded border border-red-200">
            <p className="font-semibold text-red-900">Stage 4</p>
            <p className="text-red-700">eGFR 15-29</p>
          </div>
          <div className="bg-red-100 p-2 rounded border border-red-300 md:col-span-2">
            <p className="font-semibold text-red-900">Stage 5 (ESRD)</p>
            <p className="text-red-700">eGFR &lt;15</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function RenalDietGuide({ ckdStage }) {
  const dietInfo = getDietByStage(ckdStage)

  return (
    <section className="bg-green-50 rounded-lg shadow-md p-8 mb-16 border border-green-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        🥗 Renal Diet Guide
      </h2>
      <p className="text-gray-600 mb-8">
        Diet recommendations are individualized by CKD stage. <strong>Always work with a renal dietitian for your specific plan.</strong>
      </p>

      {dietInfo && (
        <div className="bg-white rounded-lg p-8 border border-green-300 mb-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">Current Stage (based on eGFR)</p>
            <p className="text-3xl font-bold text-green-600 mb-2">{dietInfo.stage}</p>
            <p className="text-sm text-gray-600">{dietInfo.goals}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded p-4 border border-blue-200">
                <p className="font-semibold text-gray-900 mb-1">Sodium</p>
                <p className="text-2xl font-bold text-blue-600">{dietInfo.sodium}</p>
                <p className="text-xs text-gray-600 mt-2">Limit salt; avoid processed foods</p>
              </div>
              <div className="bg-purple-50 rounded p-4 border border-purple-200">
                <p className="font-semibold text-gray-900 mb-1">Potassium</p>
                <p className="text-2xl font-bold text-purple-600">{dietInfo.potassium}</p>
                <p className="text-xs text-gray-600 mt-2">Critical as kidneys fail; builds up in blood</p>
              </div>
              <div className="bg-orange-50 rounded p-4 border border-orange-200">
                <p className="font-semibold text-gray-900 mb-1">Phosphorus</p>
                <p className="text-2xl font-bold text-orange-600">{dietInfo.phosphorus}</p>
                <p className="text-xs text-gray-600 mt-2">Protects bones; high levels dangerous in late CKD</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-pink-50 rounded p-4 border border-pink-200">
                <p className="font-semibold text-gray-900 mb-1">Protein</p>
                <p className="text-2xl font-bold text-pink-600">{dietInfo.protein}</p>
                <p className="text-xs text-gray-600 mt-2">Reduces kidney workload; reversed on dialysis</p>
              </div>
              <div className="bg-cyan-50 rounded p-4 border border-cyan-200">
                <p className="font-semibold text-gray-900 mb-1">Fluids</p>
                <p className="text-2xl font-bold text-cyan-600">{dietInfo.fluids}</p>
                <p className="text-xs text-gray-600 mt-2">Critical in advanced stages</p>
              </div>
              <div className="bg-gray-100 rounded p-4 border border-gray-300">
                <p className="font-semibold text-gray-900 mb-1">Focus Area</p>
                <p className="text-sm text-gray-700">{dietInfo.focus}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <p className="text-sm font-semibold text-yellow-900 mb-2">⚠️ Important:</p>
        <p className="text-sm text-yellow-800">
          These are general guidelines. Diet changes are <strong>highly individualized</strong> based on lab values,
          dialysis status, medications, and other factors. <strong>Always consult a renal dietitian</strong> before making major diet changes.
        </p>
      </div>
    </section>
  )
}

function TreatmentCostCalculator({ treatmentType, setTreatmentType }) {
  return (
    <section className="bg-purple-50 rounded-lg shadow-md p-8 mb-16 border border-purple-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        💰 Dialysis vs Transplant Costs
      </h2>
      <p className="text-gray-600 mb-8">
        Compare the costs of different treatment options for ESRD
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Treatment Option
          </label>
          <div className="space-y-3">
            <button
              onClick={() => setTreatmentType('dialysis')}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                treatmentType === 'dialysis'
                  ? 'bg-blue-50 border-blue-500 shadow-md'
                  : 'bg-white border-gray-200'
              }`}
            >
              <p className="font-semibold text-gray-900">Dialysis (In-Center)</p>
              <p className="text-xs text-gray-600 mt-1">3-4 hours/day, 3x/week</p>
            </button>
            <button
              onClick={() => setTreatmentType('home_dialysis')}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                treatmentType === 'home_dialysis'
                  ? 'bg-blue-50 border-blue-500 shadow-md'
                  : 'bg-white border-gray-200'
              }`}
            >
              <p className="font-semibold text-gray-900">Home Dialysis</p>
              <p className="text-xs text-gray-600 mt-1">More flexible; requires training</p>
            </button>
            <button
              onClick={() => setTreatmentType('transplant')}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                treatmentType === 'transplant'
                  ? 'bg-green-50 border-green-500 shadow-md'
                  : 'bg-white border-gray-200'
              }`}
            >
              <p className="font-semibold text-gray-900">Transplant</p>
              <p className="text-xs text-gray-600 mt-1">One-time surgery; lifelong medications</p>
            </button>
          </div>
        </div>

        <div>
          {treatmentType === 'dialysis' && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-600 mb-2">USA (Annual)</p>
                <p className="text-3xl font-bold text-blue-600">{treatmentCosts.dialysis.usa_annual}</p>
                <p className="text-xs text-gray-600 mt-2">{treatmentCosts.dialysis.usa_insured}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-600 mb-2">India (Annual)</p>
                <p className="text-3xl font-bold text-orange-600">{treatmentCosts.dialysis.india_annual}</p>
                <p className="text-xs text-gray-600 mt-2">{treatmentCosts.dialysis.india_note}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <p className="text-sm text-gray-700">
                  <strong>Monthly medications:</strong> USA ${treatmentCosts.medications_monthly.usa} | India ${treatmentCosts.medications_monthly.india}
                </p>
              </div>
            </div>
          )}

          {treatmentType === 'home_dialysis' && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-600 mb-2">USA (Annual)</p>
                <p className="text-3xl font-bold text-blue-600">$90,000-100,000</p>
                <p className="text-xs text-gray-600 mt-2">Similar to in-center; equipment at home</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-600 mb-2">India (Annual)</p>
                <p className="text-3xl font-bold text-orange-600">$4,000-8,000</p>
                <p className="text-xs text-gray-600 mt-2">Home setup; supplies delivered</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
                <p className="text-sm text-yellow-800">
                  <strong>Setup cost:</strong> $5,000-10,000 (USA); $800-2,000 (India)
                </p>
              </div>
            </div>
          )}

          {treatmentType === 'transplant' && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-600 mb-2">USA (Surgery)</p>
                <p className="text-3xl font-bold text-green-600">$260,000-330,000</p>
                <p className="text-xs text-gray-600 mt-2">Medicare covers 80%; costs depend on hospital</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-600 mb-2">India (Surgery)</p>
                <p className="text-3xl font-bold text-orange-600">$15,000-30,000</p>
                <p className="text-xs text-gray-600 mt-2">Includes donor surgery; varies by hospital</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-sm text-gray-700">
                  <strong>Annual maintenance:</strong> USA $10,000-15,000 | India $2,000-4,000
                </p>
                <p className="text-xs text-gray-600 mt-2">(Anti-rejection drugs, monitoring)</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-300">
        <p className="text-sm text-gray-700 mb-3">
          <strong>Key Insight:</strong>
        </p>
        <p className="text-sm text-gray-600">
          While transplant has high upfront cost, over 10+ years it's often cheaper and offers better quality of life.
          However, availability (donor waiting lists, years of waiting) makes dialysis the immediate necessity for most ESRD patients.
        </p>
      </div>
    </section>
  )
}

function ScreeningTestsSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-8 mb-16 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        🏥 Kidney Screening Tests & Costs
      </h2>
      <p className="text-gray-600 mb-8">
        Tests used to detect and monitor kidney disease
      </p>

      <div className="space-y-4">
        {screeningTests.map((test, idx) => (
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
                <p className="font-semibold text-gray-900 mb-1">When to Get</p>
                <p className="text-gray-600">{test.when}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">What It Measures</p>
                <p className="text-gray-600">{test.what}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Normal Range</p>
                <p className="text-gray-600">{test.normal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
        <p className="text-sm font-semibold text-blue-900 mb-2">💡 Why Screening Matters:</p>
        <p className="text-sm text-blue-800">
          Kidney disease is often called "the silent killer" because early stages have no symptoms. Regular screening
          for those with diabetes or hypertension can catch disease early when it's most treatable.
        </p>
      </div>
    </section>
  )
}

// Helper functions
function calculateCKDStage(eGFR) {
  if (eGFR >= 90) return 'Stage 1'
  if (eGFR >= 60) return 'Stage 2'
  if (eGFR >= 45) return 'Stage 3a'
  if (eGFR >= 30) return 'Stage 3b'
  if (eGFR >= 15) return 'Stage 4'
  return 'Stage 5'
}

function getDietByStage(stage) {
  const dietData = {
    'Stage 1': {
      stage: 'Stage 1-2',
      gfr: '>60',
      goals: 'Prevent or slow progression',
      sodium: 'Less than 2,300mg/day',
      potassium: 'No restriction',
      phosphorus: 'No restriction',
      protein: 'Normal intake',
      fluids: 'No restriction',
      focus: 'Control blood pressure and blood sugar'
    },
    'Stage 2': {
      stage: 'Stage 1-2',
      gfr: '>60',
      goals: 'Prevent or slow progression',
      sodium: 'Less than 2,300mg/day',
      potassium: 'No restriction',
      phosphorus: 'No restriction',
      protein: 'Normal intake',
      fluids: 'No restriction',
      focus: 'Control blood pressure and blood sugar'
    },
    'Stage 3a': {
      stage: 'Stage 3a-3b',
      gfr: '30-59',
      goals: 'Slow progression; manage blood pressure',
      sodium: 'Less than 2,300mg/day',
      potassium: 'Monitor (2,000-3,000mg/day)',
      phosphorus: 'Monitor (800-1,000mg/day)',
      protein: 'Moderate reduction',
      fluids: 'Usually not restricted',
      focus: 'Medications working; diet prevents complications'
    },
    'Stage 3b': {
      stage: 'Stage 3a-3b',
      gfr: '30-59',
      goals: 'Slow progression; manage blood pressure',
      sodium: 'Less than 2,300mg/day',
      potassium: 'Monitor (2,000-3,000mg/day)',
      phosphorus: 'Monitor (800-1,000mg/day)',
      protein: 'Moderate reduction',
      fluids: 'Usually not restricted',
      focus: 'Medications working; diet prevents complications'
    },
    'Stage 4': {
      stage: 'Stage 4',
      gfr: '15-29',
      goals: 'Prepare for dialysis/transplant',
      sodium: 'Less than 2,000mg/day',
      potassium: 'Strictly limit (2,000mg/day)',
      phosphorus: 'Strictly limit (800mg/day)',
      protein: 'Moderate reduction',
      fluids: 'May start limiting (1,500-2,000mL/day)',
      focus: 'Prevent hyperkalemia and high phosphorus'
    },
    'Stage 5': {
      stage: 'Stage 5 (On Dialysis)',
      gfr: '<15',
      goals: 'Replace kidney function',
      sodium: 'Strictly limit (2,000-3,000mg/day)',
      potassium: 'Strictly limit (1,500-2,000mg/day)',
      phosphorus: 'Strictly limit (800mg/day)',
      protein: 'Higher (1.2g/kg)',
      fluids: 'Strictly limit (600-1,000mL/day)',
      focus: 'Diet is critical; poor adherence causes complications'
    }
  }
  return dietData[stage] || dietData['Stage 1']
}
