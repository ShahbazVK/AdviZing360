import React from "react";

const UITextarea = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <textarea
      onChange={handleChange}
      value={value}
      cols="30"
      rows="10"
    ></textarea>
  );
};

export default UITextarea;
