import { lazy, Suspense, useEffect, useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import { homePath, navigateTo, organPath, parseOrganRoute } from './lib/organRoute'

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
const OrganPage = lazy(() => import('./pages/OrganPage'))
const AilmentPage = lazy(() => import('./pages/AilmentPage'))

function pageForRoute(route) {
  if (!route) return 'home'
  return route.ailmentId ? 'ailment-detail' : 'organ-detail'
}

function isOrganPage(page) {
  return page === 'organ-detail' || page === 'ailment-detail'
}

export default function App() {
  const [initialRoute] = useState(() => parseOrganRoute())
  const [currentPage, setCurrentPage] = useState(() => pageForRoute(initialRoute))
  const [selectedOrganId, setSelectedOrganId] = useState(initialRoute?.organId ?? null)
  const [selectedAilmentId, setSelectedAilmentId] = useState(initialRoute?.ailmentId ?? null)
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

  // Organ and ailment pages have their own URLs. The browser's back and forward buttons follow them.
  useEffect(() => {
    const onPopState = () => {
      const route = parseOrganRoute()
      if (route) {
        setSelectedOrganId(route.organId)
        setSelectedAilmentId(route.ailmentId)
        setCurrentPage(pageForRoute(route))
      } else {
        setCurrentPage((page) => (isOrganPage(page) ? 'home' : page))
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const handleOrganClick = (organId) => {
    navigateTo(organPath(organId))
  }

  const handleOrganHubClick = (hub) => {
    navigateTo(homePath)
    setCurrentPage(hub === 'heart' ? 'heart-hub' : 'kidney-hub')
  }

  const handleBackToHome = () => {
    if (parseOrganRoute()) navigateTo(homePath)
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
          onOrganClick={handleOrganClick}
          onQuestionClick={handleQuestionClick}
          onComparisonClick={() => setCurrentPage('country-comparison')}
          onCancerClick={() => setCurrentPage('cancer-hub')}
          onHeartClick={() => setCurrentPage('heart-hub')}
          onKidneyClick={() => setCurrentPage('kidney-hub')}
        />
      )}
      {currentPage === 'organ-detail' && (
        <OrganPage
          organId={selectedOrganId}
          onBack={handleBackToHome}
          onHubClick={handleOrganHubClick}
        />
      )}
      {currentPage === 'ailment-detail' && (
        <AilmentPage organId={selectedOrganId} ailmentId={selectedAilmentId} />
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
