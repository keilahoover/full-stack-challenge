import React from "react";

const buttonStyle = {
  margin: "10px 10px 10px 0",
};

export const Button = ({ label, handleClick }) => {
  return (
    <button className="btn btn-default" style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};
