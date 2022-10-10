import React from "react";

const Header = (props) => {
  var process_color = "progress-bar bg-warning";
  var limit = 500;
  var process = (100 / limit) * props.caffiene;

  if (process >= 60 && process < 80) {
    process_color = "progress-bar bg-warning";
  } else if (process >= 80) {
    process_color = "progress-bar bg-danger";
  }

  return (
    <div className="row">
      <div className="header">
        <h1>Caffiene Limit Checker</h1>
      </div>
      <div class="progress">
        <div
          class={process_color}
          role="progressbar"
          style={{ width: process + "%" }}
          aria-valuenow={process}
          aria-valuemin="0"
          aria-valuemax={limit}
        >
          Caffiene {process} %
        </div>
      </div>
    </div>
  );
};

export default Header;
