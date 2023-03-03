import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import imageBanner from '../../assets/bg-montagnes.png'

export default function About() {
  return (
    <div>
      <Header />
      <Banner imageUrl={imageBanner} desc="Image de fond avec des montagnes" />
      <Footer />
    </div>
  )
}
