import { useState } from "react";
import { ContextProvider } from "./context/GlobalContext.jsx";

import Header from "./components/common/Header.jsx"
import Navigation from "./components/common/Navigation.jsx";
import Home from "./pages/Home.jsx";
import PickerListCard from "./components/picker/PickerListCard.jsx";
import PickerListDialog from "./components/picker/PickerListDialog.jsx";
import PickerWheel from "./components/picker/PickerWheel.jsx";
import { userPickerLists, presetPickerLists } from "./components/picker/PickerListsData.jsx";

function App() {

  const [isNavActive, setIsNavActive] = useState(false);

  return (<>
    <ContextProvider>
      <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
      <main>
        <Header setIsNavActive={setIsNavActive} />
        <section className="main-body">
          <Home userPickerLists={userPickerLists} presetPickerLists={presetPickerLists} />
        </section>
      </main>
    </ContextProvider>
  </>
  );

}

export default App
