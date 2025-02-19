import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
  </>
  );

}

export default App
