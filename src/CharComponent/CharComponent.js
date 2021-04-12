import React from "react";
import "./CharComponent.css";

const charComponent = (props) => {
  return (
    <button
      className="CharComponent"
      value={props.charText}
      onClick={props.click}
    >
      {props.charText}
    </button>
  );
};

export default charComponent;
