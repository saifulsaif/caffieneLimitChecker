import React, { useState, useEffect } from "react";
import "../component/dashboard/Dashboard.css";
import ProductCard from "../component/dashboard/ProductCard";
import axios from "axios";
import Profile from "../component/dashboard/Profile";
import Wishlist from "../component/dashboard/wishlist";
import HeaderCard from "../component/dashboard/HeaderCard";
const api_url = process.env.REACT_APP_API_URL;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [wish, setWish] = useState([]);

  const [limit, setLimit] = useState(300);

  useEffect(() => {
    axios.get(api_url + "/products").then((res) => {
      setProducts(res.data.data);
    });

    axios.get(api_url + "/user").then((res) => {
      setProfile(res.data.data);
      setLimit(res.data.data.c_limit);
    });

    axios.get(api_url + "/wish_list").then((res) => {
      setWish(res.data.data);
    });
  }, []);

  var total_caff = 0;
  var process_color = "progress-bar bg-success";
  var status = "Excelent";
  wish.map((wish) => {
    total_caff += wish.qty * wish.caffiene;
  });

  var process = (100 / limit) * total_caff;
  var remmining_limit = limit - total_caff;
  if (process >= 60 && process < 80) {
    process_color = "progress-bar bg-warning";
    status = "Over";
  } else if (process >= 80) {
    process_color = "progress-bar bg-danger";
    status = "Risky";
  }

  return (
    <div>
      <div className="row">
        <div className="header">
          <h1>Caffiene Limit Checker</h1>
        </div>
        <div class="progress">
          <div
            class={process_color}
            role="progressbar"
            style={{ width: process + "%" }}
            aria-valuenow={process}
            aria-valuemin="0"
            aria-valuemax={limit}
          >
            Caffiene {process} %
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <HeaderCard
            limit={limit + "gm"}
            title={"User Caffiene Limit"}
            icon={"fa fa-send"}
          />
          <HeaderCard
            limit={total_caff + "gm"}
            title={"You have consume"}
            icon={"fa fa-file"}
          />
          <HeaderCard
            limit={remmining_limit + "gm"}
            title={" Remining Caffiene"}
            icon={"fa fa-user"}
          />
          <HeaderCard
            limit={status}
            title={" Limit Status"}
            icon={"fa fa-user"}
          />
        </div>
        <div className="row mt-4">
          <div className="col-md-3 col-ms-12">
            <Profile item={profile} />
          </div>
          <div className="col-md-9 col-ms-12">
            <div className="row">
              <div className="col-md-12">
                <Wishlist item={wish} total={total_caff} />
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
