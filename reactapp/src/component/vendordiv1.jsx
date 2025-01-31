import React, { useState } from 'react';
import '../styles/vendordiv1.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaThLarge, FaList } from "react-icons/fa";

const stores = [
  { name: "John Doe's Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/JohnDoeStore.jpg", circleImage: "/JohnDoeStore.jpg",sign:">" },
  { name: "Jessica's Store", rating: 4, location: "Central Park, New York, United States (US)", image: "/JessicaStore.jpg", circleImage: "/JessicaStore.jpg", sign:">" },
  { name: "Santa Monica's Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/SantaStore.jpg", circleImage: "/SantaStore.jpg" , sign:">" }
];

const VendorUI = () => {
  const [showFilter, setShowFilter] = useState(false);
 const [layout, setLayout] = useState("grid");
  return (
    <div className="vendor-ui">
      <div style={{width:"100%",height:"100px",alignItems:"center",justifyContent:"center", textAlign:"center",backgroundColor:"white",paddingTop:"40px"}}><h1 style={{fontStyle:"italic",fontFamily:"monospace",fontSize:"40px"}}>Store List</h1></div>
      <div className="top-bar" style={{height:"50px"}}>
        <span>Total stores showing: {stores.length}</span>
      <div style={{display:"flex",gap:"10px",backgroundColor:"blue",paddingLeft:"5px",textAlign:"center",justifyContent:"center",alignItems:"center",height:"50px",width:"190px"}}><i className="fas fa-sliders-h" style={{  fontSize: "18px",color: "white"}}></i><button className="filter-btn" style={{backgroundColor:"blue",border:"none",color:"white"}} onClick={() => setShowFilter(!showFilter)}> Filter</button></div>
        {showFilter && (
          <div className="filter-options" style={{display:"flex",gap:"20px"}}>
            <input type="text" placeholder="Search..." style={{width:"250px"}} />
            <button style={{backgroundColor:"blue",border:"none",color:"white"}}>Apply</button>
          </div>
        )}
        <span style={{display:"flex",gap:"20px"}}>Sort by: <select style={{border:"1px solid white",backgroundColor:"white", height:"20px"}}><option style={{border:"none"}}>Most Recent</option>
        <option style={{border:"none"}}>Most Recent</option>
        <option style={{border:"none"}}>Most Recent</option>
        <option style={{border:"none"}}>Most Recent</option></select></span>
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
      <div className="store-list">
        {stores.map((store, index) => (
            
          <div className="store-card" key={index}> 
            <div className="store-image" style={{ backgroundImage: `url(${store.image})` }}>
              <div className="circle-image" style={{ backgroundImage: `url(${store.circleImage})` ,marginTop:"120px"}}></div>
              <div className="store-info">
              <h3>{store.name}</h3>
              <div className="rating">{'★'.repeat(store.rating)}{'☆'.repeat(5 - store.rating)}</div>
              <p>{store.location}</p>
            </div>
            </div>
            
            <div>
                
            </div>
            <button className="navigate-btn" >{store.sign}</button>
          </div>
       
          
        ))}
      </div>
    </div>
  );
};

export default VendorUI;
