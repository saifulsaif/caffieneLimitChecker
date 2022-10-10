const Wishlist = (props) => {
  var total_cal = props.total;

  return (
    <div className="card wish-card mt-md-0 mt-5">
      <h5>Favorite Caffienes</h5>
      <hr></hr>
      <table responsive>
        <tbody>
          {props.item.map((wish) => (
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
              <b>{total_cal}gm</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
