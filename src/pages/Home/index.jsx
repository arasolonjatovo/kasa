import Header from '../../components/Header'
import Banner from '../../components/Banner'

import imageBanner from '../../assets/bg-falaise.png'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner
        imageUrl={imageBanner}
        desc="image avec des falaises en fond"
        textLayout="Chez vous, partout et ailleurs"
      />
    </div>
  )
}
