import PropTypes from 'prop-types'

function Tag({ label }) {
  return <div className="component tag">{label}</div>
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Tag
