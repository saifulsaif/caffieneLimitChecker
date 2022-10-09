import React, { useState, useEffect } from "react";
import "../component/dashboard/Dashboard.css";
import ProductCard from "../component/dashboard/ProductCard";
import axios from "axios";
import Profile from "../component/dashboard/Profile";
import Wishlist from "../component/dashboard/wishlist";
const api_url = process.env.REACT_APP_API_URL;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [limit, setLimit] = useState(300);
  const [comlimit, setComLimit] = useState(0);

  useEffect(() => {
    axios.get(api_url + "/products").then((res) => {
      setProducts(res.data.data);
    });
    axios.get(api_url + "/user").then((res) => {
      setProfile(res.data.data);
      setLimit(res.data.data.c_limit);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="header">
          <h1>Caffiene Limit Checker</h1>
        </div>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: 15 + "%" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            15 % Coffee
          </div>
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={{ width: 30 + "%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            30% Coke
          </div>
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style={{ width: 25 + "%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="header-card">
              <div className="header-card-title">
                <p>{limit} gm</p>
                <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                  <span class="font-weight-normal text-secondary">
                    User Caffiene Limit
                  </span>
                </span>
              </div>
              <div className="header-card-icon">
                <i className="fa fa-send"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="header-card">
              <div className="header-card-title">
                <p>{comlimit} gm</p>
                <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                  <span class="font-weight-normal text-secondary">
                    You have consume
                  </span>
                </span>
              </div>
              <div className="header-card-icon">
                <i className="fa fa-file"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="header-card">
              <div className="header-card-title">
                <p>{limit} gm</p>
                <span className="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                  <span className="font-weight-normal text-secondary">
                    Remining Caffiene
                  </span>
                </span>
              </div>
              <div className="header-card-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="header-card">
              <div className="header-card-title">
                <p>Good</p>
                <span className="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                  <span className="font-weight-normal text-secondary">
                    Limit Status
                  </span>
                </span>
              </div>
              <div className="header-card-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 col-ms-12">
            <Profile item={profile} />
            <div className="card wish-card mt-md-0 mt-5">
              <h5>Favorite Caffienes</h5>
              <hr></hr>
              <table responsive>
                <tbody>
                  <tr>
                    <td>
                      <img
                        class="card-img-top"
                        src="../assets/img/black-coffee.jpeg"
                      />
                    </td>
                    <td>Balck coffee 0001</td>
                    <td>
                      <b>50gm</b>
                    </td>
                    <td>
                      <a href="#">
                        {" "}
                        <i className="fa fa-times text-red"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        class="card-img-top"
                        src="../assets/img//black-coffee-1.jpg"
                      />
                    </td>
                    <td>Balck coffee 0001</td>
                    <td>
                      <td>
                        <b>50gm</b>
                      </td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img class="card-img-top" src="../assets/img/nos.jpeg" />
                    </td>
                    <td>Balck coffee 0001</td>
                    <td>
                      <b>50gm</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <hr style={{ margin: 0 + "px" }}></hr>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Total Consume</td>
                    <td>
                      <b>150gm</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-9 col-ms-12">
            <div className="row">
              <div className="col-md-12">
                <Wishlist />
              </div>
            </div>
            <div className="row">
              {products.map((product) => (
                <ProductCard item={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
