import React, { useCallback, useState } from "react";

export default function B1() {
  const [count, setCount] = useState<number>(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      B1
      <h4>Count: {count}</h4>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
