import React, { useState, useEffect } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

/* 
 Here i generate product card to show the product main component.
 click on ADD button calculate the consume limit and pass to header component
 update wishlist and product card get product limit 
*/

const SingleProduct = (props) => {
  const [products, setProducts] = useState([]);

  const addToWish = (product_id, caffiene) => {
    let data = { product_id: product_id, qty: 1 };
    axios.post(api_url + "/store_wish", data).then((res) => {
      props.Submit(caffiene);
    });
  };

  var consume = props.limit - props.consume;
  var disabled = consume ? false : true;

  var disabled = props.consume ? false : true;

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
                  ({Math.floor(consume / product.caffiene)})
                  <span>{product.caffiene}gm</span>
                </div>
                <div className="add-to-wish">
                  <button
                    className="btn btn-wish"
                    onClick={() => addToWish(product.id, product.caffiene)}
                    disabled={
                      Math.floor(consume / product.caffiene) > 0 ? false : true
                    }
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

export default SingleProduct;
