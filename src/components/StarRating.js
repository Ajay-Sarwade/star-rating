import React from "react";

const StarRating = ({ size, rating, onChange }) => {
  return (
    <div>
      {Array(size)
        .fill("")
        .map((_, index) => {
          let classname = "star";
          if (rating > index) {
            classname = "star hover";
          }

          return (
            <span className={classname} onClick={(e) => onChange(index + 1)}>
              ★
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
