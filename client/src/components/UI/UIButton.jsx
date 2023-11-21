import React from "react";

const UIButton = ({ title, onclickFunc }) => {
  return <button onClick={onclickFunc}>{title}</button>;
};

export default UIButton;
