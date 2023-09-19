import { useState, useEffect } from "react";

interface BuildingProps {
  handlePS: any;
  coffee: number;
  setCoffee: (a: number) => void;
  name: string;
  img: string;
  pS: number;
  upgPrice: number;
  setUpgPrice: (price: number) => void;
  upgCount: number;
  setUpgCount: (count: number) => void;
}

function Building({
  handlePS,
  coffee,
  setCoffee,
  name,
  img,
  pS,
  upgPrice,
  setUpgPrice,
  upgCount,
  setUpgCount,
}: BuildingProps) {
  const [canAfford, setCanAfford] = useState(false);

  function handleClick(inc: number): any {
    if (coffee - upgPrice >= 0) {
      setUpgPrice(Math.round(upgPrice * 1.05 ** (upgCount + 1)));
      setUpgCount(upgCount + 1);
      setCoffee(coffee - upgPrice);
      handlePS(inc);
    }
  }

  useEffect(() => {
    setCanAfford(coffee >= upgPrice);
  }, [coffee, upgPrice]);

  return (
    <div
      className={`outline outline-3 outline-orange-500 flex cursor-pointer items-center gap-4 min-h-max ${
        canAfford || "bg-red-200 mb-1"
      }`}
      onClick={() => {
        handleClick(pS);
      }}
    >
      <div className="w-32 bg-orange-300 flex-auto">
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col flex-auto w-64">
        <div>{name}</div>
        <div>{upgPrice}$</div>
      </div>
      <div className="flex-auto w-32 outline outline-3">Count: {upgCount}</div>
    </div>
  );
}

export default Building;
