import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function RestartGame({ setAnswer, setGuessLog, setStatus }) {
  function handleRestart() {
    setGuessLog([]);
    setStatus("running");
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <button className="restart-button" onClick={handleRestart}>
        Restart
      </button>
    </>
  );
}

export default RestartGame;
