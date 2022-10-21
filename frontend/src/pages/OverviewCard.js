import React from "react";
import HeaderCard from "../component/dashboard/HeaderCard";

/* 
   <OverviewCard /> This component show overall overview or user activity.
   User caffiene limit, comsume limit and remaining limit also.
   User current status  Safe / Risky ETC
   used 4 card to display each informations
*/

const OverviewCard = (props) => {
  var total_caff = props.caffiene;
  var status = "Good";
  var limit = 500;
  var remmining_limit = limit - props.caffiene;
  var process = (100 / limit) * props.caffiene;

  if (process >= 60 && process < 80) {
    status = "Over";
  } else if (process >= 80) {
    status = "Risky";
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <HeaderCard
          limit={limit + "gm"}
          title={"User Caffiene Limit"}
          icon={"fa fa-send"}
        />
        <HeaderCard
          limit={total_caff + "gm"}
          title={"You have consume"}
          icon={"fa fa-file"}
        />
        <HeaderCard
          limit={remmining_limit + "gm"}
          title={" Remining Caffiene"}
          icon={"fa fa-user"}
        />
        <HeaderCard
          limit={status}
          title={" Limit Status"}
          icon={"fa fa-user"}
        />
      </div>
    </div>
  );
};

export default OverviewCard;
