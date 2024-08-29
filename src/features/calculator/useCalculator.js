import { useState } from "react";

const updateSimulationValue = (formValues) => {
  const squareFeetPrice = 0.11;
  let price = Number(formValues.footage) * squareFeetPrice;
  if (formValues.cleaning === "deep") {
    price *= 2;
  } else if (formValues.cleaning === "move") {
    price *= 3;
  }
  price = price + Number(formValues.pets) * 10;
  if (formValues.type === "biweekly") {
    price *= 0.9;
  } else if (formValues.type === "weekly") {
    price *= 0.8;
  }
  return price.toFixed(2).toString();
};

const useCalculator = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    footage: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    cleaning: "standard",
    type: "one time/monthly",
    simulatedValue: "",
  });

  const [isSimulationFinished, setIsSimulationFinished] = useState(false);

  const displayOnlyNumbers = (value) => {
    const formatedValue = value.replace(/[^0-9]+/g, "");
    return formatedValue;
  };

  const handlerForm = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setForm((previous) => {
          return {
            ...previous,
            name: value,
          };
        });
        break;
      case "address":
        setForm((previous) => {
          return {
            ...previous,
            address: value,
          };
        });
        break;
      case "phone":
        setForm((previous) => {
          return {
            ...previous,
            phone: displayOnlyNumbers(value),
          };
        });
        break;
      case "footage":
        if (!value) {
          setIsSimulationFinished(false);
        }
        setForm((previous) => {
          return {
            ...previous,
            footage: displayOnlyNumbers(value),
            simulatedValue: updateSimulationValue({
              ...previous,
              footage: displayOnlyNumbers(value),
            }),
          };
        });
        break;
      case "bedrooms":
        setForm((previous) => {
          return {
            ...previous,
            bedrooms: displayOnlyNumbers(value),
          };
        });
        break;
      case "bathrooms":
        setForm((previous) => {
          return {
            ...previous,
            bathrooms: displayOnlyNumbers(value),
          };
        });
        break;
      case "pets":
        setForm((previous) => {
          return {
            ...previous,
            pets: displayOnlyNumbers(value),
            simulatedValue: updateSimulationValue({
              ...previous,
              pets: displayOnlyNumbers(value),
            }),
          };
        });
        break;
      case "cleaning":
        setForm((previous) => {
          return {
            ...previous,
            cleaning: value,
            simulatedValue: updateSimulationValue({
              ...previous,
              cleaning: value,
            }),
          };
        });
        break;
      case "type":
        setForm((previous) => {
          return {
            ...previous,
            type: value,
            simulatedValue: updateSimulationValue({
              ...previous,
              type: value,
            }),
          };
        });
        break;
      default:
        break;
    }
  };

  return {
    form,
    handlerForm,
    isSimulationFinished,
    setIsSimulationFinished,
  };
};

export default useCalculator;
