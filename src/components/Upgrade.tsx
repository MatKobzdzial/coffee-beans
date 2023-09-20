import { useState } from "react";

function Upgrade({
  upgrade,
  img,
  addUpgrade,
  removeUpgrade,
}: {
  upgrade: { img: any; src: string; id: any };
  img: any;
  addUpgrade?: any;
  removeUpgrade?: any;
}) {
  const [hovered, isHovered] = useState(false);

  function manageClick(event: any) {
    if (addUpgrade && removeUpgrade) {
      addUpgrade(event.target);
      removeUpgrade(event.target);
    }
    console.log(upgrade.src);
  }

  function handleVis() {
    isHovered(true);
  }

  function handleInvis() {
    isHovered(false);
  }

  return (
    <div
      className={`w-16 h-16 outline outline-4 relative cursor-pointer`}
      onClick={manageClick}
      onMouseEnter={handleVis}
      onMouseLeave={handleInvis}
    >
      {hovered && (
        <div className="absolute bg-slate-800 bottom-3/4 left-3/4 z-10 rounded p-0.5">
          <p className="text-gray-100">Hovered</p>
        </div>
      )}
      <img src={img} alt="upgrade" id={upgrade.id} />
    </div>
  );
}
export default Upgrade;
