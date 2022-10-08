import React, { useState, useEffect } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const ProductCard = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    axios.get(api_url + "/products").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <div class="product-card">
            <img class="card-img-top" src="../assets/img/black-coffee-1.jpg" />
            <div class="card-body">
              <div className="wish-area">
                <div className="card-caffiene">
                  <span>40gm</span>
                </div>
                <div className="add-to-wish">
                  <button className="btn btn-wish">
                    {" "}
                    <i className="fa fa-cart-plus"></i> Add
                  </button>
                </div>
              </div>
              <h5 class="card-title">Black Coffee Mixer 007</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.the bulk of the card's.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-ms-6">
          <div class="product-card">
            <img class="card-img-top" src="../assets/img/black-coffee.jpeg" />
            <div class="card-body">
              <div className="wish-area">
                <div className="card-caffiene">
                  <span>40gm</span>
                </div>
                <div className="add-to-wish">
                  <button className="btn btn-wish">
                    {" "}
                    <i className="fa fa-cart-plus"></i> Add
                  </button>
                </div>
              </div>
              <h5 class="card-title">Black Coffee Mixer 007</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.the bulk of the card's.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-ms-6">
          <div class="product-card">
            <img class="card-img-top" src="../assets/img/nos.jpeg" />
            <div class="card-body">
              <div className="wish-area">
                <div className="card-caffiene">
                  <span>40gm</span>
                </div>
                <div className="add-to-wish">
                  <button className="btn btn-wish">
                    {" "}
                    <i className="fa fa-cart-plus"></i> Add
                  </button>
                </div>
              </div>
              <h5 class="card-title">Black Coffee Mixer 007</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.the bulk of the card's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
