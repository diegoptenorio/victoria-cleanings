import { useState } from "react";

const useCalculator = () => {
  const [phone, setPhone] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [pets, setPets] = useState("");
  const [cleaning, setCleaning] = useState("standard");
  const [cleaningType, setCleaningType] = useState("one");
  const [simulatedValue, setSimulatedValue] = useState("");
  const handlerSquareFootage = (value) => {
    const maxLength = 5;
    if (value.length <= maxLength) {
      const formatedValue = value.replace(/[^0-9]+/g, "");
      setSquareFootage(formatedValue);
    }
  };
  const handlerPets = (value) => {
    const maxLength = 1;
    if (value.length <= maxLength) {
      const formatedValue = value.replace(/[^0-9]+/g, "");
      setPets(formatedValue);
    }
  };
  const simulate = () => {
    const squareFeetPrice = 0.09;
    let price = Number(squareFootage) * squareFeetPrice;
    if (cleaning === "deep") {
      price *= 2;
    } else if (cleaning === "move") {
      price *= 3;
    }
    price = price + Number(pets) * 10;
    if (cleaningType === "biweekly") {
      price *= 0.9;
    } else if (cleaningType === "weekly") {
      price *= 0.8;
    }
    setSimulatedValue(price.toFixed(2).toString());
  };
  
  return {
    cleaning,
    cleaningType,
    handlerPets,
    setPhone,
    handlerSquareFootage,
    pets,
    phone,
    setCleaning,
    setCleaningType,
    simulate,
    simulatedValue,
    squareFootage,
  };
}

export default useCalculator;