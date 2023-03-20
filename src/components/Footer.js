import '../styles/Footer.css'
import footerLogo from '../assets/footer_logo.png'

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt='Logo de Kasa' id="footer_logo"/>
            <p>© 2020 Kasa. All rights reserved</p>      
        </footer>
    )    
}

export default Footer