import { useState } from "react";

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
    type: "one",
    simulatedValue: "",
  });

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
            phone: value,
          };
        });
        break;
      case "footage":
        setForm((previous) => {
          return {
            ...previous,
            footage: displayOnlyNumbers(value),
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
          };
        });
        break;
      case "cleaning":
        setForm((previous) => {
          return {
            ...previous,
            cleaning: value,
          };
        });
        break;
      case "type":
        setForm((previous) => {
          return {
            ...previous,
            type: value,
          };
        });
        break;
      case "simulatedValue":
        setForm((previous) => {
          return {
            ...previous,
            simulatedValue: value,
          };
        });
        break;
      default:
        break;
    }
  };

  const simulate = () => {
    const squareFeetPrice = 0.09;
    let price = Number(form.footage) * squareFeetPrice;
    if (form.cleaning === "deep") {
      price *= 2;
    } else if (form.cleaning === "move") {
      price *= 3;
    }
    price = price + Number(form.pets) * 10;
    if (form.cleaningType === "biweekly") {
      price *= 0.9;
    } else if (form.cleaningType === "weekly") {
      price *= 0.8;
    }
    setForm((previous) => {
      return {
        ...previous,
        simulatedValue: price.toFixed(2).toString(),
      };
    });
  };

  return {
    form,
    handlerForm,
    simulate,
  };
};

export default useCalculator;
