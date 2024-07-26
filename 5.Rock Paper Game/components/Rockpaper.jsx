import React, { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const choices = [
  { name: "Rock", icon: <FaHandRock /> },
  { name: "Paper", icon: <FaHandPaper /> },
  { name: "Scissors", icon: <FaHandScissors /> },
];
const Rockpaper = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const handleClick = (choice) => {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)].name;
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You win!");
      setScore({ ...score, user: score.user + 1 });
    } else {
      setResult("You lose!");
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold mb-8">Rock Paper Scissors</h1>
      <div className="flex space-x-4 mb-8">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handleClick(choice.name)}
            className="flex flex-col items-center bg-red-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full"
          >
            {choice.icon}
            <span>{choice.name}</span>
          </button>
        ))}
      </div>
      <div className="text-2xl mb-4">
        <p>You chose: {userChoice}</p>
        <p>Computer chose: {computerChoice}</p>
      </div>
      <div
        className={`text-2xl ${
          result.includes("win")
            ? "text-green-500"
            : result.includes("lose")
            ? "text-red-500"
            : "text-gray-500"
        }`}
      >
        {result}
      </div>
      <div className="flex space-x-8 mt-8 text-xl">
        <div>Computer: {score.computer}</div>
        <div>You: {score.user}</div>
      </div>
    </div>
  );
};

export default Rockpaper;
