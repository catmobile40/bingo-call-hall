import React, { useState } from "react";
import "./App.css";
import callsOld from "./calls_old.json";
import callsNew from "./calls_new.json";

function haveISeenThisNumber(number, seenBeforeList) {
  let seenBefore = false;

  seenBeforeList.forEach((entry) => {
    if (entry === number) {
      seenBefore = true;
    }
  });

  return seenBefore;
}

const highestNumber = 15;

function App() {
  let [currentNumber, setSelectedNumber] = useState(99);
  let [seenBeforeList, setSeenBeforeList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {currentNumber === 99
            ? ""
            : currentNumber === 98
            ? ""
            : `Traditional: ${callsOld[currentNumber]}`}
        </p>
        <p>
          {currentNumber === 99
            ? ""
            : currentNumber === 98
            ? ""
            : `Modern: ${callsNew[currentNumber]}`}
        </p>
        <p>
          {currentNumber === 99
            ? "Let's play bingo"
            : currentNumber === 98
            ? "Bingo!"
            : currentNumber}
        </p>
        <button
          onClick={() => {
            if (seenBeforeList.length < highestNumber) {
              let newNumber = Math.floor(highestNumber * Math.random()) + 1;

              while (haveISeenThisNumber(newNumber, seenBeforeList)) {
                newNumber = Math.floor(highestNumber * Math.random()) + 1;
              }

              setSeenBeforeList([...seenBeforeList, newNumber]);
              setSelectedNumber(newNumber);
            } else {
              setSelectedNumber(98);
            }
          }}
          style={{ fontSize: "48px" }}
        >
          next number
        </button>
      </header>
    </div>
  );
}

export default App;
