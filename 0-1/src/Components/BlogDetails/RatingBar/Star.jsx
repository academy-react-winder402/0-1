import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const Star = () => {
  return (
    <div className="mt-4 flex items-center">
      {[0, 1, 2, 3, 4].map((rating) => (
        <StarIcon
          key={index}
          className={classNames(
            review.rating > rating ? "text-gray-900" : "text-gray-200",
            "h-5 w-5 flex-shrink-0"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
