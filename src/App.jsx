import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListCard from "./PickerListCard.jsx";
import PickerListDialog from "./PickerListDialog.jsx";
import PickerWheel from "./PickerWheel.jsx";

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
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Orange", isActive: false },
      { title: "Grapes", isActive: false },
      { title: "Mango", isActive: false },
      { title: "Blueberry", isActive: false },
      { title: "Papaya is yellow in color. It contains multiple seeds.", isActive: false },
    ]
  }

  let tempListData2 =
  {
    emoji: "🔢",
    title: "Number List",
    readonly: false,
    items: Array.from({ length: 5 }, (_, i) => ({ title: (i + 1).toString(), isActive: false }))
  }

  const [isNavActive, setIsNavActive] = useState(false);
  const [activeList, setActiveList] = useState(null);


  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    <PickerWheel activeList={tempListData2} />
    {/* <PickerListCard cardData={tempListData} setActiveList={setActiveList} />
    <PickerListCard cardData={tempListData2} setActiveList={setActiveList} />
    <PickerListDialog activeList={activeList} setActiveList={setActiveList} /> */}
  </>
  );

}

export default App
