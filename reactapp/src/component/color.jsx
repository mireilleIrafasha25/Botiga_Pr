import React from "react";
import "../styles/NewArrival.css"; // Import the CSS file
import {Link} from "react-router-dom"
const Colors = () => {
  // Product data array
  const products = [
    {
      id: 1,
      colors: ["Arsenic", "Chamoisee", "silver","white"],
    },
  ];
  
  const renderColors = (colors) => {
    return colors.map((color, index) => (
      <div key={index} className={`color-circle ${color}`} />
    ));
  };

  // Function to render products
  const renderProducts = () => {
    
    return products.map((product) => (
      <div className="product-card" key={product.id}>   
        <div className="color-options">{renderColors(product.colors)}</div>
      </div>
    ));
  };

  return (<div>
    <div><h4>Color</h4></div>
  <div className="product-list" >{renderProducts()}</div>
  </div>)
};

export default Colors;
