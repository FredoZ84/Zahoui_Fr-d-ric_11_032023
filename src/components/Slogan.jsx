import sloganBackground from '../assets/IMG.png'
import '../styles/Slogan.css'

function Slogan() {
	return (
    <section id="slogan">
        <h2 id="slogan_text">Chez vous, partout et ailleurs</h2>
        <img src={sloganBackground} alt="plage, arrière plan de slogan" id="slogan_background" />        
    </section>
    )
}

export default Slogan