import React from "react";

const UIInput = ({ type, placeholder, name, value, setVar }) => {
  return (
    <div>
      <label htmlFor={name} />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) =>
          setVar((prev) => ({
            ...prev,
            [e.target.name]:
              type === "number" ? parseInt(e.target.value) : e.target.value,
          }))
        }
      />
    </div>
  );
};

export default UIInput;
