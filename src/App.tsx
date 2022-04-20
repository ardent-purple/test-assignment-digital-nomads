import React, { useState } from 'react'
import './App.css'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import SomeWidget from './components/SomeWidget/SomeWidget'

function App() {
  const [isLoading, setIsLoading] = useState(!0)

  return (
    <div className="app">{isLoading ? <LoadingSpinner /> : <SomeWidget />}</div>
  )
}

export default App
