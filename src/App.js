import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      {/* CONTENT START */}
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>all shoe</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
}

export default App;
