import React from 'react'
import './LoadingSpinner.css'
import loadingSpinnerSvg from './loading-spinner.svg'
import { useLocale } from '../../contexts/LocaleContext'

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img
        className="loading-spinner__spinner-svg"
        src={loadingSpinnerSvg}
        alt="loading spinner is spinning"
      />
      <h1 className="loading-spinner__text">{useLocale('Loading.First')}</h1>
    </div>
  )
}
