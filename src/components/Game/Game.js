import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessLog, setGuessLog] = React.useState([]);

  return (
    <>
      <DisplayGuess guessLog={guessLog} answer={answer} />
      <GuessInput
        guessLog={guessLog}
        setGuessLog={setGuessLog}
        answer={answer}
      />
    </>
  );
}

export default Game;
