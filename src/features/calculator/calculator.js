import useCalculator from "./useCalculator";

export const Calculator = () => {
    const { form, handlerForm, simulate } = useCalculator();
    return (
      <form action="https://formbold.com/s/9R8pM" method="POST">
        <fieldset className="fieldGroup">
          <legend>Contact</legend>
          <div className="fieldGroup">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(event) => handlerForm(event)}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={(event) => handlerForm(event)}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="footage">Phone</label>
            <input
              id="phone"
              name="phone"
              inputMode="tel"
              type="tel"
              value={form.phone}
              onChange={(event) => handlerForm(event)}
            />
          </div>
        </fieldset>
        <fieldset className="fieldGroup">
          <legend>Your home</legend>
          <div className="fieldGroup">
            <label htmlFor="footage">Square Footage</label>
            <input
              id="footage"
              name="footage"
              inputMode="numeric"
              value={form.footage}
              maxLength={5}
              onChange={(event) => handlerForm(event)}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              id="bedrooms"
              name="bedrooms"
              inputMode="numeric"
              value={form.bedrooms}
              maxLength={1}
              onChange={(event) => handlerForm(event)}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              id="bathrooms"
              name="bathrooms"
              inputMode="numeric"
              value={form.bathrooms}
              maxLength={1}
              onChange={(event) => handlerForm(event)}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="pets">Pets</label>
            <input
              id="pets"
              name="pets"
              inputMode="numeric"
              value={form.pets}
              maxLength={1}
              onChange={(event) => handlerForm(event)}
            />
          </div>
        </fieldset>
        <fieldset className="fieldGroup">
          <legend>Cleaning</legend>
          <div>
            <input
              type="radio"
              id="standard"
              name="cleaning"
              value="standard"
              checked={form.cleaning === "standard"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="standard">Standard</label>
          </div>
          <div>
            <input
              type="radio"
              id="deep"
              name="cleaning"
              value="deep"
              checked={form.cleaning === "deep"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="deep">Deep clean</label>
          </div>
          <div>
            <input
              type="radio"
              id="move"
              name="cleaning"
              value="move"
              checked={form.cleaning === "move"}
              onChange={(event) => handlerForm(event)}
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
              checked={form.type === "one"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="one">One time</label>
          </div>
          <div>
            <input
              type="radio"
              id="weekly"
              name="type"
              value="weekly"
              checked={form.type === "weekly"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div>
            <input
              type="radio"
              id="biweekly"
              name="type"
              value="biweekly"
              checked={form.type === "biweekly"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="biweekly">Biweekly</label>
          </div>
          <div>
            <input
              type="radio"
              id="monthly"
              name="type"
              value="monthly"
              checked={form.type === "monthly"}
              onChange={(event) => handlerForm(event)}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
        </fieldset>
        <div className="fieldGroup">
          <input
            className="submitButton"
            disabled={!form.footage}
            type="button"
            value="Simulate"
            onClick={() => simulate()}
          />
        </div>
        {form.simulatedValue && (
          <div>
            <p>$ {form.simulatedValue}</p>
            <input name="simulated value" hidden value={form.simulatedValue} />
            <button className="submitButton" type="submit" formtarget="_blank">
              Schedule a visit
            </button>
          </div>
        )}
      </form>
    );
};