import React from "react";
import "../styles/NewArrival.css"; // Import the CSS file

const NewArrival = () => {
  // Product data array
  const products = [
    {
      id: 1,
      image: "./bootle.jpg", // Replace with actual image
      name: "All In One Bottle",
      price: "$22.00 - $55.00",
    },
    {
      id: 2,
      image: "/amazon.jpg", 
      name: "Amazon Alexa",
      price: "$49.00 - $69.00",
    },
    {
      id: 3,
      image: "/headset.jpg", 
      name: "Headset Gamer Legion",
      price: "$22.00 - $55.00",
    },
  ];

  // Function to render products
  const renderProducts = () => {
    return products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="image-container">
          <img src={product.image} alt={product.name} />
          <div className="overlay select">Select</div>
          <div className="overlay quick-view">Quick View</div>
        </div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    ));
  };

  return <div className="product-list">{renderProducts()}</div>;
};

export default NewArrival;
