import PropTypes from "prop-types";
import Icon from "./Icon.jsx";

const MenuButton = ({ icon, iconType = "icon", label, onClick, hasDropDown = false, isActive = false }) => {

    return (
        <button className={`menu-item ${isActive ? "active" : ""}`} onClick={onClick}>
            <span className="icon">
                {
                    <Icon icon={icon} iconType={iconType} />
                }
            </span>
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