import { useState } from "react";
import Header from "./components/common/Header.jsx"
import Navigation from "./components/common/Navigation.jsx";
import Home from "./pages/Home.jsx";
import PickerListCard from "./components/picker/PickerListCard.jsx";
import PickerListDialog from "./components/picker/PickerListDialog.jsx";
import PickerWheel from "./components/picker/PickerWheel.jsx";

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
    readonly: true,
    items: Array.from({ length: 100 }, (_, i) => ({ title: (i + 1).toString(), isActive: false }))
  }

  const [isNavActive, setIsNavActive] = useState(false);
  const [activeList, setActiveList] = useState(null);

  return (<>
    <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
    <main>
      <Header setIsNavActive={setIsNavActive} />
      <Home />
    </main>
  </>
  );

}

export default App
