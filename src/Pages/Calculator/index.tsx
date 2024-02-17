import React, { useState } from "react";
import useCalculator from "../../Hooks/useCalculator";

const Calculator = () => {
  const [testOne, setTestOne] = useState<number>(0);
  const [testTwo, setTestTwo] = useState<number>(0);

  const { addResult, addFunction } = useCalculator();

  return (
    <div>
      <input
        value={testOne}
        onChange={(e) => setTestOne(Number(e.target.value))}
      />
      <input
        value={testTwo}
        onChange={(e) => setTestTwo(Number(e.target.value))}
      />
      <div onClick={() => addFunction(testOne, testTwo)}>계산해줘</div>
      <div>{addResult}</div>
    </div>
  );
};

export default Calculator;
