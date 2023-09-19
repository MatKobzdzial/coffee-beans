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
  function manageClick(event: any) {
    if (addUpgrade && removeUpgrade) {
      addUpgrade(event.target);
      removeUpgrade(event.target);
    }
    console.log(upgrade.src);
  }

  return (
    <div className={`w-16 h-16 outline outline-4`} onClick={manageClick}>
      <img src={img} alt="upgrade" id={upgrade.id} />
    </div>
  );
}
export default Upgrade;
