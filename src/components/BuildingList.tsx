import Building from "./Building";
import { useState } from "react";
import baristaImg from "../barista-img.jpg";
import cashierImg from "../cashier-img.avif";
import supervisorImg from "../supervisor-img.avif";
import studentImg from "../student-img.avif";
import assistantManagerImg from "../assistant-manager-img.avif";

function BuildingList(props: {
  handlePS: any;
  coffee: number;
  setCoffee: (a: number) => void;
}) {
  const styles = "outline outline-2 outline-cyan-500 flex-none w-96 px-2";

  //States for buildings
  const [upg1Price, setUpg1Price] = useState(15);
  const [upg2Price, setUpg2Price] = useState(100);
  const [upg3Price, setUpg3Price] = useState(800);
  const [upg4Price, setUpg4Price] = useState(3000);
  const [upg5Price, setUpg5Price] = useState(12000);

  const [upg1Count, setUpg1Count] = useState(0);
  const [upg2Count, setUpg2Count] = useState(0);
  const [upg3Count, setUpg3Count] = useState(0);
  const [upg4Count, setUpg4Count] = useState(0);
  const [upg5Count, setUpg5Count] = useState(0);

  const buildings = [
    {
      name: "Student Helper",
      img: studentImg,
      pS: 1,
      price: upg1Price,
      count: upg1Count,
      setPrice: setUpg1Price,
      setCount: setUpg1Count,
    },
    {
      name: "Cashier",
      img: cashierImg,
      pS: 3,
      price: upg2Price,
      count: upg2Count,
      setPrice: setUpg2Price,
      setCount: setUpg2Count,
    },
    {
      name: "Barista",
      img: baristaImg,
      pS: 8,
      price: upg3Price,
      count: upg3Count,
      setPrice: setUpg3Price,
      setCount: setUpg3Count,
    },
    {
      name: "Shift Supervisor",
      img: supervisorImg,
      pS: 12,
      price: upg4Price,
      count: upg4Count,
      setPrice: setUpg4Price,
      setCount: setUpg4Count,
    },
    {
      name: "Assistant Manager",
      img: assistantManagerImg,
      pS: 21,
      price: upg5Price,
      count: upg5Count,
      setPrice: setUpg5Price,
      setCount: setUpg5Count,
    },
  ];

  return (
    <div className={styles}>
      {buildings.map((building) => {
        return (
          <Building
            handlePS={props.handlePS}
            coffee={props.coffee}
            setCoffee={props.setCoffee}
            name={building.name}
            img={building.img}
            pS={building.pS}
            upgPrice={building.price}
            setUpgPrice={building.setPrice}
            upgCount={building.count}
            setUpgCount={building.setCount}
            key={building.name}
          />
        );
      })}
    </div>
  );
}

export default BuildingList;
