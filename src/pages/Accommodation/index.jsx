import { useParams, Navigate } from 'react-router-dom'
import datas from '../../datas/logements.json'
import Gallery from '../../components/Gallery'
import TagList from '../../components/tagList'
import Stars from '../../components/Stars'


function Accommodation() {
  let { id } = useParams()
  const accommodation = datas.filter((elt) => elt.id === id)[0]
  if (accommodation === undefined) {
    return <Navigate replace to="/error" />
  }
  return (
    <main className="page component accommodation">
      <article>
        <Gallery images={accommodation.pictures} />
        <div className="accommodation__informations">
          <div className="accommodation__infos">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
            <TagList
              listOfTags={accommodation.tags}
              accommodationId={accommodation.id}
            />
          </div>
          <div className="accommodation__infosPlus">
            <Stars rating={parseInt(accommodation.rating)} />
            <div className="accommodation__infosPlus--host">
              <p>{accommodation.host.name}</p>
              <img
                src={accommodation.host.picture}
                alt={accommodation.host.name}
              />
            </div>
          </div>
        </div>
        <div className="accommodation__collapse">

        </div>
      </article>
    </main>
  )
}

export default Accommodation
