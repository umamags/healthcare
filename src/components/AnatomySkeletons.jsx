export default function AnatomySkeletons({ onHeartClick, onKidneyClick }) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Human Anatomy Overview
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Hover over organs for details. Click on the heart or kidneys to explore these systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Male Skeleton */}
          <MaleSkeleton onHeartClick={onHeartClick} onKidneyClick={onKidneyClick} />

          {/* Female Skeleton */}
          <FemaleSkeleton onHeartClick={onHeartClick} onKidneyClick={onKidneyClick} />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-700">Heart (Clickable)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Kidneys (Clickable)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-gray-700">Lungs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
            <span className="text-gray-700">Liver</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-gray-700">Brain</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MaleSkeleton({ onHeartClick, onKidneyClick }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Male</h3>
      <svg
        viewBox="0 0 180 500"
        className="w-full max-w-xs"
        style={{ maxWidth: '280px' }}
      >
        {/* Head - More realistic oval shape */}
        <ellipse cx="90" cy="40" rx="24" ry="28" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />

        {/* Facial features - Eyes */}
        <circle cx="82" cy="36" r="2" fill="#333" />
        <circle cx="98" cy="36" r="2" fill="#333" />

        {/* Nose */}
        <line x1="90" y1="36" x2="90" y2="42" stroke="#8b7355" strokeWidth="1" />

        {/* Mouth */}
        <path d="M 82 46 Q 90 48 98 46" stroke="#8b7355" strokeWidth="1" fill="none" />

        {/* Neck - Tapered */}
        <path d="M 86 68 L 86 82 L 94 82 L 94 68 Z" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />

        {/* Shoulders - Broad and natural */}
        <path
          d="M 60 85 Q 55 92 60 100 L 120 100 Q 125 92 120 85 Z"
          fill="#d4a574"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Chest - Natural curves */}
        <path
          d="M 62 100 Q 58 120 60 145 L 120 145 Q 122 120 118 100 Z"
          fill="#e8d5c4"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Left Arm - Curved */}
        <path
          d="M 58 102 Q 40 125 35 170 Q 33 210 32 250"
          fill="none"
          stroke="#d4a574"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Arm - Curved */}
        <path
          d="M 122 102 Q 140 125 145 170 Q 147 210 148 250"
          fill="none"
          stroke="#d4a574"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Abdomen - Lower torso */}
        <path
          d="M 64 145 Q 60 180 65 220 L 115 220 Q 120 180 116 145 Z"
          fill="#e8d5c4"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Brain - Tooltip */}
        <g>
          <ellipse cx="90" cy="35" rx="14" ry="16" fill="none" stroke="#a78bfa" strokeWidth="2.5" opacity="0.9" />
          <title>Brain: Controls all body functions, thoughts, and movements</title>
        </g>

        {/* Left Lung - Tooltip */}
        <g>
          <ellipse cx="72" cy="125" rx="13" ry="28" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.9" />
          <title>Left Lung: Absorbs oxygen and releases carbon dioxide</title>
        </g>

        {/* Right Lung - Tooltip */}
        <g>
          <ellipse cx="108" cy="125" rx="13" ry="28" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.9" />
          <title>Right Lung: Absorbs oxygen and releases carbon dioxide</title>
        </g>

        {/* Heart - CLICKABLE with Tooltip */}
        <g
          onClick={onHeartClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <path
            d="M 90 110 Q 90 100 98 100 Q 105 100 105 108 Q 105 118 90 130 Q 75 118 75 108 Q 75 100 82 100 Q 90 100 90 110"
            fill="#ef4444"
            stroke="#991b1b"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <title>Heart (Clickable): Pumps blood throughout your body. Click to explore Heart Health Guide</title>
        </g>

        {/* Liver - Tooltip */}
        <g>
          <ellipse cx="112" cy="170" rx="17" ry="22" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.9" />
          <title>Liver: Filters blood and produces digestive enzymes</title>
        </g>

        {/* Stomach - Tooltip */}
        <g>
          <ellipse cx="75" cy="185" rx="12" ry="20" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.85" />
          <title>Stomach: Digests food with acid and enzymes</title>
        </g>

        {/* Pancreas - Tooltip */}
        <g>
          <path
            d="M 80 165 Q 90 170 105 165"
            fill="none"
            stroke="#d97706"
            strokeWidth="2.5"
            opacity="0.85"
          />
          <title>Pancreas: Produces insulin and digestive enzymes</title>
        </g>

        {/* Left Kidney - CLICKABLE with Tooltip */}
        <g
          onClick={onKidneyClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <ellipse cx="62" cy="210" rx="12" ry="22" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.95" />
          <title>Left Kidney (Clickable): Filters waste to make urine. Click to explore Kidney Health Guide</title>
        </g>

        {/* Right Kidney - CLICKABLE with Tooltip */}
        <g
          onClick={onKidneyClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <ellipse cx="118" cy="210" rx="12" ry="22" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.95" />
          <title>Right Kidney (Clickable): Filters waste to make urine. Click to explore Kidney Health Guide</title>
        </g>

        {/* Pelvis - Natural curves */}
        <path
          d="M 65 220 Q 60 240 70 265 M 115 220 Q 120 240 110 265 M 70 265 L 110 265"
          fill="none"
          stroke="#8b7355"
          strokeWidth="2.5"
        />

        {/* Left Leg - Curved, tapered */}
        <path
          d="M 75 265 Q 72 320 70 420"
          fill="none"
          stroke="#d4a574"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Leg - Curved, tapered */}
        <path
          d="M 105 265 Q 108 320 110 420"
          fill="none"
          stroke="#d4a574"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Feet */}
        <ellipse cx="70" cy="435" rx="8" ry="10" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />
        <ellipse cx="110" cy="435" rx="8" ry="10" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

function FemaleSkeleton({ onHeartClick, onKidneyClick }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Female</h3>
      <svg
        viewBox="0 0 180 500"
        className="w-full max-w-xs"
        style={{ maxWidth: '280px' }}
      >
        {/* Head - More realistic oval shape */}
        <ellipse cx="90" cy="40" rx="24" ry="28" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />

        {/* Facial features - Eyes */}
        <circle cx="82" cy="36" r="2" fill="#333" />
        <circle cx="98" cy="36" r="2" fill="#333" />

        {/* Nose */}
        <line x1="90" y1="36" x2="90" y2="42" stroke="#8b7355" strokeWidth="1" />

        {/* Mouth */}
        <path d="M 82 46 Q 90 48 98 46" stroke="#8b7355" strokeWidth="1" fill="none" />

        {/* Neck - Slender */}
        <path d="M 87 68 L 87 80 L 93 80 L 93 68 Z" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />

        {/* Shoulders - Narrower than male */}
        <path
          d="M 65 82 Q 60 88 65 100 L 115 100 Q 120 88 115 82 Z"
          fill="#d4a574"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Chest - Fuller, natural curves */}
        <path
          d="M 66 100 Q 62 120 65 145 L 115 145 Q 118 120 114 100 Z"
          fill="#e8d5c4"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Left Arm - Curved, graceful */}
        <path
          d="M 63 102 Q 42 125 37 170 Q 35 210 34 250"
          fill="none"
          stroke="#d4a574"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Arm - Curved, graceful */}
        <path
          d="M 117 102 Q 138 125 143 170 Q 145 210 146 250"
          fill="none"
          stroke="#d4a574"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Waist - Curves inward for natural shape */}
        <path
          d="M 68 145 Q 63 162 67 185 L 113 185 Q 117 162 112 145 Z"
          fill="#e8d5c4"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Hips - Fuller, wider curves (feminine shape) */}
        <path
          d="M 62 185 Q 55 205 60 235 L 120 235 Q 125 205 118 185 Z"
          fill="#e8d5c4"
          stroke="#8b7355"
          strokeWidth="2"
        />

        {/* Brain - Tooltip */}
        <g>
          <ellipse cx="90" cy="35" rx="14" ry="16" fill="none" stroke="#a78bfa" strokeWidth="2.5" opacity="0.9" />
          <title>Brain: Controls all body functions, thoughts, and movements</title>
        </g>

        {/* Left Lung - Tooltip */}
        <g>
          <ellipse cx="72" cy="125" rx="13" ry="28" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.9" />
          <title>Left Lung: Absorbs oxygen and releases carbon dioxide</title>
        </g>

        {/* Right Lung - Tooltip */}
        <g>
          <ellipse cx="108" cy="125" rx="13" ry="28" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.9" />
          <title>Right Lung: Absorbs oxygen and releases carbon dioxide</title>
        </g>

        {/* Heart - CLICKABLE with Tooltip */}
        <g
          onClick={onHeartClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <path
            d="M 90 108 Q 90 98 98 98 Q 105 98 105 106 Q 105 116 90 128 Q 75 116 75 106 Q 75 98 82 98 Q 90 98 90 108"
            fill="#ef4444"
            stroke="#991b1b"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <title>Heart (Clickable): Pumps blood throughout your body. Click to explore Heart Health Guide</title>
        </g>

        {/* Liver - Tooltip */}
        <g>
          <ellipse cx="110" cy="168" rx="16" ry="22" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.9" />
          <title>Liver: Filters blood and produces digestive enzymes</title>
        </g>

        {/* Stomach - Tooltip */}
        <g>
          <ellipse cx="73" cy="180" rx="11" ry="20" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.85" />
          <title>Stomach: Digests food with acid and enzymes</title>
        </g>

        {/* Pancreas - Tooltip */}
        <g>
          <path
            d="M 78 163 Q 90 168 105 163"
            fill="none"
            stroke="#d97706"
            strokeWidth="2.5"
            opacity="0.85"
          />
          <title>Pancreas: Produces insulin and digestive enzymes</title>
        </g>

        {/* Left Kidney - CLICKABLE with Tooltip */}
        <g
          onClick={onKidneyClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <ellipse cx="60" cy="208" rx="12" ry="22" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.95" />
          <title>Left Kidney (Clickable): Filters waste to make urine. Click to explore Kidney Health Guide</title>
        </g>

        {/* Right Kidney - CLICKABLE with Tooltip */}
        <g
          onClick={onKidneyClick}
          style={{ cursor: 'pointer' }}
          className="hover:opacity-60 transition-opacity"
        >
          <ellipse cx="120" cy="208" rx="12" ry="22" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.95" />
          <title>Right Kidney (Clickable): Filters waste to make urine. Click to explore Kidney Health Guide</title>
        </g>

        {/* Pelvis - Wider for female, natural curves */}
        <path
          d="M 60 235 Q 54 255 66 270 M 120 235 Q 126 255 114 270 M 66 270 L 114 270"
          fill="none"
          stroke="#8b7355"
          strokeWidth="2.5"
        />

        {/* Left Leg - Curved, tapered */}
        <path
          d="M 72 270 Q 68 325 65 420"
          fill="none"
          stroke="#d4a574"
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Leg - Curved, tapered */}
        <path
          d="M 108 270 Q 112 325 115 420"
          fill="none"
          stroke="#d4a574"
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Feet */}
        <ellipse cx="65" cy="435" rx="8" ry="10" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />
        <ellipse cx="115" cy="435" rx="8" ry="10" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
