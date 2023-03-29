import { useState } from 'react'

import chevronRight from '../../assets/icons/chevronRight.png'
import chevronLeft from '../../assets/icons/chevronLeft.png'

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
        className="slideshow__bg"
        src={picture[index]}
        alt="Carouselle des differentes photos de l'appartement"
      />
      {picture.length > 1 ? (
        <div className="slideshow__container">
          <img
            src={chevronLeft}
            alt="chevron gauche"
            onClick={() => handlePrevious()}
          />
          <img
            src={chevronRight}
            alt="chevron droit"
            onClick={() => handleNext()}
          />
        </div>
      ) : null}

      <p className="slideshow__bulletPoint">
        {index + 1}/{picture.length}
      </p>
    </div>
  )
}
