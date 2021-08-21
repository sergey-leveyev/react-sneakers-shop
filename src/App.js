function App() {
  return (
    <div className="wrapper clear">
      {/* HEADER START */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">best shoe shope</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />

            <span>700 NIS</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      {/* HEADER END */}

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
          {/* CARD START */}
          <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="shoe" />
          <h5>It is a long established fact that a reader</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>price: </span>
              <b>556 NIS.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5>It is a long established fact that a reader</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>price: </span>
              <b>556 NIS.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5>It is a long established fact that a reader</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>price: </span>
              <b>556 NIS.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5>It is a long established fact that a reader</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>price: </span>
              <b>556 NIS.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        {/* CARD END */}
</div>
      </div>
      {/* CONTENT END */}
    </div>
  );
}

export default App;
