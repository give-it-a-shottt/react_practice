import _React, { useState } from "react";
import Calc from "./Calc";

const App = () => {
  const [x, _setX] = useState<number>(400);
  const [y, _setY] = useState<number>(150);
  const [oper, _setOper] = useState<string>("$");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App;
