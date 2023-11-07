import React, { useEffect, useState } from "react";
import UITextarea from "../../UI/UITextarea";

const Subject = ({ setValue }) => {
  const [subject, setsubject] = useState("");
  useEffect(() => {
    setValue((prev) => ({ ...prev, subject }));
  }, [subject]);

  return (
    <div>
      <UITextarea value={subject} setValue={setsubject} />
    </div>
  );
};

export default Subject;
