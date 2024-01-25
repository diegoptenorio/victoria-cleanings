import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  const [squareFootage, setSquareFootage] = useState('');
  const [cleaning, setCleaning] = useState("standard");
  const [cleaningType, setCleaningType] = useState("one");
  const handlerSquareFootage = (value) => {
    const formatedValue = value.replace(/[^0-9]+/g, "");
    setSquareFootage(formatedValue);
  }
  return (
    <div className="app">
      <header className="appHeader">
        <img src={logo} className="logo" alt="logo" />
        <form method="POST" action="#">
          <input
            inputMode="numeric"
            value={squareFootage}
            onChange={(e) => handlerSquareFootage(e.target.value)}
          />
          <fieldset>
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
          <fieldset>
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
              <label htmlFor="monthly">Monthlyt</label>
            </div>
          </fieldset>
          <input type="button" value="simulate" />
        </form>
      </header>
    </div>
  );
}

export default App;
