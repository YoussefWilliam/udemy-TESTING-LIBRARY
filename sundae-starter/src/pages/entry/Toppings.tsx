import React from "react";

const Toppings = ({ image, imagePath }) => {
  return (
    <div>
      <img src={`http://localhost:3030${imagePath}`} alt={`${image} topping`} />
    </div>
  );
};

export default Toppings;
