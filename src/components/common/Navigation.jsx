import { useState } from "react";
import IconButton from "./IconButton.jsx";
import MenuButton from "./MenuButton.jsx";

const Navigation = ({ isNavActive, setIsNavActive }) => {
    const [activeMenu, setActiveMenu] = useState("picker wheel");

    // Function to handle the Navbar visibility
    const handleNavVisibility = (e) => {
        const navBody = e.currentTarget.querySelector(".nav-body");
        if (!navBody.contains(e.target)) {
            setIsNavActive(false);
        }
    };

    const openNavByDefault = () => {
        if (window.innerWidth > 1024) setIsNavActive(true);
        else setIsNavActive(false);
    }

    window.addEventListener("load", openNavByDefault);

    const menuItems = [
        { icon: "☸️", label: "Picker Wheel", key: "picker wheel" },
        { icon: "🎲", label: "Other Tools", key: "other tools" },
        { icon: "🎮", label: "Mini Games", key: "mini games" }
    ];

    return (
        <nav className={isNavActive ? "active" : ""} onClick={handleNavVisibility}>
            <section className="nav-body">
                {/* Nav Header */}
                <section className="nav-header">
                    {/* Add a Mobile Visible Logo here .mobile-only */}
                    <IconButton
                        icon="bi-x-lg"
                        onClick={() => setIsNavActive(false)}
                    />
                </section>

                {/* Nav Contents */}
                <menu className="nav-contents">
                    {menuItems.map(({ icon, label, key }) => (
                        <MenuButton
                            key={key}
                            icon={icon}
                            iconType="emoji"
                            label={label}
                            isActive={activeMenu === key}
                            onClick={() => setActiveMenu(key)}
                        />
                    ))}
                </menu>

                {/* Nav Footer */}
                <section className="nav-footer">
                    <a href="#">GitHub</a>
                    {/* TODO: Add a Theme Toggle button */}
                </section>
            </section>
        </nav>
    );
};

export default Navigation;
