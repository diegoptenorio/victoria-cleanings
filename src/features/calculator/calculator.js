import useCalculator from "./useCalculator";

export const Calculator = ({ innerRef }) => {
  const { form, handlerForm, isSimulationFinished, setIsSimulationFinished } =
    useCalculator();
  const validatedForm =
    form.name &&
    form.address &&
    form.phone &&
    form.footage;
  return (
    <div className="cardContainer">
      <h1 ref={innerRef}>Get a quote</h1>
      <section className="card">
        <form action="https://formbold.com/s/9R8pM" method="POST">
          <fieldset className="fieldGroup">
            <div className="cardColumn">
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
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handlerForm(event)}
                />
              </div>
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
          </fieldset>
          <fieldset className="fieldGroup">
            <div className="cardColumn">
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
            </div>
            <div className="cardColumn">
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
            </div>
          </fieldset>
          <fieldset className="fieldGroup">
            <div className="cardColumn">
              <div className="cleaningType">
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
              </div>
              <div>
                <div>
                  <input
                    type="radio"
                    id="one"
                    name="type"
                    value="one time/monthly"
                    checked={form.type === "one time/monthly"}
                    onChange={(event) => handlerForm(event)}
                  />
                  <label htmlFor="one">One time/monthly</label>
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
              </div>
            </div>
          </fieldset>
          <div className="fieldGroup">
            <input
              className="simulateButton"
              disabled={!validatedForm}
              value="Simulate quote"
              onClick={() => setIsSimulationFinished(true)}
              type="submit"
              formTarget="_blank"
            />
          </div>
          {isSimulationFinished && (
            <div>
              <br />
              <p>Estimated value: ${form.simulatedValue}</p>
              <input
                name="simulated value"
                hidden
                readOnly
                value={form.simulatedValue}
              />
              <button
                className="simulateButton"
                type="submit"
                formTarget="_blank"
              >
                Schedule a visit
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};