import React, { useState, useEffect } from "react";
import "../component/dashboard/Dashboard.css";
import Profile from "../component/dashboard/Profile";
import SingleProduct from "../component/dashboard/SingleProduct";
import Wishlist from "../component/dashboard/wishlist";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const Home = (props) => {
  const [wish, setWish] = useState([]);

  var consume = 0;
  wish.map((product) => {
    consume += product.caffiene * product.qty;
  });

  const getData = (data) => {
    fetch_data();
    props.consume(consume + data);
  };

  useEffect(() => {
    props.consume(consume);
    fetch_data();
  }, []);

  function fetch_data() {
    axios.get(api_url + "/wish_list").then((res) => {
      setWish(res.data.data);
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 col-ms-12">
            <Profile />
          </div>
          <div className="col-md-9 col-ms-12">
            <Wishlist wish={wish} />
            <SingleProduct consume={consume} limit={500} Submit={getData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
