import React from 'react'
import { Link } from 'react-router-dom'

const Horizontalbar = (props) => {
  return (
    <div className="horizontal-bar">
      <Link to="/screenshots">🔙</Link>
      <h1>Detalle</h1>
    </div>
  )
}

export default Horizontalbar
