import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListView from "./PickerListView.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  let tempArray = [
    { title: "Apple", isActive: true },
    { title: "Banana", isActive: true },
    { title: "Cherry", isActive: false },
    { title: "Dragonfruit", isActive: true },
    { title: "Elderberry", isActive: false },
  ];

  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    <PickerListView title="My List" listItems={tempArray} />
  </>
  );

}

export default App
