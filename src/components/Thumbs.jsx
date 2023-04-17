import '../styles/Gallery.css'
import datas from "../datas/logements.json"
import Thumb from "./Thumb.jsx"


function Thumbs() {
    return (
        <section id="thumbs">
            <h2 className="none">Galerie</h2>
            <ul>
            {datas.map((loc) => (
              <Thumb
                key={loc.id}
                id={loc.id}
                label={loc.title}
                cover={loc.cover}
              />
            ))}
           
            </ul>
               
        </section>
    )
}

export default Thumbs