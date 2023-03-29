import { Link, useLocation } from 'react-router-dom'

import mainLogo from '../../assets/logo.png'

import '../../sass/main.scss'
import './index.scss'

export default function Header() {
  const location = useLocation()
  return (
    <div className="header">
      <img src={mainLogo} alt="logo de Kasa" />
      <div className="header__nav">
        <Link
          className={
            location.pathname === '/' ? 'header__link--active' : undefined
          }
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={
            location.pathname === '/about' ? 'header__link--active' : undefined
          }
          to="/about"
        >
          À Propos
        </Link>
      </div>
    </div>
  )
}
