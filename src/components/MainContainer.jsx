import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

function MainContainer() {
  const [value, setValue] = useState("");

  const CharCount = value.length;
  const WordCount =
    CharCount === 0 ? 0 : value.split(/\s/).filter((w) => w !== "").length;
  const InstagramCount = 280 - CharCount;
  const FacebookCount = 2200 - CharCount;

  return (
    <main className="container">
      <TextArea setValue={setValue} value={value} />
      <Stats
        InstagramCount={InstagramCount}
        FacebookCount={FacebookCount}
        WordCount={WordCount}
        CharCount={CharCount}
      />
    </main>
  );
}

export default MainContainer;
