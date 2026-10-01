import { useState } from 'react'
import {
  kidneyFunction,
  kidneyDiseaseCauses,
  kidneyDiseaseTypes,
  kidneySymptoms,
  kidneyMedicationWarnings,
  dialysisOptions,
  medicareCoverage,
  livingKidneyDonation,
  financialAssistancePrograms
} from '../data/kidney'

export default function KidneyContent({ sectionId, onBack }) {
  switch (sectionId) {
    case 'causes':
      return <CausesSection onBack={onBack} />
    case 'types':
      return <TypesSection onBack={onBack} />
    case 'symptoms':
      return <SymptomsSection onBack={onBack} />
    case 'diagnosis':
      return <DiagnosisSection onBack={onBack} />
    case 'financial':
      return <FinancialSection onBack={onBack} />
    case 'living':
      return <LivingSection onBack={onBack} />
    default:
      return <div>Section not found</div>
  }
}

function CausesSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header title="What Causes Kidney Problems" icon="💧" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How Your Kidneys Work
          </h2>
          <p className="text-gray-600 mb-6">
            Your kidneys are bean-shaped organs that filter your blood to remove waste and excess water.
          </p>
          <div className="space-y-3">
            {kidneyFunction.map((func, idx) => (
              <div key={idx} className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                <p className="font-bold text-gray-900">{func.function}</p>
                <p className="text-sm text-gray-600 mt-1">{func.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Two Biggest Culprits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {kidneyDiseaseCauses.bigTwo.map((item, idx) => (
              <div key={idx} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.cause}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 italic">
            Together, diabetes and high blood pressure account for ~65% of all CKD cases.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Causes of Kidney Disease
          </h2>
          <div className="space-y-3">
            {kidneyDiseaseCauses.other.map((item, idx) => (
              <div key={idx} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-gray-900">{item.cause}</p>
                <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Kidney Damage Happens
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Initial damage:</strong> High blood pressure or blood sugar damages blood vessels in kidneys</span>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Inflammation:</strong> Immune response causes swelling and scarring</span>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Loss of function:</strong> Dead kidney tissue cannot be repaired or replaced</span>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Progression:</strong> Gradual loss of function over months to years</span>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">5.</span>
              <span><strong>ESRD:</strong> Once 85-90% of kidney function is lost, dialysis or transplant becomes necessary</span>
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
      <Header title="Types of Kidney Disease" icon="🫘" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Different Kidney Diseases
          </h2>
          <div className="space-y-6">
            {kidneyDiseaseTypes.map((disease, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{disease.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {disease.name}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevalence</h4>
                    <p className="text-gray-600 text-sm mb-4">{disease.prevalence}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Progression</h4>
                    <p className="text-gray-600 text-sm">{disease.progression}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reversibility</h4>
                    <p className="text-gray-600 text-sm mb-4">{disease.reversibility}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Treatment</h4>
                    <p className="text-gray-600 text-sm">{disease.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function SymptomsSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header title="Symptoms & Screening" icon="🩺" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-red-50 rounded-lg shadow-md p-8 mb-8 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ⚠️ The Silent Disease
          </h2>
          <p className="text-gray-700">
            <strong>Kidney disease is often called "the silent killer"</strong> because:
          </p>
          <ul className="text-gray-600 space-y-2 mt-3 text-sm">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Early stages (1-3) have no symptoms</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Symptoms only appear in late stages (4-5)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Damage is irreversible by the time you feel sick</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Screening is critical if you have diabetes or hypertension</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Warning Symptoms
          </h2>
          <div className="space-y-4">
            {kidneySymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border-l-4 ${
                  symptom.urgency === 'high'
                    ? 'bg-red-50 border-red-500'
                    : 'bg-yellow-50 border-yellow-500'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {symptom.symptom}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    symptom.urgency === 'high'
                      ? 'bg-red-200 text-red-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {symptom.urgency.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Where:</span>
                    <p className="text-gray-600">{symptom.location}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Cause:</span>
                    <p className="text-gray-600">{symptom.cause}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Timeline:</span>
                    <p className="text-gray-600">{symptom.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🆘 Emergency Signs
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>Seek immediate care if you have:</p>
            <ul className="text-sm space-y-2 ml-4">
              <li>• Very little urine output (oliguria)</li>
              <li>• Severe swelling (face, hands, legs, abdomen)</li>
              <li>• Shortness of breath</li>
              <li>• Confusion or altered mental status</li>
              <li>• Severe high blood pressure (&gt;180/120 mmHg)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

function DiagnosisSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header title="After a Diagnosis" icon="⚕️" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Care Team
          </h2>
          <div className="space-y-4">
            {[
              {
                role: 'Nephrologist',
                responsibility: 'Kidney disease specialist; main coordinator',
                expertise: 'Diagnoses kidney disease, prescribes medications, manages progression'
              },
              {
                role: 'Renal Dietitian',
                responsibility: 'Specialized in kidney-disease diet',
                expertise: 'Personalized diet recommendations by CKD stage'
              },
              {
                role: 'Dialysis Nurses/Technicians',
                responsibility: 'Manage dialysis treatments',
                expertise: 'Vascular access care, machine operation, patient monitoring'
              },
              {
                role: 'Transplant Coordinator',
                responsibility: 'If transplant considered',
                expertise: 'Evaluation, surgery scheduling, post-transplant care'
              },
              {
                role: 'Primary Care Doctor',
                responsibility: 'Overall health management',
                expertise: 'Coordinates with nephrologist; manages other conditions'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.responsibility}</p>
                <p className="text-gray-600 text-xs text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Medications to Slow Progression
          </h2>
          <div className="space-y-6">
            {kidneyMedicationWarnings.slice(0, 3).map((med, idx) => (
              <div key={idx} className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{med.medication}</h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Benefits:</strong> {med.benefits}
                </p>
                <div className="bg-white rounded p-3 border border-yellow-200">
                  <p className="text-sm font-semibold text-red-700 mb-2">⚠️ Important Warnings:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {med.warnings.map((warning, widx) => (
                      <li key={widx} className="flex gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dialysis Options
          </h2>
          <div className="space-y-6">
            {dialysisOptions.map((option, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 border border-blue-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{option.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Frequency & Duration</p>
                    <p className="text-gray-600">{option.frequency}</p>
                    <p className="font-semibold text-gray-900 mb-1 mt-2">Location</p>
                    <p className="text-gray-600">{option.location}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">How It Works</p>
                    <p className="text-gray-600">{option.how}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">✅ Advantages</p>
                    <p className="text-gray-600">{option.advantages}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">❌ Challenges</p>
                    <p className="text-gray-600">{option.disadvantages}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-xs text-gray-600">{option.effectiveness}</p>
                </div>
              </div>
            ))}
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
        <section className="bg-blue-50 rounded-lg shadow-md p-8 mb-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🇺🇸 Medicare ESRD Coverage (USA)
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <p className="font-bold text-gray-900 text-lg mb-2">
                Medicare Covers ALL ESRD Patients Regardless of Age
              </p>
              <p className="text-gray-700 text-sm">
                This is unique! Most Medicare eligibility starts at 65, but ESRD coverage applies to anyone, any age.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <p className="font-semibold text-gray-900 mb-2">Coverage Starts</p>
              <p className="text-gray-700 text-sm">
                Typically begins in the <strong>4th month of dialysis</strong> (can start 1st month if on home dialysis with training).
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <p className="font-semibold text-gray-900 mb-2">The 30-Month Coordination Period</p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Important:</strong> For the first 30 months, Medicare pays <strong>secondary</strong> to employer insurance.
              </p>
              <p className="text-gray-600 text-xs">
                • Employer plan pays first • Medicare becomes primary after 30 months • Don't lose employer coverage if possible
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-300">
              <p className="font-semibold text-gray-900 mb-2">✅ What Medicare Covers</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Dialysis treatments (in-center and home)</li>
                <li>• Related lab tests and medications</li>
                <li>• Hospital stays related to ESRD</li>
                <li>• Transplant surgery and anti-rejection drugs</li>
                <li>• Vascular access procedures</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Financial Assistance Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🇺🇸 USA</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {financialAssistancePrograms.usa.map((prog, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🇮🇳 India</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {financialAssistancePrograms.india.map((prog, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 rounded-lg shadow-md p-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ⚠️ Common Financial Mistakes
          </h2>
          <ul className="text-gray-600 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">✕</span>
              <span>Losing employer insurance before 30-month coordination period ends</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">✕</span>
              <span>Not applying for patient assistance programs early</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">✕</span>
              <span>Delaying dialysis due to cost concerns</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">✕</span>
              <span>Not exploring living kidney donation (can save $200K+ in dialysis costs)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">✕</span>
              <span>Missing transplant evaluation when eligible</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function LivingSection({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header title="Living with Kidney Disease" icon="❤️‍🩹" onBack={onBack} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dialysis and Daily Life
          </h2>
          <div className="space-y-4 text-gray-600 text-sm">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-semibold text-gray-900 mb-2">Work & Dialysis</p>
              <p>Many patients work during hemodialysis or use home/nocturnal dialysis for flexibility. Dialysis center hours are often 6 AM-7 PM.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-semibold text-gray-900 mb-2">Travel with Dialysis</p>
              <p>International travel requires advanced planning to arrange dialysis at destination. Home dialysis allows more flexibility.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="font-semibold text-gray-900 mb-2">Physical Activity</p>
              <p>Exercise is encouraged but must be balanced with treatment schedule. Avoid heavy exertion on dialysis days.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
              <p className="font-semibold text-gray-900 mb-2">Social Life</p>
              <p>Dialysis schedule (3-4 hours, 3x/week) requires planning but many patients maintain normal social activities.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Living Kidney Donation
          </h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-gray-900 mb-2">How It Works</p>
              <p>{livingKidneyDonation.how_it_works}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-bold text-gray-900 mb-2">Better Outcomes</p>
              <p className="text-gray-700">
                Living donor transplants have significantly better outcomes than deceased donor (95% function at 1 year vs 90%).
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="font-bold text-gray-900 mb-2">⚠️ Donor Risks</p>
              <ul className="space-y-1">
                {livingKidneyDonation.risks_donor.map((risk, idx) => (
                  <li key={idx}>• {risk}</li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="font-bold text-gray-900 mb-2">Common Myths</p>
              {livingKidneyDonation.myths.map((myth, idx) => (
                <div key={idx} className="mb-3">
                  <p className="text-red-700 text-sm font-semibold">❌ Myth: {myth.myth}</p>
                  <p className="text-green-700 text-sm mt-1">✅ Fact: {myth.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mental Health & Support
          </h2>
          <div className="space-y-4 text-sm">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-bold text-gray-900 mb-2">Common Emotional Challenges</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Grief over lost kidney function</li>
                <li>• Anxiety about treatment dependence</li>
                <li>• Depression about lifestyle changes</li>
                <li>• Fear of transplant complications</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-gray-900 mb-2">Getting Help</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Psychologist or therapist experienced with chronic illness</li>
                <li>• Support groups (in-person or online)</li>
                <li>• Social workers at dialysis centers</li>
                <li>• Family counseling to discuss caregiving</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-50 rounded-lg shadow-md p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📚 Trusted Resources
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• <strong>National Kidney Foundation</strong> — Patient education, support groups, advocacy</li>
            <li>• <strong>American Kidney Fund</strong> — Financial assistance, research funding</li>
            <li>• <strong>NIDDK</strong> — Government research and patient information</li>
            <li>• <strong>Your nephrologist team</strong> — Personalized guidance and support</li>
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
          ← Back to Kidney Hub
        </button>
        <h1 className="text-4xl font-bold text-gray-900">
          {icon} {title}
        </h1>
      </div>
    </header>
  )
}
