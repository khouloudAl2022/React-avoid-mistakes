import { useState } from "react";

const UsestateAsyncIssue = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const incAsync = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1); // u should use prev to avoiding closure issue to update the state base on the previous state's value
    }, 2000);
  };
  return (
    <div>
      <button onClick={inc}>inc</button>
      <span> {count} </span>
      <button onClick={incAsync}>incAsync</button>
    </div>
  );
};

export default UsestateAsyncIssue;

