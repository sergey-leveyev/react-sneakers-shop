function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="heart" />
      </div>
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
  );
}

export default Card;
