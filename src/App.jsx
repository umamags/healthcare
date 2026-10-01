import { useState } from 'react'
import Home from './pages/Home'
import CountryComparison from './pages/CountryComparison'
import QuestionDetail from './pages/QuestionDetail'
import CountryDetail from './pages/CountryDetail'
import CancerHub from './pages/CancerHub'
import CancerContent from './pages/CancerContent'
import HeartHub from './pages/HeartHub'
import HeartContent from './pages/HeartContent'
import KidneyHub from './pages/KidneyHub'
import KidneyContent from './pages/KidneyContent'

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
    </div>
  )
}
