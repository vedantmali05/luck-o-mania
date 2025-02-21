import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListView from "./PickerListView.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  let tempArray = [
    { id: 1, title: "Apple", isActive: true },
    { id: 2, title: "Banana", isActive: true },
    { id: 3, title: "Cherry", isActive: false },
    { id: 4, title: "Dragonfruit", isActive: true },
    { id: 5, title: "Elderberry", isActive: false },
  ];

  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    <PickerListView title="My List" listItems={tempArray} />
  </>
  );

}

export default App
