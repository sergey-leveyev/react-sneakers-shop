function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center  mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5 flex">
                Lorem Ipsum is simply dummy text of printing
              </p>
              <b>556 NIS</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="btn-remove"
            />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5 flex">
                Lorem Ipsum is simply dummy text of printing
              </p>
              <b>556 NIS</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="btn-remove"
            />
          </div>
        </div>

        <div className="cardTotalBlock">
          <ul>
            <li>
              <span>Subtotal:</span>
              <div></div>
              <b>1000 NIS</b>
            </li>
            <li>
              <span>shipping</span>
              <div></div>
              <b>30 NIS</b>
            </li>
          </ul>
          <button className="greenButton">
            Buy <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
