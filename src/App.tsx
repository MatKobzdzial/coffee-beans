import { useEffect, useState } from "react";
import BuildingList from "./components/BuildingList";
import CoffeeButton from "./components/CoffeeButton";
import UpgradeList from "./components/UpgradeList";

import upg1Img from "./imgs/upg-1.png";
import upg2Img from "./imgs/upg-2.jpeg";
import upg3Img from "./imgs/upg-3.jpeg";

import baristaImg from "../src/imgs/barista-img.png";
import cashierImg from "../src/imgs/cashier-img.png";
import supervisorImg from "../src/imgs/supervisor-img.avif";
import studentHelper from "../src/imgs/student-helper-img.png";
import assistantManagerImg from "../src/imgs/assistant-manager-img.avif";
import Modal from "./components/Modal";
import ChangeNameModal from "./components/ChangeNameModal";

function App() {
  const [pS, setPS] = useState(0);
  const [coffee, setCoffee] = useState(0);

  const [name, setName] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(true);

  const basePrices = [15, 100, 800, 3000, 12000];
  const basePS = [1, 3, 8, 12, 21];

  //States for buildings
  const [upg1Price, setUpg1Price] = useState(basePrices[0]);
  const [upg2Price, setUpg2Price] = useState(basePrices[1]);
  const [upg3Price, setUpg3Price] = useState(basePrices[2]);
  const [upg4Price, setUpg4Price] = useState(basePrices[3]);
  const [upg5Price, setUpg5Price] = useState(basePrices[4]);

  const [upg1PS, setUpg1PS] = useState(basePS[0]);
  const [upg2PS, setUpg2PS] = useState(basePS[1]);
  const [upg3PS, setUpg3PS] = useState(basePS[2]);
  const [upg4PS, setUpg4PS] = useState(basePS[3]);
  const [upg5PS, setUpg5PS] = useState(basePS[4]);

  const [upg1Count, setUpg1Count] = useState(1);
  const [upg2Count, setUpg2Count] = useState(2);
  const [upg3Count, setUpg3Count] = useState(3);
  const [upg4Count, setUpg4Count] = useState(4);
  const [upg5Count, setUpg5Count] = useState(5);

  const baseUpgrades = [
    {
      img: upg1Img,
      src: "./upg-1.png",
      id: 1,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 1 bought");
      },
    },
    {
      img: upg2Img,
      src: "./upg-2.jpeg",
      id: 2,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 2 bought");
      },
    },
    {
      img: upg3Img,
      src: "./upg-3.jpeg",
      id: 3,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 3 bought");
      },
    },
    {
      img: upg1Img,
      src: "./upg-1.png",
      id: 4,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 4 bought");
      },
    },
    {
      img: upg2Img,
      src: "./upg-2.jpeg",
      id: 5,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 5 bought");
      },
    },
    {
      img: upg3Img,
      src: "./upg-3.jpeg",
      id: 6,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 6 bought");
      },
    },
    {
      img: upg1Img,
      src: "./upg-1.png",
      id: 7,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 7 bought");
      },
    },
    {
      img: upg2Img,
      src: "./upg-2.jpeg",
      id: 8,
      upgradeInfo: "Students are twice as efficient",
      effect: function () {
        console.log("Upgrade 8 bought");
      },
    },
    {
      img: upg3Img,
      src: "./upg-3.jpeg",
      id: 9,
      upgradeInfo: "2x 1st tower",
      effect: setUpg1PS,
      basePS: upg1PS,
    },
    {
      img: upg3Img,
      src: "./upg-3.jpeg",
      id: 10,
      upgradeInfo: "2x 1st tower",
      effect: setUpg1PS,
      basePS: upg1PS,
    },
    {
      img: upg3Img,
      src: "./upg-3.jpeg",
      id: 11,
      upgradeInfo: "2x 1st tower",
      effect: setUpg1PS,
      basePS: upg1PS,
    },
  ];

  const [upgradesAvailable, setUpgradesAvailable]: any = useState(baseUpgrades);
  const [upgradesOwned, setUpgradesOwned]: any = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buildings = [
    {
      name: "Student Helper",
      img: studentHelper,
      basePS: basePS[0],
      pS: upg1PS,
      basePrice: basePrices[0],
      price: upg1Price,
      count: upg1Count,
      setPrice: setUpg1Price,
      setCount: setUpg1Count,
    },
    {
      name: "Cashier",
      img: cashierImg,
      basePS: basePS[1],
      pS: upg2PS,
      basePrice: basePrices[1],
      price: upg2Price,
      count: upg2Count,
      setPrice: setUpg2Price,
      setCount: setUpg2Count,
    },
    {
      name: "Barista",
      img: baristaImg,
      basePS: basePS[2],
      pS: upg3PS,
      basePrice: basePrices[2],
      price: upg3Price,
      count: upg3Count,
      setPrice: setUpg3Price,
      setCount: setUpg3Count,
    },
    {
      name: "Shift Supervisor",
      img: supervisorImg,
      basePS: basePS[3],
      pS: upg4PS,
      basePrice: basePrices[3],
      price: upg4Price,
      count: upg4Count,
      setPrice: setUpg4Price,
      setCount: setUpg4Count,
    },
    {
      name: "Assistant Manager",
      img: assistantManagerImg,
      basePS: basePS[4],
      pS: upg5PS,
      basePrice: basePrices[4],
      price: upg5Price,
      count: upg5Count,
      setPrice: setUpg5Price,
      setCount: setUpg5Count,
    },
  ];

  useEffect(
    function () {
      setPS(
        buildings[0].pS * buildings[0].count +
          +buildings[1].pS * buildings[1].count +
          +buildings[2].pS * buildings[2].count +
          +buildings[3].pS * buildings[3].count +
          buildings[4].pS * buildings[4].count
      );
    },
    [buildings]
  );

  function handleReset() {
    setPS(0);
    setCoffee(0);
    setName("");
    buildings.map(function (building, index) {
      building.setPrice(basePrices[index]);
      building.setCount(0);
      return building;
    });
    setUpgradesAvailable(baseUpgrades);
    setUpgradesOwned([]);
  }

  function changeName(event: any) {
    setName(event.target.value);
  }

  useEffect(() => {
    buildings.map(function (building) {
      building.setPrice(
        Math.round(building.basePrice * 1.15 ** building.count)
      );
      return building;
    });
  }, [buildings]);

  const [openModal, setOpenModal] = useState(false);
  const [openChangeNameModal, setOpenChangeNameModal] = useState(false);
  const [nameDup, setNameDup] = useState("");

  function handleChangeNameModal() {
    setOpenChangeNameModal(true);
    setNameDup(name);
  }

  function handleModal() {
    setOpenModal(true);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const changeNameModal = (
    <ChangeNameModal
      nameDup={nameDup}
      setNameDup={setNameDup}
      name={name}
      setName={setName}
      handleChangeNameModal={setOpenChangeNameModal}
    ></ChangeNameModal>
  );

  const modal = (
    <Modal handleReset={handleReset} handleModal={setOpenModal}></Modal>
  );

  const [title, setTitle] = useState(2);

  return (
    <div className="h-screen bg-amber-100">
      {openModal && modal}
      {openChangeNameModal && changeNameModal}
      <div className="flex justify-between mb-2 ml-2 self-center">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <h1 className="text-4xl">
            {name === "" ? "Coffee Beans Cafe" : `${name}'s Cafe`}
          </h1>
          <button
            className="outline outline-2 rounded-lg p-1 mt-1 bg-sky-100 outline-sky-700 text-sky-700 self-center"
            onClick={handleChangeNameModal}
          >
            Change Name
          </button>
        </form>
        <button
          // onClick={handleReset}
          onClick={handleModal}
          className="outline outline-2 rounded-lg px-4 py-0.5 mt-1 mr-2 bg-red-100 outline-red-700 text-red-700 self-center"
        >
          Reset
        </button>
      </div>
      <div className="flex h-5/6">
        <CoffeeButton pS={pS} coffee={coffee} setCoffee={setCoffee} />
        <UpgradeList
          upgradesAvailable={upgradesAvailable}
          setUpgradesAvailable={setUpgradesAvailable}
          upgradesOwned={upgradesOwned}
          setUpgradesOwned={setUpgradesOwned}
        />
        <BuildingList
          coffee={coffee}
          setCoffee={setCoffee}
          buildings={buildings}
        />
      </div>
    </div>
  );
}

export default App;
