import React from 'react'
import './SomeWidget.css'

export default function SomeWidget() {
  return (
    <div className="widget">
      <h1 className="widget__heading">Widget</h1>
      <hr className="widget__delimiter" />
      <p className="widget__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum,
        quidem reiciendis aspernatur saepe laboriosam in eveniet quos esse
        mollitia incidunt modi facilis, earum atque magni, soluta autem laborum
        dolor.
      </p>
    </div>
  )
}
