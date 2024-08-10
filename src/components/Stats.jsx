import React from "react";

function Stats({ WordCount, CharCount, InstagramCount, FacebookCount }) {
  return (
    <section className="stats">
      <Stat label="Words" count={WordCount} />
      <Stat label="Characters" count={CharCount} />
      <Stat label="Instagram" count={InstagramCount} />
      <Stat label="Facebook" count={FacebookCount} />
    </section>
  );
}

function Stat({ label, count }) {
  return (
    <section className="stat">
      <span
        className={`"stat__number" ${count < 0 ? "stat__number--limit" : ""}`}
      >
        {count}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
