import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import DisplayGuess from "../DisplayGuess";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [guessLog, setGuessLog] = React.useState([]);

  return (
    <>
      <DisplayGuess guessLog={guessLog} answer={answer} />
      <GuessInput
        guessLog={guessLog}
        setGuessLog={setGuessLog}
        answer={answer}
        setAnswer={setAnswer}
      />
    </>
  );
}

export default Game;
