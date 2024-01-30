import useCalculator from "./useCalculator";

export const Calculator = () => {
    const {
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
    } = useCalculator();
    return (
      <form action="https://formbold.com/s/91EbB" method="POST">
        <div className="fieldGroup">
          <label htmlFor="footage">Phone</label>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="fieldGroup">
          <label htmlFor="footage">Square Footage</label>
          <input
            id="footage"
            name="footage"
            inputMode="numeric"
            value={squareFootage}
            onChange={(e) => handlerSquareFootage(e.target.value)}
          />
        </div>
        <div className="fieldGroup">
          <label htmlFor="pets">Pets</label>
          <input
            id="pets"
            name="pets"
            inputMode="numeric"
            value={pets}
            onChange={(e) => handlerPets(e.target.value)}
          />
        </div>
        <fieldset className="fieldGroup">
          <legend>Cleaning</legend>
          <div>
            <input
              type="radio"
              id="standard"
              name="cleaning"
              value="standard"
              checked={cleaning === "standard"}
              onChange={(e) => setCleaning(e.target.value)}
            />
            <label htmlFor="standard">Standard</label>
          </div>
          <div>
            <input
              type="radio"
              id="deep"
              name="cleaning"
              value="deep"
              checked={cleaning === "deep"}
              onChange={(e) => setCleaning(e.target.value)}
            />
            <label htmlFor="deep">Deep clean</label>
          </div>
          <div>
            <input
              type="radio"
              id="move"
              name="cleaning"
              value="move"
              checked={cleaning === "move"}
              onChange={(e) => setCleaning(e.target.value)}
            />
            <label htmlFor="move">Move in/Move out</label>
          </div>
        </fieldset>
        <fieldset className="fieldGroup">
          <legend>Type of cleaning</legend>
          <div>
            <input
              type="radio"
              id="one"
              name="type"
              value="one"
              checked={cleaningType === "one"}
              onChange={(e) => setCleaningType(e.target.value)}
            />
            <label htmlFor="one">One time</label>
          </div>
          <div>
            <input
              type="radio"
              id="weekly"
              name="type"
              value="weekly"
              checked={cleaningType === "weekly"}
              onChange={(e) => setCleaningType(e.target.value)}
            />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div>
            <input
              type="radio"
              id="biweekly"
              name="type"
              value="biweekly"
              checked={cleaningType === "biweekly"}
              onChange={(e) => setCleaningType(e.target.value)}
            />
            <label htmlFor="biweekly">Biweekly</label>
          </div>
          <div>
            <input
              type="radio"
              id="monthly"
              name="type"
              value="monthly"
              checked={cleaningType === "monthly"}
              onChange={(e) => setCleaningType(e.target.value)}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
        </fieldset>
        <div className="fieldGroup">
          <input
            className="submitButton"
            disabled={!squareFootage}
            type="button"
            value="Simulate"
            onClick={() => simulate()}
          />
        </div>
        {simulatedValue && (
          <div>
            <p>$ {simulatedValue}</p>
            <input name="simulated value" hidden value={simulatedValue} />
            <button className="submitButton" type="submit" formtarget="_blank">
              Book Cleaning
            </button>
          </div>
        )}
      </form>
    );
};