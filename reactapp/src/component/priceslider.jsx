import React, { useState } from "react";
import "../styles/priceslider.css"; // Import CSS file

const Price = () => {
  const minPrice = 0;
  const maxPrice = 79; // Set maximum price (adjust as needed)
  const [price, setPrice] = useState(maxPrice);
  const [showReset, setShowReset] = useState(false);

  const handleChange = (event) => {
    setPrice(event.target.value);
    setShowReset(true);
  };

  const handleReset = () => {
    setPrice(maxPrice);
    setShowReset(false);
  };

  return (
    <div className="price-container">
      <h3 className="price-title">Price</h3>
      <div className="slider-wrapper">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
          className="price-slider"
        />
      </div>
      <div className="price-values">
        <div className="price-box">${minPrice}</div>
        <div className="price-box">${price}</div>
      </div>
      {showReset && <button className="reset-button" onClick={handleReset}>RESET</button>}
    </div>
  );
};

export default Price;
