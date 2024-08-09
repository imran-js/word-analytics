import React, { useState } from "react";

function TextArea() {
  const [value, setValue] = useState("");

  const OnChangeHandler = (e) => setValue(e.target.value);

  return (
    <textarea
      value={value}
      placeholder="Enter Your Text"
      onChange={OnChangeHandler}
      className="textarea"
      name="text-area"
      id="text-area"
    />
  );
}

export default TextArea;
