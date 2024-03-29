import { Link } from 'react-router-dom'

import { accommodationList } from '../../datas/accommodationList'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import './index.scss'

import imageBanner from '../../assets/bg-falaise.png'

export default function Home() {
  document.title = 'Accueil - Trouvez le logement qui vous correspond'
  return (
    <div>
      <Header />
      <Banner
        className="banner banner__mobile"
        imageUrl={imageBanner}
        desc="image avec des falaises en fond"
        textLayout="Chez vous, partout et ailleurs"
      />
      <section className="container">
        {accommodationList.map((acc, index) => (
          <div className="card_acc" key={index}>
            <Link className="card__link" to={`/accommodation/${acc.id}`}>
              <Card imgUrl={acc.cover} title={acc.title} />
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  )
}
