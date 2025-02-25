import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListCard from "./PickerListCard.jsx";
import PickerListDialog from "./PickerListDialog.jsx"

function App() {
  let tempListData =
  {
    emoji: "🍉",
    title: "Fruits List",
    readonly: false,
    items: [
      { title: "Apple", isActive: true },
      { title: "Banana", isActive: true },
      { title: "Cherry", isActive: false },
      { title: "Dragonfruit", isActive: true },
      { title: "Elderberry", isActive: false },
    ]
  }

  let tempListData2 =
  {
    emoji: "🎲",
    title: "Board Game List",
    readonly: false,
    items: [
      { title: "Ludo", isActive: true },
      { title: "Snakes & Ladder", isActive: false },
    ]
  }

  const [isNavActive, setIsNavActive] = useState(false);
  const [activeList, setActiveList] = useState(null);


  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    <PickerListCard cardData={tempListData} setActiveList={setActiveList} />
    <PickerListCard cardData={tempListData2} setActiveList={setActiveList} />
    <PickerListDialog activeList={activeList} setActiveList={setActiveList} />
  </>
  );

}

export default App
