import logo from '../assets/logo.png'
import '../styles/Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const navigation = [
    { title: 'Accueil', link: '/' },
    { title: 'A propos', link: '/about' },
  ]

  let location = useLocation()

  for (let index = 0; index < navigation.length; index++) {
    if (location.pathname === navigation[index].link) {
      navigation[index].active = true
    } else {
      navigation[index].active = false
    }
  }

  return (
    <header>
      <h1>
        <Link to={navigation[0].link}>
          <img src={logo} alt="Logo de Kasa" />
        </Link>
      </h1>

      <nav>
        <ul>
          {navigation.map(({ title, link, active }, index) => (
            <li key={`${title}-${index}`}>
                {active ?  <Link to={link} className="underline">{title}</Link> : <Link to={link}>{title}</Link> }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
