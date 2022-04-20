import React from 'react'
import './LoadingSpinner.css'
import loadingSpinnerSvg from './loading-spinner.svg'

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img
        className="loading-spinner__spinner-svg"
        src={loadingSpinnerSvg}
        alt="loading spinner is spinning"
      />
      <h1 className="loading-spinner__text">Loading...</h1>
    </div>
  )
}
