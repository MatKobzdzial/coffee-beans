import { useEffect } from "react";
import coffeeImg from "../coffee-img.jpeg";

function CoffeeButton(props: {
  pS: number;
  coffee: number;
  setCoffee: (a: number) => void;
}) {
  const divStyle =
    "outline outline-2 outline-pink-500 flex-auto w-96 grid justify-center";
  const buttonStyle = "outline outine-3 cursor-pointer w-96 h-96";

  function handleClick() {
    props.setCoffee(props.coffee + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      props.setCoffee(props.coffee + props.pS);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={divStyle}>
      <div>
        <h1 className="text-2xl text-center">Coffee: {props.coffee}</h1>
        <h1 className="text-2xl text-center">pS: {props.pS}</h1>
      </div>
      <div>
        <button className={buttonStyle} onClick={handleClick}>
          <img src={coffeeImg} alt="coffee" />
        </button>
      </div>
    </div>
  );
}

export default CoffeeButton;
