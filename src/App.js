import Header from "./components/Header/Haeder";
import Main from "./components/Main/Main";
import CityListProvider from "./contexts/CityListContexts"

function App() {
  return (
    <CityListProvider>
      <div className="container py-5">
        <Header />
        <hr />
        <Main />
      </div>
    </CityListProvider>
  );
}

export default App;