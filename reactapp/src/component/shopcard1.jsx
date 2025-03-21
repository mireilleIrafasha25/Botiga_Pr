import React, { useState, useEffect } from "react";
import "../styles/NewArrival.css"; // Import the CSS file
import { Link } from "react-router-dom";
import axios from "axios";
const ShopCard1 = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://botiga-backend.onrender.com/Botiga/product/getProducts");
        setProducts(response.data.products);
        setMessage(response.data.message || "");
      } catch (error) {
        setMessage(error.response?.data?.message || "Failed to fetch products");
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
    ));
  };

  const renderColors = (colors) => {
    return colors.map((color, index) => (
      <div key={index} className={`color-circle ${color}`} />
    ));
  };

  const renderProducts = () => {
    return products.map((product, index) => (
      <div className="product-card" key={product.productId}>
        <div className="image-container">
          <Link to={`/product/${product.productId}`}>
            <img src={product.image.url} alt={product.name} />
          </Link>
          <div className="overlay select">Select Options</div>
          <div className="overlay quick-view">Quick View</div>
        </div>
        <h3>{product.name}</h3>
        <div className="Main-price">
          <span>${product.Min_price}.00</span>
          <span>-</span>
          <span>${product.Max_price}.00</span>
        </div>
        <div className="stars">{renderStars(product.rating)}</div>
        <div className="color-options">{renderColors(product.colors)}</div>
      </div>
    ));
  };

  return (
    <div>
      {message && <div className="message">{message}</div>}
      <div className="product-list">{renderProducts()}</div>
    </div>
  );
};

export default ShopCard1;
