import React from "react";

const UIDayTimeInput = ({ type, name, value1, value2, setVal }) => {
  const handleChange = (e, action) => {
    setVal((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [name]: { ...prev.availability[name], [action]: e.target.value },
      },
    }));
  };
  return (
    <div>
      <label htmlFor={name}>Start Time</label>
      <input
        type={type}
        name={name}
        value={value1}
        onChange={(e) => handleChange(e, "startTime")}
        placeholder={"HH:MM:SS"}
        pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]"
      />
      <br />
      <label htmlFor={name}>End Time</label>
      <input
        type={type}
        name={name}
        value={value2}
        onChange={(e) => handleChange(e, "endTime")}
        placeholder={"HH:MM:SS"}
        pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]"
      />
    </div>
  );
};

export default UIDayTimeInput;
