import React from "react";
import HeaderCard from "../component/dashboard/HeaderCard";

const OverviewCard = () => {
  var total_caff = 176;
  var status = "Good";
  var limit = 500;
  var remmining_limit = limit - total_caff;

  // if (process >= 60 && process < 80) {
  //   process_color = "progress-bar bg-warning";
  //   status = "Over";
  // } else if (process >= 80) {
  //   process_color = "progress-bar bg-danger";
  //   status = "Risky";
  // }

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
