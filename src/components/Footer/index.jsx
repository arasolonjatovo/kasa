import footerLogo from '../../assets/footer-logo.png'

import './index.scss'

export default function Footer() {
  return (
    <div className="footer">
      <img src={footerLogo} alt="verison footer du logo de kasa" />
      <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
