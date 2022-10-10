import React from "react";

const Header = (props) => {
  var process = 76;
  var process_color = "progress-bar bg-warning";
  var limit = 500;
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
