import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeList, setActiveList] = useState(null);
    const [currentSecHeading, setCurrentSecHeading] = useState(null);
    const [headerHeight, setHeaderHeight] = useState("0px");

    return (
        // And pass the new useStates here... Is this possible, just tell yes or no
        <GlobalContext.Provider value={{ currentSecHeading, setCurrentSecHeading, headerHeight, setHeaderHeight, activeList, setActiveList }}>
            {children}
        </GlobalContext.Provider>
    )
}