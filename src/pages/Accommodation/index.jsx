import { useParams } from 'react-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'

import { accommodationList } from '../../datas/accommodationList'

export default function Accommodation() {
  let { id } = useParams()
  const found = accommodationList.find((element) => element.id === id)

  return (
    <div>
      <Header />
      <Slideshow picture={found.pictures} />
      {/* <div className="informations">
        <h1 className="informations__mainTitle">{found.title}</h1>
        <h2 className="informations__location">{found.location}</h2>
      </div> */}
      <Footer />
    </div>
  )
}
