import PropTypes from 'prop-types'
import '../styles/Stars.css'

function Stars({ rating }) {
  let stars = []
  let star = ''
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      star = 'colored'
    } else {
      star = 'initial'
    }
    stars.push(
      <i
        key={'star_index_' + i}
        className={`fa-solid fa-star ${star}`}
        alt=""
      ></i>
    )
  }
  return <div className="stars">{stars}</div>
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Stars
