import { useState } from 'react'

import chevronUp from '../../assets/icons/chevronUp.png'
import chevronDown from '../../assets/icons/chevronDown.png'

import './index.scss'

export default function Collapse({ label, text }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className="collapse">
        <div className="collapse__title-container">
          <p className="collapse__tilte">{label}</p>

          {isOpen ? (
            <img
              src={chevronUp}
              alt="chevron vers le haut"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src={chevronDown}
              alt="chevron vers le base"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {isOpen && <div>
          <div className="collapse__desc">{text}</div>
        </div>}
      </div>

    </div>
  )
}
