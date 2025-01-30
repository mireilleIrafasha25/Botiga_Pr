import React from "react";
import "../styles/star.css"; // Import the CSS file

const Stars = () => {
  // Product data array
  const products = [
    { id: 1, rating: 3 },
    { id: 2, rating: 5 },
    { id: 3, rating: 4 },
  ];

  const renderStars = (rating) => {
    return (
      <div className="stars1">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? "star filled1" : "star1"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="stars-container1">
      {products.map((product) => (
        <div key={product.id} className="rating-row1">
          {renderStars(product.rating)}
        </div>
      ))}
    </div>
  );
};

export default Stars;
