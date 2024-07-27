import React from "react";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative m-2 flex-1 bg-red-300">
      <div
        className={`   w-full h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center border border-gray-300 rounded ${
          flipped ? "bg-blue-200" : "bg-gray-200"
        }`}
        onClick={handleClick}
      >
        {flipped && <span className="text-xl font-bold">{card.text}</span>}
      </div>
    </div>
  );
};

export default Card;
