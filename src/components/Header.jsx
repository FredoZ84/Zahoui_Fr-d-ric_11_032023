import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
    const navigation = ["Accueil","A Propos"]

	return (
    <header>
        <h1>
            <img src={logo} alt='Logo de Kasa' />
        </h1>        

        <nav>
            <ul>
                {
                    navigation.map((tab, index) => (
                    <li key={`${tab}-${index}`}>
                        <a href="*">
                            { tab }
                        </a>                        
                    </li>
                    ))
                }
            </ul>
        </nav>
    </header>
    )
}

export default Header