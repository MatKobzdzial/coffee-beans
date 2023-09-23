import Building from "./Building";

function BuildingList(props: {
  coffee: number;
  setCoffee: (a: number) => void;
  buildings: any;
}) {
  const styles =
    "outline outline-4 outline-amber-600 flex-none w-96 flex flex-col gap-1 p-1 bg-white";

  return (
    <div className={styles}>
      {props.buildings.map((building: any) => {
        return (
          <Building
            coffee={props.coffee}
            setCoffee={props.setCoffee}
            name={building.name}
            img={building.img}
            upgPrice={building.price}
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
