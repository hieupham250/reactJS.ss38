import React, { useMemo, useState } from "react";

export default function B4() {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const newRandomNumber = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, [randomNumber]);
  const handleGenerate = () => {
    setRandomNumber(newRandomNumber);
  };
  return (
    <div>
      B4
      <h5>Number random: {randomNumber}</h5>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}
