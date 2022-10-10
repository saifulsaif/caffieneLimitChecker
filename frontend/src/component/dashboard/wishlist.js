import React, { useState, useEffect } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const Wishlist = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    axios.get(api_url + "/wish_list").then((res) => {
      setWish(res.data.data);
    });
  }, []);

  var total_caff = 0;
  wish.map((wish) => {
    total_caff += wish.qty * wish.caffiene;
  });

  return (
    <div className="card wish-card mt-md-0 mt-5">
      <h5>Favorite Caffienes</h5>
      <hr></hr>
      <table responsive>
        <tbody>
          {wish.map((wish) => (
            <tr>
              <td>
                <img class="card-img-top" src={wish.image} />
              </td>
              <td>{wish.name}</td>
              <td>{wish.caffiene}gm</td>
              <td>{wish.qty}</td>
              <td>
                <b>{wish.caffiene * wish.qty}gm</b>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={5}>
              <hr style={{ margin: 0 + "px" }}></hr>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>Total Consume</td>
            <td>
              <b>{total_caff}gm</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
