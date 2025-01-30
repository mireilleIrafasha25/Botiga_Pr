import React, { useState } from 'react';
import '../styles/vendordiv1.css';
import { FaThLarge, FaList } from "react-icons/fa";

const stores = [
  { name: "John Doe's Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/JohnDoeStore.jpg", circleImage: "/JohnDoeStore.jpg",sign:">" },
  { name: "Jessica's Store", rating: 4, location: "Central Park, New York, United States (US)", image: "/JessicaStore.jpg", circleImage: "/JessicaStore.jpg", sign:">" },
  { name: "Santa Monica's Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/SantaStore.jpg", circleImage: "/SantaStore.jpg" , sign:">" }
];

const VendorUI = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="vendor-ui">
      <div style={{width:"100%",height:"70px",alignItems:"center",justifyContent:"center", textAlign:"center",backgroundColor:"white"}}><h1>Store List</h1></div>
      <div className="top-bar" style={{height:"50px"}}>
        <span>Total stores showing: {stores.length}</span>
        <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>Filter</button>
        {showFilter && (
          <div className="filter-options">
            <input type="text" placeholder="Search..." />
            <button>Apply</button>
          </div>
        )}
        <span>Sort by: <select><option>Most Recent</option></select></span>
        
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
