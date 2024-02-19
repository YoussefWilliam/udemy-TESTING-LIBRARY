import React, { useEffect, useState } from "react";
import ScroopOptions from "./ScoopOptions";
import Toppings from "./Toppings";
import { AlertBanner } from "./OrderEntry";

const Options = ({ optionType }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  const fetchImages = async () => {
    try {
      const res = await fetch(`http://localhost:3030/${optionType}`);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [optionType]);

  if (error) return <AlertBanner />;

  const ItemOptions = optionType === "scoops" ? ScroopOptions : Toppings;

  const optionItems = images.map((image) => (
    <ItemOptions
      key={image.name}
      name={image.name}
      imagePath={image.imagePath}
    />
  ));
  return <div>{optionItems}</div>;
};

export default Options;
