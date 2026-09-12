import { useState } from 'react'
import Home from './pages/Home'
import CountryComparison from './pages/CountryComparison'
import QuestionDetail from './pages/QuestionDetail'
import CountryDetail from './pages/CountryDetail'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId)
    setCurrentPage('question-detail')
  }

  const handleCountryClick = (countryId) => {
    setSelectedCountry(countryId)
    setCurrentPage('country-detail')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedQuestion(null)
    setSelectedCountry(null)
  }

  const handleBackToComparison = () => {
    setCurrentPage('country-comparison')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' && (
        <Home
          onQuestionClick={handleQuestionClick}
          onComparisonClick={() => setCurrentPage('country-comparison')}
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
    </div>
  )
}
