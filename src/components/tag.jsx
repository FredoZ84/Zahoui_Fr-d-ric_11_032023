import PropTypes from 'prop-types'

function Tag({ label }) {
  return <li className="tag">{label}</li>
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Tag
