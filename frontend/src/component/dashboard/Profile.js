const Profile = (props) => {
  return (
    <div className="card card-profile mt-md-0 mt-5">
      <a href="javascript:;">
        <div className="">
          <img class="w-100 border-radius-md" src={props.item.profile} />
        </div>
      </a>
      <div class="card-body blur justify-content-center text-center mx-4 mb-4 border-radius-md">
        <h4 class="mb-0">{props.item.name}</h4>
        <p>{props.item.email}</p>
        <p>{props.item.address}</p>
        <div class="row justify-content-center text-center">
          <div class="col-12 mx-auto">
            <h5 class="text-info mb-0">{props.item.c_limit}</h5>
            <small>Kilogram Limit</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
