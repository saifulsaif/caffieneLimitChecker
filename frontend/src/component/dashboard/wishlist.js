const Wishlist = (props) => {
  var total_caff = 0;
  props.wish.map((wish) => {
    total_caff += wish.qty * wish.caffiene;
  });

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card wish-card mt-md-0 mt-5">
          <h5>Favorite Caffienes</h5>
          <hr></hr>
          <table responsive>
            <tbody>
              {props.wish.map((wish) => (
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
      </div>
    </div>
  );
};

export default Wishlist;
