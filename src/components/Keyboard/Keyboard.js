import React from "react";

import { checkGuess } from "../../game-helpers";

function Keyboard({ guessLog, answer }) {
  const alphabet = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  const alphabet_list = "QWERTYUIOPASDFGHJKLZXCVBNM";

  let alphabet_dict = {};
  alphabet_list.split("").map((l) => {
    return (alphabet_dict[l] = "valid");
  });

  for (const g of guessLog) {
    const result = g ? checkGuess(g.value, answer) : undefined;
    result.map((r) => (alphabet_dict[r.letter] = r.status));
  }

  return (
    <div className="grid">
      {alphabet.map((row, index) => (
        <div key={row} className="keyboard">
          {alphabet[index].split("").map((letter) => (
            <span
              key={letter}
              className={`keyboardcell ${alphabet_dict[letter]}`}
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
