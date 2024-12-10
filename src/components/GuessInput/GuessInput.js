import React from "react";

import Banner from "../Banner";

function GuessInput({ guessLog, setGuessLog, answer }) {
  const [guess, setGuess] = React.useState("");
  const [status, setStatus] = React.useState("running");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);

    const newGuess = {
      id: Math.random(),
      value: guess,
    };

    const newGuessLog = [...guessLog, newGuess];
    setGuessLog(newGuessLog);

    setGuess("");

    if (newGuessLog.length < 6) {
      const newStatus = answer === newGuess.value ? "won" : "running";
      setStatus(newStatus);
      console.log(newStatus);
    } else {
      const newStatus = "lost";
      setStatus(newStatus);
      console.log(newStatus);
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={status !== "running"}
          value={guess}
          pattern="[A-Z]{5}"
          title="Enter a 5-letter word"
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
      {status !== "running" && (
        <Banner
          status={status}
          answer={answer}
          numOfGuesses={guessLog.length}
        />
      )}
    </>
  );
}

export default GuessInput;
