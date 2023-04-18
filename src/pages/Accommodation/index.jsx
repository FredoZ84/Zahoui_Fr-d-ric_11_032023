import { useParams, Navigate } from 'react-router-dom'
import datas from '../../datas/logements.json'
import Gallery from '../../components/Gallery'
import TagList from '../../components/tagList'
import Stars from '../../components/Stars'
import Collapse from '../../components/Collapse'

import '../../styles/Tag.css'
import '../../styles/Accommodation.css'

function Accommodation() {
  let { id } = useParams()
  const accommodation = datas.filter((elt) => elt.id === id)[0]
  if (accommodation === undefined) {
    return <Navigate replace to="/error" />
  }
  return (
    <main id="accommodation">
      <Gallery images={accommodation.pictures} />
      <div className="accommodation_informations">
        <div className="accommodation_first_group">
          <h1 className="title">{accommodation.title}</h1>
          <p className="location">{accommodation.location}</p>
          <TagList
            listOfTags={accommodation.tags}
            accommodationId={accommodation.id}
          />
        </div>
        <div className="accommodation_second_group">
          <div className="accommodation_infosPlus">
            <div className="accommodation_name_picture">
              <p className="name">{accommodation.host.name}</p>
              <img
                src={accommodation.host.picture}
                alt={accommodation.host.name}
              />
            </div>
          </div>
          <Stars rating={parseInt(accommodation.rating)} />
        </div>
      </div>
      <div className="collapse_area">
        <Collapse title="Description" description={accommodation.description} />
        <Collapse title="Équipements" description={accommodation.equipments.map((e,index)=>(<li key={index}>{e}</li>))} />
      </div>
    </main>
  )
}

export default Accommodation
