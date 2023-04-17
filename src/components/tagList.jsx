import PropTypes from 'prop-types'
import Tag from './tag'

function TagList({ listOfTags, accommodationId }) {
  return (
    <div className="component tagList">
      {listOfTags.map((tag) => (
        <Tag key={accommodationId + tag} label={tag} />
      ))}
    </div>
  )
}

TagList.propTypes = {
  listOfTags: PropTypes.array.isRequired,
  accommodationId: PropTypes.string.isRequired,
}

export default TagList
