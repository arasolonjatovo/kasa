import { useParams } from 'react-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'

import { accommodationList } from '../../datas/accommodationList'

import starFalse from '../../assets/icons/starFalse.svg'
import starTrue from '../../assets/icons/starTrue.svg'

import './index.scss'

export default function Accommodation() {
  let { id } = useParams()
  const found = accommodationList.find((element) => element.id === id)
  document.title = found.title
  return (
    <div>
      <Header />
      <Slideshow picture={found.pictures} />
      <div className="details">
        <div className="informations">
          <h1 className="informations__mainTitle">{found.title}</h1>
          <h2 className="informations__location">{found.location}</h2>
          <div className="informations__tags">
            {found.tags.map((tag, index) => (
              <Tag label={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="owner">
          <div className="owner__container">
            <div className="owner__name">{found.host.name}</div>
            <img
              className="owner__pp"
              src={found.host.picture}
              alt="le proprietaire"
            />
          </div>
          <div className="star">
            {[...Array(5)].map((star, index) =>
              index + 1 > found.rating ? (
                <span className="star__container" key={index}>
                  <img src={starFalse} alt="etoile vide" />
                </span>
              ) : (
                <span className="star__container" key={index}>
                  <img src={starTrue} alt="etoile pleine" />
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="requirement">
        <Collapse label="Description" text={found.description} />
        <Collapse
          label="Équipements"
          text={
            <ul>
              {found.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  )
}
