import { useState } from "react";

const useCalculator = () => {
  const [addResult, setAddResult] = useState<number>(0);

  const addFunction = (a: number, b: number) => {
    setAddResult(a + b);
  };

  return { addFunction, addResult };
};

export default useCalculator;
