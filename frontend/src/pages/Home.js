import React, { useState, useEffect } from "react";
import "../component/dashboard/Dashboard.css";
import ProductCard from "../component/dashboard/ProductCard";
import axios from "axios";
import Profile from "../component/dashboard/Profile";
import Wishlist from "../component/dashboard/wishlist";
const api_url = process.env.REACT_APP_API_URL;

const Home = () => {
  const [products, setProducts] = useState([]);

  const [limit, setLimit] = useState(300);

  useEffect(() => {
    axios.get(api_url + "/products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  var total_caff = 230; // static
  var remmining_limit = limit - total_caff;

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 col-ms-12">
            <Profile />
          </div>
          <div className="col-md-9 col-ms-12">
            <div className="row">
              <div className="col-md-12">
                <Wishlist />
              </div>
            </div>
            <div className="row">
              {products.map((product) => (
                <ProductCard item={product} limit={remmining_limit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
