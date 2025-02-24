import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListView from "./PickerListView.jsx";
import PickerListCard from "./PickerListCard.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  let tempArray = [
    { title: "Apple", isActive: true },
    { title: "Banana", isActive: true },
    { title: "Cherry", isActive: false },
    { title: "Dragonfruit", isActive: true },
    { title: "Elderberry", isActive: false },
  ];

  let tempCardData = {
    emoji: "🤣",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12
  }
  let tempCardData2 = {
    emoji: "☸️",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12
  }
  let tempCardData3 = {
    emoji: "🧛",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12
  }
  let tempCardData4 = {
    emoji: "🧃",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12
  }

  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    {/* <PickerListView title="My List" listItems={tempArray} /> */}
    <PickerListCard data={tempCardData} />
    <PickerListCard data={tempCardData2} />
    <PickerListCard data={tempCardData3} />
    <PickerListCard data={tempCardData4} />
  </>
  );

}

export default App
