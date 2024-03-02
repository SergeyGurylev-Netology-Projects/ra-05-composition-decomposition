import './App.css'
import {NewCategories} from "./components/NewsCategories/NewCategories.tsx";
import {TopNews} from "./components/TopNews/TopNews.tsx";
import {Currency} from "./components/Currency/Currency.tsx";
import {Tip} from "./components/Tip/Tip.tsx";
import {Search} from "./components/Search/Search.tsx";
import {Advertisement} from "./components/Advertisement/Advertisement.tsx";
import {AddInfoCategories} from "./components/AddInfo/AddInfoCategories.tsx";

function App() {

  return (
      <>
        <NewCategories />
        <TopNews />
        <Currency />
        <Tip />
        <Search />
        <Advertisement />
        <AddInfoCategories />
      </>
  )
}

export default App
