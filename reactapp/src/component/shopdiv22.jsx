import React, { useState } from "react";
import "../styles/shopdiv22.css";
import { FaThLarge, FaList } from "react-icons/fa";
import NewArrival from "./NewArrival";
import ShopCard1 from "./shopcard1";
import ShopCard2 from "./shopcard2";
import ShopCard3 from "./shopcard3";
const SortingLayout = () => {
  const [layout, setLayout] = useState("grid");
  
  return (
    <div style={{marginTop:"40px"}}>
      
    <div className="sorting-layout" style={{display:"flex",gap:"300px",marginTop:"20px"}}>
      <p className="results">Showing 1-9 of 13 results</p>
      <div className="controls">
        <select className="sorting" style={{backgroundColor:"white", }}>
          <option>Default sorting</option>
          <option>Price: low to high</option>
          <option>Price: high to low</option>
          <option>Newest first</option>
          <option>Best selling first</option>
        </select>
        <div className="layout-icons">
          <FaList 
            className={`icon ${layout === "list" ? "active" : ""}`} 
            onClick={() => setLayout("list")} 
          />
          <FaThLarge 
            className={`icon ${layout === "grid" ? "active" : ""}`} 
            onClick={() => setLayout("grid")} 
          />
        </div>
      </div>
      
    </div>
    <div className={`products ${layout}`}>
        <div>
    <ShopCard1/>
    <ShopCard2/>
    <ShopCard3/>
    </div>
  </div>
  </div>
  );
};

export default SortingLayout;
