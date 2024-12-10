import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = guess ? checkGuess(guess.value, answer) : undefined;
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`${result ? `cell ${result[num].status}` : "cell"}`}
          >
            {guess ? guess.value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
