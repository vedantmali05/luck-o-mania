import { useState } from "react";
import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx";
import PickerListView from "./PickerListView.jsx";
import PickerListCard from "./PickerListCard.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  let tempListData =
  {
    emoji: "🤣",
    title: "This is my list and this is a long",
    readonly: false,
    items: [
      { title: "Apple", isActive: true },
      { title: "Banana", isActive: true },
      { title: "Cherry", isActive: false },
      { title: "Dragonfruit", isActive: true },
      { title: "Elderberry", isActive: false },
    ]
  }


  let tempCardData = {
    emoji: "🤣",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12,
    previewItems: ["Item 1", "Item 2", "Item 3", "Item 4"]
  }
  let tempCardData2 = {
    emoji: "☸️",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12,
    previewItems: ["Item 1"]
  }
  let tempCardData3 = {
    emoji: "🧛",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12,
    previewItems: []
  }
  let tempCardData4 = {
    emoji: "🧃",
    title: "Fun list. An apple a day keeps a doctor away",
    count: 12,
    previewItems: ["Item 1", "Item 2",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 3",
      "Item 4"]
  }

  return (<>
    <Header setIsNavActive={setIsNavActive} />
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    {/* <PickerListView listData={tempListData} /> */}
    <PickerListCard cardData={tempListData} />
    {/* <PickerListCard data={tempCardData2} />
    <PickerListCard data={tempCardData3} />
    <PickerListCard data={tempCardData4} /> */}
  </>
  );

}

export default App
