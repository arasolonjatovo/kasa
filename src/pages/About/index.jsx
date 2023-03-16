import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'

import imageBanner from '../../assets/bg-montagnes.png'

import { aboutList } from '../../datas/aboutList'

import './index.scss'

export default function About() {
  return (
    <div className="about">
      <Header />
      <Banner imageUrl={imageBanner} desc="Image de fond avec des montagnes" />
      <div className="about__collapses">
        {aboutList.map((item, index) => (
          <Collapse label={item.label} text={item.text} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
