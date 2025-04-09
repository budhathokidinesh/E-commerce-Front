import React from "react";
import { Button } from "../ui/button";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, handleRatingChange }) => {
  console.log(rating, "rating");
  return [1, 2, 3, 4, 5].map((star) => (
    <Button
      className={`p-2 rounded-full transition-colors hover:cursor-pointer ${
        star <= rating
          ? "text-yellow-500 hover:bg-black"
          : "text-black hover:bg-primary hover:text-primary-foreground"
      }`}
      variant="outline"
      size="icon"
      onClick={handleRatingChange ? () => handleRatingChange(star) : null}
    >
      <FaRegStar
        className={`w-6 h-6 ${star <= rating ? "fill-yellow-500" : ""}`}
      />
    </Button>
  ));
};

export default StarRating;
