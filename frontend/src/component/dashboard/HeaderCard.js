import React from "react";

/* 
This component generate the header 4 card with dynamic infomations
get a props and return full card
*/

const HeaderCard = (props) => {
  return (
    <div className="col-md-3">
      <div className="header-card">
        <div className="header-card-title">
          <p>{props.limit}</p>
          <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">
            <span class="font-weight-normal text-secondary">{props.title}</span>
          </span>
        </div>
        <div className="header-card-icon">
          <i className={props.icon}></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
