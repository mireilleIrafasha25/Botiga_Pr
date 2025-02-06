import React from "react";
import "../styles/NewArrival.css"; // Import the CSS file
import {Link} from "react-router-dom"
const ShopCard3= () => {
  // Product data array
  const products = [
    {
      id: 1,
      image: "./shoes.jpg", // Replace with actual image
      name: "John Sport Shoes",
      price: "$22.00 - $55.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee","silver","white"],
    },
    {
      id: 2,
      image: "/mouse12.jpg", 
      name: "Mouse Raxer",
      price: "$49.00 - $69.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee","silver","white"],

    },
    {
      id: 3,
      image: "/santa Monica.jpg", 
      name: "Santa Monica",
      price: "$22.00 - $55.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee", "silver","white"],
    }
  ];
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"} style={{marginLeft:"0px",paddingLeft:"0px"}}>
        ★
      </span>
    ));
  };
  const renderColors = (colors) => {
    return colors.map((color, index) => (
      <div key={index} className={`color-circle ${color}`} />
    ));
  };

  // Function to render products
  const renderProducts = () => {
    
    return products.map((product) => (
      <div className="product-card" key={product.id}>   
        <div className="image-container">
         <Link to={`/product3/${product.id}`}> <img src={product.image} alt={product.name} /></Link>
          <div className="overlay select">Select Options</div>
          <div className="overlay quick-view">Quick View</div>
        </div>
        <div><h3>{product.name}</h3></div>
        <div><p>{product.price}</p></div>
        <div className="stars" style={{marginLeft:"0px",paddingLeft:"0px"}}>{renderStars(product.rating)}</div>
        <div className="color-options">{renderColors(product.colors)}</div>
      </div>
    ));
  };

  return (<div>
  <div className="product-list" style={{marginTop:"50px",marginBottom:"50px"}}>{renderProducts()}</div>
  </div>)
};

export default ShopCard3;
