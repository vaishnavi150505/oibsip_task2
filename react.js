import React, { useState } from "react";

function GuessTheNumberGame() {
  const [gameState, setGameState] = useState({
    round: 1,
    attempts: 10,
    score: 0,
    userGuess: "",
    feedback: "",
    targetNumber: Math.floor(Math.random() * 100) + 1,
  });

  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const guess = parseInt(gameState.userGuess, 10);
    if (isNaN(guess)) {
      setGameState({ ...gameState, feedback: "Please enter a valid number!" });
      return;
    }

    if (guess === gameState.targetNumber) {
      setGameState({
        ...gameState,
        feedback: "Congratulations! You've guessed the correct number.",
        score: gameState.score + (gameState.attempts * 10),
      });
      startNextRound();
    } else if (guess < gameState.targetNumber) {
      updateGameState("The number is higher than your guess.");
    } else {
      updateGameState("The number is lower than your guess.");
    }
  };

  const updateGameState = (feedback) => {
    if (gameState.attempts === 1) {
      setGameState({ ...gameState, feedback: `Out of attempts! The number was ${gameState.targetNumber}.` });
      startNextRound();
    } else {
      setGameState({
        ...gameState,
        attempts: gameState.attempts - 1,
        feedback,
      });
    }
  };

  const startNextRound = () => {
    if (gameState.round === 3) {
      setGameOver(true);
    } else {
      setTimeout(() => {
        setGameState({
          round: gameState.round + 1,
          attempts: 10,
          score: gameState.score,
          userGuess: "",
          feedback: "",
          targetNumber: Math.floor(Math.random() * 100) + 1,
        });
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameState({
      round: 1,
      attempts: 10,
      score: 0,
      userGuess: "",
      feedback: "",
      targetNumber: Math.floor(Math.random() * 100) + 1,
    });
    setGameOver(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Guess the Number Game</h1>
      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <p>Your final score is: {gameState.score}</p>
          <button onClick={resetGame} style={buttonStyle}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <h2>Round {gameState.round}</h2>
          <p>Attempts Left: {gameState.attempts}</p>
          <p>Score: {gameState.score}</p>
          <input
            type="number"
            value={gameState.userGuess}
            onChange={(e) => setGameState({ ...gameState, userGuess: e.target.value })}
            style={inputStyle}
            placeholder="Enter your guess"
          />
          <button onClick={handleGuess} style={buttonStyle}>
            Submit Guess
          </button>
          <p>{gameState.feedback}</p>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  fontSize: "16px",
  width: "200px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "5px",
};

export default GuessTheNumberGame;
