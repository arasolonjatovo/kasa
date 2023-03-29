import { useState } from 'react'

import chevronUp from '../../assets/icons/chevronUp.png'
import chevronDown from '../../assets/icons/chevronDown.png'

import './index.scss'

export default function Collapse({ label, text }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {isOpen ? (
        <div className="collapse">
          <div className="collapse__title-container">
            <p className="collapse__tilte">{label}</p>
            <img
              src={chevronUp}
              alt="chevron vers le haut"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div>
            <div className="collapse__desc">{text}</div>
          </div>
        </div>
      ) : (
        <div className="collapse">
          <div className="collapse__title-container">
            <p className="collapse__tilte">{label}</p>
            <img
              src={chevronDown}
              alt="chevron vers le base"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
