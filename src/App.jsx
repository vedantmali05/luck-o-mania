import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListCard from "./PickerListCard.jsx";
import PickerListDialog from "./PickerListDialog.jsx";
import SpinningWheel from "./SpinningWheel.jsx";

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
      { title: "Orange", isActive: false },
      { title: "Grapes", isActive: false },
      { title: "Mango", isActive: false },
      { title: "Blueberry", isActive: false },
      { title: "Papaya", isActive: false },
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
    <SpinningWheel activeList={tempListData} />
    {/* <PickerListCard cardData={tempListData} setActiveList={setActiveList} />
    <PickerListCard cardData={tempListData2} setActiveList={setActiveList} />
    <PickerListDialog activeList={activeList} setActiveList={setActiveList} /> */}
  </>
  );

}

export default App
