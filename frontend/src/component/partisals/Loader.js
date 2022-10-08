import React from "react";

const Loader = (props) => {
  return (
    <div>
      <span>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        {props.title}
      </span>
    </div>
  );
};

export default Loader;
