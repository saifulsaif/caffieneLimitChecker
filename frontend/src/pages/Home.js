import React from "react";
import "../component/dashboard/Dashboard.css";
import ProductCard from "../component/dashboard/ProductCard";

const Home = () => (
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
              <p>5000 gm</p>
              <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                +12%{" "}
                <span class="font-weight-normal text-secondary">
                  since last month
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
              <p>5000 gm</p>
              <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                +12%{" "}
                <span class="font-weight-normal text-secondary">
                  since last month
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
              <p>5000 gm</p>
              <span className="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                <span className="font-weight-bold"> +12% </span>
                <span className="font-weight-normal text-secondary">
                  since last month
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
              <p>5000 gm</p>
              <span className="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
                <span className="font-weight-bold"> +12% </span>
                <span className="font-weight-normal text-secondary">
                  since last month
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
          <div className="card card-profile mt-md-0 mt-5">
            <a href="javascript:;">
              <div className="">
                <img
                  class="w-100 border-radius-md"
                  src="../assets/img/team-5.jpg"
                />
              </div>
            </a>
            <div class="card-body blur justify-content-center text-center mx-4 mb-4 border-radius-md">
              <h4 class="mb-0">Bruce Mars</h4>
              <p>Atlanta, U.S.</p>
              <div class="row justify-content-center text-center">
                <div class="col-12 mx-auto">
                  <h5 class="text-info mb-0">750</h5>
                  <small>Projects</small>
                </div>
              </div>
            </div>
          </div>
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
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
