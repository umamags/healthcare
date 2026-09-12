import { useState, useEffect } from 'react'

export default function MediaPreview({ isOpen, media, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !media) return null

  const isVideo = media.type === 'video'

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-10"
          aria-label="Close preview"
        >
          ✕
        </button>

        {isVideo ? (
          <video
            src={media.src}
            controls
            autoPlay
            className="w-full h-full object-contain"
            style={{ maxHeight: '90vh' }}
          />
        ) : (
          <div
            className="relative flex items-center justify-center"
            onClick={() => setIsZoomed(!isZoomed)}
            style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
          >
            <img
              src={media.src}
              alt={media.alt || 'Preview'}
              className={`transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'max-h-[90vh] max-w-full cursor-zoom-in'
              }`}
            />
          </div>
        )}

        {/* Info */}
        {media.alt && (
          <div className="bg-gray-900 bg-opacity-75 text-white px-4 py-2 text-center text-sm">
            {media.alt}
          </div>
        )}

        {/* Navigation Info */}
        <div className="bg-gray-900 bg-opacity-75 text-white px-4 py-2 text-center text-xs">
          {isVideo ? 'Press ESC to close or click outside' : 'Click to zoom | Press ESC to close or click outside'}
        </div>
      </div>
    </div>
  )
}
