import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import './index.scss'

export default function Slideshow({ picture }) {
  const [index, setIndex] = useState(0)

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? picture.length - 1 : newIndex)
  }
  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex > picture.length - 1 ? 0 : newIndex)
  }
  return (
    <div className="slideshow">
      <img
        src={picture[index]}
        alt="Carouselle des differentes photos de l'appartement"
      />
      <div className="slideshow__container">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => handlePrevious()}
        />
        <FontAwesomeIcon icon={faChevronRight} onClick={() => handleNext()} />
      </div>
      <p className="slideshow__bulletPoint">
        {index + 1}/{picture.length}
      </p>
    </div>
  )
}
