import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'

import imageBanner from '../../assets/bg-montagnes.png'

import { aboutList } from '../../datas/aboutList'

export default function About() {
  return (
    <div>
      <Header />
      <Banner imageUrl={imageBanner} desc="Image de fond avec des montagnes" />
      {aboutList.map((item, index) => (
        <Collapse label={item.label} text={item.text} key={index} />
      ))}
      <Footer />
    </div>
  )
}
