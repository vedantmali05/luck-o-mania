import PropTypes from "prop-types";

const IconButton = ({ icon, className = "", ...rest }) => {
    return (
        <button className={`icon ${className}`} {...rest}>
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