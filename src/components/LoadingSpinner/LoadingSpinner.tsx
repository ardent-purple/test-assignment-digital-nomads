import React, { useEffect, useState } from 'react'
import './LoadingSpinner.css'
import loadingSpinnerSvg from './loading-spinner.svg'
import { useLocale } from '../../contexts/LocaleContext'
import { LoadState } from '../../types/LoadState'

export default function LoadingSpinner({
  loadStatus,
}: {
  loadStatus: LoadState
}) {
  const [loadingTip, setLoadingTip] = useState('Loading.First')

  useEffect(() => {
    let timeout: number | null = null

    switch (loadStatus) {
      case LoadState.LoadSuccess:
        setLoadingTip('Success.LoadingFinished')
        if (timeout != null) {
          clearTimeout(timeout)
        }
        break
      case LoadState.LoadFailure:
        setLoadingTip('Error.Timeout')
        if (timeout != null) {
          clearTimeout(timeout)
        }
        break
      case LoadState.Loading:
        switch (loadingTip) {
          case 'Loading.First':
            timeout = window.setTimeout(
              () => setLoadingTip('Loading.Second'),
              1000
            )
            break
          case 'Loading.Second':
            timeout = window.setTimeout(
              () => setLoadingTip('Loading.Third'),
              1000
            )
            break
        }
        break
    }

    return () => {
      if (timeout != null) {
        clearTimeout(timeout)
      }
    }
  }, [loadingTip, loadStatus])

  return (
    <div className="loading-spinner">
      <img
        className="loading-spinner__spinner-svg"
        src={loadingSpinnerSvg}
        alt="loading spinner is spinning"
      />
      <h3 className="loading-spinner__text">{useLocale(loadingTip)}</h3>
    </div>
  )
}
