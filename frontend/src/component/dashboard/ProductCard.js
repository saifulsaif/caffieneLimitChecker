import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const ProductCard = (props) => {
  const addToWish = (product_id) => {
    let data = { product_id: product_id, qty: 1 };
    axios.post(api_url + "/store_wish", data).then((res) => {
      console.log(res);
    });
  };

  var consume = Math.floor(props.limit / props.item.caffiene);
  var disabled = consume ? false : true;
  return (
    <div className="col-md-4 col-ms-6">
      <div class="product-card">
        <img class="card-img-top" src={props.item.image} />
        <div class="card-body">
          <div className="wish-area">
            <div className="card-caffiene">
              ({consume})<span>{props.item.caffiene}gm</span>
            </div>
            <div className="add-to-wish">
              <button
                className="btn btn-wish"
                onClick={() => addToWish(props.item.id)}
                disabled={disabled}
              >
                {" "}
                <i className="fa fa-cart-plus"></i> Add
              </button>
            </div>
          </div>
          <h5 class="card-title"> {props.item.name}</h5>

          <p class="card-text">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
