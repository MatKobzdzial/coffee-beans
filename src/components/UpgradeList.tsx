import Upgrade from "./Upgrade";
import upg1Img from "../upg-1.png";
import upg2Img from "../upg-2.jpeg";
import upg3Img from "../upg-3.jpeg";
import { useState } from "react";

/**
 * UNRESOLVED BUG
 *
 * rendering images directly from upgradesOwned does not yield actual images
 * */

function UpgradeList() {
  const [upgradesAvailable, setUpgradesAvailable]: any = useState([
    { img: upg1Img, src: "../upg-1.png", id: 1 },
    { img: upg2Img, src: "../upg-2.jpeg", id: 2 },
    { img: upg3Img, src: "../upg-3.jpeg", id: 3 },
    { img: upg1Img, src: "../upg-1.png", id: 4 },
    { img: upg2Img, src: "../upg-2.jpeg", id: 5 },
    { img: upg3Img, src: "../upg-3.jpeg", id: 6 },
    { img: upg1Img, src: "../upg-1.png", id: 7 },
    { img: upg2Img, src: "../upg-2.jpeg", id: 8 },
    { img: upg3Img, src: "../upg-3.jpeg", id: 9 },
    { img: upg3Img, src: "../upg-3.jpeg", id: 10 },
  ]);
  const [upgradesOwned, setUpgradesOwned]: any = useState([]);

  function removeUpgrade(removedUpgrade: any) {
    setUpgradesAvailable(
      upgradesAvailable.filter(function (upg: any) {
        return upg.id !== +removedUpgrade.id;
      })
    );
  }

  function addUpgrade(upgrade: any) {
    setUpgradesOwned([...upgradesOwned, upgrade]);
  }

  return (
    <div className="outline outine-3 flex-none w-fit px-2">
      <div className="min-h-max">
        <h3>Upgrades Available</h3>
        <div className="grid grid-cols-5 gap-4 grid-flow-row">
          {upgradesAvailable.map((upgrade: any) => {
            return (
              <Upgrade
                upgrade={upgrade}
                addUpgrade={addUpgrade}
                removeUpgrade={removeUpgrade}
                img={upgrade.img}
                key={upgrade.id}
              />
            );
          })}
        </div>
      </div>
      <div className="min-h-max">
        <h3>Upgrades Owned</h3>
        <div className="grid grid-cols-5 gap-4 grid-flow-row">
          {upgradesOwned.map((upgrade: any) => {
            return (
              <Upgrade upgrade={upgrade} img={upgrade.src} key={upgrade.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UpgradeList;
