import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import SomeWidget from './components/SomeWidget/SomeWidget'
import { LocaleProvider } from './contexts/LocaleContext'
import { LoadState } from './types/LoadState'

function App() {
  const [loadingState, setLoadingState] = useState(LoadState.Loading)
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  // widget loading simulation
  useEffect(() => {
    setTimeout(() => {
      const loadingStatus =
        Math.random() > 0.5 ? LoadState.LoadSuccess : LoadState.LoadFailure

      setLoadingState(loadingStatus)
      if (loadingStatus === LoadState.LoadSuccess) {
        setTimeout(() => setWidgetLoaded(true), 800)
      }
    }, 4000)
  }, [])

  return (
    <div className="app">
      <LocaleProvider>
        {widgetLoaded ? (
          <SomeWidget />
        ) : (
          <LoadingSpinner loadStatus={loadingState} />
        )}
      </LocaleProvider>
    </div>
  )
}

export default App
