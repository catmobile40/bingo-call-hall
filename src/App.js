import React, { useState } from "react";
import "./App.css";

function haveISeenThisNumber(number, seenBeforeList) {
  let seenBefore = false;

  seenBeforeList.forEach((entry) => {
    if (entry === number) {
      seenBefore = true;
    }
  });

  return seenBefore;
}

function App() {
  let [currentNumber, setSelectedNumber] = useState(99);
  let [seenBeforeList, setSeenBeforeList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {currentNumber === 99
            ? "Let's Bingo"
            : currentNumber === 98
            ? "Bingo!"
            : currentNumber}
        </p>
        <button
          onClick={() => {
            if (seenBeforeList.length < 90) {
              let newNumber = Math.floor(90 * Math.random()) + 1;

              while (haveISeenThisNumber(newNumber, seenBeforeList)) {
                newNumber = Math.floor(90 * Math.random()) + 1;
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
