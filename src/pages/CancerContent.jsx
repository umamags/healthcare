import { useState } from 'react'
import {
  cancerSymptomChecker,
  commonCancerTypes,
  treatmentTypes,
  financialAssistance
} from '../data/cancer'

export default function CancerContent({ sectionId, onBack }) {
  switch (sectionId) {
    case 'symptoms':
      return <SymptomsSection onBack={onBack} />
    case 'diagnosed':
      return <DiagnosedSection onBack={onBack} />
    case 'types':
      return <TypesSection onBack={onBack} />
    case 'treatment':
      return <TreatmentSection onBack={onBack} />
    case 'sideeffects':
      return <SideEffectsSection onBack={onBack} />
    case 'financial':
      return <FinancialSection onBack={onBack} />
    default:
      return <div>Section not found</div>
  }
}

function SymptomsSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header title="I Have Symptoms" icon="🔍" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When Should I Worry?
          </h2>
          <p className="text-gray-600 mb-6">
            Many symptoms can feel concerning, but not all indicate cancer. However, persistent
            symptoms lasting 2+ weeks warrant investigation. Here are common warning signs:
          </p>

          <div className="space-y-4">
            {cancerSymptomChecker.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border-l-4 ${
                  item.urgency === 'high'
                    ? 'bg-red-50 border-red-500'
                    : 'bg-yellow-50 border-yellow-500'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.symptom}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.urgency === 'high'
                      ? 'bg-red-200 text-red-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {item.urgency.toUpperCase()} PRIORITY
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  {item.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Who to see:</span>
                    <p className="text-gray-600">{item.specialist}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">When to see:</span>
                    <p className="text-gray-600">{item.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-green-50 rounded-lg shadow-md p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ✅ What Happens at Your Doctor Visit
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">1. Medical History</h3>
              <p className="text-gray-600">
                When did symptoms start? Any family history of cancer? Lifestyle factors?
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">2. Physical Examination</h3>
              <p className="text-gray-600">
                Doctor examines the affected area and checks vital signs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">3. Initial Tests</h3>
              <p className="text-gray-600">
                Blood work, imaging (X-ray, ultrasound), or other screening tests.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">4. Specialist Referral</h3>
              <p className="text-gray-600">
                If needed, you'll be referred to an oncologist or surgeon.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 rounded-lg shadow-md p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            💡 Important to Know
          </h2>
          <ul className="text-gray-600 space-y-3">
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Many symptoms are NOT cancer. Anxiety about symptoms is normal.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Early detection significantly improves outcomes and treatment options.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Screening programs exist for common cancers (breast, cervical, colorectal).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>If you have multiple risk factors, talk to your doctor about screening.</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function DiagnosedSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header title="Recently Diagnosed" icon="📋" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Taking It In: After Your Diagnosis
          </h2>
          <p className="text-gray-600 mb-6">
            Receiving a cancer diagnosis is life-changing. Here's what to expect and how to prepare.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-3">Understanding Your Diagnosis</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Ask for your pathology report and imaging results</li>
                <li>✓ Understand cancer type, stage, and grade</li>
                <li>✓ Get a written summary of your diagnosis</li>
                <li>✓ Ask your doctor to explain all terminology</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-3">Treatment Planning</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Discuss treatment options with your oncologist</li>
                <li>✓ Get a second opinion (often recommended)</li>
                <li>✓ Understand benefits and risks of each option</li>
                <li>✓ Ask about clinical trials that may apply</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-900 mb-3">Building Your Support Team</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Gather family/friends who can provide support</li>
                <li>✓ Consider a cancer counselor or therapist</li>
                <li>✓ Connect with support groups (in-person or online)</li>
                <li>✓ Designate someone to help manage appointments</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-3">Practical Preparations</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Arrange time off work for treatment</li>
                <li>✓ Review your insurance coverage</li>
                <li>✓ Apply for financial assistance programs</li>
                <li>✓ Plan childcare or elder care if needed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 rounded-lg shadow-md p-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            💭 Managing Emotions
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              It's normal to feel fear, anger, sadness, or shock. These feelings often come in waves.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold text-gray-900 mb-2">Consider:</p>
              <ul className="space-y-2 text-sm">
                <li>• Speaking with a mental health professional</li>
                <li>• Joining a cancer support group</li>
                <li>• Maintaining routines when possible</li>
                <li>• Communicating with loved ones about your needs</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function TypesSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header title="Cancer Types Explained" icon="🧬" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Cancer Types
          </h2>
          <div className="space-y-6">
            {commonCancerTypes.map((cancer, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{cancer.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {cancer.name}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevalence</h4>
                    <p className="text-gray-600 text-sm mb-4">{cancer.prevalence}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Risk Factors</h4>
                    <p className="text-gray-600 text-sm mb-4">{cancer.riskFactors}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Early Detection</h4>
                    <p className="text-gray-600 text-sm">{cancer.earlyDetection}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">5-Year Survival Rate</h4>
                    <p className="text-gray-600 text-sm mb-4">{cancer.survivalRate}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Treatment Types</h4>
                    <p className="text-gray-600 text-sm">{cancer.treatmentTypes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding Survival Rates
          </h2>
          <p className="text-gray-600 mb-4">
            5-year survival rates show what percentage of people with that cancer type survive at least 5 years after diagnosis.
          </p>
          <div className="bg-white rounded p-4 border-l-4 border-blue-500 text-sm text-gray-600">
            <p className="mb-2">
              <strong>Important:</strong> These are population averages. Your individual prognosis depends on:
            </p>
            <ul className="space-y-1 ml-4">
              <li>• Cancer stage at diagnosis</li>
              <li>• Your overall health</li>
              <li>• Age and genetic factors</li>
              <li>• Response to treatment</li>
              <li>• Access to quality care</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

function TreatmentSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header title="Treatment Options" icon="💊" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Understanding Your Treatment
          </h2>
          <p className="text-gray-600 mb-8">
            Treatment plans are personalized based on cancer type, stage, and your health.
            Most patients receive a combination of treatments.
          </p>

          <div className="space-y-6">
            {treatmentTypes.map((treatment, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {treatment.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What It Is</h4>
                    <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">When It's Used</h4>
                    <p className="text-gray-600 text-sm">{treatment.timing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Side Effects</h4>
                    <p className="text-gray-600 text-sm mb-4">{treatment.sideEffects}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Recovery</h4>
                    <p className="text-gray-600 text-sm">{treatment.recovery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-green-50 rounded-lg shadow-md p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ❓ Questions to Ask Your Oncologist
          </h2>
          <ul className="text-gray-600 space-y-3 text-sm">
            <li>• What type and stage is my cancer?</li>
            <li>• Why do you recommend this specific treatment plan?</li>
            <li>• What are the expected outcomes and survival rates?</li>
            <li>• What are the short-term and long-term side effects?</li>
            <li>• Are there clinical trials I'm eligible for?</li>
            <li>• How often will I need appointments?</li>
            <li>• What can I do to support my treatment?</li>
            <li>• What resources are available for support?</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function SideEffectsSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header title="Managing Side Effects" icon="💪" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Living with Cancer Treatment
          </h2>
          <p className="text-gray-600 mb-8">
            Side effects vary by person and treatment type. What matters is managing them effectively.
          </p>

          <div className="space-y-6">
            {[
              {
                symptom: 'Nausea and vomiting',
                management: 'Anti-nausea medications, frequent small meals, ginger, acupuncture'
              },
              {
                symptom: 'Fatigue',
                management: 'Gentle exercise, rest, nutrition support, sleep hygiene'
              },
              {
                symptom: 'Hair loss',
                management: 'Wigs, scalp cooling (if available), headwear, support groups'
              },
              {
                symptom: 'Mouth sores',
                management: 'Oral rinses, soft foods, ice chips, pain management'
              },
              {
                symptom: 'Loss of appetite',
                management: 'Nutrition consultation, smoothies, small frequent meals'
              },
              {
                symptom: 'Skin changes',
                management: 'Gentle skincare, sun protection, specialized creams'
              },
              {
                symptom: 'Low immunity',
                management: 'Avoid crowds, hand hygiene, vaccinations, infection prevention'
              },
              {
                symptom: 'Emotional distress',
                management: 'Counseling, support groups, meditation, family support'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.symptom}</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Management:</strong> {item.management}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🏥 When to Contact Your Doctor
          </h2>
          <div className="text-gray-600 space-y-2 text-sm">
            <p>Seek immediate care if you experience:</p>
            <ul className="ml-4 space-y-1">
              <li>• Fever over 100.4°F (38°C)</li>
              <li>• Severe allergic reactions</li>
              <li>• Chest pain or difficulty breathing</li>
              <li>• Severe bleeding or bruising</li>
              <li>• Signs of infection</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

function FinancialSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header title="Financial Preparation" icon="💰" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding Cancer Costs
          </h2>
          <p className="text-gray-600 mb-6">
            Cancer treatment is expensive. It's important to understand potential costs and available resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {financialAssistance.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.country === 'USA' ? '🇺🇸' : '🇮🇳'} {item.country}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Programs</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {item.programs.map((prog, pidx) => (
                      <li key={pidx}>• {prog}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> {item.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-yellow-50 rounded-lg shadow-md p-8 mb-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Action Steps
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-yellow-600 font-bold">1.</span>
              <div>
                <p className="font-semibold text-gray-900">Review Your Insurance</p>
                <p className="text-gray-600 text-sm">Understand deductibles, copays, and coverage limits</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 font-bold">2.</span>
              <div>
                <p className="font-semibold text-gray-900">Get Estimates</p>
                <p className="text-gray-600 text-sm">Ask hospital for itemized cost estimates upfront</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 font-bold">3.</span>
              <div>
                <p className="font-semibold text-gray-900">Apply for Assistance</p>
                <p className="text-gray-600 text-sm">Contact pharmaceutical companies, hospitals, nonprofits</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 font-bold">4.</span>
              <div>
                <p className="font-semibold text-gray-900">Negotiate</p>
                <p className="text-gray-600 text-sm">Hospital bills are often negotiable, especially if uninsured</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 font-bold">5.</span>
              <div>
                <p className="font-semibold text-gray-900">Plan Payments</p>
                <p className="text-gray-600 text-sm">Set up payment plans to spread costs over time</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ⚠️ Avoid These Mistakes
          </h2>
          <ul className="text-gray-600 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✕</span>
              <span>Ignoring bills - contact providers immediately if you can't pay</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✕</span>
              <span>Not applying for assistance - there's money available you may not know about</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✕</span>
              <span>Delaying treatment for financial reasons - discuss payment options with doctors</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✕</span>
              <span>Using credit cards for medical bills - explore payment plans first</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function Header({ title, icon, onBack }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="mb-4 text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-2"
        >
          ← Back to Cancer Hub
        </button>
        <h1 className="text-4xl font-bold text-gray-900">
          {icon} {title}
        </h1>
      </div>
    </header>
  )
}
