import Upgrade from "./Upgrade";

/**
 * UNRESOLVED BUG
 *
 * rendering images directly from upgradesOwned does not yield actual images
 * */

function UpgradeList({
  upgradesAvailable,
  setUpgradesAvailable,
  upgradesOwned,
  setUpgradesOwned,
}: {
  upgradesAvailable: any;
  setUpgradesAvailable: (upgrade: any) => void;
  upgradesOwned: any;
  setUpgradesOwned: (array: any) => void;
}) {
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
    <div className="outline outine-3 outline-amber-600 flex-none w-fit p-2 bg-white">
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
