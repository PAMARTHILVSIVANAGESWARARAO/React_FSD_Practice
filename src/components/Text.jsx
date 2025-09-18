import React, { useState } from "react";
import "./Text.css";

function Text() {
  const data = ["siva", "nagu", "raju", "sai",'wanda','tony stark','iron man','bat man','wonder women','monica','professor','jhon wick'];
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = (count + 1) % data.length;
    setCount(newCount);
  };

  return (
    <>
      <h1>Hello <span className="highlight">{data[count]}</span></h1>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default Text;
