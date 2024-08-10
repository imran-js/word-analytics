import React, { useState } from "react";
import Warning from "./Warning";

function TextArea({ value, setValue }) {
  const [warning, setWarning] = useState(false);

  const OnChangeHandler = (e) => {
    let word = e.target.value;

    if (word.includes("<script>")) {
      setWarning(true);
      word = word.replace("<script>", "");
    } else {
      setWarning("");
    }
    setValue(word);
  };

  return (
    <div className="textarea">
      <textarea
        value={value}
        placeholder="Enter Your Text"
        onChange={OnChangeHandler}
        name="text-area"
        id="text-area"
      />
      {warning && <Warning />}
    </div>
  );
}

export default TextArea;
