import PropTypes from "prop-types";
import Icon from "./Icon.jsx";
import { forwardRef } from "react";

const CTAButton = forwardRef(({ icon, iconType = "icon", label, className = "", ...rest }, ref) => {
    return (
        <button className={`${className}`} {...rest}>
            {
                icon &&
                <Icon icon={icon} iconType={iconType} />
            }
            {label}
        </button>
    )
})

CTAButton.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
}

export default CTAButton;