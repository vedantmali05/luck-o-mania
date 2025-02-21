import PropTypes from "prop-types";

const MenuButton = ({ icon, iconType = "icon", label, onClick, hasDropDown = false, isActive = false }) => {

    let iconElem = <i className={`bi ${icon}`}></i>;

    switch (iconType.toLowerCase()) {
        case "text":
            iconElem = icon
            break;
        case "image":
            iconElem = <img src={icon} alt={label} />
            break;
    }

    return (
        <button className={`menu-item ${isActive ? "active" : ""}`} onClick={onClick}>
            <span className="icon">{iconElem}</span>
            {label}
            {hasDropDown && <i className="bi bi-chevron-down"></i>}
        </button>
    );
}

MenuButton.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    hasDropDown: PropTypes.bool,
    isActive: PropTypes.bool.isRequired
}

export default MenuButton;