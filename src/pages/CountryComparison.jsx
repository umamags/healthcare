import { countryList } from '../data/countries'

export default function CountryComparison({ onCountryClick, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Healthcare System Comparison
          </h1>
          <p className="text-lg text-gray-600">
            Compare how different countries organize, finance, and deliver healthcare
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {countryList.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onClick={() => onCountryClick(country.id)}
            />
          ))}
        </div>

        {/* Comparison Table */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Comparison Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100 border-b-2 border-blue-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Metric</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">🇺🇸 USA</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">🇬🇧 UK</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">🇮🇳 India</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">🇩🇪 Germany</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">🇨🇦 Canada</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  metric="Healthcare Model"
                  usa="Mixed public/private"
                  uk="Tax-funded"
                  india="Mixed"
                  germany="Social insurance"
                  canada="National insurance"
                />
                <ComparisonRow
                  metric="Population Coverage"
                  usa="~90%"
                  uk="100%"
                  india="~40%"
                  germany="100%"
                  canada="100%"
                />
                <ComparisonRow
                  metric="Patient Cost (Low Income)"
                  usa="High"
                  uk="None"
                  india="Catastrophic"
                  germany="Low"
                  canada="None"
                />
                <ComparisonRow
                  metric="Specialist Wait (weeks)"
                  usa="2-4"
                  uk="4-13"
                  india="<1"
                  germany="2-6"
                  canada="4-16"
                />
                <ComparisonRow
                  metric="Life Expectancy"
                  usa="78 yrs"
                  uk="81 yrs"
                  india="70 yrs"
                  germany="82 yrs"
                  canada="82 yrs"
                />
                <ComparisonRow
                  metric="Medical Bankruptcy Risk"
                  usa="High"
                  uk="Very Low"
                  india="Very High"
                  germany="Very Low"
                  canada="Very Low"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Insights
          </h2>
          <div className="space-y-4">
            <Insight
              title="Expensive ≠ Better"
              description="USA spends 2-3x more per capita than other developed nations but doesn't have proportionally better outcomes."
            />
            <Insight
              title="Universal ≠ Slow"
              description="UK and Canada have universal coverage. While some wait times are longer, they avoid medical bankruptcy."
            />
            <Insight
              title="Access ≠ Quality"
              description="India has fast specialist access for those who can pay, but care quality varies wildly and catastrophic costs are common."
            />
            <Insight
              title="The Tax-funded Advantage"
              description="UK and Germany have lower mortality, better preventive care, and zero medical bankruptcy despite varying spending levels."
            />
            <Insight
              title="Urban-Rural Divide"
              description="All countries show major disparities. India's rural gap is most severe; UK guarantees equal access nationwide."
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function CountryCard({ country, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-left cursor-pointer border border-gray-200 hover:border-blue-400 group"
    >
      <div className="text-5xl mb-4">{country.flag}</div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {country.name}
      </h3>
      <p className="text-sm text-gray-600">
        Click to view detailed country profile
      </p>
    </button>
  )
}

function ComparisonRow({ metric, usa, uk, india, germany, canada }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 font-semibold text-gray-900">{metric}</td>
      <td className="px-4 py-3 text-center text-gray-700">{usa}</td>
      <td className="px-4 py-3 text-center text-gray-700">{uk}</td>
      <td className="px-4 py-3 text-center text-gray-700">{india}</td>
      <td className="px-4 py-3 text-center text-gray-700">{germany}</td>
      <td className="px-4 py-3 text-center text-gray-700">{canada}</td>
    </tr>
  )
}

function Insight({ title, description }) {
  return (
    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
