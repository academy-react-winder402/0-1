import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const Star = ({ value, onClick }) => {
    const isFilled = value <= selectedStar;
    const fillColor = isFilled ? "#FFD700" : "none";

    return (
      <span onClick={() => onClick(value)}>
        <img
          src="./star.svg"
          alt="Star icon"
          fill={fillColor}
          className={value <= rating ? "none" : "-"}
        />
      </span>
    );
  };

  return (
    <div className="flex gap-2 ">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            value={i + 1}
            onClick={(newValue) => {
              setSelectedStar(newValue);
              setRating(newValue);
            }}
          />
        ))}
    </div>
  );
};

export { Rating };