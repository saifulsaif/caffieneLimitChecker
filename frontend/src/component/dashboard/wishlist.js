const Wishlist = (props) => {
  return (
    <div className="card wish-card mt-md-0 mt-5">
      <h5>Favorite Caffienes</h5>
      <hr></hr>
      <table responsive>
        <tbody>
          <tr>
            <td>
              <img class="card-img-top" src="../assets/img/black-coffee.jpeg" />
            </td>
            <td>Balck coffee 0001</td>
            <td>
              <b>50gm</b>
            </td>
            <td>
              <input className="form-control" type="number" value={4} />
            </td>
            <td>
              <span>5</span>
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
            <td colSpan={5}>
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
  );
};

export default Wishlist;
