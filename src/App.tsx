import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import SomeWidget from './components/SomeWidget/SomeWidget'
import { LocaleProvider } from './contexts/LocaleContext'

function App() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  // widget loading simulation
  useEffect(() => {
    setTimeout(() => setWidgetLoaded(true), 3000)
  }, [])

  return (
    <div className="app">
      <LocaleProvider>
        {widgetLoaded ? <SomeWidget /> : <LoadingSpinner />}
      </LocaleProvider>
    </div>
  )
}

export default App
