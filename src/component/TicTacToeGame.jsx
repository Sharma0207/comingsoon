import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // User plays "X", Computer plays "O"
  const [winner, setWinner] = useState(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (squares) => {
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const computerMove = () => {
    const emptyIndexes = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptyIndexes.length === 0 || winner) return;

    const randomIndex =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = "O";
    setBoard(newBoard);
    setIsXNext(true);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  useEffect(() => {
    const gameWinner = calculateWinner(board);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!isXNext) {
      // Delay the computer's move for better UX
      const timer = setTimeout(computerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [board, isXNext]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <h3 className="text-2xl mb-4">
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X (You)" : "O (Computer)"}`}
      </h3>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, idx) => (
          <button
            key={idx}
            className="w-20 h-20 bg-gray-800 text-white text-3xl flex items-center justify-center"
            onClick={() => handleClick(idx)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={handleRestart}
        className="mt-6 border border-white px-6 py-2 text-lg"
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
