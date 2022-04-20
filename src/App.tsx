import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import SomeWidget from './components/SomeWidget/SomeWidget'

function App() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  // widget loading simulation
  useEffect(() => {
    setTimeout(() => setWidgetLoaded(true), 3000)
  }, [])

  return (
    <div className="app">
      {widgetLoaded ? <SomeWidget /> : <LoadingSpinner />}
    </div>
  )
}

export default App
