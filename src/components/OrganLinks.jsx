import { organs } from '../data/organs'

export default function OrganLinks({ onOrganClick }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Each Organ
      </h2>
      <p className="text-gray-600 mb-6">
        Click an organ to open its quick-reference card. Press More to read the full article.
        The first 19 organs appear on both figures. Organs marked Female or Male appear on that figure only.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {organs.map((organ) => (
          <button
            key={organ.id}
            onClick={() => onOrganClick(organ.id)}
            className="text-center py-3 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg font-semibold text-gray-900 hover:shadow-md hover:border-blue-400 hover:text-blue-700 transition-all cursor-pointer"
          >
            {organ.name}
            {organ.figures.length === 1 && (
              <span className={`block text-xs font-normal ${organ.figures[0] === 'female' ? 'text-pink-600' : 'text-blue-600'}`}>
                {organ.figures[0] === 'female' ? 'Female' : 'Male'}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
