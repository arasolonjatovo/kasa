import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import './index.scss'

export default function Error() {
  document.title = "Oups ! Cette page n'existe pas"
  return (
    <div>
      <Header />
      <div className="error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="error__anchor">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  )
}
