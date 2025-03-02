import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";
import IconButton from "./IconButton.jsx";
import CTAButton from "./CTAButton.jsx"

const Header = ({ setIsNavActive }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setTimeout(() => {
                document.body.style.setProperty("--header-height", (headerRef.current?.clientHeight || 0) + 1 + "px");
            }, 500);
        }
    }, [])



    return (
        <header ref={headerRef}>
            <IconButton
                icon="bi-list"
                onClick={() => { setIsNavActive(true) }}
                className={"nav-open-btn"}
            />

            <div>
                <h1>Luck·O·Mania</h1>

                <div className="options">
                    <IconButton
                        icon="bi-search"
                        className="mobile-tab-only"
                    />
                    <IconButton
                        icon="bi-person-circle"
                        className="mobile-only"
                    />

                    <button className="ghost search-btn-lg desktop-only">
                        <Icon icon={"bi-search"}></Icon>
                        <span style={{
                            "marginRight": "auto"
                        }}>Search...</span>
                        <Icon icon={"bi-slash-square"} />
                    </button>

                    <CTAButton
                        icon="bi-person-circle"
                        label={"You"}
                        className="tab-desktop-only ghost"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header