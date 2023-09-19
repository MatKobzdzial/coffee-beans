import { useState } from "react";
import BuildingList from "./components/BuildingList";
import CoffeeButton from "./components/CoffeeButton";
import UpgradeList from "./components/UpgradeList";

function App() {
  const [pS, setPS] = useState(0);
  const [coffee, setCoffee] = useState(0);

  function handlePS(pSToAdd: number): void {
    setPS(pS + pSToAdd);
  }

  function handleReset() {
    setPS(0);
    setCoffee(0);
  }

  return (
    <div className="h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl">Coffee Beans</h1>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="flex h-5/6">
        <CoffeeButton pS={pS} coffee={coffee} setCoffee={setCoffee} />
        <UpgradeList />
        <BuildingList
          handlePS={handlePS}
          coffee={coffee}
          setCoffee={setCoffee}
        />
      </div>
    </div>
  );
}

export default App;
