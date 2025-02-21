import IconButton from "./components/IconButton.jsx";

const Header = ({ setIsNavActive }) => {

    return (
        <header>
            <IconButton icon="bi-list" onClick={() => { setIsNavActive(true) }} />

            <div>
                <h1>Luck·O·Mania</h1>
                <IconButton icon="bi-search" />
            </div>
        </header>
    );
}

export default Header