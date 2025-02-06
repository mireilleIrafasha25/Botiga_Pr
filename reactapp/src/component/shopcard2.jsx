import React from "react";
import "../styles/NewArrival.css"; // Import the CSS file
import {Link} from "react-router-dom"
const ShopCard2= () => {
  // Product data array
  const products = [
    {
      id: 1,
      image: "./headset221.jpg", // Replace with actual image
      name: "Headset Gamer +",
      price: "$22.00 - $55.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee"],
    },
    {
      id: 2,
      image: "/Jdoe Watch.jpg", 
      name: "JDoe's Styling Watch",
      price: "$49.00 - $69.00",
      rating:5,
      colors: ["Arsenic", "silver"]

    },
    {
      id: 3,
      image: "/jessi.jpg", 
      name: "Jessi Cam Recorder",
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
          <Link to={`/product2/${product.id}`}><img src={product.image} alt={product.name} /></Link>
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

export default ShopCard2;
