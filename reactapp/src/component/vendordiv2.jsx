import React, { useState } from 'react';
import '../styles/vendordiv1.css';

const stores = [
  { name: "Digital Good Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/DinapopStore.jpg", circleImage: "/JohnDoeStore.jpg",sign:">" },
  { name: "The Glass Store", rating: 4, location: "Central Park, New York, United States (US)", image: "/GlassStore.jpg", circleImage: "/JessicaStore.jpg", sign:">" },
  { name: "Josh Doe Shop", rating: 5, location: "Central Park, New York, United States (US)", image: "/JoshDoeStore.jpg", circleImage: "/SantaStore.jpg" , sign:">" }
];

const Vendordiv2 = () => {
//   const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="vendor-ui">
      {/* <div className="top-bar">
        <span>Total stores showing: {stores.length}</span>
        <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>Filter</button>
        {showFilter && (
          <div className="filter-options">
            <input type="text" placeholder="Search..." />
            <button>Apply</button>
          </div>
        )}
        <span>Sort by: <select><option>Most Recent</option></select></span>
      </div> */}
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

export default Vendordiv2;
