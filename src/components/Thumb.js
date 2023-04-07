import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

function Thumb({ label, id, cover }) {
  return (
    <li className="thumb ">      
        
          <img src={cover} alt={`cover for` + id} />
          <h3>{label}</h3>
           
    </li>
  )
}

Thumb.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumb;