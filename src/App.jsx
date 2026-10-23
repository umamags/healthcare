import { lazy, Suspense, useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'

// Only the home page loads up front. Other pages load when first opened, keeping the main bundle small.
const CountryComparison = lazy(() => import('./pages/CountryComparison'))
const QuestionDetail = lazy(() => import('./pages/QuestionDetail'))
const CountryDetail = lazy(() => import('./pages/CountryDetail'))
const CancerHub = lazy(() => import('./pages/CancerHub'))
const CancerContent = lazy(() => import('./pages/CancerContent'))
const HeartHub = lazy(() => import('./pages/HeartHub'))
const HeartContent = lazy(() => import('./pages/HeartContent'))
const KidneyHub = lazy(() => import('./pages/KidneyHub'))
const KidneyContent = lazy(() => import('./pages/KidneyContent'))

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedCancerSection, setSelectedCancerSection] = useState(null)
  const [selectedHeartSection, setSelectedHeartSection] = useState(null)
  const [selectedKidneySection, setSelectedKidneySection] = useState(null)

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId)
    setCurrentPage('question-detail')
  }

  const handleCountryClick = (countryId) => {
    setSelectedCountry(countryId)
    setCurrentPage('country-detail')
  }

  const handleCancerSectionClick = (sectionId) => {
    setSelectedCancerSection(sectionId)
    setCurrentPage('cancer-content')
  }

  const handleHeartSectionClick = (sectionId) => {
    setSelectedHeartSection(sectionId)
    setCurrentPage('heart-content')
  }

  const handleKidneySectionClick = (sectionId) => {
    setSelectedKidneySection(sectionId)
    setCurrentPage('kidney-content')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedQuestion(null)
    setSelectedCountry(null)
    setSelectedCancerSection(null)
    setSelectedHeartSection(null)
    setSelectedKidneySection(null)
  }

  const handleBackToComparison = () => {
    setCurrentPage('country-comparison')
  }

  const handleBackToCancerHub = () => {
    setCurrentPage('cancer-hub')
    setSelectedCancerSection(null)
  }

  const handleBackToHeartHub = () => {
    setCurrentPage('heart-hub')
    setSelectedHeartSection(null)
  }

  const handleBackToKidneyHub = () => {
    setCurrentPage('kidney-hub')
    setSelectedKidneySection(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={null}>
      {currentPage === 'home' && (
        <Home
          onQuestionClick={handleQuestionClick}
          onComparisonClick={() => setCurrentPage('country-comparison')}
          onCancerClick={() => setCurrentPage('cancer-hub')}
          onHeartClick={() => setCurrentPage('heart-hub')}
          onKidneyClick={() => setCurrentPage('kidney-hub')}
        />
      )}
      {currentPage === 'country-comparison' && (
        <CountryComparison
          onCountryClick={handleCountryClick}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === 'question-detail' && (
        <QuestionDetail
          questionId={selectedQuestion}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === 'country-detail' && (
        <CountryDetail
          countryId={selectedCountry}
          onBack={handleBackToComparison}
        />
      )}
      {currentPage === 'cancer-hub' && (
        <CancerHub
          onSectionClick={handleCancerSectionClick}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === 'cancer-content' && (
        <CancerContent
          sectionId={selectedCancerSection}
          onBack={handleBackToCancerHub}
        />
      )}
      {currentPage === 'heart-hub' && (
        <HeartHub
          onSectionClick={handleHeartSectionClick}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === 'heart-content' && (
        <HeartContent
          sectionId={selectedHeartSection}
          onBack={handleBackToHeartHub}
        />
      )}
      {currentPage === 'kidney-hub' && (
        <KidneyHub
          onSectionClick={handleKidneySectionClick}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === 'kidney-content' && (
        <KidneyContent
          sectionId={selectedKidneySection}
          onBack={handleBackToKidneyHub}
        />
      )}
      </Suspense>
      <Footer />
    </div>
  )
}
