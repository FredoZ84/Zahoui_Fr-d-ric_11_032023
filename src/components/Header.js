import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
	return (
    <header>
        <h1>
            <img src={logo} alt='Logo de Kasa' />
        </h1>        

        <nav>
            <ul>
                <li>
                    <a href="*">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="*">
                        A Propos
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header