import React from "react";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative m-2">
      <div
        className={`w-32 h-32 ${flipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <img
          className="absolute w-full h-full"
          src={flipped ? card.src : "/img/back.png"}
          alt="card front"
        />
      </div>
    </div>
  );
};

export default Card;
