import "../component/dashboard/Dashboard.css";
import Profile from "../component/dashboard/Profile";
import SingleProduct from "../component/dashboard/SingleProduct";
import Wishlist from "../component/dashboard/wishlist";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 col-ms-12">
            <Profile />
          </div>
          <div className="col-md-9 col-ms-12">
            <Wishlist />
            <SingleProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
