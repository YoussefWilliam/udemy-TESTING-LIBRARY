import React from "react";

const ScoopOptions = ({ image, imagePath }) => {
  return (
    <div>
      <img src={`http://localhost:3030${imagePath}`} alt={`${image} scoop`} />
    </div>
  );
};

export default ScoopOptions;
