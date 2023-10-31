import React from "react";

const UIInputSubmit = ({ callback }) => {
  return (
    <div>
      <input
        onClick={callback}
        type={"submit"}
        name={"Submit"}
        value={"Submit"}
      />
    </div>
  );
};

export default UIInputSubmit;
