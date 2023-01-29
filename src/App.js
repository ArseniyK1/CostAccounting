import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 1, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.99,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 11),
    description: "Микроволновка",
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
