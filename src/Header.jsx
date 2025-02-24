import { useEffect, useRef } from "react";
import IconButton from "./components/IconButton.jsx";

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
            <IconButton icon="bi-list" onClick={() => { setIsNavActive(true) }} />

            <div>
                <h1>Luck·O·Mania</h1>
                <IconButton icon="bi-search" />
            </div>
        </header>
    );
}

export default Header