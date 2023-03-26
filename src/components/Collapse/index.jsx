import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

export default function Collapse({ label, text }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {isOpen ? (
        <div className="collapse">
          <div className="collapse__title-container">
            <p className="collapse__tilte">{label}</p>
            <FontAwesomeIcon
              icon={faChevronUp}
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
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
