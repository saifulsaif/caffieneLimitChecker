import React, { useState, useEffect } from "react";
import axios from "axios";
const api_url = process.env.REACT_APP_API_URL;

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get(api_url + "/user").then((res) => {
      setProfile(res.data.data);
    });
  }, []);

  return (
    <div className="card card-profile mt-md-0 mt-5">
      <a href="javascript:;">
        <div className="">
          <img class="w-100 border-radius-md" src={profile.profile} />
        </div>
      </a>
      <div class="card-body blur justify-content-center text-center mx-4 mb-4 border-radius-md">
        <h4 class="mb-0">{profile.name}</h4>
        <p>{profile.email}</p>
        <p>{profile.address}</p>
        <div class="row justify-content-center text-center">
          <div class="col-12 mx-auto">
            <h5 class="text-info mb-0">{profile.c_limit}</h5>
            <small>Kilogram Limit</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
