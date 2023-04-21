import '../styles/Thumbs.css'
import datas from '../datas/logements.json'
import Thumb from '../components/Thumb'

function Thumbs() {
  return (
    <section id="thumbs">
      <h2 className="none">Galerie</h2>
      <ul>
        {datas.map((loc) => (
          <Thumb key={loc.id} id={loc.id} label={loc.title} cover={loc.cover} />
        ))}
      </ul>
    </section>
  )
}

export default Thumbs
