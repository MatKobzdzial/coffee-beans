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
    <div className="outline outline-4 outline-amber-600 flex-none w-fit p-3 bg-white flex flex-col gap-4">
      <div className="min-h-max flex flex-col gap-4">
        <div className="p-1 outline outline-2 outline-amber-800 bg-amber-100">
          <h3 className="uppercase font-semibold">Upgrades Available</h3>
        </div>
        {upgradesAvailable.length === 0 ? (
          <div>
            <p className="opacity-50">No upgrades currently available</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4 grid-flow-row">
            {upgradesAvailable.map((upgrade: any) => {
              return (
                <Upgrade
                  upgrade={upgrade}
                  addUpgrade={addUpgrade}
                  removeUpgrade={removeUpgrade}
                  img={upgrade.img}
                  key={upgrade.id}
                  upgradeInfo={upgrade.upgradeInfo}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="min-h-max flex flex-col gap-4">
        <div className="p-1 outline outline-2 outline-amber-800 bg-amber-100">
          <h3 className="uppercase font-semibold">Upgrades Owned</h3>
        </div>
        <div className="grid grid-cols-5 gap-4 grid-flow-row">
          {upgradesOwned.map((upgrade: any) => {
            return (
              <Upgrade
                upgrade={upgrade}
                img={upgrade.src}
                key={upgrade.id}
                upgradeInfo={upgrade.upgradeInfo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UpgradeList;
