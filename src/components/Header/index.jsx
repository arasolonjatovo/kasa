import { Link } from 'react-router-dom'

import mainLogo from '../../assets/logo.png'

import '../../sass/main.scss'
import './index.scss'

export default function Header() {
  return (
    <div className="header">
      <img src={mainLogo} alt="logo de Kasa" />
      <div className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </div>
    </div>
  )
}
