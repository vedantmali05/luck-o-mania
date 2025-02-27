import PropTypes from "prop-types";

const Icon = ({ icon, iconType = "icon", iconLabel = "", ...rest }) => {

    switch (iconType.toLowerCase()) {
        case "emoji":
            return (<span className="emoji-icon">{icon}</span>)
        case "image":
            return <img src={icon} alt={iconLabel} />
    }

    return (<i className={`bi ${icon}`}></i>);
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon;