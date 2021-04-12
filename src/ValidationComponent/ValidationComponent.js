import React from "react";

const validationComponent = (props) => {
  let feedback = "";
  let color = "";

  if (props.length < 50) {
    feedback = "Text too Short!";
    color = "red";
  } else if (props.length >= 50 && props.length <= 100) {
    feedback = "Text OK!";
    color = "blue";
  } else {
    feedback = "Text too Long!";
    color = "red";
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    padding: "8px",
    fontWeight: "bold",
    color: color,
  };

  return <p style={style}>Hummm: {feedback}</p>;
};

export default validationComponent;
