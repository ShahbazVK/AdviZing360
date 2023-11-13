import React from "react";

const UIInputImage = ({ name, value, setValue }) => {
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setValue((prev) => ({ ...prev, [name]: reader.result }));
    };
  };
  return <input name={name} type="file" onChange={handleImageChange} />;
};

export default UIInputImage;
