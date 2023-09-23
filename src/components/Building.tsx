import { useState, useEffect } from "react";

interface BuildingProps {
  coffee: number;
  setCoffee: (a: number) => void;
  name: string;
  img: string;
  upgPrice: number;
  upgCount: number;
  setUpgCount: (count: number) => void;
}

function Building({
  coffee,
  setCoffee,
  name,
  img,
  upgPrice,
  upgCount,
  setUpgCount,
}: BuildingProps) {
  const [canAfford, setCanAfford] = useState(false);

  function handleClick(): any {
    if (coffee - upgPrice >= 0) {
      setUpgCount(upgCount + 1);
      setCoffee(coffee - upgPrice);
    }
  }

  useEffect(() => {
    setCanAfford(coffee >= upgPrice);
  }, [coffee, upgPrice]);

  return (
    <div
      className={`outline outline-3 outline-gray-400 flex gap-x-2 cursor-pointer items-center min-h-max rounded ${
        canAfford || "bg-gray-200"
      }`}
      onClick={() => {
        handleClick();
      }}
    >
      <div className="w-32 bg-orange-300 flex-auto">
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col flex-auto w-64">
        <div>{name}</div>
        <div>{upgPrice}$</div>
      </div>
      <div className="flex-auto w-24 outline outline-3 mr-2 rounded px-0.5">
        Count: {upgCount}
      </div>
    </div>
  );
}

export default Building;
