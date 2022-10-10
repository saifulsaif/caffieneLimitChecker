import React, { useState, useEffect } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  const addToWish = (product_id) => {
    let data = { product_id: product_id, qty: 1 };
    axios.post(api_url + "/store_wish", data).then((res) => {
      console.log(res);
    });
  };

  var consume = 2;
  var disabled = consume ? false : true;

  useEffect(() => {
    axios.get(api_url + "/products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <div className="row">
      {" "}
      {products.map((product) => (
        <div className="col-md-4 col-ms-6">
          <div class="product-card">
            <img class="card-img-top" src={product.image} />
            <div class="card-body">
              <div className="wish-area">
                <div className="card-caffiene">
                  ({consume})<span>{product.caffiene}gm</span>
                </div>
                <div className="add-to-wish">
                  <button
                    className="btn btn-wish"
                    onClick={() => addToWish(product.id)}
                    disabled={disabled}
                  >
                    {" "}
                    <i className="fa fa-cart-plus"></i> Add
                  </button>
                </div>
              </div>
              <h5 class="card-title"> {product.name}</h5>

              <p class="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
