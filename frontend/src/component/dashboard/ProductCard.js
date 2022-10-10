const ProductCard = (props) => {
  const addToWish = () => {
    alert("Great Shot!");
  };
  return (
    <div className="col-md-4 col-ms-6">
      <div class="product-card">
        <img class="card-img-top" src={props.item.image} />
        <div class="card-body">
          <div className="wish-area">
            <div className="card-caffiene">
              <span>{props.item.caffiene}gm</span>
            </div>
            <div className="add-to-wish">
              <button className="btn btn-wish" onClick={addToWish}>
                {" "}
                <i className="fa fa-cart-plus"></i> Add
              </button>
            </div>
          </div>
          <h5 class="card-title">{props.item.name}</h5>
          <p class="card-text">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
