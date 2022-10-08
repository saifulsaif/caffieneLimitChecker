import React from "react";

const FloorList = (props) => {
 
  return (
    <li>
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-8">
              <div class="numbers">
                <p class="text-sm text-capitalize font-weight-bold">
                  {props.floors.name}
                </p>
                <h5 class="font-weight-bolder">
                  <div class="progress w-75">
                    <div
                      className={`progress-bar bg-dark w-${props.floors.percentage}`}
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </h5>
              </div>
            </div>
            <div class="col-4 text-end">
              <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md floor-text">
                {props.floors.number}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FloorList;
