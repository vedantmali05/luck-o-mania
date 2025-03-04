import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import Icon from "./Icon.jsx";
import IconButton from "./IconButton.jsx";
import CTAButton from "./CTAButton.jsx"

const Header = ({ setIsNavActive }) => {

    const { currentSecHeading, setCurrentSecHeading, headerHeight, setHeaderHeight } = useContext(GlobalContext);

    const headerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (headerRef.current) {
                setHeaderHeight(h => h = ((headerRef.current?.clientHeight || 0) + 1 + "px"));
            }
        }, 500);
    }, [])

    document.body.style.setProperty("--header-height", headerHeight);


    return (
        <header ref={headerRef} id="main_header">
            <IconButton
                icon="bi-list"
                onClick={() => { setIsNavActive(true) }}
                className={"nav-open-btn"}
            />

            <div>
                <h1>{currentSecHeading || "Luck·O·Mania"}</h1>

                <div className="options">
                    <IconButton
                        icon="bi-search"
                        className="mobile-tab-only"
                    />

                    <button
                        className="ghost search-btn-lg desktop-only">
                        <Icon icon={"bi-search"}></Icon>
                        <span style={{
                            "marginRight": "auto"
                        }}>Search...</span>
                        <Icon icon={"bi-slash-square"} />
                    </button>

                    <IconButton
                        icon="bi-person-circle"
                        className="mobile-only"
                    />

                    <CTAButton
                        icon="bi-person-circle"
                        label={"You"}
                        className="tab-desk-only ghost"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header