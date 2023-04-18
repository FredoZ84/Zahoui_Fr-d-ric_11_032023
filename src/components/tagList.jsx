import PropTypes from 'prop-types'
import Tag from './tag'

function TagList({ listOfTags, accommodationId }) {
  return (
    <ul className="tagList">
      {listOfTags.map((tag) => (
        <Tag key={accommodationId + tag} label={tag} />
      ))}
    </ul>
  )
}

TagList.propTypes = {
  listOfTags: PropTypes.array.isRequired,
  accommodationId: PropTypes.string.isRequired,
}

export default TagList
