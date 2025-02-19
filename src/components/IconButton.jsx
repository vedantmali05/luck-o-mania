import PropTypes from "prop-types";

const IconButton = ({ icon, clickEvent, className = "" }) => {
    return (
        <button className={`icon ${className}`} onClick={clickEvent}>
            <i className={`bi ${icon}`}></i>
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default IconButton;